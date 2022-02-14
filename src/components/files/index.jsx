/* eslint-disable */
import React from 'react'
import './index.scss'

import PropTypes from 'prop-types'

export default function Files({ img, name, id }) {
    
   /*  if(window.location.pathname == "/toyos") {
        return (        
            <div className="filePortrait2">
                <img src={img} className="fileImg" />
                <div className="fileTextsFiles">
                    <text className="fileText">{name}</text>
                    <text className="fileText">#{id}</text>
                </div>
            </div>
        )
    } else { */
        return (        
            <div className="filePortrait1">
                <img src={img} className="fileImg" />
                <div className="fileTextsFiles">
                    <text className="fileText">{name}</text>
                    <text className="fileText">#{id}</text>
                </div>
            </div>
        )
    //}
}

Files.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}
