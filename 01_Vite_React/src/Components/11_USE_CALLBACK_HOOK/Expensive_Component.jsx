import React, { useCallback, useState } from "react";

function Expensive_Component() {
  
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const expensiveTask = useCallback(() => {
    let num = 0;
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 1000; i++) {
      num = num + i;
    }
    return num;
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count
      </button>

      <div>CALCULATION ANS : {expensiveTask()}</div>
      <p>Count : {count}</p>
      <input
        type="number"
        placeholder="Enter Number"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
    </div>
  );
}

export default Expensive_Component;
