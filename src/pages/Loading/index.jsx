import React from 'react'
import './index.scss'
/* import iconOpenSea from './../../assets/icons/icon_opensea.png'
import openBtnUrl from './../assets/images/btn-metamask-2.png'
import openBtnUrlHover from './../assets/images/btn-metamask.png' */
/*  onMouseOver={} onMouseOut={}  */
import { isMobile } from 'react-device-detect'
import Nav from '../../components/Nav'

/* function mouseOver() {
    document.getElementById('open-btn').src = openBtnUrlHover
}

function mouseOut() {
    document.getElementById('open-btn').src = openBtnUrl
}

function redirect() {
    window.open('https://opensea.io/collection/toyo-first-9', '_blank').focus()
} */

export default function Loading() {
    const path = window.location.pathname

    return (
        <main className="main">
            <Nav />
            <div className="main-wrapper-login">
                <div className="main-login">
                    <div className="login-label">
                        {isMobile ? (
                            <p className="linking">
                                THIS TERMINAL HAS NO GRANTED ACCESS. <br />
                                TRY AGAIN USING A P.C. TERMINAL.
                            </p>
                        ) : (
                            <>
                                {path === '/items' ? (
                                    <>
                                        <p className="linking">
                                            PLEASE WAIT, WE ARE SEARCHING FOR YOUR ITEMS
                                        </p>
                                    </>
                                ) : (
                                    <p className="linking">
                                        WILD TOYOS ATTACKED OUR LIVE LINK IN
                                        SIMULATION H64. <br />
                                        WE WILL BE BACK ASAP.
                                    </p>
                                )}
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
