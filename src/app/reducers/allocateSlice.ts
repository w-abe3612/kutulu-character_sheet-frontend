import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}


export const allocateSlice = createSlice({
  name: 'allocate',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  incrementByAmount } = allocateSlice.actions

export default allocateSlice.reducer