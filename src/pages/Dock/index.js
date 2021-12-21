/* eslint-disable */
import React, { useState, useEffect } from "react";
import ItemsCarousel from "./../../components/ItemsCarousel";
import TextCard from "./components/StatsCardDock";
import Nav from "../../components/Nav";
import "./index.scss";
import Items from "./../ToysAndBoxes/ToysAndBoxes";

import { useSelector } from "react-redux";
import { createStore } from "redux";

import api from "./../../services/api";

import Waiting from "./../Waiting/index";
import Loading from "./../Loading/index";

import Unity, { UnityContext } from "react-unity-webgl";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setWalletAccount, setChainId } from "./../../redux/blockchain/index";

function Dock() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [boxSelected, setBoxSelected] = useState(0);

  const [isOpen, setIsOpen] = useState(true);
  const [files, setFiles] = useState([]);
  const blockchain = useSelector((state) => state.blockchain);

  const fileName = "Toyo";
  const fileId = "#696969";
  const fileImg =
    "https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png";

  const box = useSelector((state) => state.box);

  const store = createStore;

  const WalletAccount = localStorage.getItem("WalletAccount");
  const WalletChainId = localStorage.getItem("WalletChainId");

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(async () => {
    setIsLoaded(true);
    if (!blockchain.account && WalletAccount) {
      dispatch(setWalletAccount(WalletAccount));
      dispatch(setChainId(WalletChainId));
    } else if (!WalletAccount) {
      setIsLoaded(false);
      alert("It was not possible to identify your wallet please log in again");
      history.push(`/`);
    }
    await api
      .get("/ToyoBox/getBoxes", {
        params: {
          walletAddress: blockchain.account,
          chainId: parseInt(blockchain.chainId, 16),
        },
      })
      .then((response) => {
        setFiles(response.data);
        setIsLoaded(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoaded(false);
      });
      setIsLoaded(false);
  }, []);

  useEffect(async () => {
    setTimeout(async () => {
      if (!blockchain.account && WalletAccount) {
        dispatch(setWalletAccount(WalletAccount));
        dispatch(setChainId(WalletChainId));
      } else if (!WalletAccount) {
        alert("It was not possible to identify your wallet please log in again");
        history.push(`/`);
      }
      await api
        .get("/ToyoBox/getBoxes", {
          params: {
            walletAddress: blockchain.account,
            chainId: parseInt(blockchain.chainId, 16),
          },
        })
        .then((response) => {
          setFiles(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 30000);
  });

  return (
    <main className="main-wrapper">
      <div id="img-background" className="img-background"></div>

      {isLoaded ? (
        <Loading />
      ) : files.length <= 0 ? (
        <Waiting />
      ) : ( 
        <>
          <Nav />
          <div className="main-content-wrapper">
            <div className="item-showcase">
              <div
                style={{
                  width: "30vw",
                  height: "55vh",
                  backgroundImage: `url("${
                    window.location.origin
                  }/iconsItems/${box.name
                    .split(" - ")
                    .pop()
                    .split("Seed")[0]
                    .trim()}.png")`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="text-card">
                <TextCard
                  itemName={box.name
                    .split(" - ")
                    .pop()
                    .split("Seed")[0]
                    .replace("Fortified", "")
                    .replace("Open", "")}
                  itemType={
                    box.name.split(" - ").pop().includes("Fortified") == true
                      ? "Fortified"
                      : "Normal"
                  }
                  itemId={box.idBoxClicked}
                  itemStatus={
                    box.name.split(" - ").pop().includes("Open") == true
                      ? "Open"
                      : "Closed"
                  }
                  heightInVh={55}
                  widthInVw={30}
                />
              </div>
            </div>

            <ItemsCarousel />
          </div>
          <Items name={fileName} time={fileId} img={fileImg} />
        </>
       )}     
    </main>
  );
}

export default Dock;
