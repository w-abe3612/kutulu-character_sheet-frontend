import { configureStore } from '@reduxjs/toolkit'
import allocateReducer from './allocateSlice';
import abilityValuesReducer from './abilityValuesSlice';

export const store = configureStore({
  reducer: {
    allocate: allocateReducer,
    abilityValues: abilityValuesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

