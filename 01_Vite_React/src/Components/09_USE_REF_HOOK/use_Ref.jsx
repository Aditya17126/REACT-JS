import React, { useEffect, useRef, useState } from "react";

function Use_Ref() {
  const [count, setCount] = useState(0);
  let val = useRef(0);
  let btnRef = useRef();

  function handleIncrement() {
    val.current = val.current + 1;
    console.log(val.current);
    setCount(count + 1);
  }
  //IT GETS RENDER EVERY TIME
  useEffect(() => {
    console.log("I am Getting render evry time when you click increment ");
  });

  function changeColor() {
     btnRef.current.style.backgroundColor = "red"
  }

  return (
    <div>
      <button  ref={btnRef}  onClick={handleIncrement}>Increment +</button>
      <br />

      <button onClick={changeColor}>Change Color of Button</button>

      <br />
      <div>Count : {count}</div>
    </div>
  );
}

export default Use_Ref;
