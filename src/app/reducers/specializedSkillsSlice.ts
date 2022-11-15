import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import initialSpecializedSkill from './initialValue/specializedSkill'
import type { RootState } from './store'
import { useSpecialzedSkills } from '../queries/CharacterQuery'
import { setCheckedActionType, specializedSkillType } from '../config/type'

const initialState = initialSpecializedSkill

export const getSpecialzedSkills = createAsyncThunk(
  "getSpecialzedSkills",
  async (id: number) => {
    const test = await useSpecialzedSkills(id)
    return test
  }
);

export const specializedSkillSlice = createSlice({
  name: 'specializedSkill',
  initialState,
  reducers: {
    initializeSpecializedSkill: (state) => {
      let updateState: specializedSkillType = state
      updateState = initialSpecializedSkill
      state = updateState

      return state
    },
    setSpecializedSkill: (state, action: PayloadAction<setCheckedActionType>) => {
      let updateState: specializedSkillType = state

      updateState.infos.map((item: any) => {
        if (item.skill_param === action.payload.name) {
          item.skill_value = action.payload.value
        }
      })
      state = updateState

      return updateState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSpecialzedSkills.fulfilled, (state, action) => {
        let updateState: specializedSkillType = state
        updateState.loading = false
        updateState.success = true
        updateState.error = ''

        let result: Array<any> = []
        const newSpecializedSkill = action.payload
        result = newSpecializedSkill.map((info: any) => {
          return {
            skill_name: info.skill_name,
            skill_order: info.skill_order,
            skill_param: info.skill_param,
            skill_value: info.skill_value
          }
        })
        updateState.infos = result

        return updateState
      })
      .addCase(getSpecialzedSkills.pending, (state) => {
        let updateState: specializedSkillType = state
        updateState.loading = true
        updateState.success = false
        updateState.error = ''

        return updateState
      })
      .addCase(getSpecialzedSkills.rejected, (state) => {
        let updateState: specializedSkillType = state
        updateState.loading = false
        updateState.success = false
        updateState.error = ''

        return updateState
      })
  }
})

export const { setSpecializedSkill, initializeSpecializedSkill } = specializedSkillSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => specializedSkillSlice.actions

export default specializedSkillSlice.reducer