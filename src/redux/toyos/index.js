/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit'

const stock = createSlice({
    name: 'stock',
    initialState: {
        idToyoClicked: 0,
        changeValue: false,
        name: '',
        thumb: '',
        animation: ''
    },
    reducers: {
        toyoClicked: (state, value) => {
            state.idToyoClicked = value.payload.id
            state.name = value.payload.name
            state.thumb = value.payload.thumb
            state.animation = value.payload.animation
            state.changeValue = value.payload.changeValue
        },
        cleanToyoClicked: (state) => {
            state.idToyoClicked = 0
        }
    }
})

export const { toyoClicked, cleanToyoClicked } =
    stock.actions

export default stock.reducer
