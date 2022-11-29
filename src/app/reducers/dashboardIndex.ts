import { createSlice, PayloadAction, createAsyncThunk, current } from '@reduxjs/toolkit'
import axios from "axios";
import initialCharacterInfo from './initialValue/characterInfo'
import type { RootState } from './store'
//import { useCharacters } from '../queries/CharacterQuery'
import * as characterQueries from '../queries/CharacterQuery'
import { dashboardIndexType } from '../config/type'

const initialState:any = {
  loading: true,
  success: false,
  error: '',
  paginate:{
    current_page:0,
    from:0,
    to:0,
    total:0,
    per_page:0,
    last_page:0,
  },
  datas:[]
}

export const getCharacters = createAsyncThunk(
  "getCharacters",
  async (page:number) => {
    const test = await characterQueries.useCharacters(page)
    return test
  }
);

export const dashboardIndexSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboard2Users: (state, action: PayloadAction<any>): void => {
      let updateState:dashboardIndexType = state
      updateState.datas = action.payload.characters
      
      state = updateState
    },
    deleteCharacterItem: (state, action: PayloadAction<any>) => {
      let updateState:dashboardIndexType = state
      const character_id = action.payload

      updateState.datas = Object.values(updateState.datas).filter((character: any) => character.id !== character_id)
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

        updateState.paginate.current_page = action.payload.current_page
        updateState.paginate.from = action.payload.from
        updateState.paginate.to = action.payload.to
        updateState.paginate.total = action.payload.total
        updateState.paginate.per_page = action.payload.per_page
        updateState.paginate.last_page = action.payload.last_page

        updateState.datas = action.payload.data
        
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