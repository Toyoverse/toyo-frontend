/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit'

const stock = createSlice({
    name: 'stock',
    initialState: {
        idBoxClicked: 0,
        name: ''
    },
    reducers: {
        boxClicked: (state, value) => {
            state.idBoxClicked = value.payload.id
            state.name = value.payload.name
        },
        cleanBoxClicked: (state) => {
            state.idBoxClicked = 0
            state.name = ''
        }
    }
})

export const { boxClicked, cleanBoxClicked } =
    stock.actions

export default stock.reducer
