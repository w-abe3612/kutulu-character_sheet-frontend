import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialCharacterInfo from './initialValue/characterInfo'
import type { RootState } from './store'

// Define a type for the slice state
interface characterInfoType {
    player_name:string
    player_character:string
    character_title:string
    injury_value:number
    image_path:string
    image_name:string
    ability_value_max:number
    ability_value_total:number
    specialized_skill_max:number
    specialized_skill_total:number
    possession_item:string
    character_preference:string
}


const initialState:Array<characterInfoType> = [] 

export const dashboardIndexSlice = createSlice({
  name: 'characterInfo',
  initialState,
  reducers: {
    setDashboard2Users: (state, action: PayloadAction<Array<characterInfoType>>): void => {
        let updateState: Array<characterInfoType> = state
        

        state = updateState
    },
  },
})

export const { setDashboard2Users } = dashboardIndexSlice.actions

export const selectCount = (state: RootState) => dashboardIndexSlice.actions

export default dashboardIndexSlice.reducer