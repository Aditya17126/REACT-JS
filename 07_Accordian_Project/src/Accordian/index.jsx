//single selection
//multiple selction
import { useState } from "react";
import accordionData from "./data";
import './styles.css';
 
export default function Accordian() {

  const [selected , setSelected] = useState(null); //integer
  const [flag , setFlag] = useState(false); // bool type
  const [multiple,setMultiple] = useState([]); //array type

  function handleMultipleSelection(getCurrentId){
    let cpyMultiple =  [...multiple];
    const findindex = cpyMultiple.indexOf(getCurrentId);

    console.log(findindex);
    if(findindex === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findindex , 1);
    
    setMultiple(cpyMultiple);
  }
  function handleSingleSelection(getCurrentId){
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  console.log(selected , multiple);
  
  return ( 
    // <div> ADITYA </div>
   <div className="wrapper">
     <button onClick={() => setFlag(!flag)} > Enable Multiple Selection</button>
     <div className="accordian">
      {
         accordionData && accordionData.length > 0 ? (
         accordionData.map((dataitem)=> (
         <div className="item">
            <div onClick={
              flag == true 
              ? ()=> handleMultipleSelection(dataitem.id) 
              : ()=> handleSingleSelection(dataitem.id)
              } 
              
              className="title">
             
              <h3>{dataitem.question}</h3>
              <span>+</span>
            
            </div>
            {
              flag == true ? multiple.indexOf(dataitem.id) !== -1 && (
                <div className="content">{dataitem.answer}</div>
              )
              : selected === dataitem.id && (
                <div className="content">{dataitem.answer}</div>

              )
            }
          </div>
          ))
       ):(
            <div>No data found</div>
          )}
     </div>
  </div>
  );
}