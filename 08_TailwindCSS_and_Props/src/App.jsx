import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  let arr = [1,2,3,4,5,6];

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-2xl'> Tailwind Test </h1>
     <Card name = "Aditya" age ="21" {...arr}/>
     <Card name = "abhinav" age = "22" {...arr}/>
     <Card name="abhishek" age="23"/>
     <Card name ="avneet" age="24"/>
    </> 
  )
}

export default App
