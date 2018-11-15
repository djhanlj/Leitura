import * as API from '../utils/LeituraAPI'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

/**
 * @param  {} comments
 */
export function receiveComments (comments){
    return {
        type: RECEIVE_COMMENT,
        comments,
    }
}
/**
 * @param  {} post_id
 */
export function handleComments(post_id){
    return (dispatch) => {
        return API.getComments(post_id)
          .then((comments) => {
            dispatch(receiveComments(comments))
          })
      }
}

export function toggleVoteComment({id, voteScore}){
    return {
        type: UPDATE_COMMENT,
        id,
        voteScore
    }
}
export function handleToggleVoteComment(comment){
    return (dispatch) => {
        dispatch(toggleVoteComment(comment))
        return API.handleToggleVotingComment(comment)
          .catch((e) => {
            dispatch(toggleVoteComment(comment))
          })
      }
}
