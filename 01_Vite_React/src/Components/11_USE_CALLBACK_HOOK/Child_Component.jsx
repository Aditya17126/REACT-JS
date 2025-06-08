import React from 'react'

function Child_Component(props) {
  console.log("Child Component Re-Render again");

  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  );
}

export default React.memo(Child_Component);

//React.memo -> wrap -> component -> component re-rendder tabhi  hoga jab props change honge nahi toh e-render nahi hoga

// if you are sending a function ,then react memo , won't be able to save you from re rendering
// because if a function/component re-renders then its functions gets recreated in it