import csrfFetch from "./csrf";

const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

// const receiveReviews = (reviews) => ({
//     type: RECEIVE_REVIEWS,
//     reviews
// });

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const getReviews = ({reviews}) => (reviews ? Object.values(reviews): []);
export const getReview = (reviewId) => ({reviews}) => (reviews ? reviews[reviewId] : null);

export const createReview = (review) => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveReview(data));
    }
}

export const fetchReview = (reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`);
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveReview(data));
    }
}

export const updateReview = (review) => async dispatch => {

    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "PATCH",
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        let data = await response.json();
        dispatch(receiveReview(data));
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(removeReview(reviewId));
    }
}

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type) {
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
        case RECEIVE_REVIEWS:
            return {...state, ...action.reviews}
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        default:
            return state;
    }
}

export default reviewReducer;