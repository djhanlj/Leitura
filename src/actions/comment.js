import * as API from '../utils/LeituraAPI'
import { addComentPost, reducerComentPost } from './post'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'


/**
 * 
 * @param {*} comments 
 */
export function addComment(comments) {
    return {
        type: ADD_COMMENT,
        comments,
    }
}

/**
 * 
 * @param {*} comment
 */
export function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        comment,
    }
}

/**
 * 
 * @param {*} comments 
 */
export function removeComment({ id, deleted }) {
    return {
        type: REMOVE_COMMENT,
        id,
        deleted,
    }
}


/**
 * @param  {} comments
 */
export function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENT,
        comments,
    }
}
/**
 * @param  {} post_id
 */
export function handleComments(post_id) {
    return (dispatch) => {
        return API.getComments(post_id)
            .then((comments) => {
                dispatch(receiveComments(comments))
            })
    }
}

/**
 * 
 * @param {*} param0 
 */
export function toggleVoteComment({ id, voteScore }) {
    return {
        type: UPDATE_COMMENT,
        id,
        voteScore
    }
}

/**
 * 
 * @param {*} comment 
 */
export function handleToggleVoteComment(comment) {
    return (dispatch) => {
        dispatch(toggleVoteComment(comment))
        return API.handleToggleVotingComment(comment)
            .catch((e) => {
                dispatch(toggleVoteComment(comment))
            })
    }
}

/**
 * 
 * @param {*} author 
 * @param {*} body 
 * @param {*} post_id 
 */
export function handleAddComment(author, body, post_id) {
    return (dispatch) => {
        return API.saveComment({
            author, body, post_id
        }).then((comments) => {
            dispatch(addComment(comments))
            dispatch(addComentPost(post_id))
        })
    }
}

/**
 * 
 * @param {*} id 
 * @param {*} post_id 
 */
export function handleRemoveComment(id, post_id) {
    return (dispatch) => {
        return API.removeComment(id)
            .then((comments) => {
                dispatch(removeComment(comments))
                dispatch(reducerComentPost(post_id))
            })
    }
}

/**
 * 
 * @param {*} id 
 * @param {*} body 
 */
export function handleEditComment(id, body) {
    return (dispatch) => {
        return API.editComment(
            id, body
        ).then((comment) => dispatch(editComment(comment)))
    }
}