import React from 'react'
import Header from './components/header'
import Toys from './../../components/toyBox'
import Nav from './../../components/Nav'
import './index.scss'

export default function ToysAndBoxes() {
    return (
        <div>
            <div className="illusion"></div>
            <div className="container">
                <div className="nav-wrapper">
                    <Nav />
                </div>
                <div className="headerContainer">
                    <div className="header">
                        <Header />
                    </div>
                    <div className={'toysContainer'}>
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
                            img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png"
                        />
                        <Toys
                            name="toyo futurustic name "
                            time="#342421"
                            img="https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img2_vmkw71.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
