import React from 'react'
import ItemsCarousel from './components/ItemsCarousel'
import TextCard from '../../components/TextCard'
import CardContent from './components/CardContent'
import Nav from '../../components/Nav'
import './index.scss'

function Dock() {
    const mainImgUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637679642/Toyo/main_cb0t4x.png'
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
                    <div className="text-card">
                        <TextCard
                            CardContent={CardContent}
                            heightInVh={45}
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
