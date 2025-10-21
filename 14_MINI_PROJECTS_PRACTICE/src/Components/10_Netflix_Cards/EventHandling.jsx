import React from 'react'
import './Evhandle.css'

function EventHandling() {
   
  //  function handleButtonClick(event) {
  //    console.log(event)
  //    alert('Iam learning event handling in js ')
  //  }

   const handleButtonClick = (event) =>{
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    alert('I am using fat arrow fuction')
   }

   const handleWelcomeUser = (user) => {
    console.log(`Hey ${user}, Welcome`);
  };
  
  return (
    <div>
        {/* //? function component with name function 
         //* Remember how we haven't called this function, if you call this function here  then it will run without even clicking. You just need to pass reference and not call here. */}

      <button onClick={handleButtonClick}>Click Here 1</button>
      <br />
      <br />

      {/* //? In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function. This is because the arrow function creates a new function and calls your handler without passing any arguments. */}

      <button onClick={(e) => handleButtonClick(e)}>Click Here 2</button>
      <br />
      <br /> 
      <button onClick={() => handleButtonClick()}>Click Here 3</button>
       <br />
       <br />

        {/* /* //? Inline Event Handlers} */}
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      <br />
      <br />

      {/* //? Function Components with Inline Arrow Functions */}
      <button onClick={() => alert("Hey I am inline evnt function")}>
        Inline Arr fun
      </button>
      <br />
      <br />

      {/*  //? Passing Arguments to Event Handlers } */}

      {/* <button onClick={handleWelcomeUser("vinod")}>click Me</button> */}
      <button onClick={() => handleWelcomeUser("ADITYA BILLIONAIRE")}>click Me</button>
      <br />
      <br />
      <button onClick={() => handleWelcomeUser("ADITYA")}>click Me</button>
    </div>
  )
}

export default EventHandling