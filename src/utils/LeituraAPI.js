
const api = "http://localhost:3001"

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'whatever-you-want'
}

export function getInitialData () {
  return Promise.all([
    getCategories(),
    getPosts(),
  ]).then(([categories, posts]) => ({
    categories,
    posts,
  }))
}


/**
 * fetch Categorias from api
 */
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
  .then(res => res.json())
  .then(data => data.categories)

/**
 * fetch Posts from api
 */
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)


export function handleToggleVoting ({id, voto}) {
    return fetch(`${api}/posts/${id}`, { 
            method: 'POST',
            headers,
            body: JSON.stringify({ option: voto})
        })
        .then(res => res.json())
        .then(data => data)
    
}
    
export const getCategoryPosts = (cateogry) =>
  fetch(`${api}/${cateogry}posts`, { headers })
    .then(res => res.json())
    .then(data => data)

