/* eslint-disable */
import { ConsoleView } from "react-device-detect"

const web3Connect = require("./web3Connect")
const Contracts = require('./contracts')

let isWalletConnected =  false
let isCorrectNetwork = false

function getIsWalletConnected() {
    return isWalletConnected
}

function setIsWalletConnected(value) {
    isWalletConnected = value
}

function getIsCorrectNetwork() {
    return isCorrectNetwork
}

function setIsCorrectNetwork(value) {
    isCorrectNetwork = value
}

function isMetaMaskInstalled() {
    if (window["ethereum"] == undefined) {
        web3Connect.showConnectedWallet(false)
        return false;
    } else {
        web3Connect.showConnectedWallet(true)
        return true;
    }
}

async function connectWallet() {
    await web3Connect.showConnectedWallet(false)
    await ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((account) => {
            web3Connect.showConnectedWallet(true)
            isWalletConnected = true;
            web3Connect.setAccount(account.toString());
            //$('.account .wallet-address').html(account);
        })
        .catch((error) => {
            if (error.code === 4001) {
                // EIP-1193 userRejectedRequest error
                web3Connect.showConnectedWallet(false)
                isWalletConnected = false;
                alert('Please connect to MetaMask.');
                //App.hideLoadingText();
                return error;
            } else {
                alert(error.message);
                return error
            }
        });
}

function switchNetwork() {
    ethereum
        .request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: web3Connect.getValidNetwork().ChainId }],
        }).catch((switchError) => {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                addNetwork();
            }
        })
}

function addNetwork() {
    ethereum
        .request({
            method: 'wallet_addEthereumChain',
            params:
                [
                    {
                        chainId: web3Connect.getValidNetwork().ChainId,
                        chainName: web3Connect.getValidNetwork().ChainName,
                        nativeCurrency: {
                            name: 'MATIC',
                            symbol: 'MATIC',
                            decimals: 18
                        },
                        rpcUrls: [web3Connect.getValidNetwork().Rpc]
                    }
                ],
        });
}

function addToWallet() {
    ethereum
        .request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: Contracts.Mainnet.nftTokenAddress,
                    symbol: Contracts.Mainnet.nftTokenContractSymbol,
                    decimals: 0,
                    image: 'https://ipfs.io/ipfs/QmUdDyL22m4wbmshvspLBpysfLPUT7r8dXnZ22Zh6F8SQz',
                },
            },
        })
        .then((success) => {
            if (success) {
                console.log('[wallet_watchAsset] NFT added to wallet!')
            } else {
                console.log('[wallet_watchAsset] Something went wrong.')
            }
        })
        .catch(console.error)
}

export {
    isMetaMaskInstalled,
    connectWallet,
    switchNetwork,
    addNetwork,
    addToWallet,
    getIsWalletConnected,
    setIsWalletConnected,
    getIsCorrectNetwork,
    setIsCorrectNetwork
}