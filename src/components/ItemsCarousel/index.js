import React from 'react'
import './index.scss'

import Folder from './../folder'

function handleClick() {
    const path = window.location.pathname
    if (path == '/parts') {
        document
            .getElementById('ToyosItemsOpen')
            .classList.replace('remove', 'active')
    }
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
        <div className="my-stuff-wrapper">
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
                <div className="items-carousel">
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
                </div>
            </div>
        </div>
    )
}

export default ItemsCarousel
