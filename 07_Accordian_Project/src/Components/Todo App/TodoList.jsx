import React from 'react'
import TodoCard from './TodoCard'

function TodoList(props) {
 
  const {todos} = props

  return (
    <ul className='main'>
      {props.Todo.map((todo , todoIndex) => {
        
        return(
        <TodoCard {...props} key= {todoIndex} index = {todoIndex} 
        >
           <p>{todo}</p>
        </TodoCard>

        )
      
       
      })}
     
    </ul >
  )
}

export default TodoList