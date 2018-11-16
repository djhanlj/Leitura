import { RECEIVE_COMMENT, UPDATE_COMMENT, ADD_COMMENT } from '../actions/comment'

export default function comments(state = [], action) {
    switch (action.type) {
        case RECEIVE_COMMENT:
            return action.comments

        case UPDATE_COMMENT:
            return state.map(comment => comment.id === action.id ? { ...comment, voteScore: action.voteScore } : comment)

        case ADD_COMMENT:
            return state.concat(action.comments)

        default:
            return state
    }
}

