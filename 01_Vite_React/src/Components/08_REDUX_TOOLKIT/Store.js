import React from 'react'
import { configureStore  } from '@reduxjs/toolkit'
import counterReducer from "./counterSlice"

export  const Store = configureStore({
  reducer :{
      counter : counterReducer
  },
})

export default Store 

// STEPS::
//  1. CREATE STORE.JS FILE
//  2.WRAP APP COMPONENT UNDER PROVIDER(react - redux) IN MAIN.JSX 
//  3. PROVIDED STORE IN MAIN.JSX THAT IS STORE.JS
//  4.CREATE counterSlice.jsx 
//  5.REGISTER REDUCER IN STORE.JS