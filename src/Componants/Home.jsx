import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

// create a array with object

export default function Home() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="bg-[#101B30] h-screen text-center">
      <div>
        <h1 className="text-5xl font-serif font-semibold text-white py-10">
          Todo App
        </h1>
      </div>
      <NewTodo />
      <Todos todos={todos} />
    </div>
  );
}
