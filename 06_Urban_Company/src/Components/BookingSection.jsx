import React, { useContext } from 'react'
import { globalVar } from '../globalContext/ProjectContext'

function BookingSection() {
  
  const {bookingArr} = useContext(globalVar) //* 
  
  return (
    <section className = "bookingSection">
       {
        bookingArr.map((elem ,idx)=>{
           return <img src= {elem} alt=""  />
        })
       }
    </section >
  )
}

export default BookingSection