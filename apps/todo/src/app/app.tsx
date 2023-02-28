import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AddTodoForm />
      <TodoList />
    </QueryClientProvider>
  );
}

export default App;
