import { TodoContext } from "@/app/controllers/TodoContextController";
import { ChangeEvent, SyntheticEvent, useContext } from "react";

const TodoForm = () => {
  const { todoTitle, addTodo, setTodoTitle } = useContext(TodoContext);
  
  const handleTodoFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addTodo();
  };

  const handleTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
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