import React from 'react'
import Header from './components/header'
import Toys from './components/toys'
import Nav from '../../components/Nav'
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
                        <Toys />
                    </div>
                </div>
            </div>
        </div>
    )
}
