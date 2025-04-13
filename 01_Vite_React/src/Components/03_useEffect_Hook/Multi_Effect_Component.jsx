import React, { useEffect, useState } from "react";

function Multi_Effect_Component() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Count Changes", count);
  }, [count]);
  //side-effect Logic will run only when count is changed

  useEffect(() => {
    function intervalId() {
      
      setInterval(function () {
       console.log("SetInetrval is Executed");
        setSeconds(function (prevSeconds) {
          return prevSeconds + 1;
        });

      }, 1000);
    }

    intervalId();
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  //it will run only on first render

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      Multi_Effect_Component
      <br />
      <button onClick={handleClick}>CLICK Count</button>
      <br />
      Count is: = {count}
      <h2>Seconds : {seconds}</h2>
    </div>
  );
}

export default Multi_Effect_Component;
