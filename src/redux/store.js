/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit'
import boxReducer from './boxToyos/index'
import loginReducer from './login/index'
import blockchainReducer from './blockchain/index'

const store = configureStore({
    reducer: {
        box: boxReducer,
        login: loginReducer,
        blockchain: blockchainReducer
    },
})

export default store