/* eslint-disable max-lines */
import React from 'react'
import './index.scss'

/* import Folder from './../folder' */
import File from './../files'

function handleClick() {
    const path = window.location.pathname
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

function ItemsCarousel() {
    const iconLeftUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637684965/Toyo/arrow-left_z3zj6j.png'
    const iconRightUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637684965/Toyo/arrow-right_vfwnu0.png'
    const titleBoxUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860885/Toyo/haruko-page/my-boxes-header_hl00ev.png'
    const upIconUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677739/Toyo/expand_3x_skeqf3.png'

    return (
        <div className="carousel-out">
            <div>
                <div className="top-section">
                    <img className="title" src={titleBoxUrl} alt="title box" />
                    <img
                        src={upIconUrl}
                        alt="scroll up"
                        className="scroll-icon"
                        onClick={handleClick}
                    />
                </div>
                {/* <div className="items-carousel">
                    <img
                        className="nav-icon"
                        src={iconLeftUrl}
                        alt="icon left"
                    />

                    <div className="items-carousel">
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                    </div>

                    <img
                        className="nav-icon"
                        src={iconRightUrl}
                        alt="icon right"
                    />
                </div> */}
                <div className="externo">
                    <img
                        className="nav-icon"
                        src={iconLeftUrl}
                        onClick={handleClickLeft}
                        alt="icon left"
                    />
                    <div className="row" id="caroussel">
                        <div className="row__inner">
                            <div className="tile">
                                <div className="tile__media">
                                    <File
                                        name="toyo"
                                        identification="#696969"
                                        img="https://res.cloudinary.com/groovin/image/upload/v1637826560/Toyo/img3_rfasor.png"
                                    />
                                </div>
                                <div className="tile__details">
                                    <div className="tile__title">
                                        {/* Top Gear */}
                                    </div>
                                </div>
                            </div>

                            <div className="tile">
                                <div className="tile__media">
                                    <File
                                        name="toyo"
                                        identification="#696969"
                                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png"
                                    />
                                </div>
                                <div className="tile__details">
                                    <div className="tile__title">
                                        {/* Top Gear */}
                                    </div>
                                </div>
                            </div>
                            <div className="tile">
                                <div className="tile__media">
                                    <File
                                        name="toyo"
                                        identification="#696969"
                                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png"
                                    />
                                </div>
                                <div className="tile__details">
                                    <div className="tile__title">
                                        {/* Top Gear */}
                                    </div>
                                </div>
                            </div>
                            <div className="tile">
                                <div className="tile__media">
                                    <File
                                        name="toyo"
                                        identification="#696969"
                                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png"
                                    />
                                </div>
                                <div className="tile__details">
                                    <div className="tile__title">
                                        {/* Top Gear */}
                                    </div>
                                </div>
                            </div>
                            <div className="tile">
                                <div className="tile__media">
                                    <File
                                        name="toyo"
                                        identification="#696969"
                                        img="https://res.cloudinary.com/groovin/image/upload/v1637826560/Toyo/img3_rfasor.png"
                                    />
                                </div>
                                <div className="tile__details">
                                    <div className="tile__title">
                                        {/* Top Gear */}
                                    </div>
                                </div>
                            </div>
                            <div className="tile">
                                <div className="tile__media">
                                    <File
                                        name="toyo"
                                        identification="#696969"
                                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png"
                                    />
                                </div>
                                <div className="tile__details">
                                    <div className="tile__title">
                                        {/* Top Gear */}
                                    </div>
                                </div>
                            </div>
                            <div className="tile">
                                <div className="tile__media">
                                    <File
                                        name="toyo"
                                        identification="#696969"
                                        img="https://res.cloudinary.com/groovin/image/upload/v1637826560/Toyo/img3_rfasor.png"
                                    />
                                </div>
                                <div className="tile__details">
                                    <div className="tile__title">
                                        {/* Top Gear */}
                                    </div>
                                </div>
                            </div>
                            <div className="tile">
                                <div className="tile__media">
                                    <File
                                        name="toyo"
                                        identification="#696969"
                                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png"
                                    />
                                </div>
                                <div className="tile__details">
                                    <div className="tile__title">
                                        {/* Top Gear */}
                                    </div>
                                </div>
                            </div>
                            <div className="tile">
                                <div className="tile__media">
                                    <File
                                        name="toyo"
                                        identification="#696969"
                                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png"
                                    />
                                </div>
                                <div className="tile__details">
                                    <div className="tile__title">
                                        {/* Top Gear */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="nav-icon"
                        src={iconRightUrl}
                        onClick={handleClickRight}
                        alt="icon right"
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemsCarousel
