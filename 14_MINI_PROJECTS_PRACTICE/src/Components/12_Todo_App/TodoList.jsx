import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

function TodoList({ data ,checked, onHandleDeleteTodo , onHandleCheckedTodo}) {
  return (
    <div>
      <li  className="todo-item">
        
        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>

        <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
          <MdCheck />
        </button>

        <button
          className="delete-btn"
          onClick={() => onHandleDeleteTodo(data)}>
          <MdDeleteForever />
        </button>

      </li>
    </div>
  );
}

export default TodoList;
