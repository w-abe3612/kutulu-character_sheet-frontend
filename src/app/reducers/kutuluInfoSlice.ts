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
      let updateState: any = state
      updateState = initialKutuluInfo
      state = updateState

      return state
    },
    setKutuluInfoValue:(state, action: PayloadAction<any>) => {
      let updateState: any = state
      updateState[ action.payload.name ] = action.payload.value

      state = updateState
      return state
    },
    setInjuryValue: (state, action: PayloadAction<any>) => {
        let updateState: kutuluInfoType = state
        let injuryValue: number = 0
 
        injuryValue = action.payload.value
        updateState.injury_value = injuryValue
        state = updateState

        return updateState
      },
  },
  extraReducers: (builder) => {
    builder.addCase(getKutuluInfo.fulfilled, (state, action) => {
      let updateState: kutuluInfoType = state
      updateState = {
        character_title:action.payload[0].character_title,
        injury_value:action.payload[0].injury_value,
        ability_value_max:action.payload[0].ability_value_max,
        ability_value_total:action.payload[0].ability_value_total,
        specialized_skill_max:action.payload[0].specialized_skill_max,
        specialized_skill_total:action.payload[0].specialized_skill_total,
        possession_item:action.payload[0].possession_item,
        character_preference:action.payload[0].character_preference,
      }
      state = updateState

      return state
    });
  }
})

export const { setKutuluInfoValue,setInjuryValue,initializeKutuluInfo } = KutuluInfoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => KutuluInfoSlice.actions

export default KutuluInfoSlice.reducer