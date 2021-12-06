import React from 'react'
import './index.scss'
import iconMetamask from './../assets/images/metamask.png';
import openBtnUrl from './../assets/images/btn-metamask-2.png'
import openBtnUrlHover from './../assets/images/btn-metamask.png'
/*  onMouseOver={} onMouseOut={}  */

function mouseOver() {
    document.getElementById("open-btn").src = openBtnUrlHover
}

function mouseOut() {
    document.getElementById("open-btn").src = openBtnUrl
}

export default function Login() {
    return (
        <div className="main-login">
            <div className="login-label">
                <p className="linking">LINKING WH9 HUMAN TO SIMULATION H64...</p>
                <div className="btnContainer" onMouseOver={mouseOver} onMouseOut={mouseOut}>
                    <img src={openBtnUrl} id="open-btn" className="open-btn" alt="Connect Metamask" />
                    <div className="icon-name">
                        <img src={iconMetamask} className="metamask-logo" alt="Metamask" />
                        <p className="connect">CONNECT METAMASK</p>
                    </div>
                </div>
            </div>
        </div>
    )
}