import React from 'react'

import './index.scss'

function CardContent() {
    const doubleLinesUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637919102/Toyo/haruko-page/double-lines_lygeaq.png'
    const heartIconUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637918794/Toyo/haruko-page/heart-icon_rnnnu3.png'
    return (
        <>
            <div className="stats-header">
                <div className="char-name">Haruko</div>
            </div>

            <div className="stats-metadata">
                <div className="rarity">
                    <span className="prop">Rarity:</span>
                    <span className="val"> prototype</span>
                </div>
                <div className="level">
                    <span className="prop">Level:</span>
                    <span className="val"> v8</span>
                </div>
                <div className="char-id">
                    <span className="val">id # 2078</span>
                </div>
            </div>

            <div className="stats-desc-header">
                <img
                    src={doubleLinesUrl}
                    className="stats-double-lines"
                    alt="double lines"
                />
                <span className="val">Heart&nbsp;Bond&nbsp;198</span>
                <img src={heartIconUrl} className="heart-icon" alt="heart" />
            </div>

            <div className="partStats" >
                <div className="line">
                    <text id="verticalSpacer"></text>
                    <text id="head">Techinique +8%</text>
                </div>
                <div className="line">
                    <text id="lArm">Techinique +8%</text>
                    <text id="rArm">Techinique +8%</text>
                </div>
                <div className="line">
                    <text id="lHand">Techinique +8%</text>
                    <text id="rHand">Techinique +8%</text>
                </div>

                <div className="line">
                    <text id="lLeg">Techinique +8%</text>
                    <text id="rLeg">Techinique +8%</text>
                </div>
                <div className="line">
                    <text id="lFoot">Techinique +8%</text>
                    <text id="rFoot">Techinique +8%</text>
                </div>

            </div>

        </>
    )
}

export default CardContent
