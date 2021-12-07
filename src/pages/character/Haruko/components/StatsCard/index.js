import React from 'react'

import './index.scss'

import imgheader from './../../../../../assets/header.png'

const TextCard = ({ CardContent, heightInVh, widthInVw }) => {
    const headerImg = imgheader
    // 'https://res.cloudinary.com/groovin/image/upload/v1637685686/Toyo/top-panel_oyxcmc.png'
    
    return (
        <div
            className="stats-card-wrapper"
            style={{ height: `${heightInVh}vh`, width: `${widthInVw}vw` }}
        >
            <div className="top-card2">
                <img className="menu-controls" src={headerImg} />
                
                <div className="tabs">
                    <div className="outside-trapezoid-parts">
                        <div className="trapezoid" />
                        <span className="parts">
                            PARTS
                        </span>
                    </div>

                    <div className="outside-parallelogram-stats">
                        <div className="parallelogram active" />
                        <span className="stats">
                            STATS
                        </span>
                    </div>
                </div>

                <div className="card-content">
                    <CardContent />
                </div>
            </div>
            <div className="back-card2">
                <div className="back-content"></div>
            </div>
        </div>
    )}

TextCard.propTypes = {
    heightInVh: Number,
    widthInVw: Number,
    CardContent: React.Component,
}

export default TextCard
