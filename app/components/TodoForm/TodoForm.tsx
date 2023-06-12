import { ChangeEvent, SyntheticEvent } from "react";

const TodoForm = () => {
  const handleTodoFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // create new todo
  };

  const handleTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // set todo title
  };

  return (
    <form onSubmit={handleTodoFormSubmit}>
      <label className="hidden" htmlFor="todo-input">Todo Title</label>
      <input
        className="text-black"
        type="text"
        placeholder="Todo Title"
        value={""}  // link value with todo title
        onChange={handleTodoInputChange}
      />
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default TodoForm;