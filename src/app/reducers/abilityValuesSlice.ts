import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialAbilityValue from './initialValue/abilityValues'

const initialState = initialAbilityValue

export const abilityValuesSlice = createSlice({
  name: 'abilityValues',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const {  } = abilityValuesSlice.actions

export default abilityValuesSlice.reducer