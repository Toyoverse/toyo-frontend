/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit'
import boxReducer from './boxToyos/index'
import blockchainReducer from './blockchain/index'
import toyosReducer from './toyos/index'

const store = configureStore({
    reducer: {
        box: boxReducer,
        blockchain: blockchainReducer,
        toyo: toyosReducer
    },
})

export default store