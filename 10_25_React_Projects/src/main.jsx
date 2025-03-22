import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import './index.css'
import App from './App.jsx'
import "./Components/Movie_App/CSS/Index1.css"
import App1 from './App1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
     <App />
   </BrowserRouter> */}

   <App1/>

  </StrictMode>,
)
