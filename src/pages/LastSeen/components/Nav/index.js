import React from 'react'
import './index.scss'

function Nav() {
    const logoUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677739/Toyo/Logo_3x_swwtrs.png'
    const homeUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860885/Toyo/haruko-page/haruko-home-nav_jvvbi3.png'
    const boxesUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860885/Toyo/haruko-page/haruko-boxes-nav_yo0kdb.png'
    const toyosUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860885/Toyo/haruko-page/haruko-toyos-nav_sohg5w.png'
    const bodyPartsUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860885/Toyo/haruko-page/haruko-parts-nav_egfagf.png'
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
                <img src={boxesUrl} alt="items" />
                <span>BOXES</span>
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
