import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDateTime from "./TodoDateTime";

function Todo() {
 
  const [task, setTask] = useState(()=>{
    const rawTodo = localStorage.getItem("React-Todo");
   
    if(!rawTodo) return [];
   
    return JSON.parse(rawTodo);
  });


  const handleFormSubmit = (inputValue) => {
    const {id , content , checked} = inputValue;

    //? to check if the input feild is empty or  not
    if (!content) return;

    //?  to check if the data is already existing or not
    // if (task.includes(inputValue)) return;
    const check = Array.isArray(task) && task.find((currTask)=> currTask.content === content);
    if(check) return;

    setTask((prevTask) => [...prevTask, {id , content  , checked }]);
  };
  
  //todo ADD DATA TO localStoarge
 useEffect(() => {
    localStorage.setItem("React-Todo", JSON.stringify(task));
  }, [task]);
   
  const handleClearTodoData = () => {
    setTask([]);
  };

 const handleDeleteTodo = (val) => {

    const updatedTask = task.filter((currElem) => {
      return currElem.content !== val;
    });
    setTask(updatedTask);
  };

 //! handle Checked Todo
 const handleCheckedTodo = (clickedTask)=>{
   
  const updatedTask = task.map((currElem)=>{
      if(currElem.content === clickedTask){
        return {...currElem , checked : !currElem.checked}
      } 
      else{
        return currElem;
      }
    })
     
    setTask(updatedTask);
 } 

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDateTime/>
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdLis">
        <ul>
          { Array.isArray(task) && task.map((currElem) => {
            return ( 
              <TodoList
                key={currElem.id}
                data={currElem.content}
                checked={currElem.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo = {handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
}

export default Todo;
