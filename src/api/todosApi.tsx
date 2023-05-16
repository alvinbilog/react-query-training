export const getPosts = async (pageNumber: number) => {
  const response = await fetch(
    `http://localhost:3500/posts?_limit=2&_page=${pageNumber}`
  );
  const data = await response.json();
  return data;
};
