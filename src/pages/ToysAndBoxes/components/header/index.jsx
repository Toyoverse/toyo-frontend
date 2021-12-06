import './index.scss'
import ShrinIcon from '../../../../assets/shrink.svg'
import React from 'react'
import itemHead from './assets/title@3x.png'

function handleClick() {
    const path = window.location.pathname
    if (path == '/parts') {
        document
            .getElementById('ToyosItemsOpen')
            .classList.replace('active', 'remove')

        document
            .getElementById('img-background')
            .classList.remove('animationImgIn')

        document
            .getElementById('img-background')
            .classList.add('animationImgOut')
    }
}

export default function Header() {
    return (
        <div className="header" id="toyo-header">
            <div className="shrink" onClick={handleClick}>
                <img src={ShrinIcon} alt="" />
            </div>
            <div className="nav-content">
                <img src={itemHead} alt="" className="itemHead" />
                <div className="wrapperFilter">
                    {/*  <div className="nav-box no-bg">
                        <h6> head </h6>
                    </div>

                    <div className="nav-box no-bg">
                        <h6> chest </h6>
                    </div>

                    <div className="nav-box no-bg">
                        <h6> arms/legs </h6>
                    </div> 

                    <div className="d-flex search">
                        <div className="input" contentEditable></div>
                        <div className="search">
                            <img
                                src="https://res.cloudinary.com/reeelecs/image/upload/v1637781041/Shape_599_mhgcjw.svg"
                                alt=""
                            />
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
    )
}
