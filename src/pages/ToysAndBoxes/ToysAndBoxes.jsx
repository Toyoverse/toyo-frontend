/* eslint-disable */
import React, { useEffect, useState } from 'react'
import Header from './components/header'
import Toys from './../../components/toyBox'
import './index.scss'
import PropTypes from 'prop-types'
import api from './../../services/api'
import { useSelector } from 'react-redux'

export default function ToysAndBoxes({ img, name, time }) {
    const blockchain = useSelector(state => state.blockchain)
    const [files, setFiles] = useState([])
    const path = window.location.pathname
    const fileImg =
        'https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png'


    useEffect(async () => {
        if (path == '/parts') {
            await api
                .get('/ToyoBox/getParts', {
                    params: {
                        walletAddress: blockchain.account,
                        chainId: parseInt(blockchain.chainId, 16),
                    },
                })
                .then(response => setFiles(response.data))
                .catch(error => {
                    console.log(error)
                })
        } else if (path == '/toyos') {
            await api
                .get('/ToyoBox/getToyos', {
                    params: {
                        walletAddress: blockchain.account,
                        chainId: parseInt(blockchain.chainId, 16),
                    },
                })
                .then(response => setFiles(response.data))
                .catch(error => {
                    console.log(error)
                })
        } else if (path == '/items') {
            await api
                .get('/ToyoBox/getBoxes', {
                    params: {
                        walletAddress: blockchain.account,
                        chainId: parseInt(blockchain.chainId, 16),
                    },
                })
                .then(response => setFiles(response.data))
                .catch(error => {
                    console.log(error)
                })
        }
    })    

    return (
        <div className="container remove" id="ToyosItemsOpen">
            <div className="centerToyos">
                <Header />
                <div className="toysContainer">
                    {files.map(obj => (
                        <Toys
                            name={
                                obj.name.split(' - ').pop().split('Seed')[0]
                            }
                            time={obj.tokenId}
                            img={`${window.location.origin}/iconsItems/${obj.name.split(' - ').pop().split('Seed')[0].trim()}.png`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

ToysAndBoxes.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}
