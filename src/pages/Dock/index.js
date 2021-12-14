/* eslint-disable */
import React, { useState, useEffect } from 'react'
import ItemsCarousel from './../../components/ItemsCarousel'
import TextCard from './components/StatsCardDock'
import Nav from '../../components/Nav'
import './index.scss'
import Items from './../ToysAndBoxes/ToysAndBoxes'

import { useSelector } from 'react-redux'

import api from './../../services/api'

import Waiting from './../Waiting/index'

import Unity, { UnityContext } from 'react-unity-webgl'

/* import Toy from './../../components/toyBox' */

/* const unityContext = new UnityContext({
    loaderUrl: 'BoxOpening/Build/BoxOpening.loader.js',
    dataUrl: 'BoxOpening/Build/BoxOpening.data',
    frameworkUrl: 'BoxOpening/Build/BoxOpening.framework.js',
    codeUrl: 'BoxOpening/Build/BoxOpening.wasm',
}) */

function Dock() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [boxSelected, setBoxSelected] = useState(0)

    const [isOpen, setIsOpen] = useState(true)
    const [files, setFiles] = useState([])
    const blockchain = useSelector(state => state.blockchain)

    const fileName = 'Toyo'
    const fileId = '#696969'
    const fileImg =
        'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png'

    const box = useSelector(state => state.box)

    /* function loadingWebGL() {
        unityContext.send("Starter", "setaRota", "http://localhost:3000/toyoAssets/");
        unityContext.send("Starter", "reStarta", "1;2,100,3;1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100,1_1_1_100");
    } */

    useEffect(async () => {
        await api
            .get('/ToyoBox/getBoxes', {
                params: {
                    walletAddress: blockchain.account,
                    chainId: parseInt(blockchain.chainId, 16),
                },
            })
            .then(response => setFiles(response.data))
            .catch(error => {
                console.log(error)
            })
    })

    return (
        <main className="main-wrapper">
            <div id="img-background" className="img-background"></div>

            {/*  TO DO DESCOMENTAR ISSO IMPORTANTE  */}
            {!files.length ? (
                <Waiting />
            ) : (
                <>
                    <Nav />
                    <div className="main-content-wrapper">
                        <div className="item-showcase">
                            <div
                                style={{
                                    width: '30vw',
                                    height: '55vh',
                                    backgroundImage: `url("${window.location.origin}/iconsItems/${box.name.split(' - ').pop().split('Seed')[0].trim()}.png")`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    //visibility: isLoaded ? "hidden" : "visible",
                                    //display: isLoaded ? "none" : "block"
                                }}
                            />
                            <div className="text-card">
                                <TextCard
                                    itemName={box.name
                                        .split(' - ')
                                        .pop()
                                        .split('Seed')[0]
                                        .replace('Fortified', '')
                                        .replace('Open', '')}
                                    itemType={
                                        box.name
                                            .split(' - ')
                                            .pop()
                                            .includes('Fortified') == true
                                            ? 'Fortified'
                                            : 'Normal'
                                    }
                                    itemId={box.idBoxClicked}
                                    itemStatus={box.name
                                        .split(' - ')
                                        .pop()
                                        .includes('Open') == true
                                        ? 'Open'
                                        : 'Closed'

                                    }
                                    heightInVh={55}
                                    widthInVw={30}
                                />
                            </div>
                        </div>

                        <ItemsCarousel />
                    </div>
                    <Items name={fileName} time={fileId} img={fileImg} />
                </>
            )}
        </main>
    )
}

export default Dock
