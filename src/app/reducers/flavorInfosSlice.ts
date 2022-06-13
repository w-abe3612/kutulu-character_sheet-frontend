import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialFlavorInfo from './initialValue/flavorInfo'
import type { RootState } from './store'

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

export const flavorInfoSlice = createSlice({
  name: 'flavorInfo',
  initialState,
  reducers: {
    addCheckedValue: (state, action: PayloadAction<setChecked>): void => {
      let updateState: Array<flavorInfoType> = state

      updateState.map((item: flavorInfoType): void => {
        if ( item.flavor_info_param === action.payload.itemParam ) {
          item.flavor_info_value = action.payload.value
        }
      })
      state = updateState
    },
  },
})

export const { addCheckedValue } = flavorInfoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => flavorInfoSlice.actions

export default flavorInfoSlice.reducer