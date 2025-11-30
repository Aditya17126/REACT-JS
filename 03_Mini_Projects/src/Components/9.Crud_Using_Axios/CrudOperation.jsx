import React, { useEffect } from 'react'
import { getPost } from './Api/PostApi'
import Posts from './Posts';
import './Crud.css'
function CrudOperation() {
   
  
  
  return (
    <section className='main-section'>
       <h1>Crud Operations Using Axios</h1>
       <Posts/>
    </section>
  )
}

export default CrudOperation