/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./index.scss";
import iconMetamask from "./../assets/images/metamask.png";
import openBtnUrl from "./../assets/images/btn-metamask-2.png";
import openBtnUrlHover from "./../assets/images/btn-metamask.png";

import { isMobile } from "react-device-detect";
import * as metamaskConnect from "./../../middleware/metamaskConnect";
import * as web3Connect from "./../../middleware/web3Connect";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setWalletAccount, setChainId } from "./../../redux/blockchain/index";

export default function Login() {
  const [dots, setDots] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  function mouseOver() {
    document.getElementById("open-btn").src = openBtnUrlHover;
  }

  function mouseOut() {
    document.getElementById("open-btn").src = openBtnUrl;
  }

  async function connectMetaMask() {
    let returnConnect = await web3Connect.web3App();
    if (returnConnect == true) {
        try {
          localStorage.setItem("systemPause", "0");
          dispatch(setWalletAccount(web3Connect.getAccount()));
          dispatch(setChainId(web3Connect.getValidNetwork().ChainId));
          localStorage.setItem("WalletAccount", web3Connect.getAccount());
          localStorage.setItem("WalletChainId", web3Connect.getValidNetwork().ChainId);
          window.localStorage.setItem("route", "i");
          history.push(`/items`);
        } catch (error) {
          alert("Error logging in, check your metamask extension");
          console.error(error);
          window.location.reload();
        }

    }
  }

  useEffect(async () => {
    localStorage.clear();
    await metamaskConnect.isMetaMaskInstalled();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      changeDots()
    }, 1000);
  }, [dots])

  function changeDots() {
      if(dots == 1) {
        setDots(2);
      } else if (dots == 2) {
        setDots(3);
      } else {
        setDots(1);
      }
  }

  return (

    <div className="main-wrapper-login">
      <div className="main-login">
        <div className="login-label">
          {isMobile ? (
            <p className="linking">
              TRY AGAIN USING A DESKTOP TERMINAL. <br />
              THIS MOBILE DEVICE HAS NO GRANTED ACCESS.
            </p>
          ) : (
            <>
            <p className="linking">LINKING WH9 HUMAN TO SIMULATION H64{
              dots == 1 ? (<span>.</span>) : dots == 2 ? (<span>..</span>) : (<span>...</span>)
            }</p>
              <div
                className="btnContainer"
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                id="btnContainer"
                onClick={connectMetaMask}
              >
                <img
                  src={openBtnUrl}
                  id="open-btn"
                  className="open-btn"
                  alt="Connect Metamask"
                />
                <div className="icon-name">
                  <img
                    src={iconMetamask}
                    className="metamask-logo"
                    alt="Metamask"
                  />
                  <p className="connect">CONNECT METAMASK</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="noise-wrapper">
        <div className="noise"></div>
      </div>
    </div>
  );
}
