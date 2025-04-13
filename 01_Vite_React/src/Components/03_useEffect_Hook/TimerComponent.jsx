import React, { useEffect, useState } from 'react'



function TimerComponent() {
  const [seconds ,setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(()=>{
      console.log("SetInterval executed");

      setSeconds(function(prevSeconds){
        return prevSeconds +1;  
      })
    },1000)
  
    return () => {
      console.log("Time to stop");
      clearInterval(intervalId);
    }
  }, []);
  
  
  return (
    <div>
      <h1>Second : {seconds}</h1>
    </div>
  )
}

export default TimerComponent