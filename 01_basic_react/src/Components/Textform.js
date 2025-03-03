import React from 'react'
import { useState } from 'react'


export default function Textform(props) {
  const[text,setText] = useState("");
//  text = "new text"; Wrong way to change the text
//  setText("new text"); correct way to change the text

  const handleuppercase =()=>{
  //  console.log('uppercase is clicked'+ text);
   let newtext = text.toUpperCase();
   setText(newtext);
 }
 const changearea=(event)=>{
  //  console.log(" we are on change area");
   setText(event.target.value);
 }
 
  return (
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={changearea} id="exampleFormControlTextarea1" rows="3"></textarea>
      
    </div>
    <button className="btn btn-primary" onClick={handleuppercase}>Convert to Uppercase</button>
    </div>
  )
}
