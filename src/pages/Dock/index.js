import React from 'react'
import ItemsCarousel from './components/ItemsCarousel'
import TextCard from '../../components/TextCard'
import CardContent from './components/CardContent'
import Nav from '../../components/Nav'
import './index.scss'

import Unity, { UnityContext } from 'react-unity-webgl'

const unityContext = new UnityContext({
    loaderUrl: 'transpbg4/Build/transpbg4.loader.js',
    dataUrl: 'transpbg4/Build/transpbg4.data',
    frameworkUrl: 'transpbg4/Build/transpbg4.framework.js',
    codeUrl: 'transpbg4/Build/transpbg4.wasm',
})

function Dock() {
    /*   const mainImgUrl =
          'https://res.cloudinary.com/groovin/image/upload/v1637679642/Toyo/main_cb0t4x.png' */
    const upIconUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677739/Toyo/expand_3x_skeqf3.png'
    const selectedGlowUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637766092/Toyo/selected-glow_zkn2oe.png'
    const titleBoxUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637780948/Toyo/my-stuff-title_lxborg.png'

    return (
        <main className="main-wrapper">
            <div className="stripes-overlay"></div>
            <Nav />
            <div className="main-content-wrapper">
                <div className="item-showcase">
                    <div>
                        <Unity
                            unityContext={unityContext}
                            style={{
                                height: '100%',
                                width: '500px',
                                marginRight: 20,
                            }}
                        />
                    </div>
                    <div className="text-card">
                        <TextCard
                            CardContent={CardContent}
                            heightInVh={45}
                            widthInVw={30}
                        />
                    </div>
                </div>
                <div className="my-stuff-wrapper">
                    <div>
                        <div className="top-section">
                            <img
                                className="title"
                                src={titleBoxUrl}
                                alt="title box"
                            />
                            <img
                                src={upIconUrl}
                                alt="scroll up"
                                className="scroll-icon"
                                style={{ width: '24px', height: '24px' }}
                            />
                        </div>
                        <ItemsCarousel />
                        <div className="selected-glow">
                            <img src={selectedGlowUrl} alt="selected glow" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dock