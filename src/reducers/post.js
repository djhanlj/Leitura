import { RECEIVE_POSTS, TOGGLE_VOTE } from '../actions/post'

export default function posts(state=[], action){
    switch(action.type){
        case RECEIVE_POSTS:
            return action.posts
        
        case TOGGLE_VOTE:
            return state.map(post => post.id === action.id ? {...post, voteScore: action.voteScore} : post)
        default : 
            return state    
    }
}

