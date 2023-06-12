import useTodoController from "@/app/controllers/useTodoController";
import { ChangeEvent, SyntheticEvent } from "react";

interface ITodoForm {
  addTodo: () => void;
}

const TodoForm = (props: any) => {
  // const { todoTitle, setTodoTitle, } = useTodoController();

  const handleTodoFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    props.addTodo();
  };

  const handleTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setTodoTitle(e.target.value);
  };

  return (
    <form onSubmit={handleTodoFormSubmit}>
      <label className="hidden" htmlFor="todo-input">Todo Title</label>
      <input
        className="text-black"
        type="text"
        placeholder="Todo Title"
        value={props.todoTitle}
        onChange={handleTodoInputChange}
      />
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default TodoForm;