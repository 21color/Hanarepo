
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoAction {
  addTodo: (text: string) => void;
  toggleTodo: (id: string ) => void;
  removeTodo: (id: string ) => void;
  resetTodo: () => void;
}

export interface TodoState {
  todos: Todo[];
}




