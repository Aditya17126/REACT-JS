import React, { useState } from 'react'

function App_06() {
    const [color,setcolor]=useState("black")
    
  return (

        <>
    <div className="w-full h-screen duration-200" 
     style={{backgroundColor: color}}
    >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-xl">
          
          <button onClick={() => setcolor("Red")} className="Outline-none  px-4 py-1 rounded-full "
          style={{backgroundColor:"red"}} >Red</button>
          
          <button onClick={() => setcolor("black")} className="Outline-none  px-4 py-1 rounded-full text-white"
          style={{backgroundColor:"black"}} >Black</button>
          
          <button  onClick={() => setcolor("Green")} className="Outline-none  px-4 py-1 rounded-full "
          style={{backgroundColor:"green"}} >Green</button>

          <button onClick={() => setcolor("Yellow")} className="Outline-none  px-4 py-1 rounded-full shadow-lg"
          style={{backgroundColor:"Yellow"}} >Yellow</button>

          <button onClick={() => setcolor("blue")} className="Outline-none  px-4 py-1 rounded-full "
          style={{backgroundColor:"blue"}} >Blue</button>
          
          <button onClick={() => setcolor("Olive")} className="Outline-none  px-4 py-1 rounded-full "
          style={{backgroundColor:"olive"}} >Olive</button>
          
          <button onClick={() => setcolor("White")} className="Outline-none px-4 py-1 rounded-full "
          style={{backgroundColor:"White"}} >White</button>

          <button onClick={() => setcolor("pink")} className="Outline-none  px-4 py-1 rounded-full "
          style={{backgroundColor:"pink"}} >pink</button>

          <button onClick={() => setcolor("Lavender")} className="Outline-none  px-4 py-1 rounded-full "
          style={{backgroundColor:"Lavender"}} >Lavender</button>
    
          <button onClick={() => setcolor("Purple")} className="Outline-none  px-4 py-1 rounded-full "
          style={{backgroundColor:"Purple"}} >Purple</button>


      </div>
    </div>
 </div>

    </>
    
  )
}

export default App_06