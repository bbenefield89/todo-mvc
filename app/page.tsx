"use client";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./controllers/TodoContextController";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </main>
  );
};
