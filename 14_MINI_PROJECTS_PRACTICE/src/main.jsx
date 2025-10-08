import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './Components/1_Progress_Bar/App.jsx'
import App2 from './Components/2_Grid_Lights/App2.jsx'
import App3 from './Components/3_UseMemo_Hook_Working/App3.jsx'
import App4 from './Components/4_Like_Button/App4.jsx'
import App5 from './Components/5_Load_More_Buttons/App5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>BASIC REACT JS PROJECTS</h1>
    {/* <App/>
    <App2/>
    <App3/>
    <App4/> */}
     <App5/>
  </StrictMode>,
)
