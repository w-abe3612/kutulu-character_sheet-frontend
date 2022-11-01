import { createSlice, PayloadAction,createAsyncThunk,current } from '@reduxjs/toolkit'
import axios from "axios";
import initialCharacterInfo from './initialValue/characterInfo'
import type { RootState } from './store'
import { useCharacters } from '../queries/CharacterQuery'
import { dashboardIndexType } from '../config/type'

const initialState:Array<any> = [] 

export const getCharacters = createAsyncThunk(
  "getCharacters",
  async () => {
    const test = await useCharacters()
    return test
  }
);

export const dashboardIndexSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboard2Users: (state, action: PayloadAction<any>): void => {
        let updateState: Array<any> = state
        updateState = action.payload.characters

        state = updateState
    },
    deleteCharacterItem:(state, action: PayloadAction<any>) => {
      let updateState:any = state
      const character_id = action.payload

      updateState = Object.values(updateState).filter((character:any) => character.id !== character_id  )
      state = updateState

      // ...stateとするとレンダリングする
      return {
        ...state,
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      let updateState: Array<any> = state
      updateState = action.payload
      state = updateState
      return {
        ...state,
      };
    });
  }
})

export const { setDashboard2Users ,deleteCharacterItem} = dashboardIndexSlice.actions

export const selectCount = (state: RootState) => dashboardIndexSlice.actions

export default dashboardIndexSlice.reducer