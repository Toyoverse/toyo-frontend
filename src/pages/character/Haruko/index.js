import React from 'react'
import BoxesCarousel from './components/BoxesCarousel'
import Nav from './components/Nav'
import TextCard from '../../../components/TextCard'
import CardContent from './components/CardContent'
import './index.scss'

function Haruko() {
    const mainImgUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860899/Toyo/haruko-page/haruko_iwz559.png'
    const titleBoxUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860885/Toyo/haruko-page/my-boxes-header_hl00ev.png'

    return (
        <main className="main-char-wrapper">
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

                    <TextCard
                        CardContent={CardContent}
                        heightInVh={70}
                        widthInVw={30}
                    />
                </div>
                <div className="my-stuff-wrapper">
                    <div>
                        <div className="top-section">
                            <img
                                className="title"
                                src={titleBoxUrl}
                                alt="title box"
                            />
                        </div>
                        <BoxesCarousel />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Haruko
