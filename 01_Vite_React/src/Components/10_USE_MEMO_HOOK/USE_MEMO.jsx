import React, { useMemo, useState } from "react";

function USE_MEMO() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    // for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }
  let double = useMemo(() => expensiveTask(input) , [input]);
  
  

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment +
      </button>

      <div>COUNT : {count}</div>

      <input
        type="number"
        placeholder="Enter Number"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <div>
        Double:{double};
      </div>
    </div>
  );
}

export default USE_MEMO;
