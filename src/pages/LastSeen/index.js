import React from 'react'
import BoxesCarousel from './components/BoxesCarousel'
import TextCard from '../../components/TextCard'
import CardContent from './components/CardContent'
import Nav from './components/Nav'
import './index.scss'

function LastSeen() {
    const charImgUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637934895/Toyo/haruko-page/skull_an6can.png'
    const titleBoxUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860885/Toyo/haruko-page/my-boxes-header_hl00ev.png'

    return (
        <main className="last-seen-wrapper">
            <div className="stripes-overlay"></div>
            <Nav />
            <div className="main-content-wrapper">
                <div className="item-showcase">
                    <div>
                        <img
                            className="main-img-showcase"
                            src={charImgUrl}
                            alt="main img"
                        />
                    </div>

                    <TextCard
                        CardContent={CardContent}
                        heightInVh={45}
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

export default LastSeen
