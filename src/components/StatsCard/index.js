import React from 'react'

import './index.scss'

const TextCard = ({ CardContent, heightInVh, widthInVw }) => {
    const headerImg =
        'https://res.cloudinary.com/groovin/image/upload/v1637685686/Toyo/top-panel_oyxcmc.png'

    return (
        <div
            className="stats-card-wrapper"
            style={{ height: `${heightInVh}vh`, width: `${widthInVw}vw` }}
        >
            <div className="top-card2">
                <img className="menu-controls" src={headerImg} />
                <div className="card-content">
                    <CardContent />
                </div>
            </div>
            <div className="back-card2">
                <div className="back-content"></div>
            </div>
        </div>
    )
}

TextCard.propTypes = {
    heightInVh: Number,
    widthInVw: Number,
    CardContent: React.Component,
}

export default TextCard
