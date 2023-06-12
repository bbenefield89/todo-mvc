"use client";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodoController from "./controllers/useTodoController";

export default function Home() {
  const {
    todos,
    todoTitle,
    addTodo,
    removeTodo,
    setTodoTitle,
  } = useTodoController();
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <TodoForm {...{ todoTitle, addTodo, setTodoTitle }} />
      <TodoList {...{ todos, removeTodo }} />
    </main>
  );
};
