import { createSlice, PayloadAction, createAsyncThunk, current } from '@reduxjs/toolkit'
import axios from "axios";
import initialCharacterInfo from './initialValue/characterInfo'
import type { RootState } from './store'
import { useCharacters } from '../queries/CharacterQuery'
import { dashboardIndexType } from '../config/type'

const initialState:any = {
  loading: true,
  success: false,
  error: '',
  infos:[]
}

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
      let updateState:dashboardIndexType = state
      updateState.infos = action.payload.characters
      
      state = updateState
    },
    deleteCharacterItem: (state, action: PayloadAction<any>) => {
      let updateState:dashboardIndexType = state
      const character_id = action.payload

      updateState.infos = Object.values(updateState.infos).filter((character: any) => character.id !== character_id)
      state = updateState

      // ...stateとするとレンダリングする
      return state
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.fulfilled, (state, action) => {
        let updateState:dashboardIndexType = state
        updateState.loading = false
        updateState.success = true
        updateState.error = ''
        updateState.infos = action.payload
        
        return updateState
      })
      .addCase(getCharacters.pending, (state) => {
        let updateState: dashboardIndexType = state
        updateState.loading = true
        updateState.success = false
        updateState.error = ''

        return updateState
      })
      .addCase(getCharacters.rejected, (state) => {
        let updateState:dashboardIndexType = state
        updateState.loading = false
        updateState.success = false
        updateState.error = ''

        return updateState
      })
  }
})

export const { setDashboard2Users, deleteCharacterItem } = dashboardIndexSlice.actions

export const selectCount = (state: RootState) => dashboardIndexSlice.actions

export default dashboardIndexSlice.reducer