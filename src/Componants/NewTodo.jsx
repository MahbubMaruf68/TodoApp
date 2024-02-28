import React, { useState } from "react";
import Todos from "./Todos";

export default function NewTodo(props) {
  const [todo, setTodo] = useState("");
  const handelInputChange = (event) => {
    setTodo(event.target.value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    props.onTodo(todo);
  };
  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="Todo">New Todo : </label>
      <input
        type="text"
        id="Todo"
        name="Todo"
        value={todo}
        onChange={handelInputChange}
        className="h-10 w-52 border-2"
      />
      <button className="h-10 w-fit border-2">Add Todo</button>
    </form>
  );
}
