import csrfFetch from "./csrf";

const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const getReviews = ({reviews}) => (reviews ? Object.values(reviews): []);
