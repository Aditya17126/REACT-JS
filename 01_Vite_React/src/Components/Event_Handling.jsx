import React from 'react'

function Event_Handling() {
 
  function handleInputChange(event) {
    console.log("Input me Value Change hue hi" , event.target.value );
  }

  function handleSubmit(event){
    event.preventDefault();
    alert("form submit kardu kya");
  }

  return (
    <div>
    
    {/* IMMEDIATE INVOCATION */}
    <button onClick={function() {alert("Button Clcik hua hai")}}>
     Click Me
    </button>  

    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
       <button type='submit'>Submit </button>
    </form>

    </div>
  )
}

export default Event_Handling