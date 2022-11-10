import { createSlice, PayloadAction,createAsyncThunk,current } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { systemStateType } from '../config/type'
import { useCheckLoggedIn } from '../queries/AuthQuery'
import crypto from 'crypto-js';

const initialState:systemStateType = {
    isLoggedIn: '0',
    isPage:'',
    userId: null,
    userName: '',
    public_page_token:'',
}

export const isCheckLoggedIn = createAsyncThunk(
    "checkLoggedIn",
    async () => {
      const test = await useCheckLoggedIn()
      return test
    }
);

export const systemStateSlice = createSlice({
    name: 'systemState',
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<any>) => {
            let updateState: systemStateType = state

            updateState.isLoggedIn = action.payload.isLoggedIn
            updateState.userId = action.payload.userId
            updateState.userName = action.payload.userName
            updateState.public_page_token = action.payload.public_page_token

            return updateState
        },
        setLogout:(state) => {
            let updateState: systemStateType = state

            updateState.isLoggedIn        = '0'
            updateState.userId            = null
            updateState.userName          = ''
            updateState.public_page_token = ''
            state = updateState

            return updateState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(isCheckLoggedIn.fulfilled, (state, action) => {
            let updateState: systemStateType = state

                updateState.userId             = action.payload.id
                updateState.userName           = action.payload.name
                
                updateState.public_page_token  = action.payload.public_page_token
           

            return updateState
        });
      }
})

export const { setLoggedIn,setLogout } = systemStateSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => systemStateSlice.actions

export default systemStateSlice.reducer