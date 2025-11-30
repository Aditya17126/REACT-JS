import React, { useReducer } from 'react'

let initialVal = {
  count : 0,
}
function handleCount(state , action){
  
  console.log(state);
  console.log(action);
  console.log(action.type);

  if(action.type === "INCREMENT"){
    return {
      count: state.count + 1,
    }
  }
  else if(action.type === "DECREMENT"){
    return {
      count: state.count - 1,
    }
  }
  else if(action.type === "RESET"){
    return {
      count : state.count = 0,
    }
  }
  else{
    throw Error(action.type);
  }
}

function UseReducer() {
  let [val , setVal] = useReducer(handleCount , initialVal)

  return (
    <div>
       <h1>Count : {val.count}</h1>
       <button onClick={()=>{setVal({type : "INCREMENT"})}}>INCREMENT</button>
       <button onClick={()=>{setVal({type : "DECREMENT"})}}>DECREMENT</button>
       <button onClick={()=>{setVal({type : "RESET"})}}>RESET</button>

    </div>
  )
}

export default UseReducer
//* It is a hook which accepts two argument
//* 1. CallBackFunction 
//* 2. Initial Value 
//* and it returns one array 
//* first element holds the initial value second element dates