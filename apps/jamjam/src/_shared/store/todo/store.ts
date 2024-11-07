import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from './types';

export const initialState: TodoState = {
  todos: [],
};


const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
      }

    }
  }
})




