import { Todo } from "@/app/models/Todo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  todos: Todo[];
  todoTitle: string;
}

const initialState: TodoState = {
  todos: [],
  todoTitle: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    completeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: true };
        }
        return todo;
      });
    },

    updateTodo: (
      state,
      action: PayloadAction<{ id: number; updatedTodo: Partial<Todo> }>
    ) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload.updatedTodo };
        }
        return todo;
      });
    },

    updateTodoTitle: (state, action: PayloadAction<string>) => {
      state.todoTitle = action.payload;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  completeTodo,
  updateTodo,
  updateTodoTitle,
} = todoSlice.actions;

export default todoSlice.reducer;
