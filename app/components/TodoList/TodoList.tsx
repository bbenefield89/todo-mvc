import useTodoController from "@/app/controllers/useTodoController";
import { Todo } from "@/app/models/Todo";
import { MouseEvent } from "react";

interface ITodoList {
  todos: Todo[]
};

const TodoList = (props: any) => {
  const handleDeleteTodoById = (e: MouseEvent<HTMLButtonElement>) => {
    const todoId = e.currentTarget.getAttribute("data-todo-id");
    const todoIdNumber = Number(todoId);

    if (todoId && !isNaN(todoIdNumber)) {
      props.removeTodo(todoIdNumber);
    }
  };
  
  return (
    <ul>
      {props.todos.map((t: any) => {
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