import  { useState } from 'react'

function TodoInput(props)  {
  const {handleAddtodos ,todoValue , setTodoValue} = props

  // const[todoValue, setTodoValue] = useState('');
  return (
    <header>
       <input type="text" value = {todoValue} onChange={(e) => {
           setTodoValue(e.target.value);
       }}  placeholder='Enter ToDo .....'/>

       <button onClick={function(){
             handleAddtodos(todoValue)
             setTodoValue('')
          }}> 
          ADD
       </button>
    </header>
  )
}

export default TodoInput