import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteTodo, getTodos, toggleTodo } from '@spring-boot-test/api-client';
import { ToDo } from '@spring-boot-test/models';

export default function TodoList() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    refetchOnWindowFocus: false,
  });
  return (
    <ul>
      {data?.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

function TodoItem({ completed, title, id }: ToDo) {
  const client = useQueryClient();
  const { mutate: deleteTodoItem } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      client.setQueryData(['todos'], (old: ToDo[] | undefined) =>
        old?.filter((item) => item.id !== id)
      );
    },
  });
  const { mutate: toggle } = useMutation({
    mutationFn: toggleTodo,
    onSuccess: (newItem) => {
      client.setQueryData(['todos'], (old: ToDo[] | undefined) => {
        if (!old) return [newItem];
        return old.map((item) => {
          if (item.id === newItem.id) {
            return newItem;
          }
          return item;
        });
      });
    },
  });

  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={completed}
        onClick={() => toggle(id)}
        id={`checkbox-${id}`}
      />
      <label htmlFor={`checkbox-${id}`}>{title}</label>
      <button
        onClick={() => {
          deleteTodoItem(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
