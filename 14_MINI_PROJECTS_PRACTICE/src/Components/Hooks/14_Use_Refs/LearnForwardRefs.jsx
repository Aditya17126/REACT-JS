import React, { forwardRef, useId, useRef } from 'react'
import './index.css'

function LearnForwardRefs() {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit= (event) =>{
    event.preventDefault();
    console.log(username.current.value , password.current.value)
  }
  return (
    <div>
       <form onSubmit={handleFormSubmit}>
      {/* <BeforeReact19Input label="username" ref={username} />    
      <BeforeReact19Input label="password" ref={password} />    */}
       <AfterReact19Input label="username" ref={username} />    
      <AfterReact19Input label="password" ref={password} />     
      <button>Submit</button>
    </form>
    </div>
  )
}

// const BeforeReact19Input = forwardRef((props, ref) => {
//   const id = useId();
//   return (
//     <div>
//        <h1>Learning ForwardRefs</h1>
//       <label htmlFor={id}>{props.label}</label>
//       <input type="text" ref={ref} />
//        <br />
//        <br />
//     </div>
//   );
// });

// afterReactv19
const AfterReact19Input = (props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={props.ref} />
    </div>
  );
};

export default LearnForwardRefs