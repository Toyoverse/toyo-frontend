import React from 'react'
import SideBar from './components/sidebar'
import Header from './components/header'
import Toys from './components/toys'
import './index.scss'

export default function ToysAndBoxes() {
    return (
        <div>
            <div className="container">
                <div className="stripes-overlay"></div>
                <div className="sidebar">
                    <SideBar />
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
