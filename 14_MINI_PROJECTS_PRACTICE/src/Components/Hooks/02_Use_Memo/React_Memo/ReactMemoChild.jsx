import React from 'react'

function ReactMemoChild() {
  console.log("CHILD RE RENDERING");
  return (
    <div>ReactMemoChild</div>
  )
}

export default React.memo(ReactMemoChild)