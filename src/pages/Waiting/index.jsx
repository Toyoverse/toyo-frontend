import React from 'react'
import './index.scss'
import iconMetamask from './../assets/images/metamask.png'
import openBtnUrl from './../assets/images/btn-metamask-2.png'
import openBtnUrlHover from './../assets/images/btn-metamask.png'
/*  onMouseOver={} onMouseOut={}  */
import { isMobile } from 'react-device-detect'
import Nav from '../../components/Nav'

function mouseOver() {
    document.getElementById('open-btn').src = openBtnUrlHover
}

function mouseOut() {
    document.getElementById('open-btn').src = openBtnUrl
}

export default function Login() {
    return (
        <main className="main">
            <Nav />
            <div className="main-wrapper-login">
                <div className="main-login">
                    <div className="login-label">
                        {isMobile ? (
                            <p className="linking">
                                for a better experience we restrict access to
                                desktop only
                            </p>
                        ) : (
                            <>
                                <p className="linking">
                                    OFFLINE, PLEASE TRY AGAIN LATER
                                </p>
                            </>
                        )}
                    </div>
                </div>
                <div className="noise-wrapper">
                    <div className="noise"></div>
                </div>
            </div>
        </main>
    )
}
