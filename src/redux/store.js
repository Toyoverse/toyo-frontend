/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit'
import boxReducer from './boxToyos/index'
import blockchainReducer from './blockchain/index'

const store = configureStore({
    reducer: {
        box: boxReducer,
        blockchain: blockchainReducer
    },
})

export default store