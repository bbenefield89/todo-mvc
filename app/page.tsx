import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <TodoForm />
      <TodoList />
    </main>
  );
};
