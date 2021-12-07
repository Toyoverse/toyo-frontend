import React from 'react'
import BoxesCarousel from './../../../components/ItemsCarousel'
import Nav from './../../../components/Nav'
import TextCard from './components/StatsCard'
import CardContent from './components/CardContent'
import './index.scss'

function Haruko() {
    const mainImgUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860899/Toyo/haruko-page/haruko_iwz559.png'
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
                        heightInVh={55}
                        widthInVw={30}
                    />
                </div>
                <BoxesCarousel />
            </div>
        </main>
    )
}

export default Haruko
