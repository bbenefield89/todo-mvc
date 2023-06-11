"use client";

import useTodoController from "@/app/controllers/useTodoController";
import { ChangeEvent, SyntheticEvent, useEffect } from "react";

const TodoForm = () => {
  const { todoTitle, addTodo, setTodoTitle, } = useTodoController();
  
  const handleTodoFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addTodo();
  };

  const handleTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };
  
  return (
    <form onSubmit={handleTodoFormSubmit}>
      <label className="hidden" htmlFor="todo-input">Todo Title</label>
      <input
        className="text-black"
        type="text"
        placeholder="Todo Title"
        value={todoTitle}
        onChange={handleTodoInputChange}
      />
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default TodoForm;