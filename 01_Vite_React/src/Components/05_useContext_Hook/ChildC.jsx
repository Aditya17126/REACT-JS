import React, { useContext } from 'react'
import { UserContext } from './Context_Hook'
 import {ThemeContext} from './Context_Hook'
 

function ChildC() {
  const user = useContext(UserContext);
   const {theme , setTheme}= useContext(ThemeContext);
  
   function handleClick(){
     if(theme === 'Light'){
         setTheme('Dark');
     }
     else{
      setTheme('Light');
     }
   }

  return (
    <div>
      ChildC : {user.name}
      <button onClick={handleClick}>
        Change Theme
      </button>
    </div>
  )
}

export default ChildC