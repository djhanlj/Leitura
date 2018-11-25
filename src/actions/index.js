import * as API from '../utils/LeituraAPI'
import { receiveCategories } from './category'
import { receivePosts } from './post'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return API.getInitialData()
      .then(({ categories, posts }) => {
        dispatch(receiveCategories(categories))
        dispatch(receivePosts(posts))
        dispatch(hideLoading())
      })
  }
}
