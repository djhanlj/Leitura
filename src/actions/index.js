import * as API from '../utils/LeituraAPI'

export const  RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"
export const  RECEIVE_POSTS = "RECEIVE_POSTS"


export function receiveCategories (categories){
    return {
        type: RECEIVE_CATEGORIES,
        categories,
    }
}


export function receivePosts (){
    return {
        type: RECEIVE_POSTS,
    }
}

export function fetchCategories() {
	return  (dispatch) => {
        return  API.getCategories().then( categories =>
                    dispatch(receiveCategories(categories))
                )}
}

export function fetchPosts() {
	return dispatch => {
		return API.getPosts()
		  .then(response => dispatch(receivePosts(response)));
	}
}

