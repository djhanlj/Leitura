import * as API from '../utils/LeituraAPI'

export const  RECEIVE_POSTS = "RECEIVE_POSTS"
export const  TOGGLE_VOTE = "TOGGLE_VOTE"

export function receivePosts (posts){
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}


export function toggleVote({id, voteScore}){
    return {
        type: TOGGLE_VOTE,
        id,
        voteScore
    }
}
export function handleToggleVote(post){
    return (dispatch) => {
        dispatch(toggleVote(post))
        return API.handleToggleVoting(post)
          .catch((e) => {
            dispatch(toggleVote(post))
          })
      }
}
