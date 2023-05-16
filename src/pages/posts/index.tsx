import { getPosts } from '@/api/todosApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const Todos = () => {
  // Access the client
  const queryClient = useQueryClient();

  // const [filter, setFilter] = useState(true);

  // Queries
  //   const query = useQuery({
  //     queryKey: ['todos', { completed: true }],
  //     queryFn: getTodos,
  //   });
  const [page, setPage] = useState(1);
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery<any, any, any, any>({
      queryKey: ['todos', page],
      queryFn: () => getPosts(page),
      keepPreviousData: true,
    });

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.map((post: any) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </div>
      )}
      <span>Current Page: {page}</span>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous Page
      </button>{' '}
      <button
        onClick={() => {
          setPage(page + 1);
          // if (!isPreviousData && data.hasMore) {
          // }
        }}
        disabled={data?.hasMore}
        // Disable the Next Page button until we know a next page is available
        //
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}
    </div>
  );
};

export default Todos;
