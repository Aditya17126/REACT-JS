import React, { useContext } from 'react'
import { BioContext, useBioContext } from './ContextApi'

function Home() {
 const {myName , myAge}= useBioContext();
  return (
    <div>Home My name is {myName} and my age is {myAge}</div>
  )
}

export default Home