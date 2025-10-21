import React, { useContext } from 'react'
import { globalVar } from '../globalContext/ProjectContext'

function NewWorthy() {
  const {NoteWorthyArr} = useContext(globalVar)
  return (
    <div className='newWorthy'>
       <h1>New And Noteworthy</h1>
        <div className='img-container'>
           {
             NoteWorthyArr.map((elem , idx)=>{
               return (
                  <div className='card'>
                      <img src={elem.image} alt="" />
                      <p>{elem.title}</p>
                  </div> 
                
               ) 
             })
           }
        </div>
    </div>
  )
}

export default NewWorthy