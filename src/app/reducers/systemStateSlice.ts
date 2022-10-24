import { createSlice, PayloadAction,createAsyncThunk,current } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { systemStateType } from '../type'
import { useCheckLoggedIn } from '../queries/AuthQuery'
import crypto from 'crypto-js';

const initState: systemStateType = {
    isLoggedIn: '0',
    isPage:'',
    userId: null,
    userName: ''
}

const initialState = initState

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
        setIsPage:(state, action: PayloadAction<any>) => {
            let updateState: systemStateType = state
            updateState.isPage = action.payload.isPage
            return updateState
        },
        setLoggedIn: (state, action: PayloadAction<any>) => {
            let updateState: systemStateType = state

            // todo このへんの処理って多分ここでやるべきじゃない
            const localIsLoggedIn = crypto.AES.encrypt('1', process.env.HASH_KEY ? process.env.HASH_KEY: '' ).toString();
            const localId         = crypto.AES.encrypt( String(action.payload.userId), process.env.HASH_KEY ? process.env.HASH_KEY: '' ).toString();
            const localName       = crypto.AES.encrypt( action.payload.userName, process.env.HASH_KEY ? process.env.HASH_KEY: '' ).toString();

            localStorage.setItem('isLoggedIn', localIsLoggedIn);
            localStorage.setItem('userId', localId);
            localStorage.setItem('userName', localName);

            updateState.isLoggedIn = action.payload.isLoggedIn
            updateState.userId = action.payload.userId
            updateState.userName = action.payload.userName

            return updateState
        },
        setLogout:(state) => {
            let updateState: systemStateType = state

            // todo このへんの処理って多分ここでやるべきじゃない
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('userId')
            localStorage.removeItem('userName')

            updateState.isLoggedIn  = '0'
            updateState.userId      = null
            updateState.userName    = ''
            state = updateState

            return updateState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(isCheckLoggedIn.fulfilled, (state, action) => {
            let updateState: systemStateType = state
            if ( action.payload.id !== null 
                && action.payload.name !== '' ) {

                // todo このへんの処理って多分ここでやるべきじゃない
                const localIsLoggedIn = crypto.AES.encrypt('1', process.env.HASH_KEY ? process.env.HASH_KEY: 'abc' ).toString();
                const localId         = crypto.AES.encrypt( String(action.payload.id), process.env.HASH_KEY ? process.env.HASH_KEY: 'abc' ).toString();
                const localName       = crypto.AES.encrypt( action.payload.name, process.env.HASH_KEY ? process.env.HASH_KEY: 'abc' ).toString();

                localStorage.setItem('isLoggedIn', localIsLoggedIn);
                localStorage.setItem('userId', localId);
                localStorage.setItem('userName', localName);

                updateState.isLoggedIn  = '1'
                updateState.userId      = action.payload.id
                updateState.userName    = action.payload.name
            }

            return updateState
        });
      }
})

export const { setLoggedIn,setLogout,setIsPage } = systemStateSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => systemStateSlice.actions

export default systemStateSlice.reducer