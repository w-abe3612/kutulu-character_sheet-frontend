import { createSlice, PayloadAction ,createAsyncThunk} from '@reduxjs/toolkit'
import initialKutuluInfo from './initialValue/KutuluInfo'
import type { RootState } from './store'
import { useKutuluInfo } from '../queries/CharacterQuery'
import { navigationInfoType  } from '../config/type'


const initialNavigationInfo: navigationInfoType = {
  sidebarState:false
}

const initialState = initialNavigationInfo

export const NavigationInfoSlice = createSlice({
  name: 'navigationInfo',
  initialState,
  reducers: {
    setSidebarState:(state) => {
      let updateState: any = state
      updateState.sidebarState = !updateState.sidebarState
      state = updateState
      
      return state
    },
  },
})

export const { setSidebarState } = NavigationInfoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => NavigationInfoSlice.actions

export default NavigationInfoSlice.reducer