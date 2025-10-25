import React, { useState } from "react";

function TodoForm({onAddTodo}) {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({id : value , content : value , checked : false});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id : "" , content : "" , checked : false});

  };

  return (
    <section className="form">
      <form onSubmit={(event) => handleFormSubmit(event)}>
        <div className="form-input">
          <input
            type="text"
            autoComplete="off"
            className="todo-input"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
}

export default TodoForm;
