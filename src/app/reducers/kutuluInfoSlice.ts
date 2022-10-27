import { createSlice, PayloadAction ,createAsyncThunk} from '@reduxjs/toolkit'
import initialKutuluInfo from './initialValue/KutuluInfo'
import type { RootState } from './store'
import { useKutuluInfo } from '../queries/CharacterQuery'
export interface kutuluInfoType {
    character_title:string
    injury_value:number
    ability_value_max:number
    ability_value_total:number
    specialized_skill_max:number
    specialized_skill_total:number
    possession_item:string
    character_preference:string
}

const initialState = initialKutuluInfo

export const getKutuluInfo = createAsyncThunk(
  "getKutuluInfo",
  async (id:any) => {
    const test = await useKutuluInfo(id)
    return test
  }
);

export const KutuluInfoSlice = createSlice({
  name: 'kutuluInfo',
  initialState,
  reducers: {
    initializeKutuluInfo:(state) => {

    },
    setKutuluInfoValue: (state, action: PayloadAction<any>) => {

    },
    setInjuryValue: (state, action: PayloadAction<any>): void => {
        let updateState: kutuluInfoType = state
        let injuryValue: number = 0
  
        injuryValue = action.payload.value
        updateState.injury_value = injuryValue
        state = updateState
      },
  },
  extraReducers: (builder) => {
    builder.addCase(getKutuluInfo.fulfilled, (state, action) => {

    });
  }
})

export const { setKutuluInfoValue,setInjuryValue,initializeKutuluInfo } = KutuluInfoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => KutuluInfoSlice.actions

export default KutuluInfoSlice.reducer