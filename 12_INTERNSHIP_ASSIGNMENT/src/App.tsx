import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import SideBar from './Components/SideBar/SideBar';

function App() {
 
  const current_theme = localStorage.getItem('current_theme');
 const [theme , setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {  
    localStorage.setItem('current_theme' , theme);
  }, [theme])
  
  return (
   <div className={`container ${theme}`} >
    {/* <Navbar theme={theme} setTheme = {setTheme} /> */}
    <SideBar/>
   </div>
  )
}

export default App
