import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Dashboard () {
  const navigate = useNavigate();

  function handleClick(){
    navigate('/')
  }
  
  function handleClick1(){
    navigate('/dashboard/course')
  }
  
  function handleClick2(){
    navigate('/dashboard/mock-test')
  }
  
  function handleClick3(){
    navigate('/dashboard/reports')
  }

  return (
    <div>
      Dashboard Page
      <br />
      <br />
      <button onClick={handleClick}>
        Go To Home
      </button>
      <br />
      <br />
      <button onClick={handleClick1}>
        Go To Courses
      </button>
      <br />
      <br />
      <button onClick={handleClick2}>
        Go To Mockt Test
      </button>
      <br />
      <br />
      <button onClick={handleClick3}>
        Go To Reports
      </button>
      <br />
      <br />
      <Outlet/>
    </div>
  )
}

export default Dashboard 