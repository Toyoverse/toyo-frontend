import './index.scss'
import ToyBox from './toyBox/index'
import React from 'react'

export default function Toys() {
    const toys = [
        'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png',
        'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png',
        'https://res.cloudinary.com/groovin/image/upload/v1637826560/Toyo/img3_rfasor.png',
        'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png',
        'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png',
        'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png',
        'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png',
        'https://res.cloudinary.com/groovin/image/upload/v1637826560/Toyo/img3_rfasor.png',
        'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png',
        'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png',
        'https://res.cloudinary.com/groovin/image/upload/v1637826560/Toyo/img3_rfasor.png',
        'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png',
        'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png',
    ]

    return (
        <div className="toys">
            {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12,
                //  34, 23
            ].map((elem, index) => {
                return (
                    <ToyBox
                        key={index}
                        img={toys[index ? index : 0]}
                        name="toyo futurustic name "
                        time="8:43:21"
                    />
                )
            })}
        </div>
    )
}
