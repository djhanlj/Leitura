
const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'whatever-you-want'
}

/**
 * fetch Categorias from api
 */
export const getCategories = () =>
  fetch(`${api}/categories`, { headers }).then(response => {
    return response.json();
  }).catch(error => {
    return error;
  });

/**
 * fetch Posts from api
 */
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.posts)

