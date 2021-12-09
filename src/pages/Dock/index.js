import React, { useState, useEffect } from 'react'
import ItemsCarousel from './../../components/ItemsCarousel'
import TextCard from './components/StatsCardDock'
import Nav from '../../components/Nav'
import './index.scss'
import Items from './../ToysAndBoxes/ToysAndBoxes'

import { useSelector } from 'react-redux'

/* import Unity, { UnityContext } from 'react-unity-webgl' */

/* import Toy from './../../components/toyBox' */

/* const unityContext = new UnityContext({
    loaderUrl: "viewer/Build/viewer.loader.js",
    dataUrl: "viewer/Build/viewer.data",
    frameworkUrl: "viewer/Build/viewer.framework.js",
    codeUrl: "viewer/Build/viewer.wasm",
}); */

/* const unityContext = new UnityContext({
    loaderUrl: 'BoxOpening/Build/BoxOpening.loader.js',
    dataUrl: 'BoxOpening/Build/BoxOpening.data',
    frameworkUrl: 'BoxOpening/Build/BoxOpening.framework.js',
    codeUrl: 'BoxOpening/Build/BoxOpening.wasm',
}) */

function Dock() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [boxSelected, setBoxSelected] = useState(0);

    const [isOpen, setIsOpen] = useState(true);
    
    const mainImgUrl = 'https://res.cloudinary.com/groovin/image/upload/v1637679642/Toyo/main_cb0t4x.png'
    const itemName = 'mistery box'
    const itemType = 'normal'
    const itemStatus = 'close'

    const fileName = 'Toyo'
    const fileId = '#696969'
    const fileImg = 'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png'
    
    const box = useSelector((state) => state.box)

    /* useEffect(function () {
        unityContext.on("loaded", function () {
          setIsLoaded(true);
        });
    }, []); */

    /* useEffect(function () {
        if(isLoaded) {
            console.log('loaded')
            loadingWebGL()
        }
    }, [isLoaded]); */

    /* function loadingWebGL() {        
        console.log("MARS >>>> START SETA ROTA");
        unityContext.send("loader", "setaRota", "http://localhost:3000/toyoAssets/");
        console.log("MARS >>>> END SETA ROTA");
        console.log("MARS >>>> START BACKFUNCTION");
        unityContext.send("loader", "backFunction", "1,2,1;4,4,4,4,4,4,4,4,4,4;1,1,1,1,1,1,1,1,1,1;1,1,1,1,1,1,1,1,1,1;100,100,100,100,100,100,100,100,100,100;0,0,0,0,0,0,0,0,0,0");
        console.log("MARS >>>> END BACKFUNCTION");
    } */

    /* function loadingWebGL() {
        unityContext.send("Starter", "setaRota", "http://localhost:3000/toyoAssets/");
        unityContext.send("Starter", "reStarta", "1;2,100,3;1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100");
    } */

    return (
        <main className="main-wrapper">
            <div id="img-background" className="img-background"></div>  
            {/* <Unity
                unityContext={unityContext}
                style={{
                    position: 'absolute',
                    zIndex: 20,
                    width: '95vw',
                    height: '95vh', 
                    top: '2.5vh',
                    left: '2.5vw',
                    display: 'none',             
                    visibility: "hidden"     
                    visibility: isLoaded ? "visible" : "hidden"
                }}
            />      */}        
            <Nav />                  
            <div className="main-content-wrapper">
                <div className="item-showcase">                             
                    <div style={{
                        width: '30vw',
                        height: '55vh', 
                        backgroundImage: `url(${mainImgUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        /* visibility: isLoaded ? "hidden" : "visible",
                        display: isLoaded ? "none" : "block" */
                    }} />
                    <div className="text-card">
                        <TextCard
                            itemName={box.name.split(" - ").pop().split("Seed")[0].replace("Fortified", "")}
                            itemType={box.name.split(" - ").pop().includes('Fortified') == true ? "Fortified" : "Normal"}
                            itemStatus={itemStatus}
                            heightInVh={55}
                            widthInVw={30}
                        />
                    </div>
                </div>
                
                <ItemsCarousel />
            </div>
            <Items
                name={fileName}
                time={fileId}
                img={fileImg}
            />
        </main>
    )
}

export default Dock
