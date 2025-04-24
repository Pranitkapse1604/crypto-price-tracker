import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "../features/cryptos/cryptoSlice"
export const store = configureStore({
  reducer:{
    crypto:cryptoReducer
  }
})