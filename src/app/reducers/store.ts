import { configureStore } from '@reduxjs/toolkit'
import abilityValuesReducer from './abilityValuesSlice';
import characterInfoReducer from './characterInfosSlice';
import specializedSkillReducer from './specializedSkillsSlice';

export const store = configureStore({
  reducer: {
    abilityValues: abilityValuesReducer,
    characterInfo:characterInfoReducer,
    specializedSkill:specializedSkillReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

