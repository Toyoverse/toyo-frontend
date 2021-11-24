import SideBarImage from '../../../../assets/icons/icons@2x.png'
import './index.scss'
import React from 'react'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar_icons">
                <img src={SideBarImage} alt="" />
            </div>
        </div>
    )
}
