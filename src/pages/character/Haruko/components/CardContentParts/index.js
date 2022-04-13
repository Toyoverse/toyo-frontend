/* eslint-disable */
import React, { useState, useEffect } from 'react'
import toyosInfos from '../../../../../middleware/toyo'
import openBtnUrl from "./../../../../assets/images/btn-metamask.png";
import loaderGif from "./../StatsCard/loader.gif";
import './index.scss'
import api from '../../../../../services/api'

import {
    cleanToyoClicked
} from "../../../../../redux/toyos";

import Unity, { UnityContext } from "react-unity-webgl";

import { useDispatch, useSelector } from "react-redux";

const unityContext = new UnityContext({
    loaderUrl: "open100/Build/open100.loader.js",
    dataUrl: "open100/Build/open100.data",
    frameworkUrl: "open100/Build/open100.framework.js",
    codeUrl: "open100/Build/open100.wasm",
  });


function CardContentParts() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRaffle, setIsRaffle] = useState(false);
  const [isStats, setIsStats] = useState([]);
  const [isStatsToyo, setIsStatsToyo] = useState([]);
  const blockchain = useSelector((state) => state.blockchain);
    /*   const charIconUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637917431/Toyo/haruko-page/haruko-icon_zimt4f.png'
 */ const doubleLinesUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637919102/Toyo/haruko-page/double-lines_lygeaq.png'
    const heartIconUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637918794/Toyo/haruko-page/heart-icon_rnnnu3.png'
    const bestStatsUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637920611/Toyo/haruko-page/best-stats_gzu4km.png'
    const progrBarUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637926026/Toyo/haruko-page/stat-progr-bar_bjmrsg.png'


    const toyo = useSelector((state) => state.toyo);
    const dispatch = useDispatch();

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
            await savePontuacao(`${pontuacao}`, `${tokenId}`);
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

      useEffect(async () => {
        if (toyo.idToyoClicked) {
            console.log('entrou cima')
            await api.get("/getStatusParts", {
                params: {
                    tokenId: toyo.idToyoClicked,
                    walletAddress: blockchain.account,
                    chainId: parseInt(blockchain.chainId, 16)
                }}).then((apiReturn) => {
                    //MARS >>>>
                    //loadingWebGLToyo(apiReturn.data);
                    setIsStats(apiReturn.data);
                }).catch((error) => {
                    alert('getStats error');
                    alert(error);
                    resetPageWithDefaultValues();
                })
        }
      }, [toyo]);

      useEffect(async () => {
        if (toyo.idToyoClicked) {
            console.log('entrou')
            await api.get("/getStatusToyo", {
                params: {
                    tokenId: toyo.idToyoClicked,
                    walletAddress: blockchain.account,
                    chainId: parseInt(blockchain.chainId, 16)
                }}).then((apiReturn) => {
                    //MARS >>>>
                    //loadingWebGLToyo(apiReturn.data);
                    let rarity = toyosInfos(apiReturn.data[0].toyoId)[0].rarity
                    if (rarity == 1)
                        apiReturn.data[0].rarity = "Common"
                    else if (rarity == 2)
                        apiReturn.data[0].rarity = "Uncommon"
                    else if (rarity == 3)
                        apiReturn.data[0].rarity = "Rare"
                    else if (rarity == 4)
                        apiReturn.data[0].rarity = "LImited"
                    else if (rarity == 5)
                        apiReturn.data[0].rarity = "Collectors"
                    else if (rarity == 6)
                        apiReturn.data[0].rarity = "Prototype"

                    setIsStatsToyo(apiReturn.data);
                }).catch((error) => {
                    alert('getParts error');
                    alert(error);
                    resetPageWithDefaultValues();
                })
        }
      }, [toyo]);

    function resetPageWithDefaultValues() {
        setIsOpen(false);
        setIsLoaded(false);
        setIsOk(false);
        setIsRaffle(false);
        dispatch(cleanToyoClicked());
        localStorage.setItem("systemPause", "0");
        window.location.reload(true);
    }

    function handleMinigame() {
        localStorage.setItem("systemPause", "1");
        setIsOpen(true);
    }

    function loadingWebGL(retornoApi) {
        const WalletAccount = localStorage.getItem("WalletAccount");
        const WalletChainId = localStorage.getItem("WalletChainId");
        let walletChain = `${WalletAccount};${parseInt(WalletChainId, 16)}`;
        unityContext.send(
          "loader",
          "setaRota",
          "https://st0rag3-toy0-d3vs-h3ll.nyc3.cdn.digitaloceanspaces.com/toyoAssets/"
        );
        unityContext.send(
          "loader",
          "setaUpRota",
          "https://0.0.0.0:5001/api/ToyoBox/postPercentageBonus"
        );
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

   /*  const reduxVariable = true */
    return (
        <>
            {toyo.name && (
                <>
                    <div className="stats-header">
                        <div className="char-name">{toyo.name}</div>
                    </div>

                    <div className="stats-metadata">
                        <div className="rarity">
                            <span className="prop">Rarity:</span>
                            <span className="val"> {isStatsToyo.length > 0 && isStatsToyo[0].rarity }</span>
                        </div>
                        <div className="level">
                            <span className="prop">Level:</span>
                            <span className="val"> v8</span>
                        </div>
                        <div className="char-id">
                            <span className="val">id # 2078</span>
                        </div>
                    </div>

                    <div className="stats-desc-header2">
                        <img
                            src={doubleLinesUrl}
                            className="stats-double-lines"
                            alt="double lines"
                        />
                        {/* <span className="val">Heart&nbsp;Bond&nbsp;198</span>
                        <img
                            src={heartIconUrl}
                            className="heart-icon"
                            alt="heart"
                        /> */}
                    </div>

                    <div className="stats-type2-wrapper2">
                        <div className="column-wrapper">
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">Head:</div>
                                <div className="stat-perc-prop2">
                                    {isStats.length > 1 && isStats[0].statName} +{isStats.length > 1 && isStats[0].bonusStat}
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">L. Arm:</div>
                                <div className="stat-perc-prop2">
                                {isStats.length > 1 && isStats[1].statName} +{isStats.length > 1 && isStats[1].bonusStat}
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">R. Arm:</div>
                                <div className="stat-perc-prop2">
                                {isStats.length > 1 && isStats[2].statName} +{isStats.length > 1 && isStats[2].bonusStat}
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">L. Hand:</div>
                                <div className="stat-perc-prop2">
                                    {isStats.length > 1 && isStats[3].statName} +{isStats.length > 1 && isStats[3].bonusStat}
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">
                                    R. Hand:
                                </div>
                                <div className="stat-perc-prop2">
                                {isStats.length > 1 && isStats[4].statName} +{isStats.length > 1 && isStats[4].bonusStat}
                                </div>
                            </div>
                        </div>

                        <div className="column-wrapper">
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">L. Leg:</div>
                                <div className="stat-perc-prop2">
                                {isStats.length > 1 && isStats[5].statName} +{isStats.length > 1 && isStats[5].bonusStat}
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">R. Leg:</div>
                                <div className="stat-perc-prop2">
                                {isStats.length > 1 && isStats[6].statName} +{isStats.length > 1 && isStats[6].bonusStat}
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">L. Foot:</div>
                                <div className="stat-perc-prop2">
                                {isStats.length > 1 && isStats[7].statName} +{isStats.length > 1 && isStats[7].bonusStat}
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">
                                    R. Foot:
                                </div>
                                <div className="stat-perc-prop2">
                                {isStats.length > 1 && isStats[8].statName} +{isStats.length > 1 && isStats[8].bonusStat}
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2 spacerVertical">
                                    manobra
                                </div>
                                <div className="stat-perc-prop2 spacerVertical">
                                    estrategica
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) }
        </>
    )
}

export default CardContentParts
