import { configureStore } from '@reduxjs/toolkit'
import abilityValuesReducer from './abilityValuesSlice';
import characterInfoReducer from './characterInfosSlice';
import specializedSkillReducer from './specializedSkillsSlice';
import flavorInfoReducer from './flavorInfosSlice';
import systemStateReducer from './systemStateSlice';
import registerStateReducer from './registerSlice';

export const store = configureStore({
  reducer: {
    abilityValues: abilityValuesReducer,
    characterInfo:characterInfoReducer,
    specializedSkill:specializedSkillReducer,
    flavorInfo:flavorInfoReducer,
    systemState:systemStateReducer,
    registerState:registerStateReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch