import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value : 0
  },
  reducers: { 
    // these are called action
    increment(state) {  
      state.value++
    },
    reset(state){
      state.value = 0;
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += Number(action.payload)
    },
  },
})

export const { increment, decrement, incrementByAmount ,reset} = counterSlice.actions
export default counterSlice.reducer