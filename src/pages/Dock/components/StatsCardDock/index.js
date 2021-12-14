import React, { useState, useEffect } from 'react'
import Unity, { UnityContext } from 'react-unity-webgl'
import './index.scss'
import toyosInfos from './../../../../middleware/toyo'
import partsInfos from './../../../../middleware/parts'
import imgheader from './../../../../assets/header.png'

import { useSelector } from 'react-redux'

import api from './../../../../services/api'

import * as web3Connect from './../../../../middleware/web3Connect'

/* const unityContext = new UnityContext({
    loaderUrl: 'https://nakatoshivault.com/kxLpTx0j_fVLcZ_openbox/open100/Build/open100.loader.js',
    dataUrl: 'https://nakatoshivault.com/kxLpTx0j_fVLcZ_openbox/open100/Build/open100.data',
    frameworkUrl: 'https://nakatoshivault.com/kxLpTx0j_fVLcZ_openbox/open100/Build/open100.framework.js',
    codeUrl: 'https://nakatoshivault.com/kxLpTx0j_fVLcZ_openbox/open100/Build/open100.wasm',
}) */

const unityContext = new UnityContext({
    loaderUrl: 'open100/Build/open100.loader.js',
    dataUrl: 'open100/Build/open100.data',
    frameworkUrl: 'open100/Build/open100.framework.js',
    codeUrl: 'open100/Build/open100.wasm',
})

const TextCard = ({heightInVh, widthInVw, itemName, itemType, itemStatus, itemId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOk, setIsOk] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [isSwap, setIsSwap] = useState(false);

    const blockchain = useSelector(state => state.blockchain)

    const headerImg = imgheader
    const openBtnUrl ='https://res.cloudinary.com/groovin/image/upload/v1637780948/Toyo/open-button_xjrwoo.png'
 
    useEffect(function () {
        unityContext.on("loaded", function () {
          setIsLoaded(true);
        });
    }, [isOpen]);

    useEffect(function () {
        unityContext.on("GameOver", function () {
            setIsClosed(true);
        });
      }, []);

    useEffect(async () => {
        if(isOk) {
            const typeId = itemType == "Fortified" ? 2 : 1
            /* var swap = new Promise((resolve, reject) => {
                let x = web3Connect.swapToken(itemId, typeId, blockchain.account)
                console.log(x);
                if (x == true) resolve(x);
            }) */

            /* swap.then(() => { */
                console.log('swap ok');
                setIsSwap(true);
                api.get('/ToyoBox/sortBox', {
                    params: {
                        TypeId: typeId,
                        TokenId: itemId,
                        name: itemName,
                        Fortified: itemType == "Fortified" ? true : false
                    },
                }).then((retornoApi) => {
                    loadingWebGL(retornoApi.data);
                    setIsClosed(false);
                })
            /* }) */
        }
    }, [isOk]);

    useEffect(async () => {
        if(isLoaded && isOpen) {
            setIsOk(true)
        }
    })

    function openBox() {
        setIsOpen(true);
    }

    function loadingWebGL(retornoApi) {
        unityContext.send("loader", "setaRota", "https://st0rag3-toy0-d3vs-h3ll.nyc3.cdn.digitaloceanspaces.com/toyoAssets/");
        var [_toyoInfo] = toyosInfos(retornoApi.toyoRaridade);
        var box = itemType == "Fortified" ? 2 : 1;
        unityContext.send("loader", "backFunction", `${box},${retornoApi.raridade},${_toyoInfo.bodyType},1,${itemId};${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id};1,1,1,1,1,1,1,1,1,1;1,1,1,1,1,1,1,1,1,1;${partsInfos(_toyoInfo.id, 1)[0].size},${_toyoInfo.size},${partsInfos(_toyoInfo.id, 3)[0].size},${partsInfos(_toyoInfo.id, 4)[0].size},${partsInfos(_toyoInfo.id, 5)[0].size},${partsInfos(_toyoInfo.id, 6)[0].size},${partsInfos(_toyoInfo.id, 7)[0].size},${partsInfos(_toyoInfo.id, 8)[0].size},${partsInfos(_toyoInfo.id, 9)[0].size},${partsInfos(_toyoInfo.id, 10)[0].size};${partsInfos(_toyoInfo.id, 1)[0].retroBone},0,${partsInfos(_toyoInfo.id, 3)[0].retroBone},${partsInfos(_toyoInfo.id, 4)[0].retroBone},${partsInfos(_toyoInfo.id, 5)[0].retroBone},${partsInfos(_toyoInfo.id, 6)[0].retroBone},${partsInfos(_toyoInfo.id, 7)[0].retroBone},${partsInfos(_toyoInfo.id, 8)[0].retroBone},${partsInfos(_toyoInfo.id, 9)[0].retroBone},${partsInfos(_toyoInfo.id, 10)[0].retroBone};${retornoApi.qParts[1][0]},${retornoApi.qParts[2][0]},${retornoApi.qParts[3][0]},${retornoApi.qParts[4][0]},${retornoApi.qParts[5][0]},${retornoApi.qParts[6][0]},${retornoApi.qParts[7][0]},${retornoApi.qParts[8][0]},${retornoApi.qParts[9][0]},${retornoApi.qParts[10][0]};${retornoApi.qParts[1][1]},${retornoApi.qParts[2][1]},${retornoApi.qParts[3][1]},${retornoApi.qParts[4][1]},${retornoApi.qParts[5][1]},${retornoApi.qParts[6][1]},${retornoApi.qParts[7][1]},${retornoApi.qParts[8][1]},${retornoApi.qParts[9][1]},${retornoApi.qParts[10][1]}|${retornoApi.qStats[1]},${retornoApi.qStats[2]},${retornoApi.qStats[3]},${retornoApi.qStats[4]},${retornoApi.qStats[5]},${retornoApi.qStats[6]},${retornoApi.qStats[7]},${retornoApi.qStats[8]},${retornoApi.qStats[9]},${retornoApi.qStats[10]},${retornoApi.qStats[11]},${retornoApi.qStats[12]}`);
    }
  
    return (
        <>
            <Unity
                unityContext={unityContext}
                style={{
                    position: 'absolute',
                    zIndex: 20,
                    width: '95vw',
                    height: '95vh', 
                    top: '2.5vh',
                    left: '2.5vw', 
                    visibility: isLoaded && isOpen && isSwap ? "visible" : "hidden",
                    display: isClosed? "none" : "block"
                }}
            />    
            <div
                className="stats-card-wrapper"
                style={{ height: `${heightInVh}vh`, width: `${widthInVw}vw` }}
            >
                <div className="top-card3">
                    <img className="menu-controls" src={headerImg} />
                    <div className="card-content">

                        <div className="dock-text-section">
                            <div className="stats-header">
                                <div className="char-name">{itemName || 'loading'}</div>
                            </div>

                            <div className="stats-metadata1">
                                <div className="rarity">
                                    <span className="prop">Type:</span>
                                    <span className="val"> {itemType || 'loading'}</span>
                                </div>
                                <div className="level">
                                    <span className="prop">Status:</span>
                                    <span className="val"> {itemStatus || 'loading'}</span>
                                </div>
                            </div>
                            { itemName.includes("Kytunt") && itemStatus == 'Closed' ? (
                                <div className="btnContainer">
                                    <img src={openBtnUrl} className="open-btn" alt="open button" onClick={openBox} />
                                </div>
                             ) : (
                                <div className="btnContainer">
                                    <p style={{fontSize: '2em', fontFamily: 'FreePixel, sans-serif'}}>IT'S NOT TIME YET</p>
                                    {/* <img src={openBtnUrl} className="open-btn" alt="open button" onClick={openBox} /> */}
                                </div>
                             )}
                        </div>
                    </div>
                </div>
                <div className="back-card3">
                    <div className="back-content"></div>
                </div>
            </div>
        </>
    )
}

TextCard.propTypes = {
    heightInVh: Number,
    widthInVw: Number,
    itemName: String,
    itemType: String,
    itemStatus: String,
}

export default TextCard
