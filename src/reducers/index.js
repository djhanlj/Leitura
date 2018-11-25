import { combineReducers } from 'redux'
import categories from './category'
import posts from './post'
import comments from './comment'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    categories,
    posts,
    comments,
    loadingBar: loadingBarReducer,
 
  })