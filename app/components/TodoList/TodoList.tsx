"use client";

import useTodoController from "@/app/controllers/useTodoController";
import { MouseEvent } from "react";

const TodoList = () => {
  const { todos, removeTodo } = useTodoController();
  
  const handleDeleteTodoById = (e: MouseEvent<HTMLButtonElement>) => {
    const todoId = e.currentTarget.getAttribute("data-todo-id");
    const todoIdNumber = Number(todoId);

    if (todoId && !isNaN(todoIdNumber)) {
      removeTodo(todoIdNumber);
    }
  };
  
  return (
    <ul>
      {todos.map((t) => {
        return (
          <li key={t.id}>
            <span>{t.title}</span>
            {" "}
            <button data-todo-id={t.id} onClick={handleDeleteTodoById}>X</button>
          </li>
        );
      })}
    </ul>
  )
};

export default TodoList;