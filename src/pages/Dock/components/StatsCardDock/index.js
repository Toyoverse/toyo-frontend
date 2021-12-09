import React, { useState, useEffect } from 'react'
import Unity, { UnityContext } from 'react-unity-webgl'
import './index.scss'

import imgheader from './../../../../assets/header.png'

const TextCard = ({heightInVh, widthInVw, itemName, itemType, itemStatus }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const headerImg = imgheader
    const openBtnUrl ='https://res.cloudinary.com/groovin/image/upload/v1637780948/Toyo/open-button_xjrwoo.png'

    const unityContext = new UnityContext({
        loaderUrl: '/BoxOpening/Build/BoxOpening.loader.js',
        dataUrl: '/BoxOpening/Build/BoxOpening.data',
        frameworkUrl: '/BoxOpening/Build/BoxOpening.framework.js',
        codeUrl: '/BoxOpening/Build/BoxOpening.wasm',
    }) 

    useEffect(() => {
        unityContext.on("loaded", function () {
            setIsLoaded(true);
        });
    },[])

    useEffect(function () {
        if(isLoaded && isOpen) {
            console.log('abrindo')
            loadingWebGL()
        }
    }, [isOpen]);

    function openBox() {
        setIsOpen(true);
        console.log(isLoaded);
        console.log(isOpen);
    }

    function loadingWebGL() {        
        unityContext.send("Camera", "setaRota", "http://localhost:3000/toyoAssets/");
        unityContext.send("Camera", "backFunction", "3,1;10,10,10,10,10,10,10,10,10,10;1,1,1,1,1,1,1,1,1,1;1,1,1,1,1,1,1,1,1,1;100,100,100,100,100,100,100,100,100,100;0,0,0,0,0,0,0,0,0,0");
    }
  
    return (
        <>
            

            <div
                className="stats-card-wrapper"
                style={{ height: `${heightInVh}vh`, width: `${widthInVw}vw` }}
            >
                <div className="top-card2">
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
                <div className="back-card2">
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
