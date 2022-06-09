import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialAbilityValue from './initialValue/abilityValues'
import type { RootState } from './store'

// Define a type for the slice state
interface setChecked {
  num: number,
  itemParam: string
}

export interface abilityValueType {
  skill_name: string
  skill_param: string
  skill_value: number
  skill_type: number
  skill_order: number
}

const initialState = initialAbilityValue

export const abilityValuesSlice = createSlice({
  name: 'abilityValues',
  initialState,
  reducers: {
    addCheckedValue: (state, action: PayloadAction<setChecked>): void => {
      let updateState: Array<abilityValueType> = state

      updateState.map((item: abilityValueType): void => {
        if ( item.skill_param === action.payload.itemParam ) {
          item.skill_value = action.payload.num
        }
      })
      state = updateState
    },
  },
})

export const { addCheckedValue } = abilityValuesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => abilityValuesSlice.actions

export default abilityValuesSlice.reducer