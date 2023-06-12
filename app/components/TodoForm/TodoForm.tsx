import { addTodo, updateTodoTitle } from "@/app/controllers/TodoController/todoSlice";
import { RootState } from "@/app/controllers/store";
import { GenerateTodo } from "@/app/models/Todo";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const todoTitle = useSelector((state: RootState) => state.todos.todoTitle);
  const dispatch = useDispatch();
  
  const handleTodoFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const newTodo = GenerateTodo(todoTitle);
    dispatch(addTodo(newTodo));
  };

  const handleTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTodoTitle(e.target.value));
  };

  return (
    <form onSubmit={handleTodoFormSubmit}>
      <label className="hidden" htmlFor="todo-input">Todo Title</label>
      <input
        className="text-black"
        type="text"
        placeholder="Todo Title"
        value={todoTitle}
        onChange={handleTodoInputChange}
      />
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default TodoForm;