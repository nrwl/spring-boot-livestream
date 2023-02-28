import { ToDo } from '@spring-boot-test/models';

const API_URL = '/todo';

export function getTodos(): Promise<ToDo[]> {
  return fetch(`${API_URL}`).then((res) => res.json());
}

export function createTodo(title: string): Promise<ToDo> {
  return fetch(`${API_URL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  }).then((res) => res.json());
}

export function toggleTodo(id: string): Promise<ToDo> {
  return fetch(`${API_URL}/toggle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  }).then((res) => res.json());
}

export function deleteTodo(id: string): Promise<void> {
  return fetch(`${API_URL}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  }).then(() => undefined);
}
