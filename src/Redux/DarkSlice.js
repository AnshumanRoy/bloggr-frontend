import { createSlice } from "@reduxjs/toolkit";

export const DarkSlice = createSlice({
    name: 'dark',
    initialState: {value: false},
    reducers: {
        toggle: (state)=>{state.value=!state.value}
    }
})

export const { toggle } = DarkSlice.actions

export default DarkSlice.reducer