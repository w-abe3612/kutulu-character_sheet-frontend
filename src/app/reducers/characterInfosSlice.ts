import { createSlice, PayloadAction,createAsyncThunk,current } from '@reduxjs/toolkit'
import initialCharacterInfo from './initialValue/characterInfo'
import type { RootState } from './store'
import { useCharactorInfo } from '../queries/CharacterQuery'
import type { characterInfoType } from '../type/index'

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
    setCharacterInfo:(state, action: PayloadAction<any>) => {
      let updateState: any = state
      updateState = action.payload

      state = updateState
      return state
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getCharacterInfo.fulfilled, (state, action) => {

    });
  }
})

export const {  setCharacterInfo, initializeCharacterInfo } = characterInfoSlice.actions

export const selectCount = (state: RootState) => characterInfoSlice.actions

export default characterInfoSlice.reducer