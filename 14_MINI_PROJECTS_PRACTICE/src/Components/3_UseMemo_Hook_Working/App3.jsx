import React, { useMemo, useState } from 'react'
import Use_Custom_Memo from './Use_Custom_Memo';
import './style3.css';
function App3() {
  
 const [counter, setCounter] = useState(0);
 const[ counter2 , setCounter2] = useState(100);
 
  const squareValue = ()=>{
    console.log("Expensive Functions");
    return counter * counter;
  }
   const memoisedSquareValue = Use_Custom_Memo(squareValue , [counter]);
   
  return (
    <div className='App'>
       <h1>3. CUSTOM USEMEMO HOOK IMPLEMENTATION</h1>
      <h2>Counter : {counter}</h2>
      <h2>Squared Counter : {memoisedSquareValue}</h2>
      <button onClick={() =>{setCounter(counter +1)}}>INCREMENT </button>

      <h2>Counter2 : {counter2}</h2>
      <button onClick={()=>{setCounter2(counter2-1)}}>DECREMENT</button> 
    </div>
  )
}

export default App3