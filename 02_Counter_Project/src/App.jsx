import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  
  let [cnt,setcnt]=useState(0);
  

  const  addvalue = () =>{
    if(cnt<20){
    cnt++;
    setcnt(cnt);
    }
    console.log("VALUE ADDED",cnt);

  }
  const removeValue = () =>{
    console.log("VALUE REMOVED" ,cnt);
    if(cnt >0){
    cnt--;
    setcnt(cnt);
    }
  }
  return (
  <>
   <h1>ADITYA IS LEARNING REACT WITH CHAI</h1>
   <h2>Counter Value:{cnt}</h2>
   <button onClick={addvalue}>Add Value{cnt}</button><br />
    <button onClick={removeValue}>Remove Value{cnt}</button>
    
    <h1 className='bg-green-600 text-black rounded-xl p-4'>Tailwind Test</h1>
  <Card username="Aditya" btntext="Click Karke Dekh"/>
  </> 
  )
}

export default App
