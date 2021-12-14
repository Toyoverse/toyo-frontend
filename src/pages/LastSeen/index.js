import React, { useState, useEffect } from 'react'
import BoxesCarousel from './../../components/ItemsCarousel'
import TextCard from '../../components/StatsCard'
import CardContent from './components/CardContentStats'
import Nav from './../../components/Nav'
import Items from './../ToysAndBoxes/ToysAndBoxes'
import Unity, { UnityContext } from 'react-unity-webgl'

import './index.scss'

const unityContext = new UnityContext({
    loaderUrl: "viewer/Build/viewer.loader.js",
    dataUrl: "viewer/Build/viewer.data",
    frameworkUrl: "viewer/Build/viewer.framework.js",
    codeUrl: "viewer/Build/viewer.wasm",
});


function LastSeen() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    const charImgUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637934895/Toyo/haruko-page/skull_an6can.png'

    const fileName = 'Toyo'
    const fileId = '#696969'
    const fileImg = 'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png'


    useEffect(function () {
        unityContext.on("loaded", function () {
            console.log("oi")
            setIsLoaded(true);            
        });
    }, []);

    useEffect(async () => {
        //if(isOk) {
           /*  const typeId = itemType == "Fortified" ? 2 : 1
            var swap = new Promise((resolve, reject) => {
                let x = web3Connect.swapToken(itemId, typeId, blockchain.account)
                console.log(x);
                if (x == true) resolve(x);
            })                       
            
            swap.then(() => {
                console.log('swap ok');
                setIsSwap(true);
                api.get('/ToyoBox/sortBox', {
                    params: {
                        TypeId: typeId,
                        TokenId: itemId,
                        Fortified: itemType == "Fortified" ? true : false,
                        name: itemName
                    },
                }).then((retornoApi) => {
                    loadingWebGL(retornoApi.data);
                })
            }) */
        //}
        loadingWebGL();
    }, [isLoaded]);

    function loadingWebGL() {
        unityContext.send("Starter", "setaRota", "https://st0rag3-toy0-d3vs-h3ll.nyc3.cdn.digitaloceanspaces.com/toyoAssets/");
        //unityContext.send("Starter", "reStarta", `2;2,1,3,1,1`);
        unityContext.send("Starter", "reStarta", `1;2,100,3;1_1_1_100,4_1_1_100,5_1_1_100,6_1_1_100,7_1_1_100,1_1_1_100,4_1_1_100,5_1_1_100,6_1_1_100,7_1_1_100`);
    }

    return (
        <main className="last-seen-wrapper">
            <div id="img-background" className="img-background"></div>
            <Nav />
            <div className="main-content-wrapper">
                <div className="item-showcase">
                    <div>
                        {/* <img
                            className="main-img-showcase"
                            src={charImgUrl}
                            alt="main img"
                        /> */}
                        <Unity
                            unityContext={unityContext}
                            style={{
                                width: '30vw',
                                height: '55vh', 
                                visibility: isLoaded ? "visible" : "hidden"
                            }}
                        /> 
                    </div>

                    <TextCard
                        CardContent={CardContent}
                        heightInVh={55}
                        widthInVw={30}
                    />
                </div>
                <BoxesCarousel
                    fileName={fileName}
                    fileId={fileId}
                    fileImg={fileImg}
                />
            </div>
            <Items />
        </main>
    )
}

export default LastSeen
