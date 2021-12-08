import React/* , { useEffect }  */ from 'react'
import ItemsCarousel from './../../components/ItemsCarousel'
import TextCard from './components/StatsCardDock'
import Nav from '../../components/Nav'
import './index.scss'
import Items from './../ToysAndBoxes/ToysAndBoxes'

import axios from 'axios';

/* import Toy from './../../components/toyBox' */

import Unity, { UnityContext } from 'react-unity-webgl'

/* const unityContext = new UnityContext({
    loaderUrl: 'https://nakatoshivault.com/viewer/Build/viwer.loader.js',
    dataUrl: 'https://nakatoshivault.com/viewer/Build/viwer.data',
    frameworkUrl: 'https://nakatoshivault.com/viewer/Build/viwer.framework.js',
    codeUrl: 'https://nakatoshivault.com/viewer/Build/viwer.wasm',
}) */

const unityContext = new UnityContext({
    loaderUrl: '/viewerRota/viewer/Build/viewer.loader.js',
    dataUrl: '/viewerRota/viewer/Build/viewer.data',
    frameworkUrl: '/viewerRota/viewer/Build/viewer.framework.js',
    codeUrl: '/viewerRota/viewer/Build/viewer.wasm',
})

function Dock() {

    function teste() {
        //unityContext.send("Starter", "setaRota", "http://localhost:3000/toyoAssets/");
        unityContext.send("Starter", "setaRota", "https://st0rag3-toy0-d3vs-h3ll.nyc3.digitaloceanspaces.com/toyoAssets/");
        unityContext.send("Starter", "reStarta", "1;2,100,3;1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100");
    }

    /* useEffect(() => {
        unityContext.send("Starter", "setaRota", "https://nakatoshivault.com/_toyoAssets/");
        unityContext.send("Starter", "reStarta", "1;2,100,3;1_1_1_100,4_1_1_100,5_1_1_100,6_1_1_100,7_1_1_100,1_1_1_100,4_1_1_100,5_1_1_100,6_1_1_100,7_1_1_100");
    }, []) */

    /*   const mainImgUrl =
          'https://res.cloudinary.com/groovin/image/upload/v1637679642/Toyo/main_cb0t4x.png' */

    const itemName = 'mistery box'
    const itemType = 'normal'
    const itemStatus = 'close'

    const fileName = 'Toyo'
    const fileId = '#696969'
    const fileImg = 'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png'

    return (
        <main className="main-wrapper">
            <div id="img-background" className="img-background"></div>
            <Nav />
            <div className="main-content-wrapper">
                <div className="item-showcase">
                    <div>
                        <Unity
                            unityContext={unityContext}
                            style={{
                                width: '30vw',
                                height: '55vh',
                            }}
                        />
                    </div>
                    <div className="text-card" onClick={teste}>
                        <TextCard
                            itemName={itemName}
                            itemType={itemType}
                            itemStatus={itemStatus}
                            heightInVh={55}
                            widthInVw={30}
                        />
                    </div>
                </div>

                <ItemsCarousel
                    fileName={fileName}
                    fileId={fileId}
                    fileImg={fileImg}
                />
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
