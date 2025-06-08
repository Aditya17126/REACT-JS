import { useEffect, useState } from "react";




function RandomColor(){
  const [typeOfColor , setTypeOfColor] = useState('hex');
  const [color,setColor] = useState('#000000');
  
 function handleCreateRandomHexColor(){
   const hexarr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
   let hexcolor = "#";
   
   for(let i =0 ;i<6;i++){
     hexcolor = hexcolor + Math.floor(Math.random()*hexarr.length);
    }
    
    // alert("Generated an hex Color:" + hexcolor);

   setColor(hexcolor);
 }

 function handleCreateRandomRgbColor(){
   const r = Math.floor(Math.random()*256);
   const g = Math.floor(Math.random()*256);
   const b = Math.floor(Math.random()*256);
   
   setColor(`rgb(${r},${g},${b})`);
 }
 useEffect(function(){
   if(typeOfColor === 'rgb') handleCreateRandomRgbColor();
   else handleCreateRandomHexColor();
 } , [typeOfColor] );

  return (
    <>
      <div style = {{
        width:"100vw",
        height:"100vh",
        background : color,
       
        }}>
        <div style= {{
          marginBottom:"20px",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:'center',
          // marginTop:"50px",
        }}>
         <button> Generated Color :{typeOfColor}: {color};</button>
        </div>
        <button onClick={()=> setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={()=> setTypeOfColor('rgb')}>Generate RGB Color</button>
        <button 
           onClick={
              typeOfColor === 'hex' ? 
              handleCreateRandomHexColor : 
              handleCreateRandomRgbColor
              }>
            Generate Random Color
        </button>
      
      
      </div>
    </>
  )

} 

export default RandomColor;