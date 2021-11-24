import './index.scss'
import ShrinIcon from '../../../../assets/shrink.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import React from 'react'

export default function Header() {
    return (
        <div className="header">
            <div className="shrink">
                <img src={ShrinIcon} alt="" />
            </div>
            <div className="nav-content">
                <div className="nav-box red-bg">My Items</div>

                <ul>
                    <li>
                        <div className="nav-box white-bg"> Filters </div>
                    </li>
                    <li>
                        <div className="nav-box no-bg"> Filters</div>
                    </li>
                    <li>
                        <div className="nav-box no-bg"> Filters</div>
                    </li>
                    <li>
                        <div className="nav-box  search-box no-bg">
                            <input type="text" placeholder="search here" />
                            <div className="iconHolder">
                                <AiOutlineSearch color="white" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
