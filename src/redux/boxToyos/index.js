/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    idBoxClicked: 0,
    boxTypeId: 0,
    name: ''
}

const stock = createSlice({
    name: 'stock',
    initialState,
    reducers: {
        boxClicked: (state, value) => {
            state.idBoxClicked = value.payload.id
            state.name = value.payload.name
            state.boxTypeId = value.payload.typeId
        },
        cleanBoxClicked: (state) => {
            state = initialState;
        }
    }
})

export const { boxClicked, cleanBoxClicked } =
    stock.actions

export default stock.reducer
