import { createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import initialCharacterInfo from './initialValue/characterInfo'
import type { RootState } from './store'
import { useCharacters } from '../queries/CharacterQuery'

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

const initialState:Array<characterInfoType> = [] 

export const getCharacters = createAsyncThunk(
  "getCharacters",
  async () => {
    const test = await useCharacters()
    return test
  }
);

export const dashboardIndexSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setDashboard2Users: (state, action: PayloadAction<any>): void => {
        let updateState: Array<characterInfoType> = state
        updateState = action.payload.characters

        state = updateState
    },
    getDashboard2Users:(state) => {
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      let updateState: Array<characterInfoType> = state
      updateState = action.payload

        state = updateState
      return {
        ...state,
      };
    });
  }
})

export const { setDashboard2Users ,getDashboard2Users } = dashboardIndexSlice.actions

export const selectCount = (state: RootState) => dashboardIndexSlice.actions

export default dashboardIndexSlice.reducer