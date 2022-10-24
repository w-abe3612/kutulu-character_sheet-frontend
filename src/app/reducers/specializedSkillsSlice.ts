import { createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit'
import initialSpecializedSkill from './initialValue/specializedSkill'
import type { RootState } from './store'
import { useSpecialzedSkills } from '../queries/CharacterQuery'

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

export const getSpecialzedSkills = createAsyncThunk(
  "getSpecialzedSkills",
  async (id:any) => {
    const test = await useSpecialzedSkills(id)
    return test
  }
);

export const specializedSkillSlice = createSlice({
  name: 'specializedSkill',
  initialState,
  reducers: {
    initializeSpecializedSkill:(state) => {
      let updateState: Array<specializedSkillType> = state
      updateState = initialSpecializedSkill
      state = updateState

      return state
    },
    setSpecializedSkill: (state, action: PayloadAction<setChecked>): void => {
      let updateState: Array<specializedSkillType> = state

      updateState.map((item: specializedSkillType): void => {
        if ( item.skill_param === action.payload.itemParam ) {
          item.skill_value = action.payload.value
        }
      })
      state = updateState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSpecialzedSkills.fulfilled, (state, action) => {


    });
  }
})

export const { setSpecializedSkill,initializeSpecializedSkill } = specializedSkillSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => specializedSkillSlice.actions

export default specializedSkillSlice.reducer