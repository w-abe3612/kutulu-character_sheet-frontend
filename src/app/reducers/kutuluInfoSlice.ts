import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import initialKutuluInfo from './initialValue/KutuluInfo'
import type { RootState } from './store'
//import { useKutuluInfo, useViewKutuluInfo } from '../queries/CharacterQuery'
import * as characterQueries from '../queries/CharacterQuery'
import { setCheckedActionType, kutuluInfoType } from '../config/type'


const initialState = initialKutuluInfo

export const getKutuluInfo = createAsyncThunk(
  "getKutuluInfo",
  async (character_id: number) => {
    const test = await characterQueries.useKutuluInfo(character_id)
    return test
  }
);

export const viewKutuluInfo = createAsyncThunk(
  "viewKutuluInfo",
  async (parameter:{
    userPageToken:string,
    characterPageToken:string
  }) => {
    const test = await characterQueries.useViewKutuluInfo( parameter.userPageToken, parameter.characterPageToken )

    return test
  }
);

export const KutuluInfoSlice = createSlice({
  name: 'kutuluInfo',
  initialState,
  reducers: {
    initializeKutuluInfo: (state) => {
      let updateState: any = state
      updateState = initialKutuluInfo
      state = updateState

      return state
    },
    setKutuluInfoValue: (state, action: PayloadAction<any>) => {
      let updateState: any = state
      updateState[action.payload.name] = action.payload.value

      state = updateState
      return state
    },
    setInjuryValue: (state, action: PayloadAction<setCheckedActionType>) => {
      let updateState: kutuluInfoType = state

      updateState.injury_value = action.payload.value
      state = updateState

      return updateState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getKutuluInfo.fulfilled, (state, action) => {
        let updateState: kutuluInfoType = state
        updateState.loading = false
        updateState.success = true
        updateState.error = ''

        updateState.character_title = action.payload[0].character_title
        updateState.injury_value = action.payload[0].injury_value
        updateState.ability_value_max = action.payload[0].ability_value_max
        updateState.ability_value_total = action.payload[0].ability_value_total
        updateState.specialized_skill_max = action.payload[0].specialized_skill_max
        updateState.specialized_skill_total = action.payload[0].specialized_skill_total
        updateState.possession_item = action.payload[0].possession_item
        updateState.character_preference = action.payload[0].character_preference


        return updateState
      })
      .addCase(getKutuluInfo.pending, (state) => {
        let updateState: kutuluInfoType = state
        updateState.loading = true
        updateState.success = false
        updateState.error = ''

        return updateState
      })
      .addCase(getKutuluInfo.rejected, (state) => {
        let updateState: kutuluInfoType = state
        updateState.loading = false
        updateState.success = false
        updateState.error = ''

        return updateState
      })
      .addCase(viewKutuluInfo.fulfilled, (state, action) => {
        let updateState: kutuluInfoType = state
        updateState.loading = false
        updateState.success = true
        updateState.error = ''

        updateState.character_title = action.payload[0].character_title
        updateState.injury_value = action.payload[0].injury_value
        updateState.ability_value_max = action.payload[0].ability_value_max
        updateState.ability_value_total = action.payload[0].ability_value_total
        updateState.specialized_skill_max = action.payload[0].specialized_skill_max
        updateState.specialized_skill_total = action.payload[0].specialized_skill_total
        updateState.possession_item = action.payload[0].possession_item
        updateState.character_preference = action.payload[0].character_preference


        return updateState
      })
      .addCase(viewKutuluInfo.pending, (state) => {
        let updateState: kutuluInfoType = state
        updateState.loading = true
        updateState.success = false
        updateState.error = ''

        return updateState
      })
      .addCase(viewKutuluInfo.rejected, (state) => {
        let updateState: kutuluInfoType = state
        updateState.loading = false
        updateState.success = false
        updateState.error = ''

        return updateState
      })
  }
})

export const { setKutuluInfoValue, setInjuryValue, initializeKutuluInfo } = KutuluInfoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => KutuluInfoSlice.actions

export default KutuluInfoSlice.reducer