import React, { useEffect, useState } from 'react'
 


function Resize_Component() {
   const [windowWidth , setWindowWidth]=useState(window.innerWidth);


  useEffect(() => {
    function handleResize(){
      setWindowWidth(window.innerWidth);
    }
    console.log("Event Listener Added");
    window.addEventListener('resize',handleResize);

    return () => {
      console.log("Event Listener Removed");
     window.removeEventListener('resize',handleResize);
    }
  }, [])
 //NO DEPENDENCIES therfore it will render for the first render  

  return (
    <div>
      Resize_Component
      <h1> Window width:{windowWidth} px</h1>
    </div>
  )
}

export default Resize_Component