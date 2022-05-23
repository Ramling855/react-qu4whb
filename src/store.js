import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './seatSlice'

export const store = configureStore({
  reducer: {
    sea: counterReducer,
    
  },
})