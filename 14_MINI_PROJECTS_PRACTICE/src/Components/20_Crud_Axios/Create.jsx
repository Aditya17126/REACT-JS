import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [val, setVal] = useState({
    name: "",
    email: "",
    phone: "",
  });
  console.log(val);
  
  let navigate = useNavigate();

  function handleSubmit (e){
    e.preventDefault();

    axios.post("http://localhost:3030/users" ,val)
    .then((res)=>{
      console.log(res);
      navigate("/")
    }).catch((error)=>console.log(error))
  }
  return (
    <div>
      <h1>Add Users</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">NAME </label>
          <input
            type="text"
            id="name"
            onChange={(event) => {
              setVal({ ...val, name: event.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone No </label>
          <input
            type="tel"
            id="phone"
            onChange={(event) => {
              setVal({ ...val, phone: event.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            onChange={(event) => {
              setVal({ ...val, name: event.target.value });
            }}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
}

export default Create;
