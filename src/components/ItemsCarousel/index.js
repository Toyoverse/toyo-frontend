/* eslint-disable max-lines */
/* eslint-disable */
import React, { useEffect, useState } from 'react'
import './index.scss'
import api from './../../services/api'
import File from './../files'
import toyoHeader from './my-toyos.png'

import { useDispatch, useSelector } from 'react-redux'
import { boxClicked } from './../../redux/boxToyos/index'
import { toyoClicked } from './../../redux/toyos/index'

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

function changeItem() {
    const Items = document.getElementById("boxItem")
    const Infos = document.getElementById("boxInfos")
    if(Items && Infos) {
        Items.classList.add("blink");
        Infos.classList.add("blink");
          setTimeout(() => {
            Items.classList.remove("blink");
            Infos.classList.remove("blink");
          }, 400);
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
        await getDatabase()

        const interval = setInterval(async () => {
          await getDatabase()
        }, 60000);

        return () => clearInterval(interval);
    }, [])

    async function getDatabase() {
        if(localStorage.getItem("systemPause") == 0) {
            path = window.location.pathname
            if(path == '/items') {
                await api
                    .get('/GetBoxes', {
                        params: {
                            walletAddress: blockchain.account,
                            chainId: parseInt(blockchain.chainId, 16),
                        },
                    })
                    .then(response => setFiles(response.data))
                    .catch(error => {
                        console.error(error)
                    })
            } else if (path == '/parts') {
                await api
                    .get('/getParts', {
                        params: {
                            walletAddress: blockchain.account,
                            chainId: parseInt(blockchain.chainId, 16),
                        },
                    })
                    .then(response => setFiles(response.data))
                    .catch(error => {
                        console.error(error)
                    })
            } else if (path == '/toyos') {
                await api
                    .get('/getToyos', {
                        params: {
                            walletAddress: blockchain.account,
                            chainId: parseInt(blockchain.chainId, 16),
                        },
                    })
                    .then(response => {
                        setFiles(response.data)
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        }
    }

    if (path == "/items" || path == "/") {
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
                                                key={obj.tokenId}
                                                className="tile"
                                                onClick={() => {
                                                    dispatch(
                                                        boxClicked({
                                                            id: obj.tokenId,
                                                            name: obj.name,
                                                            typeId: obj.typeId,
                                                        }),
                                                    )
                                                    changeItem()
                                                    }
                                                }
                                            >
                                                <div className="tile__media">
                                                    <File
                                                        name={
                                                            obj.name
                                                                .split(' - ')
                                                                .pop()
                                                                .split('Seed')[0]
                                                                .replace('Open', '') ||
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
                                    src={toyoHeader}
                                    alt="title box"
                                />
                                {/* <img
                                    src={upIconUrl}
                                    alt="scroll up"
                                    className="scroll-icon"
                                    onClick={handleClick}
                                /> */}
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
                                                key={obj.tokenId}
                                                className="tile"
                                                onClick={() =>
                                                    dispatch(
                                                        toyoClicked({
                                                            id: obj.tokenId,
                                                            name: obj.name,
                                                            thumb: obj.thumb,
                                                            animation: obj.animation,
                                                            changeValue: obj.changeValue
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
                                                            `${window.location.origin}/iconsItems/toyos/${obj.name
                                                                .trim()
                                                                .toLowerCase()
                                                                .replace(" ", "_")}.png`
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
                                                key={obj.tokenId}
                                                className="tile"
                                                onClick={() =>
                                                    dispatch(
                                                        boxClicked({
                                                            id: obj.tokenId,
                                                            name: obj.name,
                                                            typeId: obj.typeId,
                                                        }),
                                                    )
                                                }
                                            >
                                                <div className="tile__media">
                                                    <File
                                                        name={
                                                            obj.name
                                                            .split(" - ")
                                                            .pop()
                                                            .split("Head")[0]
                                                            .trim() ||
                                                            'LOADING'
                                                        }
                                                        id={obj.tokenId}
                                                        img={
                                                            `${window.location.origin}/iconsItems/${obj.name
                                                            .split(' - ')
                                                            .pop()
                                                            .split('Head')[0]
                                                            .toLowerCase()
                                                            .trim()
                                                            .replace(" ", "_")}.png`
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
