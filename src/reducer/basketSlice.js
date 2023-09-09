import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: [],
    reducers: {
        addToBasket: (state, action) => {
            const items = state.find((item)=> item.id === action.payload.id);
            if(items){
                items.qnty += 1
            }else{
                state.push(action.payload)
            }
        },
        removeFromBasket: (state, action) => {
            return state.filter((item)=> item.id === action.payload)
        }
    }
})

export const {addToBasket, removeFromBasket} = basketSlice.actions;

export default basketSlice.reducer;