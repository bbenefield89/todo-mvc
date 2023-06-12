import { useState } from "react"
import { GenerateTodo, Todo } from "../models/Todo";

const useTodoController = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoTitle, setTodoTitle] = useState("");

  const addTodo = () => {
    const newTodo = GenerateTodo(todoTitle);
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id: number) => {
    const todosClone = structuredClone(todos);
    const todoIndex = todosClone.findIndex(t => t.id === id);

    if (todoIndex !== -1) {
      todosClone[todoIndex].isComplete = true;
      setTodos(todosClone)
    }
  };

  const removeTodo = (id: number) => {
    const todosClone = structuredClone(todos);
    const todoIndex = todosClone.findIndex((t: Todo) => {
      console.log(t.id);
      return t.id === id
    });

    if (todoIndex !== -1) {
      todosClone.splice(todoIndex, 1);
      setTodos(todosClone);
    }
  };

  return {
    todos,
    todoTitle,
    addTodo,
    completeTodo,
    removeTodo,
    setTodoTitle,
  };
};

export default useTodoController;
