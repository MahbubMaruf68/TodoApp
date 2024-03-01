import React, { useState } from "react";

export default function NewTodo(props) {
  // using State
  const [todo, setTodo] = useState({ title: "" }, { desc: "" });

  //   For Destructure
  const { title, desc } = todo;

  //  For submit
  const handelSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  //   For handelChange
  const handelChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };
  return (
    <form
      className="flex flex-col justify-center items-center px-5"
      onSubmit={handelSubmit}
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <label
            htmlFor="title"
            className="text-white font-serif font-semibold"
          >
            Title :
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            className="h-10 w-72 rounded-lg px-3"
            onChange={handelChange}
          />
        </div>
        <div className="my-5 flex justify-between items-center">
          <label htmlFor="desc" className="text-white font-serif font-semibold">
            Description :
          </label>
          <input
            type="textarea"
            id="desc"
            name="desc"
            value={desc}
            className="h-16 w-72 rounded-lg px-3"
            onChange={handelChange}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="text-white rounded-md bg-black flex justify-center items-center font-serif font-bold px-5 py-3"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}
