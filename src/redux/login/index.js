/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const stock = createSlice({
  name: "stock",
  initialState: {
    walletAddress: "",
  },
  reducers: {
    setWalletAddress: (state, value) => {
      state.address = value.payload;
    },
  },
});

export const { setWalletAddress } = stock.actions;

export default stock.reducer;
