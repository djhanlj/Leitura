import * as API from '../utils/LeituraAPI'

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const UPDATE_POST = "UPDATE_POST"
export const ADD_POST = "ADD_POST"
export const EDIT_POST = "EDIT_POST"
export const ADD_COMMENT_POST = "ADD_COMMENT_POST"


export function addPost(posts) {
    return {
        type: ADD_POST,
        posts,
    }
}

export function editPost(post) {
    return {
        type: EDIT_POST,
        post,
    }
}

export function addComentPost(post_id) {
    return {
        type: ADD_COMMENT_POST,
        post_id,
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

export function handleEditPost(post_id, body, title) {
    return (dispatch) => {
        console.log("body: " + body)
        return API.editPost({
            post_id, body, title
        })
            .then((post) => dispatch(editPost(post)))
    }
}