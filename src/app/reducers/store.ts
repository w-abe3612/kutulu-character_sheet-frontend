import { configureStore } from '@reduxjs/toolkit'
import allocateReducer from './allocateSlice';

export const store = configureStore({
  reducer: {
    allocate: allocateReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

