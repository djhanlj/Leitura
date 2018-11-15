import * as API from '../utils/LeituraAPI'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'

/**
 * @param  {} comments
 */
export function receiveComments (comments){
    return {
        type: RECEIVE_COMMENT,
        comments,
    }
}
/**
 * @param  {} post_id
 */
export function handleComments(post_id){
    return (dispatch) => {
        return API.getComments(post_id)
          .then((comments) => {
            dispatch(receiveComments(comments))
          })
      }
}

