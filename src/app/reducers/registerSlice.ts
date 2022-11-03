import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { registerStatesType } from '../config/type'

const initialRegisterStates:registerStatesType = {
    formState:'input',
    verifyFlg:false,
    username:'',
    email:'',
    password:'',
    confirmation:''
}


const initialState = initialRegisterStates

export const registerStateSlice = createSlice({
  name: 'registerStates',
  initialState,
  reducers: {
    setFormState: (state, action: PayloadAction<any>) => {
        let updateState: registerStatesType = state
        updateState.formState = action.payload.formState
        state = updateState

        return state
    },
    setrRegisterInputs:(state, action: PayloadAction<any>)=> {
        let updateState: registerStatesType = state

        updateState.username     = action.payload.username
        updateState.email        = action.payload.email
        updateState.password     = action.payload.password
        updateState.confirmation = action.payload.confirmation

        state = updateState

        return state
    },
    setVerifyFlg:(state, action: PayloadAction<any>) => {
      let updateState: registerStatesType = state
      updateState.verifyFlg    = action.payload.verifyFlg
      state = updateState

      return state
    }
  },
})

export const { setFormState, setrRegisterInputs, setVerifyFlg } = registerStateSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = ( state: RootState ) => registerStateSlice.actions

export default registerStateSlice.reducer