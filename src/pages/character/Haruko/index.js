import React from 'react'
import ItemsCarousel from './components/ItemsCarousel'
import TextCard from './components/TextCard'
import Nav from '../../../components/Nav'
import './index.scss'

function Haruko() {
    const mainImgUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860899/Toyo/haruko-page/haruko_iwz559.png'
    const upIconUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677739/Toyo/expand_3x_skeqf3.png'
    const selectedGlowUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637766092/Toyo/selected-glow_zkn2oe.png'
    const titleBoxUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860885/Toyo/haruko-page/my-boxes-header_hl00ev.png'

    return (
        <main className="main-wrapper">
            <div className="stripes-overlay"></div>
            <Nav />
            <div className="main-content-wrapper">
                <div className="item-showcase">
                    <div>
                        <img
                            className="main-img-showcase"
                            src={mainImgUrl}
                            alt="main img"
                        />
                    </div>

                    <TextCard />
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

export default Haruko
