import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface registerStatesType {
    formState:string,
    username:string,
    email:string,
    password:string,
    confirmation:string
}

const initialRegisterStates:registerStatesType = {
    formState:'input',
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
    setFormState: (state, action: PayloadAction<any>): void => {
        let updateState: registerStatesType = state
        updateState.formState = action.payload.formState

        state = updateState
    },
    setrRegisterInputs:(state, action: PayloadAction<any>):void => {
        let updateState: registerStatesType = state

        updateState.username     = action.payload.username
        updateState.email        = action.payload.email
        updateState.password     = action.payload.password
        updateState.confirmation = action.payload.confirmation

        state = updateState
    }
  },
})

export const { setFormState, setrRegisterInputs } = registerStateSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = ( state: RootState ) => registerStateSlice.actions

export default registerStateSlice.reducer