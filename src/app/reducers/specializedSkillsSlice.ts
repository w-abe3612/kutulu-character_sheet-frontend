import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialSpecializedSkill from './initialValue/specializedSkill'
import type { RootState } from './store'

// Define a type for the slice state
interface setChecked {
  value: number,
  itemParam: string
}

export interface specializedSkillType {
    skill_name: string
    skill_param: string
    skill_value: number
    skill_order: number
}

const initialState = initialSpecializedSkill

export const specializedSkillSlice = createSlice({
  name: 'specializedSkill',
  initialState,
  reducers: {
    addCheckedValue: (state, action: PayloadAction<setChecked>): void => {
      let updateState: Array<specializedSkillType> = state

      updateState.map((item: specializedSkillType): void => {
        if ( item.skill_param === action.payload.itemParam ) {
          item.skill_value = action.payload.value
        }
      })
      state = updateState
    },
  },
})

export const { addCheckedValue } = specializedSkillSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => specializedSkillSlice.actions

export default specializedSkillSlice.reducer