import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './main/index'

export default configureStore({
    reducer: {
        main: mainReducer,
    },
})
