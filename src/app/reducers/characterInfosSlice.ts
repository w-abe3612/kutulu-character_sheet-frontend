import { createSlice, PayloadAction,createAsyncThunk,current } from '@reduxjs/toolkit'
import initialCharacterInfo from './initialValue/characterInfo'
import type { RootState } from './store'
import { useCharactorInfo } from '../queries/CharacterQuery'

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

export const getCharacterInfo = createAsyncThunk(
  "getCharacterInfo",
  async (id:any) => {
    const test = await useCharactorInfo(id)
    return test
  }
);

export const characterInfoSlice = createSlice({
  name: 'characterInfo',
  initialState,
  reducers: {
    initializeCharacterInfo:(state) => {
      let updateState: characterInfoType = state
      updateState = initialCharacterInfo
      state = updateState

      return state
    },
    setCharacterInfo:(state, action: PayloadAction<setInjuryValueType>) => {
      let updateState: any = state
      updateState = action.payload

      state = updateState
      return state
    },
    setInjuryValue: (state, action: PayloadAction<setInjuryValueType>): void => {
      let updateState: characterInfoType = state
      let injuryValue: number = 0

      injuryValue = action.payload.value
      updateState.injury_value = injuryValue
      state = updateState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacterInfo.fulfilled, (state, action) => {
      const newState = {
        player_name:action.payload[0].player_name,
        player_character:action.payload[0].player_character,
        character_title:action.payload[0].character_title,
        injury_value:action.payload[0].injury_value,
        image_path:action.payload[0].image_path,
        image_name:action.payload[0].image_name,
        ability_value_max:action.payload[0].ability_value_max,
        ability_value_total:action.payload[0].ability_value_total,
        specialized_skill_max:action.payload[0].pecialized_skill_max,
        specialized_skill_total:action.payload[0].specialized_skill_total,
        possession_item:action.payload[0].possession_item,
        character_preference:action.payload[0].character_preference,
      }
      return {
        ...newState,
      };
    });
  }
})

export const {  setCharacterInfo,setInjuryValue, initializeCharacterInfo } = characterInfoSlice.actions

export const selectCount = (state: RootState) => characterInfoSlice.actions

export default characterInfoSlice.reducer