import * as API from '../utils/LeituraAPI'

export const  RECEIVE_POSTS = "RECEIVE_POSTS"
export const  UPDATE_POST = "UPDATE_POST"

export function receivePosts (posts){
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}

export function toggleVotePost({id, voteScore}){
    return {
        type: UPDATE_POST,
        id,
        voteScore
    }
}
export function handleToggleVotePost(post){
    return (dispatch) => {
        dispatch(toggleVotePost(post))
        return API.handleToggleVotingPost(post)
          .catch((e) => {
            dispatch(toggleVotePost(post))
          })
      }
}
