import { RECEIVE_CATEGORIES } from '../actions'

const initialStateCategories = {
    categories: []
}


  export default function categories(state=initialStateCategories, action){
    switch(action.type){
        case RECEIVE_CATEGORIES :
            return {
                ...state, 
                ...action.categories
            }
        default : 
            return state    
    }
}

