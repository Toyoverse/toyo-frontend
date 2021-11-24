import React from 'react'
import ItemsCarousel from './components/ItemsCarousel'
import TextCard from './components/TextCard'
import './index.scss'

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
    const upIconUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677739/Toyo/expand_3x_skeqf3.png'
    const selectedGlowUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637766092/Toyo/selected-glow_zkn2oe.png'

    return (
        <main className="main-wrapper">
            <div className="nav-items">
                <div className="logo">
                    <img src={logoUrl} alt="logo" />
                </div>
                <div className="nav-item">
                    <img src={homeUrl} alt="home" />
                    <span>HOME</span>
                </div>
                <div className="nav-item">
                    <img src={itemsUrl} alt="items" />
                    <span>ITEMS</span>
                </div>
                <div className="nav-item">
                    <img src={toyosUrl} alt="toyos" />
                    <span>TOYOS</span>
                </div>
                <div className="nav-item">
                    <img src={bodyPartsUrl} alt="body parts" />
                    <span>
                        BODY
                        <br />
                        PARTS
                    </span>
                </div>
            </div>
            <div className="main-content-wrapper">
                <div className="item-showcase">
                    <div>
                        <img
                            src={mainImgUrl}
                            alt="main img"
                            style={{
                                width: '300px',
                                height: '500px',
                                marginRight: '3em',
                            }}
                        />
                    </div>

                    <TextCard />
                </div>
                <div className="my-stuff-wrapper">
                    <div>
                        <div className="top-section">
                            <header className="title">MY STUFF</header>
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
