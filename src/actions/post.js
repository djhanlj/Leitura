import * as API from '../utils/LeituraAPI'

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const UPDATE_POST = "UPDATE_POST"
export const ADD_POST = "ADD_POST"
export const EDIT_POST = "EDIT_POST"
export const ADD_COMMENT_POST = "ADD_COMMENT_POST"
export const REMOVE_POST = "REMOVE_POST"
export const REDUCER_COMMENT_POST = "REDUCER_COMMENT_POST"
export const ORDER_BY_POST = "ORDER_BY_POST"

/**
 * 
 * @param {*} posts 
 */
export function addPost(posts) {
    return {
        type: ADD_POST,
        posts,
    }
}

/**
 * 
 * @param {*} posts 
 */
export function editPost(posts) {
    return {
        type: EDIT_POST,
        posts,
    }
}

/**
 * 
 * @param {*} param0 
 */
export function removePost({ id, deleted }) {
    return {
        type: REMOVE_POST,
        id,
        deleted,
    }
}

/**
 * 
 * @param {*} post_id 
 */
export function addComentPost(post_id) {
    return {
        type: ADD_COMMENT_POST,
        post_id,
    }
}

/**
 * 
 * @param {*} id 
 */
export function reducerComentPost(id) {
    return {
        type: REDUCER_COMMENT_POST,
        id,
    }
}

/**
 * 
 * @param {*} posts 
 */
export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}

/**
 * 
 * @param {*} param0 
 */

export function handleOrderBy(typOrder) {
    return {
        type: ORDER_BY_POST,
        typOrder,
    }
}

export function toggleVotePost({ id, voteScore }) {
    return {
        type: UPDATE_POST,
        id,
        voteScore
    }
}

/**
 * 
 * @param {*} post 
 */
export function handleToggleVotePost(post) {
    return (dispatch) => {
        dispatch(toggleVotePost(post))
        return API.handleToggleVotingPost(post)
            .catch((e) => {
                dispatch(toggleVotePost(post))
            })
    }
}

/**
 * 
 * @param {*} category 
 * @param {*} author 
 * @param {*} body 
 * @param {*} title 
 */
export function handleAddPost(category, author, body, title) {
    return (dispatch) => {
        return API.savePost(
            category, author, body, title
        )
            .then((posts) => dispatch(addPost(posts)))
    }
}

/**
 * 
 * @param {*} id 
 * @param {*} body 
 * @param {*} title 
 */
export function handleEditPost(id, body, title) {
    return (dispatch) => {
        return API.editPost(
            id, body, title
        ).then((post) => dispatch(editPost(post)))
    }
}

/**
 * 
 * @param {*} id 
 */
export function handleRemovePost(id) {
    return (dispatch) => {
        return API.removePost(id).then((post) => dispatch(removePost(post)))
    }
}