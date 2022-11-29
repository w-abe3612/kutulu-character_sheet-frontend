import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import initialAbilityValue from './initialValue/abilityValues'
import type { RootState } from './store'
//import { useAbilityValues,useViewAbilityValues } from '../queries/CharacterQuery'
import * as characterQueries from '../queries/CharacterQuery'
import { setCheckedActionType, abilityValueType } from '../config/type'

const initialState = initialAbilityValue

export const getAbilityValue = createAsyncThunk(
  "getAbilityValue",
  async (character_id: number) => {
    const test = await characterQueries.useAbilityValues(character_id)
    return test
  }
);

export const viewAbilityValue = createAsyncThunk(
  "viewAbilityValue",
  async (parameter:{
    userPageToken:string,
    characterPageToken:string
  }) => {
    const test = await characterQueries.useViewAbilityValues( parameter.userPageToken, parameter.characterPageToken )

    return test
  }
);

export const abilityValuesSlice = createSlice({
  name: 'abilityValues',
  initialState,
  reducers: {
    initializeAbilityValues: (state) => {
      let updateState: abilityValueType = state
      updateState = initialAbilityValue
      state = updateState

      return state
    },
    setAbilityValues: (state, action: PayloadAction<setCheckedActionType>) => {
      let updateState: abilityValueType = state

      updateState.infos.map((item: any) => {
        if (item.skill_param === action.payload.name) {
          item.skill_value = action.payload.value
        }
      })

      return updateState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAbilityValue.fulfilled, (state, action) => {
        let updateState: abilityValueType = state
        updateState.loading = false
        updateState.success = true
        updateState.error = ''

        let result: any = []
        const newSpecializedSkill = action.payload
        result = newSpecializedSkill.map((info: any) => {
          return {
            skill_name: info.skill_name,
            skill_param: info.skill_param,
            skill_value: info.skill_value,
            skill_type: info.skill_type,
            skill_order: info.skill_order
          }
        })
        updateState.infos = result

        return updateState
      })
      .addCase(getAbilityValue.pending, (state) => {
        let updateState: abilityValueType = state
        updateState.loading = true
        updateState.success = false
        updateState.error = ''
      })
      .addCase(getAbilityValue.rejected, (state) => {
        let updateState: abilityValueType = state
        updateState.loading = false
        updateState.success = false
        updateState.error = ''

        return updateState
      })
      .addCase(viewAbilityValue.fulfilled, (state, action) => {
        let updateState: abilityValueType = state
        updateState.loading = false
        updateState.success = true
        updateState.error = ''

        let result: any = []
        const newSpecializedSkill = action.payload
        result = newSpecializedSkill.map((info: any) => {
          return {
            skill_name: info.skill_name,
            skill_param: info.skill_param,
            skill_value: info.skill_value,
            skill_type: info.skill_type,
            skill_order: info.skill_order
          }
        })
        updateState.infos = result

        return updateState
      })
      .addCase(viewAbilityValue.pending, (state) => {
        let updateState: abilityValueType = state
        updateState.loading = true
        updateState.success = false
        updateState.error = ''
      })
      .addCase(viewAbilityValue.rejected, (state) => {
        let updateState: abilityValueType = state
        updateState.loading = false
        updateState.success = false
        updateState.error = ''

        return updateState
      })
  }
})

export const { setAbilityValues, initializeAbilityValues } = abilityValuesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => abilityValuesSlice.actions

export default abilityValuesSlice.reducer