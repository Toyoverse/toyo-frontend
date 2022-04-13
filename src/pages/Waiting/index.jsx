import React from 'react'
import './index.scss'
// import iconOpenSea from './../../assets/icons/icon_opensea.png'
// import openBtnUrl from './../assets/images/btn-metamask-2.png'
// import openBtnUrlHover from './../assets/images/btn-metamask.png'
/*  onMouseOver={} onMouseOut={}  */
import { isMobile } from 'react-device-detect'
import Nav from '../../components/Nav'

// function mouseOver() {
//     document.getElementById('open-btn').src = openBtnUrlHover
// }

// function mouseOut() {
//     document.getElementById('open-btn').src = openBtnUrl
// }

// function redirect() {
//     window.open('https://opensea.io/collection/toyo-first-9', '_blank').focus()
// }

// function redirectProfile() {
//     window.open('https://opensea.io/account', '_blank').focus()
// }

export default function Login() {
    // const path = window.location.pathname

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
                                {/* {path === '/items' ? (
                                    <>
                                        <p className="linking">
                                            WE HAVE LOOKED IN ALL POSSIBLY
                                            SIMULATIONS, <br />
                                            BUT YOU HAVE NO BOX TO DISPLAY.
                                        </p>
                                        <div
                                            className="btnContainer"
                                            onMouseOver={mouseOver}
                                            onMouseOut={mouseOut}
                                            id="btnContainer"
                                            onClick={redirect}
                                        >
                                            <img
                                                src={openBtnUrl}
                                                id="open-btn"
                                                className="open-btn"
                                                alt="Connect Metamask"
                                            />
                                            <div className="icon-name">
                                                <img
                                                    src={iconOpenSea}
                                                    className="metamask-logo"
                                                    alt="Metamask"
                                                />
                                                <p className="connect">
                                                    BUY ON OPENSEA
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) :  path === '/toyos' ? (
                                    <>
                                        <p className="linking">
                                            WILD TOYOS ATTACKED OUR LIVE LINK IN
                                            SIMULATION H64. <br />
                                            WE WILL BE BACK ASAP. IN THE MEANTIME YOU CAN VIEW YOUR TOYO ON OPENSEA.
                                        </p>
                                        <div
                                            className="btnContainer"
                                            onMouseOver={mouseOver}
                                            onMouseOut={mouseOut}
                                            id="btnContainer"
                                            onClick={redirectProfile}
                                        >
                                            <img
                                                src={openBtnUrl}
                                                id="open-btn"
                                                className="open-btn"
                                                alt="Connect Metamask"
                                            />
                                            <div className="icon-name">
                                                <img
                                                    src={iconOpenSea}
                                                    className="metamask-logo"
                                                    alt="Metamask"
                                                />
                                                <p className="connect">
                                                    VIEW IN OPENSEA
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : (               */}
                                    <p className="linking">
                                        SIMULATION H64 LIVE LINK: CONNECTED <br />
                                        TOYO HEARTBOND LINK: NOT FOUND <br />
                                        IT SEEMS YOU DON'T HAVE A LINK WITH A TOYO YET,
                                        {"YOU MIGHT FIND ONE AT "}
                                        <a
                                            href="https://opensea.io/collection/toyo-first-9"
                                            rel="noreferrer"
                                            target="_blank"
                                            style={{ color: 'white' }}
                                        >
                                            SIMULATION WH9
                                        </a>
                                    </p>
                              {/*   )} */}
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
