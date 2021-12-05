import React from 'react'

import './index.scss'

function CardContent() {
    const openBtnUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637780948/Toyo/open-button_xjrwoo.png'
    return (
        <div className="dock-text-section">
            <div className="stats-header">
                <div className="char-name">Haruko Box</div>
            </div>

            <div className="stats-metadata1">
                <div className="rarity">
                    <span className="prop">Type:</span>
                    <span className="val"> Normal</span>
                </div>
                <div className="level">
                    <span className="prop">Status:</span>
                    <span className="val"> Closed</span>
                </div>
            </div>
            <div className="btnContainer">
                <img src={openBtnUrl} className="open-btn" alt="open button" />
            </div>
        </div>
    )
}

export default CardContent
