import { RECEIVE_POSTS, UPDATE_POST, ADD_POST, ADD_COMMENT_POST } from '../actions/post'

export default function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts

        case UPDATE_POST:
            return state.map(post => post.id === action.id ? { ...post, voteScore: action.voteScore } : post)

        case ADD_POST:
            return state.concat(action.posts)

        case ADD_COMMENT_POST:
            return state.map(post => post.id === action.post_id ? { ...post, commentCount: post.commentCount + 1 } : post)

        default:
            return state
    }
}

