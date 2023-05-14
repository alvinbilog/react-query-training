export const getTodos = async (filter: boolean) => {
  const response = await fetch(
    `http://localhost:3500/todos/?completed=${filter}`
  );
  const data = await response.json();
  return data;
};
