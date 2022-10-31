import { createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit'
import initialAbilityValue from './initialValue/abilityValues'
import type { RootState } from './store'
import { useAbilityValues } from '../queries/CharacterQuery'

// Define a type for the slice state
interface setChecked {
  value: number,
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

export const getAbilityValue = createAsyncThunk(
  "getAbilityValue",
  async (id:any) => {
    const test = await useAbilityValues(id)
    return test
  }
);

export const abilityValuesSlice = createSlice({
  name: 'abilityValues',
  initialState,
  reducers: {
    initializeAbilityValues:(state) => {
      let updateState: Array<abilityValueType> = state
      updateState = initialAbilityValue
      state = updateState

      return state
    },
    setAbilityValues: (state, action: PayloadAction<setChecked>) => {
      let updateState: Array<abilityValueType> = state

      updateState.map((item: abilityValueType) => {
        if ( item.skill_param === action.payload.itemParam ) {
          item.skill_value = action.payload.value
        }
      })

      return updateState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAbilityValue.fulfilled, (state, action) => {
      let updateState: Array<abilityValueType > = state
      let result:any = []
      const newSpecializedSkill = action.payload
      result = newSpecializedSkill.map((info:any) => {
        return {
          skill_name: info.skill_name,
          skill_param: info.skill_param,
          skill_value: info.skill_value,
          skill_type: info.skill_type,
          skill_order: info.skill_order
        }
      })
      updateState = result

      return updateState 
    });
  }
})

export const { setAbilityValues,initializeAbilityValues } = abilityValuesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => abilityValuesSlice.actions

export default abilityValuesSlice.reducer