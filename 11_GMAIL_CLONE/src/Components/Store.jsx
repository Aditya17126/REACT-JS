import React from 'react'
import mailReducer from "./mailSlice"
import userReducer from "./userSlice"
import {configureStore } from "@reduxjs/toolkit";

const store =  configureStore({
  reducer:{
    mail : mailReducer,
    user : userReducer
  },
});

export default store;