import $ from 'jquery';

const Metamask = require('./metamaskConnect')
const Networks = require('./networks')
const Contracts = require('./contracts')

let captchaWidget = null
let web3Provider = null
let contracts = {}
let account = '0x0'
let loading = false
let validNetwork = Networks.default.PolygonMumbai
let _contracts = Contracts.default.Mumbai

function getValidNetwork() {
    return validNetwork
}

function getContracts() {
    return _contracts;
}

function getAccount() {
    return account
}

function setAccount(value) {
    account = value
}

function showConnectedWallet(connect) {
    if(window.location.pathname == '/')
        connect ? document.getElementById("btnContainer").classList.remove('disable') : document.getElementById("btnContainer").classList.add('disable')
}

async function web3App() {
    if (!Metamask.isMetaMaskInstalled()) {
        return false
    }

    web3Provider = ethereum;
    web3 = new Web3(ethereum);

    await Metamask.connectWallet();
    return await ethereum
        .request({ method: 'eth_chainId' })
        .then(async (chainId) => {
            console.log('Connected to chainId: ' + chainId);
            if (chainId != validNetwork.ChainId) {
                alert('Wrong network!');
                await Metamask.switchNetwork();
                await Metamask.setIsCorrectNetwork(false);
                return false;
            } else {
                await Metamask.setIsCorrectNetwork(true);                
                return await initContracts()
            }
        }
    )
    
}

function initContracts() {
    $.getJSON("NftsContracts/NftTokenSwap.json", function (nftTokenSwap) {
        contracts.NftTokenSwap = TruffleContract(nftTokenSwap);
        contracts.NftTokenSwap.setProvider(web3Provider);

        _contracts.nftTokenSwapPromise = contracts.NftTokenSwap
            .at(_contracts.nftTokenSwapAddress);

        _contracts.nftTokenSwapPromise
            .then(function (instance) {
                _contracts.nftTokenSwapInstance = instance;
                _contracts.nftTokenSwapAddress = instance.address;
            });

    });

    $.getJSON("NftsContracts/NftToken.json", function (nftToken) {
        contracts.NftToken = TruffleContract(nftToken);
        contracts.NftToken.setProvider(web3Provider);

        _contracts.nftTokenPromise = contracts.NftToken
            .at(_contracts.nftTokenAddress);

        _contracts.nftTokenPromise
            .then(function (instance) {
                _contracts.nftTokenInstance = instance;
                _contracts.nftTokenAddress = instance.address;
            });
    });


    return true;
}

function swapToken(_tokenId, _typeId) {
    console.log("App swapToken...");

    if (!MetaMask.isWalletConnected) {
        alert('Wallet not connected!');
        return;
    }

    if (!MetaMask.isCorrectNetwork) {
        alert('Wrong network!');
        return;
    }

    _contracts.nftTokenPromise
    .then(function(instance){
        console.log('Swapping [Approve]...');
        return instance.approve(_contracts.nftTokenSwapAddress, _tokenId, {
            from: account,
            value: new web3.utils.BN(0),
            gasPrice: 5000000000
        });

    }).then(function (result) {
        _contracts.nftTokenSwapPromise
        .then(function (instance) {
            console.log('Swapping [swapToken]...');
            //instance.swapToken.estimateGas(App.account, tokenId, typeId).then(function(gas){
                return instance.swapToken(account, _tokenId, _typeId, {
                    from: account,
                    value: new web3.utils.BN(0),
                    gas: 2100000,
                    gasPrice: 5000000000
                });
            //});

        }).then(function (result) {
           alert('Tokens swapped, check your wallet!');
        }).catch(function (error) {
            alert('Error');
        });
    }).catch(function (error) {
        alert('Error');
    });
}

export {
    web3App,
    showConnectedWallet,
    getValidNetwork,
    setAccount,
    getAccount,
    initContracts,
    swapToken,
    getContracts
}