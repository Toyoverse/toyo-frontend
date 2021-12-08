import React from 'react'
import Header from './components/header'
import Toys from './../../components/toyBox'
import './index.scss'
import PropTypes from 'prop-types'

export default function ToysAndBoxes({ img, name, time }) {
    return (
        <div className="container remove" id="ToyosItemsOpen">
            <div className="centerToyos">
                <Header />
                <div className="toysContainer">
                    <Toys
                        name={name}
                        time={time}
                        img={img}
                    />
                    {/* <Toys
                        name="toyo futurustic name "
                        time="#342421"
                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png"
                    />
                    <Toys
                        name="toyo futurustic name "
                        time="#342421"
                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png"
                    />
                    <Toys
                        name="toyo futurustic name "
                        time="#342421"
                        img="https://res.cloudinary.com/groovin/image/upload/v1637826560/Toyo/img3_rfasor.png"
                    />
                    <Toys
                        name="toyo futurustic name "
                        time="#342421"
                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png"
                    />
                    <Toys
                        name="toyo futurustic name "
                        time="#342421"
                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png"
                    />
                    <Toys
                        name="toyo futurustic name "
                        time="#342421"
                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png"
                    />
                    <Toys
                        name="toyo futurustic name "
                        time="#342421"
                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png"
                    />
                    <Toys
                        name="toyo futurustic name "
                        time="#342421"
                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png"
                    />
                    <Toys
                        name="toyo futurustic name "
                        time="#342421"
                        img="https://res.cloudinary.com/groovin/image/upload/v1637826560/Toyo/img3_rfasor.png"
                    />
                    <Toys
                        name="toyo futurustic name "
                        time="#342421"
                        img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png"
                    /> */}
                </div>
            </div>
        </div>
    )
}

ToysAndBoxes.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}