import React from 'react'
import './index.scss'

function ItemsCarousel() {
    const fortifiedUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677737/Toyo/boxes-5_3x_ctgics.png'
    const angHuUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677737/Toyo/boxes-3_3x_an4mwu.png'
    const mizuchiUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677738/Toyo/boxes_3x_ttyx7o.png'

    const iconLeftUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637684965/Toyo/arrow-left_z3zj6j.png'
    const iconRightUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637684965/Toyo/arrow-right_vfwnu0.png'

    return (
        <div className="items-carousel">
            <img
                src={iconLeftUrl}
                alt="icon left"
                style={{ width: '24px', height: '24px' }}
            />
            <div>
                <img src={fortifiedUrl} alt="fortified" />
            </div>
            <div>
                <img src={angHuUrl} alt="ang hu" />
            </div>
            <div>
                <img src={mizuchiUrl} alt="mizuchi" />
            </div>
            <div>
                <img src={fortifiedUrl} alt="fortified" />
            </div>
            <div>
                <img src={mizuchiUrl} alt="mizuchi" />
            </div>
            <img
                src={iconRightUrl}
                alt="icon right"
                style={{ width: '24px', height: '24px' }}
            />
        </div>
    )
}

export default ItemsCarousel
