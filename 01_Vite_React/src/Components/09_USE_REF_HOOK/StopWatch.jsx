import React, { useRef } from "react";
import { useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
 
  let timeRef = useRef(null);
 
  function startTimer() {
    timeRef.current = setInterval(() => {
      setTime(time => time +1);
    }, 1000);
    console.log(timeRef.current);
  }

  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = null
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h1>StopWatch : {time} seconds</h1>
      
      <button onClick={startTimer}>START</button>
        <br /> <br />
      
      <button onClick={stopTimer}>STOP</button>
      <br /> <br />

      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default StopWatch;
