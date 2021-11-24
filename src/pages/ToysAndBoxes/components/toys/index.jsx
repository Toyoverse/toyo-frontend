import './index.scss'
import ToyBox from './toyBox/index'
import React from 'react'

export default function Toys() {
    return (
        <div className="toys">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 34, 23].map(elem => {
                return (
                    <ToyBox
                        key={elem}
                        img="https://i.graphicmama.com/uploads/2019/4/5cb489633dae6-futuristic-robot-cartoon-vector-character.png"
                        name="toyo futurustic name "
                        time="8:43:21"
                    />
                )
            })}
        </div>
    )
}
