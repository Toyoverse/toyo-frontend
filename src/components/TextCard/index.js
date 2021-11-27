import React from 'react'

import './index.scss'

const TextCard = ({ CardContent, heightInVh, widthInVw }) => {
    // eslint-disable-next-line no-console
    console.log('received height width', heightInVh, widthInVw)

    return (
        <div
            className="stats-card-wrapper"
            style={{ height: `${heightInVh}vh`, width: `${widthInVw}vw` }}
        >
            <div className="top-card">
                <div className="menu-controls"></div>
                <div className="card-content">
                    <CardContent />
                </div>
            </div>
            <div className="back-card">
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
