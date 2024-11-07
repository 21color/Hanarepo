import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from './types';

export const initialState: TodoState = {
  todos: [],
};


const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      }
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    resetTodos: (state) => {
      state.todos = [];
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo, resetTodos } = todoSlice.actions;
export default todoSlice.reducer;



