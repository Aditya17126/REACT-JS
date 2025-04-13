import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  //first -> side-Effect function
  //second -> clean up function
  //third -> comma seperated dependencies  list

  //variation:1
  //RUNS ON EVERY RENDER
  // useEffect(() => {
  //   alert("I will run on each render");
  // });

  //Variation : 2
  //RUNS ON ONLY FIRST RENDER
  // useEffect(() => {
  //   alert("I will run on first render");
  // }, []);

  //Variation:3
  //Runs When the Dependencies Gets Updated
  // useEffect(()=>{
  //   alert("I will Run every Time When Count is Updated");
  // },[count])

  //Variation 4:
  //MULTIPLE DEPENDENCIES
  // useEffect(() => {
  //   alert("I will run every time when count/total is Updated");
  // }, [count , total])
  
 
  //Variation:5
  //LETS ADD A CLEANUP FUNCTION
  // useEffect(() => { 
  //   alert("Count is Updated",{count});
  
  //   return () => {
  //     alert("Count is unmounted from UI",{count});
  //   }
  // }, [count])
  
  function handleTotal() {
    setTotal(total + 1);
  }

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      UseEffect
      <br />
      <button onClick={handleClick}>CLICK Count</button>
      <br />
       Count is: = {count}
      
      <br />
      <button onClick={handleTotal}>CLICK Total</button>
      <br />
       Total is: = {total}

    </div>
  );
}

export default UseEffect;
