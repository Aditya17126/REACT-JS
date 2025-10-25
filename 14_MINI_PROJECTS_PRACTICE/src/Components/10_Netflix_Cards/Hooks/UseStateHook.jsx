import React, { useState } from 'react'

function UseStateHook() {
  let value = 0;
  const [count , setCount] = useState(0);

  const handleButtonClick = ()=>{
     setCount(count+1);
  }

  return (
    <div className='main-div'>
       <h1>{count}</h1>
       <button onClick={handleButtonClick}>Increment</button>

    </div>
  )
}

export default UseStateHook