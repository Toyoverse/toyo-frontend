import './index.scss'
import ShrinIcon from '../../../../assets/shrink.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import React from 'react'

export default function Header() {
    const myItemsUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637844330/Toyo/my-items-header_wi1epg.png'

    return (
        <div className="header">
            <div className="shrink">
                <img src={ShrinIcon} alt="" />
            </div>
            <div className="nav-content">
                <img
                    className="nav-box red-bg"
                    src={myItemsUrl}
                    alt="my items"
                />

                <ul>
                    <li>
                        <div className="nav-box-filter white-bg"> Filters </div>
                    </li>
                    <li>
                        <div className="nav-box-filter no-bg"> Filters</div>
                    </li>
                    <li>
                        <div className="nav-box-filter no-bg"> Filters</div>
                    </li>
                    <li>
                        <div className="nav-box-search  search-box no-bg">
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
