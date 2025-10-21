import React from 'react'
import './aiAssistant.css'
import ChatComponent from './ChatComponent'

function AiAssistant() {
  return (
    <div className='aiAssistantContainer'>
      Chat Bot using Open Ai
        <div className='chatWrapper'>
            <ChatComponent/>
        </div>
    </div>
  )
}

export default AiAssistant