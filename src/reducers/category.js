import { RECEIVE_CATEGORIES, ADD_CATEGORY } from '../actions/category'

export default function categories(state=[], action){
    switch(action.type){
        
        case RECEIVE_CATEGORIES :
            return action.categories

        case ADD_CATEGORY : 
            return state.concat(action.category)

        default : 
            return state    
    }
}

