const RECEIVE_SEARCHES = 'search/RECEIVE_SEARCHES';
const RECEIVE_SEARCH = 'search/RECEIVE_SEARCH';
const RESET_SEARCH = 'search/RESET_SEARCH';

const resetSearch = () => ({
    type: RESET_SEARCH
})

const receiveSearches = (searches) => ({
    type: RECEIVE_SEARCHES,
    searches
});

const receiveSearch = (search) => ({
    type: RECEIVE_SEARCH,
    search
})


export const getSearches = ({searches}) => (searches ? Object.values(searches) : []);
export const getSearch = (productId) => ({searches}) => (searches ? searches[productId] : null);

export const fetchSearches = (term) => async dispatch => {
    if (term === '') {
        dispatch(resetSearch());
    } else {
        const response = await fetch(`/api/search/products/${term}`);
        if (response.ok) {
            let data = await response.json();
            dispatch(receiveSearches(data));
        }
    }
}

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type) {
        case RECEIVE_SEARCHES:
            return  {...action.searches};
        case RECEIVE_SEARCH:
            nextState[action.search.id] = action.search;
            return nextState;
        case RESET_SEARCH:
            return {};
        default:
            return state;
    }
}

export default searchReducer;