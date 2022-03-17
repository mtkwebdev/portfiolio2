import { configureStore } from "@reduxjs/toolkit";
import PrismicSlice from './PrismicSlice'

export const store = configureStore({
    reducer: {PrismicSlice},
})