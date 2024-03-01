import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

// create a array with object

export default function Home() {
  const [todos, setTodos] = useState([]);

  const handelAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { todo }];
    });
  };
  const handelRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };
  return (
    <div className="bg-[#101B30] h-full text-center pb-96">
      <div>
        <h1 className="text-5xl font-serif font-semibold text-white py-10">
          Todo App
        </h1>
      </div>
      <NewTodo onAddTodo={handelAddTodo} />
      <Todos todos={todos} onRemoveTodo={handelRemoveTodo} />
    </div>
  );
}
