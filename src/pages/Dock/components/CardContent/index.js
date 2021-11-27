import React from 'react'

import './index.scss'

function CardContent() {
    const openBtnUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637780948/Toyo/open-button_xjrwoo.png'
    return (
        <div className="dock-text-section">
            <header>Morbi tincidunt varius lectus id feugiat.</header>
            <p>
                Nullam tincidunt, orci vel interdum cursus, nisi enim egestas
                lacus, ac lobortis odio neque in dui. Curabitur placerat, purus
                in consectetur pellentesque, lorem erat vehicula neque, in
                accumsan lectus leo nec mauris. Duis ut sem metus. Nulla sem
                sem, commodo ut viverra id, hendrerit vel est. Fusce blandit
                tellus at quam convallis, sed molestie ante volutpat. Fusce
                vehicula ligula vitae odio tempus maximus. Praesent dapibus
                pretium nulla sed pellentesque.
            </p>
            <img src={openBtnUrl} className="open-btn" alt="open button" />
        </div>
    )
}

export default CardContent
