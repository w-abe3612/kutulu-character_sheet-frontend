import { configureStore } from '@reduxjs/toolkit'
import allocateReducer from './allocateSlice';
import abilityValuesReducer from './abilityValuesSlice';
import characterInfoReducer from './characterInfosSlice';

export const store = configureStore({
  reducer: {
    abilityValues: abilityValuesReducer,
    characterInfo:characterInfoReducer,


  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

