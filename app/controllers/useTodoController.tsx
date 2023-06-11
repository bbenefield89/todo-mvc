import { useEffect, useState } from "react"
import Todo from "../models/Todo"

const useTodoController = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [myString, setMyString] = useState("");

  const addTodo = () => {
    const min = 100_000;
    const max = 999_999;

    const newTodo = new Todo(
      Math.floor(Math.random() * (max - min + 1)) - min,
      todoTitle,
      false
    );

    setTodos([...todos, newTodo]);
    setMyString("Hello");
  };

  const completeTodo = (id: number) => {
    const todosClone = structuredClone(todos);
    const todoIndex =  todosClone.findIndex(t => t.id === id);

    if (todoIndex !== -1) {
      todosClone[todoIndex].isComplete = true;
      setTodos(todosClone)
    }
  };

  const removeTodo = (id: number) => {
    const todosClone = structuredClone(todos);
    const todoIndex = todosClone.findIndex(t => t.id === id);

    if (todoIndex !== -1) {
      todosClone.splice(todoIndex, 1);
      setTodos(todosClone);
    }
  };

  return {
    myString,
    todos,
    todoTitle,
    addTodo,
    completeTodo,
    removeTodo,
    setTodoTitle,
  };
};

export default useTodoController;
