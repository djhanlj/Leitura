import * as API from '../utils/LeituraAPI'
import { addComentPost  } from './post'


export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'



export function addComment(comments) {
    return {
        type: ADD_COMMENT,
        comments,
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

export function toggleVoteComment({ id, voteScore }) {
    return {
        type: UPDATE_COMMENT,
        id,
        voteScore
    }
}
export function handleToggleVoteComment(comment) {
    return (dispatch) => {
        dispatch(toggleVoteComment(comment))
        return API.handleToggleVotingComment(comment)
            .catch((e) => {
                dispatch(toggleVoteComment(comment))
            })
    }
}

export function handleAddComment(author, body, post_id) {
    return (dispatch) => {

        dispatch(addComentPost(post_id)) 
        
        return API.saveComment({
            author, body, post_id
        }).then((comments) => dispatch(addComment(comments)))
    }
}