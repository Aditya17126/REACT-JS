import React, { useState } from "react";
import "./Style.css";
import { Minus, Plus, Redo2, Undo2 } from "lucide-react";

function Counter() {
  const [history, setHistory] = useState([0]);
  const [position, setPosition] = useState(0);
   
  const currentValue = history[position];
  
  const addValueToHistory = (newValue)=>{
    const newHistory = history.slice(0,position + 1);
    setHistory([...newHistory , newValue]);
    setPosition(position + 1);
  }
   
  console.log(history , position)
  
  const decrement = () => addValueToHistory(currentValue -1);
  const increment = () => addValueToHistory(currentValue +1);
  
  const undo = ()=>{
    if(position > 0){
      setPosition(position - 1)
    }
  } 
  const redo = ()=>{
    if(position < history.length -1){
      setPosition(position + 1);
    }      
  } 

  return (
    <div className="counter-container">
    
      <h1>Counter with Undo/Redo</h1>
    
      <div className="counter-content">
       
        <div className="value-wrapper">
          <div className="value-text" style={{color:"yellow"}}>{currentValue}</div>
        </div>

        <div className="button-row">
          <button onClick={decrement}>
            <Minus className="icon-small" />
          </button>
          <button onClick={increment}>
            <Plus className="icon-small" />
          </button>
        </div>

        <div className="undo-redo-row">

           <button disabled={position === 0} onClick={undo} variant={"Secondary"}>
            Undo <Undo2 className="icon-small"/>
           </button>
          
            <div className="history-indicator">
              {position + 1} / {history.length }
            </div>
          
            <button disabled={position === history.length} onClick={redo} variant={"Secondary"}>
             Redo <Redo2 className="icon-small"/>
           </button>
        </div>

      </div>

    </div>
  );
}

export default Counter;
