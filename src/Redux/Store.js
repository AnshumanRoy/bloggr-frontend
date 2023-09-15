import { configureStore } from '@reduxjs/toolkit'
import DarkReducer from './DarkSlice'

export const store = configureStore({
  reducer: {
    dark: DarkReducer,
  },
})