import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialCharacterInfo from './initialValue/characterInfo'
import type { RootState } from './store'

// Define a type for the slice state
interface characterInfoType {
    player_name:string
    player_character:string
    character_title:string
    injury_value:number
    image_path:string
    image_name:string
    ability_value_max:number
    ability_value_total:number
    specialized_skill_max:number
    specialized_skill_total:number
    possession_item:string
    character_preference:string
}

interface setProfileInfoType{
  value: string,
  itemParam: string
}

interface setTextAreaInfoType{
  value: string,
  itemParam: string
}

interface setInjuryValueType {
  value: number,
  itemParam: string
}

const initialState = initialCharacterInfo

export const characterInfoSlice = createSlice({
  name: 'characterInfo',
  initialState,
  reducers: {
    setProfileInfo: (state, action: PayloadAction<setProfileInfoType>): void => {
      let updateState: characterInfoType = state
      let inputedValue:string = ''
      let inputedParamName:string = ''

      inputedValue = action.payload.value
      inputedParamName = action.payload.itemParam

      state = updateState
    },
    setTextAreaInfo:(state, action: PayloadAction<setTextAreaInfoType>): void => {
      let updateState: characterInfoType = state
      let inputedValue:string = ''
      let inputedParamName:string = ''

      inputedValue = action.payload.value
      inputedParamName = action.payload.itemParam
      //todo jsonに変数の値で参照する方法

      state = updateState
    },
    setInjuryValue: (state, action: PayloadAction<setInjuryValueType>): void => {
      let updateState: characterInfoType = state
      let injuryValue: number = 0

      injuryValue = action.payload.value
      updateState.injury_value = injuryValue
      state = updateState
    },
  },
})

export const { setProfileInfo, setInjuryValue, setTextAreaInfo } = characterInfoSlice.actions

export const selectCount = (state: RootState) => characterInfoSlice.actions

export default characterInfoSlice.reducer