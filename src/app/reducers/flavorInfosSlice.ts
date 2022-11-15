import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import initialFlavorInfo from './initialValue/flavorInfo'
import type { RootState } from './store'
import { useFlavorInfos } from '../queries/CharacterQuery'
import { flavorInfoType } from '../config/type'

const initialState = initialFlavorInfo

export const getFlavorInfos = createAsyncThunk(
  "getFlavorInfos",
  async (character_id: number) => {
    const test = await useFlavorInfos(character_id)
    return test
  }
);

export const flavorInfoSlice = createSlice({
  name: 'flavorInfo',
  initialState,
  reducers: {
    initializeFlavorInfo: (state) => {
      let updateState: flavorInfoType = state
      updateState = initialState

      return updateState
    },
    setFlavorInfoValue: (state, action: PayloadAction<any>) => {
      let updateState: flavorInfoType = state

      updateState.infos.map((item: any): void => {
        if (item.flavor_info_param === action.payload.name) {
          item.flavor_info_value = action.payload.value
        }
      })

      return updateState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFlavorInfos.fulfilled, (state, action) => {
        let updateState: flavorInfoType = state
        updateState.loading = false
        updateState.success = true
        updateState.error = ''

        let result: any = []
        const newFlavorInfo = action.payload
        result = newFlavorInfo.map((info: any) => {
          return {
            flavor_info_name: info.flavor_info_name,
            flavor_info_param: info.flavor_info_param,
            flavor_info_value: info.flavor_info_value,
            flavor_info_order: info.flavor_info_order,
          }
        })
        updateState.infos = result

        return updateState
      })
      .addCase(getFlavorInfos.pending, (state) => {
        let updateState: flavorInfoType = state
        updateState.loading = true
        updateState.success = false
        updateState.error = ''

        return updateState
      })
      .addCase(getFlavorInfos.rejected, (state) => {
        let updateState: flavorInfoType = state
        updateState.loading = false
        updateState.success = false
        updateState.error = ''

        return updateState
      })
  }
})

export const { setFlavorInfoValue, initializeFlavorInfo } = flavorInfoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => flavorInfoSlice.actions

export default flavorInfoSlice.reducer