import React, { useState } from 'react'
import Cell from "./Cell";
import "./Style.css"

function App2() {
  const [order ,setOrder] = useState([]);
  const [isDeactivating ,setIsDeactivating] = useState(false);


  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const deactivateCells = function(){
    setIsDeactivating(true)
    const timer = setInterval(()=>{
      setOrder((origOrder)=>{
        const newOrder = origOrder.slice()
        newOrder.pop()

        if(newOrder.length === 0){
          clearInterval(timer)
          setIsDeactivating(false)
        }  

        return newOrder
      })
    },300)
  }

  const activateCells = (index)=>{
    const newOrder = [...order , index]
    setOrder(newOrder);
   console.log(newOrder);

    //Deactivate
    if(newOrder.length === config.flat(1).filter(Boolean).length){
       deactivateCells();
    }
  }

  return (
     <div className="wrapper">
     <h1> GRID LIGHTS </h1>
      <div className="grid" style={{
        gridTemplateColumns:`repeat(${config[0].length} , 1fr)`
      }}>
        {config.flat(1).map((value, index) => {
           return value ? <Cell
            key={index}
            label = {`Cell ${index}`}
            filled={order.includes(index)}
            onClick={() => {
              activateCells(index);
            }}
            isDisabled = {order.includes(index) || isDeactivating}
          /> : <span/>
        })}
      </div>
    </div>
  )
}

export default App2