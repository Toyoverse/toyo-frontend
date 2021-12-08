import React from 'react'

import './index.scss'

function CardContent() {
    /*   const charIconUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637917431/Toyo/haruko-page/haruko-icon_zimt4f.png'
 */ const doubleLinesUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637919102/Toyo/haruko-page/double-lines_lygeaq.png'
    const heartIconUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637918794/Toyo/haruko-page/heart-icon_rnnnu3.png'
    const bestStatsUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637920611/Toyo/haruko-page/best-stats_gzu4km.png'
    const progrBarUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637926026/Toyo/haruko-page/stat-progr-bar_bjmrsg.png'
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

            <div className="stats-desc-header2">
                <img
                    src={doubleLinesUrl}
                    className="stats-double-lines"
                    alt="double lines"
                />
                <span className="val">Heart&nbsp;Bond&nbsp;198</span>
                <img src={heartIconUrl} className="heart-icon" alt="heart" />
            </div>

            <div className="stats-type2-wrapper2">
                <div className="column-wrapper">
                    <div className="stat-perc">
                        <div className="stat-perc-prop">Head:</div>
                        <div className="stat-perc-prop">Strength +5</div>
                        <div className="stat-progress-bar"></div>
                    </div>
                    <div className="stat-perc">
                        <div className="stat-perc-prop">Left Arm:</div>
                        <div className="stat-perc-prop">Resistance +4</div>
                        <div className="stat-progress-bar"></div>
                    </div>
                    <div className="stat-perc">
                        <div className="stat-perc-prop">Right Arm:</div>
                        <div className="stat-perc-prop">Cyber Force +4</div>
                        <div className="stat-progress-bar"></div>
                    </div>
                    <div className="stat-perc">
                        <div className="stat-perc-prop">Left Hand:</div>
                        <div className="stat-perc-prop">Resistance +4</div>
                        <div className="stat-progress-bar"></div>
                    </div>
                    <div className="stat-perc">
                        <div className="stat-perc-prop">Right Hand:</div>
                        <div className="stat-perc-prop">Cyber Force +4</div>
                        <div className="stat-progress-bar"></div>
                    </div>
                </div>

                <div className="column-wrapper">
                    <div className="stat-perc">
                        <div className="stat-perc-prop">Left Leg:</div>
                        <div className="stat-perc-prop">Resistance +4</div>
                        <div className="stat-progress-bar"></div>
                    </div>
                    <div className="stat-perc">
                        <div className="stat-perc-prop">Right Leg:</div>
                        <div className="stat-perc-prop">Cyber Force +4</div>
                        <div className="stat-progress-bar"></div>
                    </div>
                    <div className="stat-perc">
                        <div className="stat-perc-prop">Left Foot:</div>
                        <div className="stat-perc-prop">Resistance +4</div>
                        <div className="stat-progress-bar"></div>
                    </div>
                    <div className="stat-perc">
                        <div className="stat-perc-prop">Right Foot:</div>
                        <div className="stat-perc-prop">Cyber Force +4</div>
                        <div className="stat-progress-bar"></div>
                    </div>
                    <div className="stat-perc">
                        <div className="stat-perc-prop spacerVertical">manobra</div>
                        <div className="stat-perc-prop spacerVertical">estrategica</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardContent
