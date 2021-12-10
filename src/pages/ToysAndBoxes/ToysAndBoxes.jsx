import React, { useEffect, useState } from 'react'
import Header from './components/header'
import Toys from './../../components/toyBox'
import './index.scss'
import PropTypes from 'prop-types'
import api from "./../../services/api"

export default function ToysAndBoxes({ img, name, time }) {
    const [files, setFiles] = useState([]);
    const path = window.location.pathname
    const fileImg = 'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png'

    if(path == '/parts') {

    } else if (path == '/toyos') {

    } else if (path == '/items') {

        useEffect(async () => {
            await api
                .get("/ToyoBox/getBoxes?walletAddress=0xa7a45c056c0622fabfbcce912294ae3294cdeb7a&chainId=8001")
                .then((response) => setFiles(response.data))
                .catch((error) => {
                    console.log(error);
                });
        });


        return (
            <div className="container remove" id="ToyosItemsOpen">
                <div className="centerToyos">
                    <Header />
                    <div className="toysContainer">
                        { files.map((obj) => (
                            <Toys
                                name={obj.name.split(" - ").pop().split("Seed")[0]}
                                time={obj.tokenId}
                                img={`${window.location.protocol}//${window.location.hostname}/BOXES/${obj.name.split(" - ").pop().split("Seed")[0].trim()}.png`}
                            />
                            ))                         
                         }
                        
                    </div>
                </div>
            </div>
        )
    }    
}

ToysAndBoxes.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}