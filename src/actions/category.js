
import * as API from '../utils/LeituraAPI'
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"
export const ADD_CATEGORY = "ADD_CATEGORY"

/**
 * 
 * @param {*} categories 
 */
export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories,
    }
}

/**
 * 
 * @param {*} [category] 
 */
export function addCategory(category) {
    return {
        type: ADD_CATEGORY,
        category,
    }
}

export function handleAddCategory(name) {
    return (dispatch) => {
        return API.saveCategory({name})
        .then((category) => {
            dispatch(addCategory(category))
        })
    }
}