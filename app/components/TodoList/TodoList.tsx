import { removeTodo } from "@/app/controllers/TodoController/todoSlice";
import { RootState } from "@/app/controllers/store";
import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  
  const handleDeleteTodoById = (e: MouseEvent<HTMLButtonElement>) => {
    const todoId = e.currentTarget.getAttribute("data-todo-id");
    const todoIdNumber = Number(todoId);

    if (todoId && !isNaN(todoIdNumber)) {
      dispatch(removeTodo(todoIdNumber));
    }
  };
  
  return (
    <ul>
      {todos.map((t) => {
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