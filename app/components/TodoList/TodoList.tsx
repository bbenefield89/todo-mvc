import { MouseEvent } from "react";

const TodoList = () => {
  const handleDeleteTodoById = (e: MouseEvent<HTMLButtonElement>) => {
    const todoId = e.currentTarget.getAttribute("data-todo-id");
    const todoIdNumber = Number(todoId);

    if (todoId && !isNaN(todoIdNumber)) {
      // remove todo
    }
  };
  
  return (
    <ul>
      {/* Render todos */}
      {/* {todos.map((t: any) => {
        return (
          <li key={t.id}>
            <span>{t.title}</span>
            {" "}
            <button data-todo-id={t.id} onClick={handleDeleteTodoById}>X</button>
          </li>
        );
      })} */}
    </ul>
  )
};

export default TodoList;