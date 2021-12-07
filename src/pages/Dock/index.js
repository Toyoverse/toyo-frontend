import React/* , { useEffect }  */from 'react'
import ItemsCarousel from './../../components/ItemsCarousel'
import TextCard from '../../components/StatsCard'
import CardContent from './components/CardContent'
import Nav from '../../components/Nav'
import './index.scss'

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
        unityContext.send("Starter", "setaRota", "http://localhost:3000/toyoAssets/");
        unityContext.send("Starter", "reStarta", "1;2,100,3;1_1_1_100,4_1_1_100,5_1_1_100,6_1_1_100,7_1_1_100,1_1_1_100,4_1_1_100,5_1_1_100,6_1_1_100,7_1_1_100");
    }

    /* useEffect(() => {
        unityContext.send("Starter", "setaRota", "https://nakatoshivault.com/_toyoAssets/");
        unityContext.send("Starter", "reStarta", "1;2,100,3;1_1_1_100,4_1_1_100,5_1_1_100,6_1_1_100,7_1_1_100,1_1_1_100,4_1_1_100,5_1_1_100,6_1_1_100,7_1_1_100");
    }, []) */

    /*   const mainImgUrl =
          'https://res.cloudinary.com/groovin/image/upload/v1637679642/Toyo/main_cb0t4x.png' */

    return (
        <main className="main-wrapper">
            <div className="stripes-overlay"></div>
            <Nav />
            <div className="main-content-wrapper">
                <div className="item-showcase">
                    <div>
                        {/* <Toy
                         name="toyo futurustic name "
                         time="#342421"
                         img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png"
                        /> */}
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
                            CardContent={CardContent}
                            heightInVh={55}
                            widthInVw={30}
                        />
                    </div>
                </div>

                <ItemsCarousel />
            </div>
        </main>
    )
}

export default Dock
