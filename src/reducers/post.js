import { RECEIVE_POSTS, UPDATE_POST, ADD_POST } from '../actions/post'

export default function posts(state = [], action) {

    console.log("action: " + action.posts)


    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts

        case UPDATE_POST:
            return state.map(post => post.id === action.id ? { ...post, voteScore: action.voteScore } : post)

        case ADD_POST:
        return state.concat(action.posts)

        default:
            return state
    }
}

