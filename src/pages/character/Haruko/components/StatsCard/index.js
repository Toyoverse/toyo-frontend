/* eslint-disable */
import React, { useState, useEffect } from 'react'

import './index.scss'

import imgheader from './../../../../../assets/header.png'
import api from './../../../../../services/api'
import loaderGif from "./loader.gif";
import openBtnUrl from "./../../../../assets/images/btn-metamask.png";
import toyosInfos from "./../../../../../middleware/toyo";
import partsInfos from "./../../../../../middleware/parts";
import CardContent from '../CardContent';
import CardContentParts from '../CardContentParts';

import Unity, { UnityContext } from "react-unity-webgl";

import { useSelector} from "react-redux";

const unityContext = new UnityContext({
    loaderUrl: "open100/Build/open100.loader.js",
    dataUrl: "open100/Build/open100.data",
    frameworkUrl: "open100/Build/open100.framework.js",
    codeUrl: "open100/Build/open100.wasm",
  });


const TextCard = ({ heightInVh, widthInVw }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOk, setIsOk] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isRaffle, setIsRaffle] = useState(false);
    const [isPart, setIsPart] = useState(false);
    const blockchain = useSelector((state) => state.blockchain);
    const headerImg = imgheader
    // 'https://res.cloudinary.com/groovin/image/upload/v1637685686/Toyo/top-panel_oyxcmc.png'

    const toyo = useSelector((state) => state.toyo);

    useEffect(
        function () {
          unityContext.on("loaded", function () {
            setIsLoaded(true);
          });
        },
        [isOpen]
      );

    useEffect(async () => {
        if (isLoaded && isOpen) {
            setIsOk(true);
        }
    });

    useEffect(function () {
        unityContext.on("GameOver", function () {
            resetPageWithDefaultValues()
        });
    }, []);

    useEffect(function () {
        unityContext.on("sendValue", async function (pontuacao, tokenId) {
            //await savePontuacao(`${pontuacao}`, `${tokenId}`);
        });
    }, []);

    async function savePontuacao(pontuacao, tokenId) {
        try {
          await api.post('/postPercentageBonus', {
            'Ym9udXM': `${Buffer.from(pontuacao, 'binary').toString('base64')}`,
            'dG9rZW5JZA': `${Buffer.from(tokenId, 'binary').toString('base64')}`,
            'wallet': `${localStorage.getItem("WalletAccount")};${parseInt(localStorage.getItem("WalletChainId"), 16)}`
          }).then((result) => {
              return true;
          }).catch((error) => {
              console.log(error);
              return false;
          })
          return true;
        } catch (error) {
            console.log(error);
            return false;
        }
      }

    useEffect(async () => {
        if (isOk) {
            await api.get("/minigame", {
                params: {
                    TokenId: toyo.idToyoClicked,
                    walletAddress: blockchain.account,
                    chainId: parseInt(blockchain.chainId, 16)
                }}).then((apiReturn) => {
                    setIsRaffle(true);
                    loadingWebGL(apiReturn.data);
                }).catch((error) => {
                    alert('Error on Raffle your Toyo, send the error shown in sequence on the discord bugs channel');
                    alert(error);
                    resetPageWithDefaultValues();
                })
        }
      }, [isOk]);

    function resetPageWithDefaultValues() {
        setIsOpen(false);
        setIsLoaded(false);
        setIsOk(false);
        setIsRaffle(false);
        localStorage.setItem("systemPause", "0");
        window.location.reload();
    }

    function handleMinigame() {
        localStorage.setItem("systemPause", "1");
        setIsOpen(true);
    }

    function handleStats() {
      let parallelogramStats = document.getElementById("parallelogramStats");
      let trapezoidParts = document.getElementById("trapezoidParts");
      setIsPart(false);
      if (!parallelogramStats.classList.contains('active')) {
        parallelogramStats.classList.add('active')
      }
      if (trapezoidParts.classList.contains('active')) {
        trapezoidParts.classList.remove('active')
      }
    }

    function handleParts() {
      let parallelogramStats = document.getElementById("parallelogramStats");
      let trapezoidParts = document.getElementById("trapezoidParts");
      setIsPart(true);
      if (parallelogramStats.classList.contains('active')) {
        parallelogramStats.classList.remove('active')
      }
      if (!trapezoidParts.classList.contains('active')) {
        trapezoidParts.classList.add('active')
      }
    }

    function loadingWebGL(retornoApi) {
        const { PUBLIC_URL } = process.env;
        const WalletAccount = localStorage.getItem("WalletAccount");
        const WalletChainId = localStorage.getItem("WalletChainId");
        let walletChain = `${WalletAccount};${parseInt(WalletChainId, 16)}`;
        /* unityContext.send(
          "loader",
          "setaRota",
          "https://st0rag3-toy0-d3vs-h3ll.nyc3.cdn.digitaloceanspaces.com/toyoAssets/"
        ); */
        unityContext.send(
          "loader",
          "setaRota",
          `${PUBLIC_URL}/toyoAssets/`
        );
        /* unityContext.send(
          "loader",
          "setaUpRota",
          "https://0.0.0.0:5001/api/ToyoBox/postPercentageBonus"
        ); */
        unityContext.send(
          "loader",
          "setaWallet",
         `${walletChain}`
        );
        var [_toyoInfo] = toyosInfos(retornoApi.toyoRaridade);
        var box = 1;
        unityContext.send(
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

    return (
        <>
            {toyo.name &&
                isOpen === true && (
                    <div className="unity-container">
                        { (isLoaded === false || isRaffle === false) && (
                        <div className="loading-overlay2">
                            <img src={loaderGif} alt="loading..." className="ampulheta2" />
                            <br />
                            <p>AWAIT TOYO RAFFLE</p>
                            <br />
                            <p>TOKEN ID: #{toyo.idToyoClicked}</p>
                        </div>
                        )}
                        <Unity className="unity-canvas2" unityContext={unityContext} />
                    </div>
                )}

            <div
                className="stats-card-wrapper"
                style={{ height: `${heightInVh}vh`, width: `${widthInVw}vw` }}
            >
                <div className="top-card2">
                    <img className="menu-controls" src={headerImg} />

                    <div className="tabs">
                        <div className="outside-trapezoid-parts" onClick={handleParts}>
                            <div className="trapezoid" id="trapezoidParts" />
                            <span className="parts">
                                PARTS
                            </span>
                        </div>

                        <div className="outside-parallelogram-stats" onClick={handleStats}>
                            <div className="parallelogram active" id="parallelogramStats" />
                            <span className="stats">
                                STATS
                            </span>
                        </div>
                    </div>

                    <div className="card-content">

                        {(toyo.changeValue == false && isOpen == false && toyo.name)  ?
                            (<>
                                <div className="stats-header">
                                    <div className="char-name">{toyo.name}</div>
                                </div>
                                  <div
                                      className="btnContainer"
                                      id="btnContainer"
                                      onClick={handleMinigame}
                                  >
                                      <img
                                      src={openBtnUrl}
                                      id="open-btn"
                                      className="open-btn"
                                      alt="Minigame"
                                      />
                                      <div className="icon-name">
                                          <p className="connect">MINIGAME</p>
                                      </div>
                                  </div>
                                  </>
                                  ) : (toyo.changeValue == false && isOpen == true && toyo.name)  ? (
                                  <div className="btnContainer">
                                      <p
                                          style={{
                                          fontSize: "2em",
                                          fontWeight: 'bold',
                                          fontFamily: "FreePixel, sans-serif",
                                          }}
                                      >
                                          AWAIT RAFFLE TOYO
                                      </p>
                                  </div>
                            ) :
                              isPart ? (
                                <CardContentParts />
                              ) : (
                                <CardContent/>
                              )
                            }

                    </div>
                </div>

                <div className="back-card2">
                    <div className="back-content"></div>
                </div>
            </div>

        </>
    )}

TextCard.propTypes = {
    heightInVh: Number,
    widthInVw: Number,
    CardContent: React.Component,
}

export default TextCard
