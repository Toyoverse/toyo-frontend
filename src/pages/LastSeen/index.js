import React from 'react'
import BoxesCarousel from './../../components/ItemsCarousel'
import TextCard from '../../components/TextCard'
import CardContent from './components/CardContent'
import Nav from './../../components/Nav'

import Header from './../ToysAndBoxes/components/header'
import Toys from './../../components/toyBox'

import './index.scss'

function LastSeen() {
    const charImgUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637934895/Toyo/haruko-page/skull_an6can.png'

    return (
        <main className="last-seen-wrapper">
            <div className="stripes-overlay"></div>
            <Nav />
            <div className="main-content-wrapper">
                <div className="item-showcase">
                    <div>
                        <img
                            className="main-img-showcase"
                            src={charImgUrl}
                            alt="main img"
                        />
                    </div>

                    <TextCard
                        CardContent={CardContent}
                        heightInVh={45}
                        widthInVw={30}
                    />
                </div>
                <BoxesCarousel />
            </div>
            <div id="ToyosItemsOpen" className="ToyosItemsOpen remove">
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
        </main>
    )
}

export default LastSeen
