import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const Categoryslice = createSlice({
    name: 'category',
    initialState: {
        category: "ALL",
    }, reducers: {
        setCategory: (state, action) => { state.category = action.payload },
    }
})

export const { setCategory } = Categoryslice.actions;
export default Categoryslice.reducer;