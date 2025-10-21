import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/HomePage'
import ProjectContext from './globalContext/ProjectContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProjectContext>
        <HomePage/>
      </ProjectContext>
    </>
  )
}

export default App
