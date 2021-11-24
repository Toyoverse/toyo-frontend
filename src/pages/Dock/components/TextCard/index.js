import React from 'react'

import './index.scss'

function TextCard() {
    const openBtnUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637683322/Toyo/open-btn_y4mdep.png'
    return (
        <div className="main-wrapper">
            <div className="card-wrapper">
                <div className="top-card">
                    <div className="top-panel"></div>
                    <div className="text-section">
                        <header>
                            Morbi tincidunt varius lectus id feugiat.
                        </header>
                        <p>
                            Nullam tincidunt, orci vel interdum cursus, nisi
                            enim
                            <br />
                            egestas lacus, ac lobortis odio neque in dui.
                            Curabitur
                            <br />
                            placerat, purus in consectetur pellentesque, lorem
                            erat
                            <br />
                            vehicula neque, in accumsan lectus leo nec mauris.
                            Duis
                            <br />
                            ut sem metus. Nulla sem sem, commodo ut viverra id,
                            <br />
                            hendrerit vel est. Fusce blandit tellus at quam
                            <br />
                            convallis, sed molestie ante volutpat. Fusce
                            vehicula
                            <br />
                            ligula vitae odio tempus maximus. Praesent dapibus
                            <br />
                            pretium nulla sed pellentesque.
                        </p>
                    </div>
                    <div className="open-btn">
                        <img src={openBtnUrl} alt="open button" />
                        <span>open</span>
                    </div>
                </div>
                <div className="back-card"></div>
            </div>
        </div>
    )
}

export default TextCard
