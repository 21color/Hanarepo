
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  editing?: boolean;
}

export interface TodoState {
  todos: Todo[];
}




