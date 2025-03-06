import { useState } from 'react'
import Accordian from './Accordian/index';
// import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Accordian/>
    </>
  )
}

export default App
