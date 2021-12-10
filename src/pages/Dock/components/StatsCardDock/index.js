import React, { useState, useEffect } from 'react'
import Unity, { UnityContext } from 'react-unity-webgl'
import './index.scss'
import toyosInfos from './../../../../middleware/toyo'
import partsInfos from './../../../../middleware/parts'
import imgheader from './../../../../assets/header.png'

import { useSelector } from 'react-redux'

import api from './../../../../services/api'

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
    const [isLoaded, setIsLoaded] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    const blockchain = useSelector(state => state.blockchain)

    const headerImg = imgheader
    const openBtnUrl ='https://res.cloudinary.com/groovin/image/upload/v1637780948/Toyo/open-button_xjrwoo.png'
 
    useEffect(function () {
        //unityContext.send("loader", "setaRota", "https://st0rag3-toy0-d3vs-h3ll.nyc3.cdn.digitaloceanspaces.com/toyoAssets/");
        //unityContext.send("loader", "backFunction", "1,3,2,1,4499;4,4,4,4,4,4,4,4,4,4;1,1,1,1,1,1,1,1,1,1;1,1,1,1,1,1,1,1,1,1;100,100,100,100,100,100,100,100,100,100;0,0,0,0,0,0,0,0,0,0;1,0,1,1,3,3,3,5,5,5;10,0,10,10,10,10,10,10,10,10|10,20,30,40,50,60,70,80,90,100,110,120")
        unityContext.on("loaded", function () {
          setIsLoaded(true);
        });

        unityContext.on("quitted", function () {
            setIsClosed(true);
        });
    }, [isOpen]);

    useEffect(async () => {
        console.log("isopen " + isOpen);
        console.log("isload " + isLoaded);
        if(isLoaded && isOpen) {
            let retornoApi = await api.get('/ToyoBox/sortBox', {
                params: {
                    TypeId: itemType == "Fortified" ? 2 : 1,
                    TokenId: itemId,
                    Fortified: itemType == "Fortified" ? true : false,
                    name: itemName
                },
            })

            loadingWebGL(retornoApi.data);
        }
    }, [isOpen]);

    function openBox() {
        setIsOpen(true);
    }

    /* function loadingWebGL() {        
        unityContext.send("Camera", "setaRota", "http://localhost:3000/toyoAssets/");
        unityContext.send("Camera", "backFunction", "3,1;10,10,10,10,10,10,10,10,10,10;1,1,1,1,1,1,1,1,1,1;1,1,1,1,1,1,1,1,1,1;100,100,100,100,100,100,100,100,100,100;0,0,0,0,0,0,0,0,0,0");
    } */

    function loadingWebGL(retornoApi) {


        unityContext.send("loader", "setaRota", "https://st0rag3-toy0-d3vs-h3ll.nyc3.cdn.digitaloceanspaces.com/toyoAssets/");
        var _toyoInfo = toyosInfos(retornoApi.toyoRaridade);

        var box = itemType == "Fortified" ? 2 : 1;
        unityContext.send("loader", "backFunction", `${box},${retornoApi.raridade},${_toyoInfo.bodyType},1,${itemId};${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id},${_toyoInfo.id};1,1,1,1,1,1,1,1,1,1;1,1,1,1,1,1,1,1,1,1;${partsInfos(_toyoInfo.id, 1)[0].size},${_toyoInfo.size},${partsInfos(_toyoInfo.id, 3)[0].size},${partsInfos(_toyoInfo.id, 4)[0].size},${partsInfos(_toyoInfo.id, 5)[0].size},${partsInfos(_toyoInfo.id, 6)[0].size},${partsInfos(_toyoInfo.id, 7)[0].size},${partsInfos(_toyoInfo.id, 8)[0].size},${partsInfos(_toyoInfo.id, 9)[0].size},${partsInfos(_toyoInfo.id, 10)[0].size};${partsInfos(_toyoInfo.id, 1)[0].retroBone},0,${partsInfos(_toyoInfo.id, 3)[0].retroBone},${partsInfos(_toyoInfo.id, 4)[0].retroBone},${partsInfos(_toyoInfo.id, 5)[0].retroBone},${partsInfos(_toyoInfo.id, 6)[0].retroBone},${partsInfos(_toyoInfo.id, 7)[0].retroBone},${partsInfos(_toyoInfo.id, 8)[0].retroBone},${partsInfos(_toyoInfo.id, 9)[0].retroBone},${partsInfos(_toyoInfo.id, 10)[0].retroBone};${retornoApi.oqParts[1][0]},${retornoApi.oqParts[2][0]},${retornoApi.oqParts[3][0]},${retornoApi.oqParts[4][0]},${retornoApi.oqParts[5][0]},${retornoApi.oqParts[6][0]},${retornoApi.oqParts[7][0]},${retornoApi.oqParts[8][0]},${retornoApi.oqParts[9][0]},${retornoApi.oqParts[10][0]};${retornoApi.oqParts[1][1]},${retornoApi.oqParts[2][1]},${retornoApi.oqParts[3][1]},${retornoApi.oqParts[4][1]},${retornoApi.oqParts[5][1]},${retornoApi.oqParts[6][1]},${retornoApi.oqParts[7][1]},${retornoApi.oqParts[8][1]},${retornoApi.oqParts[9][1]},${retornoApi.oqParts[10][1]}|${retornoApi.qStats[1]},${retornoApi.qStats[2]},${retornoApi.qStats[3]},${retornoApi.qStats[4]},${retornoApi.qStats[5]},${retornoApi.qStats[6]},${retornoApi.qStats[7]},${retornoApi.qStats[8]},${retornoApi.qStats[9]},${retornoApi.qStats[10]},${retornoApi.qStats[11]},${retornoApi.qStats[12]}`);
        //unityContext.send("loader", "backFunction", "1,3,2,1,4499;4,4,4,4,4,4,4,4,4,4;1,1,1,1,1,1,1,1,1,1;1,1,1,1,1,1,1,1,1,1;100,100,100,100,100,100,100,100,100,100;0,0,0,0,0,0,0,0,0,0;1,0,1,1,3,3,3,5,5,5;10,0,10,10,10,10,10,10,10,10|10,20,30,40,50,60,70,80,90,100,110,120")
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
                    visibility: isLoaded && isOpen ? "visible" : "hidden",
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
                            { itemName.includes("Kytunt") ? (
                                <div className="btnContainer">
                                    <img src={openBtnUrl} className="open-btn" alt="open button" onClick={openBox} />
                                </div>
                             ) : (
                                <div className="btnContainer">
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
