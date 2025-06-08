import React, { useState } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

function Redux_Toolkit() {
  const [amount, setAmount] = useState();

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
 
  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }
  
  function handleAmountClick(){
     dispatch(incrementByAmount( amount));
  }

  return (
    <div className="container">
      <button onClick={handleIncrementClick}> + </button>
      <p>COUNT : {count}</p>
      <button onClick={handleDecrementClick}> - </button>
      <br />
      <br />
      <button onClick={handleResetClick}> Reset </button>
      <br />
      <br />
      <input
        type="Number"
        value={amount}
        placeholder="Enter Amount"
        onChange={function (event) {
          setAmount(event.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleAmountClick}> Inc By Value </button>
    </div>
  );
}

export default Redux_Toolkit;
