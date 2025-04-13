import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import './index.css'
import App from './App.jsx'
import "./Components/04_Movie_App/CSS/Index1.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <BrowserRouter>
     <App />
   </BrowserRouter>
    {/* <App/> */}
    

  </StrictMode>,
)
