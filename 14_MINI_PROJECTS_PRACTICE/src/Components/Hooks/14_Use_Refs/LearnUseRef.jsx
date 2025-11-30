import "./index.css";
import { useRef } from "react";

 const LearnUseRef = () => {
  //   const username = document.getElementById("username");
  //   const password = document.getElementById("password");

  const username = useRef(null);
  const password = useRef(null);

  //   console.log(username.value , passwod.value);

   const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" id="username" ref={username} />
      <br />
      <input type="text" id="password" ref={password} />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default LearnUseRef