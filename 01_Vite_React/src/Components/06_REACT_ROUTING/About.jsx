import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();

  function handleClick(){
    navigate('/dashboard')
  }
  return (
    <div>
      About Page
      <button onClick={handleClick}>
        Go To DashBoard
      </button>
    </div>
  )
}

export default About