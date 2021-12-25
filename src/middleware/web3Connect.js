/* eslint-disable */
import $ from "jquery";
import { promisify } from 'util';

const Metamask = require("./metamaskConnect");
const Networks = require("./networks");
const Contracts = require("./contracts");
import { isMobile } from "react-device-detect";

let captchaWidget = null;
let web3Provider = null;
let contracts = {};
let account = "0x0";
let loading = false;
let validNetwork = Networks.default.PolygonMumbai;
let _contracts = Contracts.default.Mumbai;

function getValidNetwork() {
  return validNetwork;
}

function getContracts() {
  return _contracts;
}

function getAccount() {
  return account;
}

function setAccount(value) {
  account = value;
}

function showConnectedWallet(connect) {
  if (!isMobile) {
    if (window.location.pathname == "/")
      connect
        ? document.getElementById("btnContainer").classList.remove("disable")
        : document.getElementById("btnContainer").classList.add("disable");
  }
}

async function web3App() {
  if (!Metamask.isMetaMaskInstalled()) {
    return false;
  }

  web3Provider = ethereum;
  web3 = new Web3(ethereum);

  await Metamask.connectWallet();

  return await ethereum
    .request({ method: "eth_chainId" })
    .then(async (chainId) => {
      if (chainId != validNetwork.ChainId) {
        alert("Wrong network!");
        await Metamask.switchNetwork();
        await Metamask.setIsCorrectNetwork(false);
        return false;
      } else {
        await Metamask.setIsCorrectNetwork(true);
        return true;
      }
    });
}

async function swapTokenAsync(_tokenId, _typeId, _account) {
  await web3App();

  let jsonNFT = await $.getJSON("NftsContracts/NftToken.json")
  let jsonNFTSwap = await $.getJSON("NftsContracts/NftTokenSwap.json")
  let approve
  let swapping

  contracts.NftToken = TruffleContract(jsonNFT);
  contracts.NftToken.setProvider(web3Provider);
  _contracts.nftTokenPromise = contracts.NftToken.at(
    _contracts.nftTokenAddress
  );

  contracts.NftTokenSwap = TruffleContract(jsonNFTSwap);
  contracts.NftTokenSwap.setProvider(web3Provider);
  _contracts.nftTokenSwapPromise = contracts.NftTokenSwap.at(
    _contracts.nftTokenSwapAddress
  );

  let instance = await _contracts.nftTokenPromise;
  let instanceSwap = await _contracts.nftTokenSwapPromise;

  try {
    approve = await instance.approve(instanceSwap.address, _tokenId, {
      from: _account,
      value: new web3.utils.BN(0),
      gasPrice: 100000000000,
    })
  } catch(error) {
    console.log('error approve')
    console.error(error)
    return false
  }

  try {
    swapping = await instanceSwap.swapToken(_account, _tokenId, _typeId, {
      from: _account,
      value: new web3.utils.BN(0),
      gas: 2100000,
      gasPrice: 100000000000,
    })
    //alert("Tokens swapped, check your wallet!");
  } catch (error) {
    console.log('error swapping')
    console.error(error)
    return false
  }

  return true 
}

export {
  web3App,
  showConnectedWallet,
  getValidNetwork,
  setAccount,
  getAccount,
  getContracts,
  swapTokenAsync
};
