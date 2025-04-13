import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();  

  function handleClick(){
     navigate('/about');
  }
  return (
    <div>
      Home Page 
      <button onClick={handleClick}>
         Go To About
      </button>
    </div>
  )
}

export default Home