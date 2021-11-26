import './index.scss'
import ShrinIcon from '../../../../assets/shrink.svg'
import React from 'react'
import itemHead from "./assets/title@3x.png"

export default function Header() {
    return (
        <div className="header" id="toyo-header">
            <div className="shrink">
                <img src={ShrinIcon} alt="" />
            </div>
            <div className="nav-content">
                <img src={itemHead} alt="" className="itemHead" />

                <ul>
                    <li>
                        <div className="nav-box">
                            <h6> Filters </h6>
                        </div>
                    </li>
                    <li>
                        <div className="nav-box no-bg">
                            <h6> Filters </h6>
                        </div>
                    </li>
                    <li>
                        <div className="nav-box no-bg">
                            <h6> Filters </h6>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex search">
                            <div className="input" contentEditable></div>
                            <div className="search">
                                <img
                                    src="https://res.cloudinary.com/reeelecs/image/upload/v1637781041/Shape_599_mhgcjw.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
