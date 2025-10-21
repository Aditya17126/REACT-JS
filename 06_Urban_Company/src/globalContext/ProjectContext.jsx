import React, { createContext, useState } from 'react'
import booking1 from "../../public/assist/booking1.png";
import booking2 from "../../public/assist/booking2.png";
import booking3 from "../../public/assist/booking3.png";
import booking4 from "../../public/assist/booking4.png";
import booking5 from "../../public/assist/booking5.png";
import booking6 from "../../public/assist/booking6.png";
import note1 from "../../public/NoteWorthy/Note1.png";
import note2 from "../../public/NoteWorthy/Note2.png";
import note3 from "../../public/NoteWorthy/Note3.png";
import note4 from "../../public/NoteWorthy/Note4.png";
import note5 from "../../public/NoteWorthy/Note5.png";
import note6 from "../../public/NoteWorthy/Note6.png";
import note7 from "../../public/NoteWorthy/Note7.png";
import note8 from "../../public/NoteWorthy/Note8.png";




export const globalVar = createContext();


function ProjectContext({children}) {
   const {Provider} = globalVar; //& destructuring the globalVar
   const [count , setCount] = useState("");
  //  console.log(children)
   const bookingArr = [booking1 , booking2 ,booking3 , booking4 , booking5 , booking6];
   const NoteWorthyArr = [
    { 
      id:1,
      image : note1 ,
     title : "Wall makeover by Revamp",
    } ,
    {
      image : note2 ,
     title : "Native and Water Purifier",
    } ,
    {
      image : note3 ,
     title : "Kitchen Cleaning",
    } ,
    {
      image : note4 ,
     title : "Laptop ",
    } ,
    {
      image : note5 ,
     title : "Spa Ayurveda",
    } ,
    {
      image : note6 ,
     title : "Native Smart Locks",
    } ,{
      image : note7 ,
     title : "Hair Studio for Women",
    } ,
    {
      image : note8 ,
     title : "AC Service & Repair",
    } ,
  ]
   
  return (
    <>
          {/* console.log({children}) */}
      <Provider value={{count , setCount , bookingArr,NoteWorthyArr}}>
          {children}
      </Provider>
    </>
  )
}

export default ProjectContext