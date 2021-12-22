/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit'

const stock = createSlice({
    name: 'stock',
    initialState: {
        account: '',
        chainId: '',
        contracts: {}
    },
    reducers: {
        setWalletAccount: (state, value) => {
            state.account = value.payload
        },
        setChainId: (state, value) => {
            state.chainId = value.payload
        },
        setContracts: (state, value) => {
            state.contracts = value.payload
        }
    }
})

export const { setWalletAccount, setChainId, setContracts } =
    stock.actions

export default stock.reducer