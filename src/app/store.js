import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./Slice/cardSlice";

export const store = configureStore({
    reducer:{
        counter: cardSlice,
    }
})