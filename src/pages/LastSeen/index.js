import React from 'react'
import BoxesCarousel from './../../components/ItemsCarousel'
import TextCard from '../../components/StatsCard'
import CardContent from './components/CardContentStats'
import Nav from './../../components/Nav'
import Items from './../ToysAndBoxes/ToysAndBoxes'

import './index.scss'

function LastSeen() {
    const charImgUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637934895/Toyo/haruko-page/skull_an6can.png'

    const fileName = 'Toyo'
    const fileId = '#696969'
    const fileImg = 'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png'

    return (
        <main className="last-seen-wrapper">
            <div id="img-background" className="img-background"></div>
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
                        heightInVh={55}
                        widthInVw={30}
                    />
                </div>
                <BoxesCarousel
                    fileName={fileName}
                    fileId={fileId}
                    fileImg={fileImg}
                />
            </div>
            <Items />
        </main>
    )
}

export default LastSeen
