import { RECEIVE_CATEGORIES } from '../actions'

const initialStateCategories = {
    categories: [
        {
          name: 'react',
          path: 'react'
        },
        {
          name: 'redux',
          path: 'redux'
        },
        {
          name: 'udacity',
          path: 'udacity'
        }
    ]
  }


function categories(state=initialStateCategories, action){
    const { categories } = action

    switch(action.type){
        case RECEIVE_CATEGORIES :
            return {
                ...state, 
                [categories]: categories
            }
        default : 
            return state    
    }
}

export default categories;