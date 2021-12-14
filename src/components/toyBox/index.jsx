import './index.scss'
import React from 'react'
import PropTypes from 'prop-types'
import BoxHeader from './../../assets/header.png'

export default function ToyBox({ img, name, time }) {
    return (
        <div className="toyBox">
            <div className={'head'}>
                <img src={BoxHeader} alt="" />
            </div>
            <img src={img} alt="" className="image" />
            <div className={'info'}>
                <div className={'name'}>{name}</div>
                <div className="time">#{time}</div>
            </div>
        </div>
    )
}

ToyBox.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}
