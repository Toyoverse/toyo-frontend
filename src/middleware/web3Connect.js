import $ from 'jquery'

const Metamask = require('./metamaskConnect')
const Networks = require('./networks')
const Contracts = require('./contracts')
import { isMobile } from 'react-device-detect'

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
    return _contracts
}

function getAccount() {
    return account
}

function setAccount(value) {
    account = value
}

function showConnectedWallet(connect) {
    if (!isMobile) {
        if (window.location.pathname == '/')
            connect
                ? document
                      .getElementById('btnContainer')
                      .classList.remove('disable')
                : document
                      .getElementById('btnContainer')
                      .classList.add('disable')
    }
}

async function web3App() {
    if (!Metamask.isMetaMaskInstalled()) {
        return false
    }

    web3Provider = ethereum
    web3 = new Web3(ethereum)

    await Metamask.connectWallet()
    return await ethereum
        .request({ method: 'eth_chainId' })
        .then(async chainId => {
            console.log('Connected to chainId: ' + chainId)
            if (chainId != validNetwork.ChainId) {
                alert('Wrong network!')
                await Metamask.switchNetwork()
                await Metamask.setIsCorrectNetwork(false)
                return false
            } else {
                await Metamask.setIsCorrectNetwork(true)
                return true;
            }
        })
}

async function swapToken(_tokenId, _typeId, _account) {
    console.log('App swapToken...')    

    return $.getJSON('NftsContracts/NftToken.json', async function (nftToken) {
        contracts.NftToken = TruffleContract(nftToken)
        contracts.NftToken.setProvider(web3Provider)
        
        _contracts.nftTokenPromise = contracts.NftToken.at(_contracts.nftTokenAddress)
            
        return $.getJSON('NftsContracts/NftTokenSwap.json', async function (nftTokenSwap) {
            contracts.NftTokenSwap = TruffleContract(nftTokenSwap)
            contracts.NftTokenSwap.setProvider(web3Provider)
    
            _contracts.nftTokenSwapPromise = contracts.NftTokenSwap.at(
                _contracts.nftTokenSwapAddress,
            )
    
            return _contracts.nftTokenSwapPromise.then(function (instanceSwap) {
                _contracts.nftTokenSwapInstance = instanceSwap
                _contracts.nftTokenSwapAddress = instanceSwap.address


                return _contracts.nftTokenPromise
                    .then(function (instance) {
                        console.log('Swapping [Approve]...')
                        instance.approve(instanceSwap.address, _tokenId, {
                            from: _account,
                            value: new web3.utils.BN(0),
                            gasPrice: 5000000000,
                        })
                    })
                    .then(function (result) {
                        return _contracts.nftTokenSwapPromise
                            .then(function (instance) {
                                console.log('Swapping [swapToken]...')
                                //instance.swapToken.estimateGas(App.account, tokenId, typeId).then(function(gas){
                                return instance.swapToken(_account, _tokenId, _typeId, {
                                    from: _account,
                                    value: new web3.utils.BN(0),
                                    gas: 2100000,
                                    gasPrice: 5000000000,
                                }).then(()=> {
                                    return true
                                })
                                //});
                            })
                            .then(function (result) {
                                alert('Tokens swapped, check your wallet!')
                                return false;
                            })
                            .catch(function (error) {
                                alert('Error')
                                return false;
                            })
                    })
                    .catch(function (error) {
                        alert('Error')
                        return false;
                    })
                    
            })
        })


            

        })

    

    

    


    
}

export {
    web3App,
    showConnectedWallet,
    getValidNetwork,
    setAccount,
    getAccount,
    swapToken,
    getContracts,
}
