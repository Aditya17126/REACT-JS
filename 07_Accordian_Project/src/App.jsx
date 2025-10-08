import { useState  ,useEffect} from 'react'
import Accordian from './Components/Accordian/index';
import TodoInput from './Components/Todo App/TodoInput';
import TodoList from './Components/Todo App/TodoList';
// import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [todoValue , setTodoValue] = useState('');
  const [todos,setTodos] = useState([]);

 function persistData(newList){
  localStorage.setItem('todos',JSON.stringify({todos : newList}))
 }

  function handleAddtodos(newTodo){
    const newTodoList = [...todos,newTodo];
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter(function(todo , todoIndex){
        return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList);
  }
  
  function handleEditTodo (index){
     const valueToBeEdited = todos[index]
     setTodoValue(valueToBeEdited)
     handleDeleteTodo(index)
  }

 useEffect(() =>{
   if(!localStorage){
    return;
   }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
   
 }, [])

  return (
    <>
      <Accordian/>
      <TodoInput  todoValue = {todoValue} handleAddtodos={handleAddtodos}  setTodoValue = {setTodoValue}/> 
      <TodoList Todo={todos} handleDeleteTodo = {handleDeleteTodo} handleEditTodo = {handleEditTodo}/>
    </>
  )
}

export default App
