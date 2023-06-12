import { TodoContext } from "@/app/controllers/TodoContextController";
import { MouseEvent, useContext } from "react";

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodoContext);
  
  const handleDeleteTodoById = (e: MouseEvent<HTMLButtonElement>) => {
    const todoId = e.currentTarget.getAttribute("data-todo-id");
    const todoIdNumber = Number(todoId);

    if (todoId && !isNaN(todoIdNumber)) {
      removeTodo(todoIdNumber);
    }
  };
  
  return (
    <ul>
      {todos.map((t: any) => {
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