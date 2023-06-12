"use client";

import { Provider } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { store } from "./controllers/store";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    </main>
  );
};
