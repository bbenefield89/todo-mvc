import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { GenerateTodo, Todo } from "../models/Todo";

interface ITodoContext {
  todos: Todo[];
  todoTitle: string;
  addTodo: () => void;
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  setTodoTitle: Dispatch<SetStateAction<string>>;
}

interface ITodoProvider {
  children: ReactNode;
}

const TodoContext = createContext({} as ITodoContext);

const TodoProvider = ({ children }: ITodoProvider) => {
  const [todos, setTodos] = useState<Todo[]>([
    GenerateTodo("Test", 0)
  ]);
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

  const providerValue = {
    todos,
    todoTitle,
    addTodo,
    completeTodo,
    removeTodo,
    setTodos,
    setTodoTitle,
  }
  
  return (
    <TodoContext.Provider value={providerValue}>
      {children}
    </TodoContext.Provider>
  );
};

export {
  TodoContext,
  TodoProvider,
}
