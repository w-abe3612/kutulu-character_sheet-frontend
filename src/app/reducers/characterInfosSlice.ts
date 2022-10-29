import { createSlice, PayloadAction,createAsyncThunk,current } from '@reduxjs/toolkit'
import initialCharacterInfo from './initialValue/characterInfo'
import type { RootState } from './store'
import { useCharactorInfo } from '../queries/CharacterQuery'
import type { characterInfoType } from '../type/'

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
    setbase64:(state, action: PayloadAction<any>) => {
      let updateState: any = state
      updateState.img_upload_base64 = action.payload.img_upload_base64

      state = updateState
      return state
    },
    deleteImages:(state) => {
      let updateState: any = state
      updateState.image_path = ''
      updateState.image_name = ''
      updateState.img_upload_base64 = ''

      state = updateState
      return state
    }
  },
  
  extraReducers: (builder) => {
    builder.addCase(getCharacterInfo.fulfilled, (state, action) => {
      let updateState: characterInfoType = state
      updateState = {
        player_name:action.payload[0].player_name,
        player_character:action.payload[0].player_character,
        image_path:action.payload[0].image_path,
        image_name:action.payload[0].image_name,
        img_upload_base64:'',
        public_page_token:action.payload[0].ublic_page_token,
        public_flg:action.payload[0].public_flg,
      }

      state = updateState
      return state
    });
  }
})

export const {  setCharacterInfo, initializeCharacterInfo ,deleteImages,setbase64} = characterInfoSlice.actions

export const selectCount = (state: RootState) => characterInfoSlice.actions

export default characterInfoSlice.reducer