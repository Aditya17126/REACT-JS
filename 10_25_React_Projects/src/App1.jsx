import React, { useState } from 'react'
import LogoutBtn from './Components/Conditional_Rendering_Concept/LogoutBtn';
import LoginBtn from './Components/Conditional_Rendering_Concept/LoginBtn';

function App1() {
 const[isLoggedIn , setIsLoggedIn] = useState(true);

 
//  (2.) TERNARY OPERATOR , LOGICAL OPERATOR
 return(
     <div>
        {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
        {isLoggedIn && <LogoutBtn/>};
     </div>
  )  

  // (1.) IF-ELSE CONDITIONAL-RENDERING
  // if(isLoggedIn == 'True'){

  //   return (
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //    return(
  //     <LoginBtn/>
  //    )
  // }
}

export default App1