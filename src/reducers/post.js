import sortBy from 'sort-by'

import {
    RECEIVE_POSTS, UPDATE_POST, ADD_POST, ADD_COMMENT_POST,
    EDIT_POST, REMOVE_POST, REDUCER_COMMENT_POST, ORDER_BY_POST
} from '../actions/post'

export default function posts(state = [], action) {
    switch (action.type) {

        case RECEIVE_POSTS:
            return action.posts.sort(sortBy('voteScore'))

        case UPDATE_POST:
            return state.map(post => post.id === action.id ? { ...post, voteScore: action.voteScore } : post)

        case ADD_POST:
            return state.concat(action.posts)

        case EDIT_POST:
            return state.map(post => post.id === action.posts.id
                ? { ...post, title: action.posts.title, body: action.posts.body }
                : post)

        case REMOVE_POST:
            return state.filter(post => post.id !== action.id)

        case ADD_COMMENT_POST:
            return state.map(post => post.id === action.post_id ? { ...post, commentCount: post.commentCount + 1 } : post)

        case REDUCER_COMMENT_POST:
            return state.map(post => post.id === action.id ? { ...post, commentCount: post.commentCount - 1 } : post)

        case ORDER_BY_POST:
            return action.order.selectedTypeOrder === 'vote'
                ? state.slice().sort(action.order.selectedOrder === 'asc' ? sortBy('voteScore') : sortBy('-voteScore'))
                : state.slice().sort(action.order.selectedOrder === 'asc' ? sortBy('timestamp') : sortBy('-timestamp'))

        default:
            return state
    }
}

