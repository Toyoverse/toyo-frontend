import React from 'react'

import './index.scss'

function TextCard() {
    const openBtnUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637683322/Toyo/open-btn_y4mdep.png'
    return (
        <div className="card-wrapper">
            {/* <img
                src={
                    'https://res.cloudinary.com/groovin/image/upload/v1637758826/Toyo/text-card_jaqdv2.png'
                }
                alt="card"
            /> */}
            {/* <div className="top-card"> */}
            <div className="text-section">
                <header>Morbi tincidunt varius lectus id feugiat.</header>
                <p>
                    Nullam tincidunt, orci vel interdum cursus, nisi enim
                    egestas lacus, ac lobortis odio neque in dui. Curabitur
                    placerat, purus in consectetur pellentesque, lorem erat
                    vehicula neque, in accumsan lectus leo nec mauris. Duis ut
                    sem metus. Nulla sem sem, commodo ut viverra id, hendrerit
                    vel est. Fusce blandit tellus at quam convallis, sed
                    molestie ante volutpat. Fusce vehicula ligula vitae odio
                    tempus maximus. Praesent dapibus pretium nulla sed
                    pellentesque.
                </p>
                <div className="open-btn">
                    <img src={openBtnUrl} alt="open button" />
                    <span>open</span>
                </div>
            </div>
            {/* </div> */}
            {/* <div className="back-card"></div> */}
        </div>
    )
}

export default TextCard
