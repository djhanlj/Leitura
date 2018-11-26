import { formatPost, formatComment, formatPostEdit, formatCommentEdit } from '../utils/helpers'

const api = "http://localhost:3001"
//const api = "https://leitura-server.herokuapp.com"

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'whatever-you-want'
}

export function getInitialData() {
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

/**
 * @param  {} post_id
 * @returns {{type: comments}}
 */
export const getComments = (post_id) =>
  fetch(`${api}/posts/${post_id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

/**
 * 
 * @param {*} cateogry 
 */
export const getCategoryPosts = (cateogry) =>
  fetch(`${api}/${cateogry}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)


/**
 * 
 * @param {*} category 
 * @param {*} author 
 * @param {*} body 
 * @param {*} title 
 */
export function savePost(category, author, body, title) {
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(formatPost(category, author, body, title))
  }).then(res => res.json())
    .then(data => data)
}

/**
 * 
 * @param {*} post_id 
 * @param {*} body 
 * @param {*} title 
 */
export function editPost(post_id, body, title) {
  return fetch(`${api}/posts/${post_id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(formatPostEdit(body, title))
  }).then(res => res.json())
    .then(data => data)
}


/**
 * 
 * @param {*} comment_id 
 * @param {*} body 
 */
export function editComment(comment_id, body) {
  return fetch(`${api}/comments/${comment_id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(formatCommentEdit(body))
  }).then(res => res.json())
    .then(data => data)
}


/**
 * 
 * @param {*} id 
 */
export function removePost(id) {
  return fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json())
    .then(data => data)
}

/**
 * 
 * @param {*} id 
 */
export function removeComment(id) {
  return fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json())
    .then(data => data)
}

/**
 * 
 * @param {*} author 
 * @param {*} body 
 * @param {*} post_id 
 */
export function saveComment(author, body, post_id) {
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify(formatComment(author, body, post_id))
  }).then(res => res.json())
    .then(data => data)
}

/**
 * 
 * @param {*} param0 
 */
export function handleToggleVotingPost({ id, voto }) {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: voto })
  })
    .then(res => res.json())
    .then(data => data)
}

/**
 * 
 * @param {*} param0 
 */
export function handleToggleVotingComment({ id, voto }) {
  return fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: voto })
  })
    .then(res => res.json())
    .then(data => data)
}


export function saveCategory(category) {
  return fetch(`${api}/categories`, {
    method: 'POST',
    headers,
    body: JSON.stringify(category)
  }).then(res => res.json())
    .then(data => data)
}

