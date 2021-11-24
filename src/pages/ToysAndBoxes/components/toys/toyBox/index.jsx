import './index.scss'
import React from 'react'
import PropTypes from 'prop-types'
import BoxHeader from '../../../../../assets/Group6.svg'

export default function ToyBox({ img, name, time }) {
    return (
        <div className={'toyBox'}>
            <div className={'head'}>
                <img src={BoxHeader} alt="" />
            </div>
            <div className={'image'}>
                <img src={img} alt="" />
            </div>
            <div className={'info'}>
                <p className={'name'}>{name}</p>
                <p className={'time'}>{time}</p>
            </div>
        </div>
    )
}

ToyBox.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}
