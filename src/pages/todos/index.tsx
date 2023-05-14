import { getTodos } from '@/api/todosApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const Todos = () => {
  // Access the client
  const queryClient = useQueryClient();

  const [filter, setFilter] = useState(true);

  // Queries
  //   const query = useQuery({
  //     queryKey: ['todos', { completed: true }],
  //     queryFn: getTodos,
  //   });
  const { data, status }: any = useQuery(['todos', { completed: true }], () =>
    getTodos(filter)
  );

  return (
    <div>
      {status === 'loading' && <div>Loading....</div>}
      {status === 'error' && <div>Error</div>}
      {status === 'success' && (
        <ul>
          {data.map((todo: any) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}

      {/* <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          });
        }}
      >
        Add Todo
      </button> */}
    </div>
  );
};

export default Todos;
