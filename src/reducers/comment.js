import { RECEIVE_COMMENT } from '../actions/comment'

export default function comments(state=[], action){
    switch(action.type){
        case RECEIVE_COMMENT:
            return action.comments
        default : 
            return state    
    }
}

