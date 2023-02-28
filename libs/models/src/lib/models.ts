export interface ToDo {
  id: string;
  title: string;
  completed: boolean;
}

export interface CreateTodoRequestBody {
  title: string;
}

export type CreateTodoResponseBody = ToDo;

export interface ToggleTodoRequestBody {
  id: string;
}

export type ToggleTodoResponseBody = ToDo;

export type DeleteTodoRequestBody = ToggleTodoRequestBody;

export type DeleteTodoResponseBody = ToDo;
