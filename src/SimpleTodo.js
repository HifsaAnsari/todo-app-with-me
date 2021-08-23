import React, { useState } from "react";
import ReactDOM from "react-dom";

function SimpleTodo() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
  
    return (
      <div className="App">
        <ul>
          {todoList.map(e => (
            <li>{e}</li>
          ))}
        </ul>
        <input
          type="text"
          value={todo}
          placeholder="type here..."
          onChange={e => setTodo(e.target.value)}
        />
        <button onClick={_ => setTodoList([...todoList, todo])}>Add</button>
      </div>
    );
  }
export default SimpleTodo
