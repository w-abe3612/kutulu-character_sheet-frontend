import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { systemStateType } from './types'

const initState: systemStateType = {
    isLoggedIn: false,
    userId: null,
    userName: '',
    isPage: ''
}



// todo 現状localstrageを直接触ってログインをハイジャック出来るため対策

const initials = () => {
    let result: any = {}
    let s:any = localStorage.getItem("isLoggedIn");
    let a:any = localStorage.getItem("userId");
    let b:any = localStorage.getItem("userName");

    if (s === 'true') {
        result = {
            isLoggedIn: s === 'true' ? true:false,
            userId: Number(a),
            userName: b,
            isPage: ''
        }
    } else {
        result = {
            isLoggedIn: false,
            userId: null,
            userName: '',
            isPage: ''
        }
    }

    return result
}



const initialState = initials()

export const systemStateSlice = createSlice({
    name: 'systemState',
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<any>): void => {
            let updateState: systemStateType = state
            updateState.isLoggedIn = action.payload.isLoggedIn
            updateState.userId = action.payload.userId
            updateState.userName = action.payload.userName

            state = updateState
        },
        setIsPages: (state, action: PayloadAction<any>): void => {
            let updateState: systemStateType = state
            updateState.isPage = action.payload.isPage

            state = updateState
        },
    }
})

export const { setIsPages, setLoggedIn } = systemStateSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => systemStateSlice.actions

export default systemStateSlice.reducer