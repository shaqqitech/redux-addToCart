import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './reducer/basketSlice'

const store = configureStore({
    reducer: {
        basket: basketReducer
    }
})

export default store;