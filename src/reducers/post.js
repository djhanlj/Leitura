import { RECEIVE_POSTS, UPDATE_POST } from '../actions/post'

export default function posts(state=[], action){
    switch(action.type){
        case RECEIVE_POSTS:
            return action.posts
        
        case UPDATE_POST:
            return state.map(post => post.id === action.id ? {...post, voteScore: action.voteScore} : post)
        default : 
            return state    
    }
}

