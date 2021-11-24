import React from 'react'
import './index.scss'

function Nav() {
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
    const selectedNavGlowUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637769744/Toyo/nav-item-glow_wkiqbj.png'

    return (
        <div className="nav-items">
            <div className="selected-nav-item-glow">
                <img src={selectedNavGlowUrl} alt="selected-nav-item glow" />
            </div>
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
                    <span
                        style={{
                            display: 'block',
                            marginTop: '-0.7em',
                        }}
                    >
                        PARTS
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Nav
