import * as API from '../utils/LeituraAPI'

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const UPDATE_POST = "UPDATE_POST"
export const ADD_POST = "ADD_POST"


export function addPost(posts) {
    return {
        type: ADD_POST,
        posts,
    }
}

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}

export function toggleVotePost({ id, voteScore }) {
    return {
        type: UPDATE_POST,
        id,
        voteScore
    }
}
export function handleToggleVotePost(post) {
    return (dispatch) => {
        dispatch(toggleVotePost(post))
        return API.handleToggleVotingPost(post)
            .catch((e) => {
                dispatch(toggleVotePost(post))
            })
    }
}


export function handleAddPost(category, author, body, title) {
    return (dispatch) => {
        return API.savePost({
            category, author, body, title
        })
            .then((posts) => dispatch(addPost(posts)))
    }
}
