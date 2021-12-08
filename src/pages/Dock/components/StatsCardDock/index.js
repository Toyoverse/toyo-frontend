import React from 'react'

import './index.scss'

import imgheader from './../../../../assets/header.png'

const TextCard = ({heightInVh, widthInVw, itemName, itemType, itemStatus }) => {
    const headerImg = imgheader
    const openBtnUrl =
    'https://res.cloudinary.com/groovin/image/upload/v1637780948/Toyo/open-button_xjrwoo.png'

    return (
        <div
            className="stats-card-wrapper"
            style={{ height: `${heightInVh}vh`, width: `${widthInVw}vw` }}
        >
            <div className="top-card2">
                <img className="menu-controls" src={headerImg} />
                <div className="card-content">

                    <div className="dock-text-section">
                        <div className="stats-header">
                            <div className="char-name">{itemName || 'loading'}</div>
                        </div>

                        <div className="stats-metadata1">
                            <div className="rarity">
                                <span className="prop">Type:</span>
                                <span className="val"> {itemType || 'loading'}</span>
                            </div>
                            <div className="level">
                                <span className="prop">Status:</span>
                                <span className="val"> {itemStatus || 'loading'}</span>
                            </div>
                        </div>
                        <div className="btnContainer">
                            <img src={openBtnUrl} className="open-btn" alt="open button" />
                        </div>
                    </div>
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
    itemName: String,
    itemType: String,
    itemStatus: String,
}

export default TextCard
