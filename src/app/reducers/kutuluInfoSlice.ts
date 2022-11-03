import { createSlice, PayloadAction ,createAsyncThunk} from '@reduxjs/toolkit'
import initialKutuluInfo from './initialValue/KutuluInfo'
import type { RootState } from './store'
import { useKutuluInfo } from '../queries/CharacterQuery'
import { setCheckedActionType, kutuluInfoType  } from '../config/type'


const initialState = initialKutuluInfo

export const getKutuluInfo = createAsyncThunk(
  "getKutuluInfo",
  async (character_id:number) => {
    const test = await useKutuluInfo(character_id)
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
    setInjuryValue: (state, action: PayloadAction<setCheckedActionType>) => {
        let updateState: kutuluInfoType = state
 
        updateState.injury_value = action.payload.value
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