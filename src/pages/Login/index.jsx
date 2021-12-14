/* eslint-disable */
import React, { useEffect } from 'react'
import './index.scss'
import iconMetamask from './../assets/images/metamask.png'
import openBtnUrl from './../assets/images/btn-metamask-2.png'
import openBtnUrlHover from './../assets/images/btn-metamask.png'
/*  onMouseOver={} onMouseOut={}  */
import { isMobile } from 'react-device-detect'
import * as metamaskConnect from './../../middleware/metamaskConnect'
import * as web3Connect from './../../middleware/web3Connect'
import { useHistory } from 'react-router-dom'

import midle from './../../middleware/parts'

import { useDispatch } from 'react-redux'
import {
    setWalletAccount,
    setChainId,
    setContracts,
} from './../../redux/blockchain/index'

export default function Login() {
    const dispatch = useDispatch()
    const history = useHistory()

    function mouseOver() {
        document.getElementById('open-btn').src = openBtnUrlHover
    }

    function mouseOut() {
        document.getElementById('open-btn').src = openBtnUrl
    }

    async function connectMetaMask() {
        let returnConnect = await web3Connect.web3App()
        let path = `/items`
        //console.log('teste', window.ethereum)
        if (returnConnect == true) {
            dispatch(setWalletAccount(web3Connect.getAccount()))
            dispatch(setChainId(web3Connect.getValidNetwork().ChainId))
            history.push(path)
        }
    }

    useEffect(async () => {
        await metamaskConnect.isMetaMaskInstalled()
    }, [])

    return (

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
                            <p className="linking">
                                LINKING WH9 HUMAN TO SIMULATION H64...
                            </p>
                            <div
                                className="btnContainer"
                                onMouseOver={mouseOver}
                                onMouseOut={mouseOut}
                                id="btnContainer"
                                onClick={connectMetaMask}
                            >
                                <img
                                    src={openBtnUrl}
                                    id="open-btn"
                                    className="open-btn"
                                    alt="Connect Metamask"
                                />
                                <div className="icon-name">
                                    <img
                                        src={iconMetamask}
                                        className="metamask-logo"
                                        alt="Metamask"
                                    />
                                    <p className="connect">CONNECT METAMASK</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="noise-wrapper">
                <div className="noise"></div>
            </div>
        </div>
    )
}
