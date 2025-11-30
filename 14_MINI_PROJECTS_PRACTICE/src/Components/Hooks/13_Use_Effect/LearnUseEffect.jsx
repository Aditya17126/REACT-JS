import React, { useEffect, useState } from 'react'
import './index.css'

function LearnUseEffect() {
  const [date, setDate] = useState(0);
  const [time , setTime] = useState(0);
 
  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date();
      const updatedTime = new Date();

      setDate(updatedDate.toLocaleDateString());
      setTime(updatedTime.toLocaleTimeString());

    }, 1000);
  }, []);

  return (
    <div className="container effect-container">
      <h1> Date : {date} </h1>
      <h1>Time : {time}</h1>
    </div>
  )
}

export default LearnUseEffect