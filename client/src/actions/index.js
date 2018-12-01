import axios from 'axios';
export function getBooks(
    limit = 10, skip = 0, order = 'asc') {
  const request = axios
    .get(
      `http://localhost:3001/api/books?limit=${limit}
  &skip=${skip}&order=${order}`
    )
    .then(res => res.data);
  return {
    type: 'GET_BOOKS',
    payload: request
  };
}
