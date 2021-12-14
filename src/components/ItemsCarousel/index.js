/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react'
import './index.scss'
import api from './../../services/api'
import File from './../files'

import { useDispatch } from 'react-redux'
import { boxClicked } from './../../redux/boxToyos/index'

import { useSelector } from 'react-redux'

import * as web3Connect from './../../middleware/web3Connect'

var path = window.location.pathname

function handleClick() {
    if (path == '/parts') {
        document
            .getElementById('ToyosItemsOpen')
            .classList.replace('remove', 'active')

        const bgImg = document.getElementById('img-background')

        if (bgImg.classList.contains('animationImgOut')) {
            document
                .getElementById('img-background')
                .classList.remove('animationImgOut')

            document
                .getElementById('img-background')
                .classList.add('animationImgIn')
        } else {
            document
                .getElementById('img-background')
                .classList.add('animationImgIn')
        }
    } else if (path == '/items') {
        document
            .getElementById('ToyosItemsOpen')
            .classList.replace('remove', 'active')

        const bgImg = document.getElementById('img-background')

        if (bgImg.classList.contains('animationImgOut')) {
            document
                .getElementById('img-background')
                .classList.remove('animationImgOut')

            document
                .getElementById('img-background')
                .classList.add('animationImgIn')
        } else {
            document
                .getElementById('img-background')
                .classList.add('animationImgIn')
        }
    }
}
function handleClickLeft() {
    const el = document.getElementById('caroussel')
    el.scrollLeft -= 240
}

function handleClickRight() {
    const el = document.getElementById('caroussel')
    el.scrollLeft += 240
}

const ItemsCarousel = () => {
    const dispatch = useDispatch()
    const [files, setFiles] = useState([])

    const blockchain = useSelector(state => state.blockchain)

    const iconLeftUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637684965/Toyo/arrow-left_z3zj6j.png'
    const iconRightUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637684965/Toyo/arrow-right_vfwnu0.png'
    const titleBoxUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860885/Toyo/haruko-page/my-boxes-header_hl00ev.png'
    const upIconUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677739/Toyo/expand_3x_skeqf3.png'
    const fileImg =
        'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png'

    useEffect(async () => {
        path = window.location.pathname
        console.log(path)
        if(path == '/items') {
            await api
                .get('/ToyoBox/getBoxes', {
                    params: {
                        walletAddress: blockchain.account,
                        chainId: parseInt(blockchain.chainId, 16),
                    },
                })
                .then(response => setFiles(response.data))
                .catch(error => {
                    console.log(error)
                })
        } else if (path == '/parts') {
            await api
                .get('/ToyoBox/getParts', {
                    params: {
                        walletAddress: blockchain.account,
                        chainId: parseInt(blockchain.chainId, 16),
                    },
                })
                .then(response => setFiles(response.data))
                .catch(error => {
                    console.log(error)
                })
        } else if (path == '/toyos') {
            await api
                .get('/ToyoBox/getToyos', {
                    params: {
                        walletAddress: blockchain.account,
                        chainId: parseInt(blockchain.chainId, 16),
                    },
                })
                .then(response => setFiles(response.data))
                .catch(error => {
                    console.log(error)
                })
        }
    })

    if (path == "/items") {
        return (
            <div className="carousel-out">
                <div>
                    {files.length > 0 ? (
                        <>
                            <div className="top-section">
                                <img
                                    className="title"
                                    src={titleBoxUrl}
                                    alt="title box"
                                />
                                <img
                                    src={upIconUrl}
                                    alt="scroll up"
                                    className="scroll-icon"
                                    onClick={handleClick}
                                />
                            </div>
                            <div className="externo">
                                <img
                                    className="nav-icon"
                                    src={iconLeftUrl}
                                    onClick={handleClickLeft}
                                    alt="icon left"
                                />
                                <div className="row" id="caroussel">
                                    <div className="row__inner">
                                        {files.map(obj => (
                                            <div
                                                className="tile"
                                                onClick={() =>
                                                    dispatch(
                                                        boxClicked({
                                                            id: obj.tokenId,
                                                            name: obj.name,
                                                        }),
                                                    )
                                                }
                                            >
                                                <div className="tile__media">
                                                    <File
                                                        name={
                                                            obj.name
                                                                .split(' - ')
                                                                .pop()
                                                                .split('Seed')[0] ||
                                                            'LOADING'
                                                        }
                                                        id={obj.tokenId}
                                                        img={
                                                            `${window.location.origin}/iconsItems/${obj.name
                                                            .split(' - ')
                                                            .pop()
                                                            .split('Seed')[0]
                                                            .trim()}.png`
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <img
                                    className="nav-icon"
                                    src={iconRightUrl}
                                    onClick={handleClickRight}
                                    alt="icon right"
                                />
                            </div>
                        </>
                    ) : (
                        <div className="spacer" />
                    )}
                </div>
            </div>
        )
    } else if (path == "/toyos") {
        return (
            <div className="carousel-out">
                <div>
                    {files.length > 0 ? (
                        <>
                            <div className="top-section">
                                <img
                                    className="title"
                                    src={titleBoxUrl}
                                    alt="title box"
                                />
                                <img
                                    src={upIconUrl}
                                    alt="scroll up"
                                    className="scroll-icon"
                                    onClick={handleClick}
                                />
                            </div>
                            <div className="externo">
                                <img
                                    className="nav-icon"
                                    src={iconLeftUrl}
                                    onClick={handleClickLeft}
                                    alt="icon left"
                                />
                                <div className="row" id="caroussel">
                                    <div className="row__inner">
                                        {files.map(obj => (
                                            <div
                                                className="tile"
                                                onClick={() =>
                                                    dispatch(
                                                        boxClicked({
                                                            id: obj.tokenId,
                                                            name: obj.name,
                                                        }),
                                                    )
                                                }
                                            >
                                                <div className="tile__media">
                                                    <File
                                                        name={
                                                            obj.name
                                                                .split(' - ')
                                                                .pop()
                                                                .split('Seed')[0] ||
                                                            'LOADING'
                                                        }
                                                        id={obj.tokenId}
                                                        img={
                                                            `${window.location.origin}/iconsItems/${obj.name
                                                            .split(' - ')
                                                            .pop()
                                                            .split('Seed')[0]
                                                            .trim()}.png`
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <img
                                    className="nav-icon"
                                    src={iconRightUrl}
                                    onClick={handleClickRight}
                                    alt="icon right"
                                />
                            </div>
                        </>
                    ) : (
                        <div className="spacer" />
                    )}
                </div>
            </div>
        )
    } else if (path == "/parts") {
        return (
            <div className="carousel-out">
                <div>
                    {files.length > 0 ? (
                        <>
                            <div className="top-section">
                                <img
                                    className="title"
                                    src={titleBoxUrl}
                                    alt="title box"
                                />
                                <img
                                    src={upIconUrl}
                                    alt="scroll up"
                                    className="scroll-icon"
                                    onClick={handleClick}
                                />
                            </div>
                            <div className="externo">
                                <img
                                    className="nav-icon"
                                    src={iconLeftUrl}
                                    onClick={handleClickLeft}
                                    alt="icon left"
                                />
                                <div className="row" id="caroussel">
                                    <div className="row__inner">
                                        {files.map(obj => (
                                            <div
                                                className="tile"
                                                onClick={() =>
                                                    dispatch(
                                                        boxClicked({
                                                            id: obj.tokenId,
                                                            name: obj.name,
                                                        }),
                                                    )
                                                }
                                            >
                                                <div className="tile__media">
                                                    <File
                                                        name={
                                                            obj.name
                                                                .split(' - ')
                                                                .pop()
                                                                .split('Seed')[0] ||
                                                            'LOADING'
                                                        }
                                                        id={obj.tokenId}
                                                        img={
                                                            `${window.location.origin}/iconsItems/${obj.name
                                                            .split(' - ')
                                                            .pop()
                                                            .split('Head')[0]
                                                            .toLowerCase()
                                                            .trim()}.png`
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <img
                                    className="nav-icon"
                                    src={iconRightUrl}
                                    onClick={handleClickRight}
                                    alt="icon right"
                                />
                            </div>
                        </>
                    ) : (
                        <div className="spacer" />
                    )}
                </div>
            </div>
        )
    }
}

export default ItemsCarousel
