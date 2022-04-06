/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Unity, { UnityContext } from "react-unity-webgl";
import "./index.scss";
import toyosInfos from "./../../../../middleware/toyo";
import partsInfos from "./../../../../middleware/parts";
import imgheader from "./../../../../assets/header.png";
import loaderGif from "./../../assets/loader.gif";

import { useSelector } from "react-redux";

import api from "./../../../../services/api";

import * as web3Connect from "./../../../../middleware/web3Connect";
import Dock from "../..";

const { promisify } = require("util");

const unityContextJakana = new UnityContext({
  loaderUrl: "openBoxJakanaScene/Build/openBoxJakanaScene.loader.js",
  dataUrl: "openBoxJakanaScene/Build/openBoxJakanaScene.data",
  frameworkUrl: "openBoxJakanaScene/Build/openBoxJakanaScene.framework.js",
  codeUrl: "openBoxJakanaScene/Build/openBoxJakanaScene.wasm",
});

const unityContextKytunt = new UnityContext({
  loaderUrl: "openBoxKytuntScene/Build/openBoxKytuntScene.loader.js",
  dataUrl: "openBoxKytuntScene/Build/openBoxKytuntScene.data",
  frameworkUrl: "openBoxKytuntScene/Build/openBoxKytuntScene.framework.js",
  codeUrl: "openBoxKytuntScene/Build/openBoxKytuntScene.wasm",
});

/* const unityContext = new UnityContext({
  loaderUrl: "open100.old/Build/open100.loader.js",
  dataUrl: "open100.old/Build/open100.data",
  frameworkUrl: "open100.old/Build/open100.framework.js",
  codeUrl: "open100.old/Build/open100.wasm",
}); */

const TextCard = ({
  heightInVh,
  widthInVw,
  itemName,
  itemType,
  itemStatus,
  itemId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSwap, setIsSwap] = useState(false);

  const blockchain = useSelector((state) => state.blockchain);

  const headerImg = imgheader;
  const openBtnUrl =
    "https://res.cloudinary.com/groovin/image/upload/v1637780948/Toyo/open-button_xjrwoo.png";

  function resetPageWithDefaultValues() {
    setIsSwap(false);
    setIsOpen(false);
    setIsLoaded(false);
    setIsOk(false);
    localStorage.setItem("systemPause", "0");
    window.location.reload();
  }

  useEffect(
    function () {
      if(itemName.trim() == "Jakana") {
        unityContextJakana.on("loaded", function () {
          setIsLoaded(true);
        });
      } else {
        unityContextKytunt.on("loaded", function () {
          setIsLoaded(true);
        });
      }
    },
    [isOpen]
  );

  useEffect(function () {
    if(itemName.trim() == "Jakana") {
      unityContextJakana.on("GameOver", function () {
        resetPageWithDefaultValues()
      });
    } else {
      unityContextKytunt.on("GameOver", function () {
        resetPageWithDefaultValues()
      });
    }
  }, []);

  useEffect(function () {

    if(itemName.trim() == "Jakana") {
      unityContextJakana.on("sendValue", async function (pontuacao, tokenId) {
        await savePontuacao(pontuacao, tokenId);
      });
    } else {
      unityContextKytunt.on("sendValue", async function (pontuacao, tokenId) {
        await savePontuacao(pontuacao, tokenId);
      });
    }
  }, []);

  async function savePontuacao(pontuacao, tokenId) {
    try {
      await api.post('/postPercentageBonus', {
        'Ym9udXM': `${Buffer.from(pontuacao, 'binary').toString('base64')}`,
        'dG9rZW5JZA': `${Buffer.from(tokenId, 'binary').toString('base64')}`,
        'wallet': `${localStorage.getItem("WalletAccount")};${parseInt(localStorage.getItem("WalletChainId"), 16)}`
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(async () => {
    if (isOk) {
      const typeId = itemType == "Fortified" ? 2 : 1;
      let swapReturn = await web3Connect.swapTokenAsync(itemId, typeId, blockchain.account);
      if(swapReturn) {
        api.get("/sortBox", {
            params: {
              TypeId: typeId,
              TokenId: itemId,
              walletAddress: blockchain.account,
              chainId: parseInt(blockchain.chainId, 16),
              Fortified: itemType == "Fortified" ? true : false,
              Jakana:  itemName.trim() == "Jakana" ? true : false
            }}).then((apiReturn) => {
                setIsSwap(true);
                loadingWebGL(apiReturn.data);
            }).catch((error) => {
              alert('Error on Raffle your Toyo, send the error shown in sequence on the discord bugs channel');
              console.log(error);
              resetPageWithDefaultValues();
            })
      } else {
        alert("Metamask rejected")
        resetPageWithDefaultValues()
      }
    }
  }, [isOk]);

  useEffect(async () => {
    if (isLoaded && isOpen) {
      setIsOk(true);
    }
  });

  async function openBox() {
    localStorage.setItem("systemPause", "1");
    setIsOpen(true);
  }

  function loadingWebGL(retornoApi) {
    const WalletAccount = localStorage.getItem("WalletAccount");
    const WalletChainId = localStorage.getItem("WalletChainId");
    let walletChain = `${WalletAccount};${parseInt(WalletChainId, 16)}`;
    /* unityContext.send(
      "loader",
      "setaRota",
      "https://st0rag3-toy0-d3vs-h3ll.nyc3.cdn.digitaloceanspaces.com/toyoAssets/"
    ); */
    if(itemName.trim() == "Jakana") {
      unityContextJakana.send(
        "loader",
        "setaRota",
        "https://18.220.141.105/toyoAssets/"
      );

      /* unityContextJakana.send(
        "loader",
        "setaUpRota",
        "https://0.0.0.0:5001/api/ToyoBox/postPercentageBonus"
      ); */

      unityContextJakana.send(
        "loader",
        "setaWallet",
       `${walletChain}`
      );

      var [_toyoInfo] = toyosInfos(retornoApi.toyoRaridade);

      var box = itemType == "Fortified" ? 2 : 1;

      unityContextJakana.send(
        "loader",
        "backFunction",
        `${box},${retornoApi.raridade},${_toyoInfo.bodyType},1,${retornoApi.toyoId};${
          _toyoInfo.id
        },${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${
          _toyoInfo.id
        },${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${
          _toyoInfo.id
        };1,1,1,1,1,1,1,1,1,1;1,1,1,1,1,1,1,1,1,1;${
          partsInfos(_toyoInfo.id, 1)[0].size
        },${_toyoInfo.size},${partsInfos(_toyoInfo.id, 3)[0].size},${
          partsInfos(_toyoInfo.id, 4)[0].size
        },${partsInfos(_toyoInfo.id, 5)[0].size},${
          partsInfos(_toyoInfo.id, 6)[0].size
        },${partsInfos(_toyoInfo.id, 7)[0].size},${
          partsInfos(_toyoInfo.id, 8)[0].size
        },${partsInfos(_toyoInfo.id, 9)[0].size},${
          partsInfos(_toyoInfo.id, 10)[0].size
        };${partsInfos(_toyoInfo.id, 1)[0].retroBone},0,${
          partsInfos(_toyoInfo.id, 3)[0].retroBone
        },${partsInfos(_toyoInfo.id, 4)[0].retroBone},${
          partsInfos(_toyoInfo.id, 5)[0].retroBone
        },${partsInfos(_toyoInfo.id, 6)[0].retroBone},${
          partsInfos(_toyoInfo.id, 7)[0].retroBone
        },${partsInfos(_toyoInfo.id, 8)[0].retroBone},${
          partsInfos(_toyoInfo.id, 9)[0].retroBone
        },${partsInfos(_toyoInfo.id, 10)[0].retroBone};${
          retornoApi.qParts[1][0]
        },${retornoApi.qParts[2][0]},${retornoApi.qParts[3][0]},${
          retornoApi.qParts[4][0]
        },${retornoApi.qParts[5][0]},${retornoApi.qParts[6][0]},${
          retornoApi.qParts[7][0]
        },${retornoApi.qParts[8][0]},${retornoApi.qParts[9][0]},${
          retornoApi.qParts[10][0]
        };${retornoApi.qParts[1][1]},${retornoApi.qParts[2][1]},${
          retornoApi.qParts[3][1]
        },${retornoApi.qParts[4][1]},${retornoApi.qParts[5][1]},${
          retornoApi.qParts[6][1]
        },${retornoApi.qParts[7][1]},${retornoApi.qParts[8][1]},${
          retornoApi.qParts[9][1]
        },${retornoApi.qParts[10][1]}|${retornoApi.qStats[1]},${
          retornoApi.qStats[2]
        },${retornoApi.qStats[3]},${retornoApi.qStats[4]},${
          retornoApi.qStats[5]
        },${retornoApi.qStats[6]},${retornoApi.qStats[7]},${
          retornoApi.qStats[8]
        },${retornoApi.qStats[9]},${retornoApi.qStats[10]},${
          retornoApi.qStats[11]
        },${retornoApi.qStats[12]}`
      );
    } else {
      unityContextKytunt.send(
        "loader",
        "setaRota",
        "https://18.220.141.105/toyoAssets/"
      );

      /* unityContextKytunt.send(
        "loader",
        "setaUpRota",
        "https://0.0.0.0:5001/api/ToyoBox/postPercentageBonus"
      ); */

      unityContextKytunt.send(
        "loader",
        "setaWallet",
       `${walletChain}`
      );

      var [_toyoInfo] = toyosInfos(retornoApi.toyoRaridade);

      var box = itemType == "Fortified" ? 2 : 1;

      unityContextKytunt.send(
        "loader",
        "backFunction",
        `${box},${retornoApi.raridade},${_toyoInfo.bodyType},1,${retornoApi.toyoId};${
          _toyoInfo.id
        },${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${
          _toyoInfo.id
        },${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${
          _toyoInfo.id
        };1,1,1,1,1,1,1,1,1,1;1,1,1,1,1,1,1,1,1,1;${
          partsInfos(_toyoInfo.id, 1)[0].size
        },${_toyoInfo.size},${partsInfos(_toyoInfo.id, 3)[0].size},${
          partsInfos(_toyoInfo.id, 4)[0].size
        },${partsInfos(_toyoInfo.id, 5)[0].size},${
          partsInfos(_toyoInfo.id, 6)[0].size
        },${partsInfos(_toyoInfo.id, 7)[0].size},${
          partsInfos(_toyoInfo.id, 8)[0].size
        },${partsInfos(_toyoInfo.id, 9)[0].size},${
          partsInfos(_toyoInfo.id, 10)[0].size
        };${partsInfos(_toyoInfo.id, 1)[0].retroBone},0,${
          partsInfos(_toyoInfo.id, 3)[0].retroBone
        },${partsInfos(_toyoInfo.id, 4)[0].retroBone},${
          partsInfos(_toyoInfo.id, 5)[0].retroBone
        },${partsInfos(_toyoInfo.id, 6)[0].retroBone},${
          partsInfos(_toyoInfo.id, 7)[0].retroBone
        },${partsInfos(_toyoInfo.id, 8)[0].retroBone},${
          partsInfos(_toyoInfo.id, 9)[0].retroBone
        },${partsInfos(_toyoInfo.id, 10)[0].retroBone};${
          retornoApi.qParts[1][0]
        },${retornoApi.qParts[2][0]},${retornoApi.qParts[3][0]},${
          retornoApi.qParts[4][0]
        },${retornoApi.qParts[5][0]},${retornoApi.qParts[6][0]},${
          retornoApi.qParts[7][0]
        },${retornoApi.qParts[8][0]},${retornoApi.qParts[9][0]},${
          retornoApi.qParts[10][0]
        };${retornoApi.qParts[1][1]},${retornoApi.qParts[2][1]},${
          retornoApi.qParts[3][1]
        },${retornoApi.qParts[4][1]},${retornoApi.qParts[5][1]},${
          retornoApi.qParts[6][1]
        },${retornoApi.qParts[7][1]},${retornoApi.qParts[8][1]},${
          retornoApi.qParts[9][1]
        },${retornoApi.qParts[10][1]}|${retornoApi.qStats[1]},${
          retornoApi.qStats[2]
        },${retornoApi.qStats[3]},${retornoApi.qStats[4]},${
          retornoApi.qStats[5]
        },${retornoApi.qStats[6]},${retornoApi.qStats[7]},${
          retornoApi.qStats[8]
        },${retornoApi.qStats[9]},${retornoApi.qStats[10]},${
          retornoApi.qStats[11]
        },${retornoApi.qStats[12]}`
      );
    }
  }

  return (
    <>
        { isOpen === true && (
          <>
              { (isLoaded === false || isSwap === false) && (
                <div className="loading-overlay">
                  <img src={loaderGif} alt="loading..." className="ampulheta" />
                  <br />
                  <p>PUNCH THE CONFIRM BUTTON ON BOTH METAMASK REQUESTS</p>
                  <br />
                  <p>TOKEN ID: #{itemId}</p>
                </div>
              )}
              {itemName.trim() == "Jakana" ? (
                <Unity className="unity-canvas" unityContext={unityContextJakana} />
              ): (
                <Unity className="unity-canvas" unityContext={unityContextKytunt} />
              )}
          </>
        )}

      {
        itemId ? (
          <div
            className="stats-card-wrapper"
            style={{ height: `${heightInVh}vh`, width: `${widthInVw}vw` }}
          >
            <div className="top-card3">
              <img className="menu-controls" src={headerImg} />
              <div className="card-content">
                <div className="dock-text-section" id="boxInfos">
                  <div className="stats-headerDock">
                    <div className="char-name">{itemName.trim() || "loading"}</div>
                    <div className="char-id">{'#'+itemId || "#0"}</div>
                  </div>

                  <div className="stats-metadataDock">
                    <div className="rarity">
                      <span className="prop">Type:</span>
                      <span className="val"> {itemType || "loading"}</span>
                    </div>
                    <div className="level">
                      <span className="prop">Status:</span>
                      <span className="val"> {itemStatus || "loading"}</span>
                    </div>
                  </div>
                    {/* { itemName.includes("Kytunt") && itemStatus == "Closed" ?
                        isOpen == false ? (
                            <div className="btnContainer">
                                <img
                                    src={openBtnUrl}
                                    className="open-btn"
                                    alt="open button"
                                    onClick={openBox}
                                />
                            </div>
                        ) : swapStatus == "approve" ? (
                                <div className="btnContainer">
                                    <p
                                        style={{
                                        fontSize: "2em",
                                        fontFamily: "FreePixel, sans-serif",
                                        }}
                                    >
                                        PLEASE APPROVE METAMASK
                                    </p>
                                </div>
                            ) : swapStatus == "swapping" ?? (
                                    <div className="btnContainer">
                                        <p
                                            style={{
                                            fontSize: "2em",
                                            fontFamily: "FreePixel, sans-serif",
                                            }}
                                        >
                                            PLEASE CONFIRM SWAP ON METAMASK
                                        </p>
                                    </div>
                            ) : (
                                <div className="btnContainer">
                                    <p
                                        style={{
                                        fontSize: "2em",
                                        fontFamily: "FreePixel, sans-serif",
                                        }}
                                    >
                                        IT'S NOT TIME YET
                                    </p>
                                </div>
                            )} */}

                    {/* { itemName.includes("Kytunt") && itemStatus == "Closed" ?  */}
                       { isSwap == false && isOpen == false ?
                        (
                            <div className="btnContainer">
                                <img
                                    src={openBtnUrl}
                                    className="open-btn"
                                    alt="open button"
                                    onClick={openBox}
                                />
                            </div>
                            ) : (
                              <div className="btnContainer">
                                <p
                                    style={{
                                    fontSize: "2em",
                                    fontWeight: 'bold',
                                    fontFamily: "FreePixel, sans-serif",
                                    }}
                                >
                                    APPROVE IN METAMASK EXTENSION
                                </p>
                            </div>
                        ) /* : (
                            <div className="btnContainer">
                                <p
                                    style={{
                                    fontSize: "2em",
                                    fontWeight: 'bold',
                                    fontFamily: "FreePixel, sans-serif",
                                    }}
                                >
                                    IT'S NOT TIME YET
                                </p>
                            </div>
                        ) */
                    }
                </div>
              </div>
            </div>
            <div className="back-card3">
              <div className="back-content"></div>
            </div>
          </div>
        ) : ( <div></div>)
      }
    </>
  );
};

TextCard.propTypes = {
  heightInVh: Number,
  widthInVw: Number,
  itemName: String,
  itemType: String,
  itemStatus: String,
};

export default TextCard;
