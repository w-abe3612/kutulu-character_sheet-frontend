import { createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit'
import initialSpecializedSkill from './initialValue/specializedSkill'
import type { RootState } from './store'
import { useSpecialzedSkills } from '../queries/CharacterQuery'
import { setCheckedActionType, specializedSkillType } from '../config/type'

const initialState = initialSpecializedSkill

export const getSpecialzedSkills = createAsyncThunk(
  "getSpecialzedSkills",
  async (id:number) => {
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
    setSpecializedSkill: (state, action: PayloadAction<setCheckedActionType>) => {
      let updateState: Array<specializedSkillType> = state

      updateState.map((item: specializedSkillType) => {
        if ( item.skill_param === action.payload.name ) {
          item.skill_value = action.payload.value
        }
      })
      state = updateState
     
      return updateState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSpecialzedSkills.fulfilled, (state, action) => {
      let updateState: Array<specializedSkillType> = state
      let result:Array<specializedSkillType>= []
      const newSpecializedSkill = action.payload
      result = newSpecializedSkill.map((info:specializedSkillType) => {
        return {
          skill_name:info.skill_name,
          skill_order:info.skill_order,
          skill_param:info.skill_param,
          skill_value:info.skill_value
        }
      })
      updateState = result

      return updateState 
    });
  }
})

export const { setSpecializedSkill,initializeSpecializedSkill } = specializedSkillSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => specializedSkillSlice.actions

export default specializedSkillSlice.reducer