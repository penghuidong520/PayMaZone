
const RECEIVE_CATEGORIES = 'categories/RECEIVE_CATEGORIES';
const RECEIVE_CATEGORY = 'categories/RECEIVE_CATEGORY';

const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories
})

const receiveCategory = (category) => ({
    type: RECEIVE_CATEGORY,
    category
})

export const fetchCategories = () => async dispatch => {
    const response = await fetch("/api/categories");
    if (response.ok) {
        let data = await response.json();
        dispatch(receiveCategories(data))
    }
}

export const fetchCategory = (categoryId) => async dispatch => {
    const response = await fetch(`/api/categories/${categoryId}`);
    if (response.ok) {
        let data = await response.json();
        dispatch(receiveCategory(data));
    }
}

const categoriesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type) {
        case RECEIVE_CATEGORIES:
            return {...state, ...action.categories};
        case RECEIVE_CATEGORY:
            nextState[action.category.id] = action.category;
            return nextState;
        default:
            return state;
    }
}

export default categoriesReducer;