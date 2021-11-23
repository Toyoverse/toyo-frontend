import React from 'react'
import TextCard from './components/TextCard'

import 'index.scss'

function Dock() {
    const logoUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677739/Toyo/Logo_3x_swwtrs.png'
    const homeUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677738/Toyo/home_3x_wukx7g.png'
    const itemsUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637679596/Toyo/items_xnyybm.png'
    const toyosUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677739/Toyo/toyo_3x_hjr7v7.png'
    const bodyPartsUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677736/Toyo/body_part_3x_mxq76n.png'
    const mainImgUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637679642/Toyo/main_cb0t4x.png'
    const fortifiedUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677737/Toyo/boxes-5_3x_ctgics.png'
    const angHuUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677737/Toyo/boxes-3_3x_an4mwu.png'
    const mizuchiUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677738/Toyo/boxes_3x_ttyx7o.png'
    const stripesUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637680498/Toyo/stripes-overlay_cnf9g1.png'

    return (
        <main className="main-wrapper">
            <div className="nav-items">
                <div>
                    <img src={logoUrl} alt="logo" />
                </div>
                <div>
                    <img src={homeUrl} alt="home" />
                </div>
                <div>
                    <img src={itemsUrl} alt="items" />
                </div>
                <div>
                    <img src={toyosUrl} alt="toyos" />
                </div>
                <div>
                    <img src={bodyPartsUrl} alt="body parts" />
                </div>
            </div>

            <div className="main-content-wrapper">
                <div>
                    <div>
                        <img src={mainImgUrl} alt="main" />
                    </div>

                    <TextCard />
                </div>

                <div>
                    <div>
                        <header>MY STUFF</header>
                        <img src={upIconUrl} alt="scroll up" />
                    </div>
                    <div>
                        <div>
                            <img src={fortifiedUrl} alt="fortified" />
                        </div>
                        <div>
                            <img src={angHuUrl} alt="ang hu" />
                        </div>
                        <div>
                            <img src={mizuchiUrl} alt="mizuchi" />
                        </div>
                        <div>
                            <img src={fortifiedUrl} alt="fortified" />
                        </div>
                        <div>
                            <img src={mizuchiUrl} alt="mizuchi" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="stripes-overlay">
                <img src={stripesUrl} alt="stripes" />
            </div>
        </main>
    )
}

export default Dock
