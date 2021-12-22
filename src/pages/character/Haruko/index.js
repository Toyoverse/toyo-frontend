import React, { useState, useEffect } from "react";
import ItemsCarousel from "./../../../components/ItemsCarousel";
import Nav from "./../../../components/Nav";
import TextCard from "./components/StatsCard";
import CardContent from "./components/CardContent";
import "./index.scss";

import Waiting from "./../../Waiting/index";

import { useSelector } from "react-redux";

import api from "./../../../services/api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Loading from "./../../Loading/index";

import {
  setWalletAccount,
  setChainId,
} from "./../../../redux/blockchain/index";

/* eslint-disable */
function Haruko() {
  const mainImgUrl =
    "https://res.cloudinary.com/groovin/image/upload/v1637860899/Toyo/haruko-page/haruko_iwz559.png";

  const fileName = "Toyo";
  const fileId = "#696969";
  const fileImg =
    "https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png";

  const [files, setFiles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const blockchain = useSelector((state) => state.blockchain);

  const history = useHistory();
  const dispatch = useDispatch();

  const WalletAccount = localStorage.getItem("WalletAccount");
  const WalletChainId = localStorage.getItem("WalletChainId");

  useEffect(async () => {
    if (!blockchain.account && WalletAccount) {
      dispatch(setWalletAccount(WalletAccount));
      dispatch(setChainId(WalletChainId));
    } else if (!WalletAccount) {
      history.push(`/`);
      alert("It was not possible to identify your wallet please log in again");
    }

    await api
      .get("/ToyoBox/getToyos", {
        params: {
          walletAddress: blockchain.account,
          chainId: parseInt(blockchain.chainId, 16),
        },
      })
      .then((response) => {
        setFiles(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <main className="main-char-wrapper">
      <div id="img-background" className="img-background"></div>

     {/*  {!isLoaded ? (
        <Loading />
      ) : files.length ? ( */}
        <Waiting />
     {/*  ) : (
        <>
          <div className="stripes-overlay"></div>
          <Nav />
          <div className="main-content-wrapper">
            <div className="item-showcase">
              <div>
                <img
                  className="main-img-showcase"
                  src={mainImgUrl}
                  alt="main img"
                />
              </div>

              <TextCard
                CardContent={CardContent}
                heightInVh={55}
                widthInVw={30}
              />
            </div>
            <ItemsCarousel />
          </div>
        </>
      )} */}
    </main>
  );
}

export default Haruko;
