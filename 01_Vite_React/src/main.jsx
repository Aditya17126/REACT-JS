import React, { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './Components/08_REDUX_TOOLKIT/Store.js'


createRoot(document.getElementById('root')).
render(

/* <StrictMode> 

  { <Provider store={Store}>  
    <App/>
  </Provider> }

   </StrictMode>*/
   
  <App/>
 
)
