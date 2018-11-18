import * as API from '../utils/LeituraAPI'
import { receiveCategories } from './category'
import { receivePosts } from './post'

/**
 * 
 */
export function handleInitialData () {
    return (dispatch) => {
      return API.getInitialData()
        .then(({categories, posts}) => {
          dispatch(receiveCategories(categories))
          dispatch(receivePosts(posts))
        })
    }
  }
