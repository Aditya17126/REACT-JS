import React, { useState } from 'react'
import ReactMemoChild from './ReactMemoChild';

function ReactMemoParent() {
  const [state, setState] = useState(0);

  return (
    <div>
        <h1>Counter : {state}</h1>
        <button onClick={()=>setState(state+1)}>INCREMENT</button>
        <ReactMemoChild/>
    </div>
  )
}

export default ReactMemoParent