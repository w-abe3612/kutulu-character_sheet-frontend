import { createSlice, PayloadAction ,createAsyncThunk} from '@reduxjs/toolkit'
import initialFlavorInfo from './initialValue/flavorInfo'
import type { RootState } from './store'
import { useFlavorInfos } from '../queries/CharacterQuery'

// todo 名前の変更
interface setChecked {
  value: string,
  itemParam: string
}

export interface flavorInfoType {
    flavor_info_name: string
    flavor_info_param: string
    flavor_info_value: string
    flavor_info_order: number
}

const initialState = initialFlavorInfo

export const getFlavorInfos = createAsyncThunk(
  "getFlavorInfos",
  async (id:any) => {
    const test = await useFlavorInfos(id)
    return test
  }
);

export const flavorInfoSlice = createSlice({
  name: 'flavorInfo',
  initialState,
  reducers: {
    initializeFlavorInfo:(state) => {
      let updateState: Array<flavorInfoType> = state
      updateState = initialFlavorInfo
      state = updateState

      return state
    },
    setFlavorInfoValue: (state, action: PayloadAction<setChecked>) => {
      let updateState: Array<flavorInfoType> = state

      updateState.map((item: flavorInfoType): void => {
        if ( item.flavor_info_param === action.payload.itemParam ) {
          item.flavor_info_value = action.payload.value
        }
      })
      state = updateState

      return state 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFlavorInfos.fulfilled, (state, action) => {
      let updateState: Array<flavorInfoType> = state
      let result:any = []
      const newFlavorInfo = action.payload
      result = newFlavorInfo.map((info:any) => {
        return {
          flavor_info_name: info.flavor_info_name, 
          flavor_info_param: info.flavor_info_param, 
          flavor_info_value: info.flavor_info_value, 
          flavor_info_order: info.flavor_info_order,
        }
      })
      updateState = result

      return updateState 
    });
  }
})

export const { setFlavorInfoValue,initializeFlavorInfo } = flavorInfoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => flavorInfoSlice.actions

export default flavorInfoSlice.reducer