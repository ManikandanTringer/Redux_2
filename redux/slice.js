import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'productDetail',
    initialState: {
        value: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.value.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.value.splice(action.payload, 1)
        }
    }
})

export const { addProduct, removeProduct } = slice.actions;

export default slice.reducer;