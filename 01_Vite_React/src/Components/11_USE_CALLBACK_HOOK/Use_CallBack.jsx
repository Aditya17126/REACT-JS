import React, { useCallback, useState } from "react";
import Child_Component from "./Child_Component";

function Use_CallBack() {
  const [count, setCount] = useState(0);

  let handleClick = useCallback(() =>{
    setCount(count +1);
  },[count]);

  return (
    <div>
      <button onClick={handleClick}>Increment +</button>
      <br />
      <div>Count :{count}</div>
      <br />
      <div>
        <Child_Component buttonName="Click ME " handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Use_CallBack;
