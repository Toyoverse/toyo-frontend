/* eslint-disable */
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

    const reduxVariable = true
    return (
        <>
            {reduxVariable ? (
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
                        <img
                            src={heartIconUrl}
                            className="heart-icon"
                            alt="heart"
                        />
                    </div>

                    <div className="stats-type2-wrapper2">
                        <div className="column-wrapper">
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">Head:</div>
                                <div className="stat-perc-prop2">
                                    Strength +5
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">L. Arm:</div>
                                <div className="stat-perc-prop2">
                                    Resistance +4
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">R. Arm:</div>
                                <div className="stat-perc-prop2">
                                    Cyber Force +4
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">L. Hand:</div>
                                <div className="stat-perc-prop2">
                                    Resistance +4
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">
                                    R. Hand:
                                </div>
                                <div className="stat-perc-prop2">
                                    Cyber Force +4
                                </div>
                            </div>
                        </div>

                        <div className="column-wrapper">
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">L. Leg:</div>
                                <div className="stat-perc-prop2">
                                    Resistance +4
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">R. Leg:</div>
                                <div className="stat-perc-prop2">
                                    Cyber Force +4
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">L. Foot:</div>
                                <div className="stat-perc-prop2">
                                    Resistance +4
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2">
                                    R. Foot:
                                </div>
                                <div className="stat-perc-prop2">
                                    Cyber Force +4
                                </div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop2 spacerVertical">
                                    manobra
                                </div>
                                <div className="stat-perc-prop2 spacerVertical">
                                    estrategica
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
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
                        <img
                            src={heartIconUrl}
                            className="heart-icon"
                            alt="heart"
                        />
                    </div>

                    <img
                        className="best-stats"
                        src={bestStatsUrl}
                        alt="best stats"
                    />

                    <div className="stats-type1-wrapper">
                        <div className="stats-type1">
                            <div className="circle">
                                <span>45</span>
                            </div>
                            <div className="circle">
                                <span>65</span>
                            </div>
                            <div className="circle">
                                <span>115</span>
                            </div>
                            <div className="circle">
                                <span>68</span>
                            </div>
                        </div>
                        <div className="stats-type-desc">
                            <div>Cyber Force</div>
                            <div>Techinique</div>
                            <div>Agility</div>
                            <div>Stamina</div>
                        </div>
                    </div>

                    <div className="stats-type2-wrapper">
                        <div className="column-wrapper">
                            <div className="stat-perc">
                                <div className="stat-perc-prop">Vitality</div>
                                <img
                                    className="stat-progress-bar"
                                    alt="progress"
                                    src={progrBarUrl}
                                />
                                <div className="perc">85%</div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop">Strength</div>
                                <div className="stat-progress-bar"></div>
                                <div className="perc">85%</div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop">Resistance</div>
                                <div className="stat-progress-bar"></div>
                                <div className="perc">85%</div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop">
                                    Cyber Force
                                </div>
                                <div className="stat-progress-bar"></div>
                                <div className="perc">85%</div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop">Resilience</div>
                                <div className="stat-progress-bar"></div>
                                <div className="perc">85%</div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop">Precision</div>
                                <div className="stat-progress-bar"></div>
                                <div className="perc">85%</div>
                            </div>
                        </div>
                        <div className="column-wrapper">
                            <div className="stat-perc">
                                <div className="stat-perc-prop">Techinique</div>
                                <div className="stat-progress-bar"></div>
                                <div className="perc">85%</div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop">Analysis</div>
                                <div className="stat-progress-bar"></div>
                                <div className="perc">85%</div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop">Speed</div>
                                <div className="stat-progress-bar"></div>
                                <div className="perc">85%</div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop">Agility</div>
                                <div className="stat-progress-bar"></div>
                                <div className="perc">85%</div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop">Stamina</div>
                                <div className="stat-progress-bar"></div>
                                <div className="perc">85%</div>
                            </div>
                            <div className="stat-perc">
                                <div className="stat-perc-prop">Luck</div>
                                <div className="stat-progress-bar"></div>
                                <div className="perc">85%</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default CardContent
