import React from 'react'
import './index.scss'

function ItemsCarousel() {
    const boxUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860892/Toyo/haruko-page/Group_72_jfjoka.png'
    const boxSelectedUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637860900/Toyo/haruko-page/boxes-selected_ralz7o.png'

    const iconLeftUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637684965/Toyo/arrow-left_z3zj6j.png'
    const iconRightUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637684965/Toyo/arrow-right_vfwnu0.png'

    return (
        <div className="boxes-carousel">
            <img
                className="nav-iconTemp"
                src={iconLeftUrl}
                alt="icon left"
                style={{ width: '24px', height: '24px' }}
            />
            <div>
                <img src={boxUrl} alt="box" />
            </div>
            <div>
                <img src={boxUrl} alt="box" />
            </div>
            <div>
                <img
                    src={boxSelectedUrl}
                    className="selected-box-item"
                    alt="box selected"
                />
            </div>
            <div>
                <img src={boxUrl} alt="box" />
            </div>
            <div>
                <img src={boxUrl} alt="box" />
            </div>
            <div>
                <img src={boxUrl} alt="box" />
            </div>
            <img
                className="nav-iconTemp"
                src={iconRightUrl}
                alt="icon right"
                style={{ width: '24px', height: '24px' }}
            />
        </div>
    )
}

export default ItemsCarousel
