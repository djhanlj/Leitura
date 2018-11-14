import * as API from '../utils/LeituraAPI'

export const  RECEIVE_POSTS = "RECEIVE_POSTS"
export const  HANDLE_VOTE = "HANDLE_VOTE"

export function receivePosts (posts){
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}


export function toggleVote({id, voteScore}){
    return {
        type: HANDLE_VOTE,
        id,
        voteScore
    }
}
export function handleToggleVote(info){
    return (dispatch) => {
        //dispatch(toggleVote(info))

        return API.handleToggleVoting(info)
          .catch((e) => {
            dispatch(toggleVote(info))
          })
      }
}
