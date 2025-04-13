import React from 'react'

function Card(props) {
  return (
    <div>
      <input type="text" value={props.name} onChange={function(event){
        console.log(event);
        props.setName(event.target.value);
      }}/>
         
      <p>Name state Variable ki Vlaue inside Card {props.title}: {props.name}</p>   
      
    </div>
  )
}

export default Card