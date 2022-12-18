import filledStar from '../../images/filled_star.png';
import emptyStar from '../../images/empty_star.png';
import defaultProfile from '../../images/default-profile.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchProduct, getProduct } from '../../store/products';
import { createReview, fetchReview, getReview, updateReview } from '../../store/review';

const ReviewForm = () => {
    const {reviewId} = useParams();
    const {productId} = useParams();
    const review = useSelector(getReview(reviewId));
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(getProduct(productId));
    const sessionUser = useSelector(state => state.session.user);
    
    if (!sessionUser) history.push('./login');
    // if (!product) {
    //     history.push(`/products/${productId}`);
    // }

    // initial values
    let reviewStar, reviewTitle, reviewComment, reviewUsername;
    const [stars, setStars] = useState(review ? review.rating : 0);
    const [title, setTitle] = useState(review ? review.title : '');
    const [comment, setComment] = useState(review ? review.comment : '');
    const [publicName, setPublicName] = useState(sessionUser.username);
    const [submitted, setSubmitted] = useState(false);
    if (review && (!stars || !title || !comment)) {
        setStars(review.rating);
        setTitle(review.title);
        setComment(review.comment);
        // reviewStar = review.rating;
        // reviewTitle = review.title;
        // reviewComment = review.comment;
        // reviewUsername = review.username;
    }
    //  else {
    //     reviewStar = 0;
    //     reviewTitle = '';
    //     reviewComment = '';
    //     reviewUsername = sessionUser.username
    // }

    useEffect(()=>{
        dispatch(fetchReview(reviewId));
    }, [dispatch, reviewId])

    useEffect(()=>{
        dispatch(fetchProduct(productId));
    }, [dispatch, productId])

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);
        if (stars && title && comment && publicName) {
            if (!review) {
                dispatch(createReview({title, comment, rating: stars, userId: sessionUser.id, productId: product.id, username: publicName}));
            } else {
                dispatch(updateReview({ ...review, title, comment, rating: stars, username: publicName}))
            }
            history.push(`/products/${productId}`);
        }
    }

    const handleCancel = e => {
        e.preventDefault();
        history.goBack(1);
    }

    if (product) {
    return (
        <div className="review-form-container">
            <div className="form-container">
                <div className="review-product" >
                    <h1 className='review-h1' >Create Review</h1>
                    <div className="review-product-container" >
                        <img id="review-product-img" src={product.photourls[0]} alt="#" />
                        <span id="review-product-name">{product.name}</span>
                    </div>
                </div>

                <div className="review-section-container" >
                    <h2 className='review-section-header' >Overall Rating</h2>
                    {[...Array(5)].map((start, idx)=>{
                        const ratingValue = idx + 1;
                        return (
                            <img onClick={e => setStars(idx+1)} className="review-rating" src={ratingValue <= stars ? filledStar : emptyStar} key={idx} alt="#" />
                        )
                    })}
                    {submitted && !stars && 
                    <div className='review-error-container'>
                        <i className="fa-solid fa-exclamation fa-sm"></i>
                        <span className='review-error-message'>
                            Please select a star rating
                        </span>
                    </div>}
                </div>

                <div className='review-section-container' >
                    <h2 className='review-section-header'>Add a headline</h2>
                    <input className='review-headline' type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="What's most important to know?" />

                    {submitted && !title && 
                    <div className='review-error-container'>
                        <i className="fa-solid fa-exclamation fa-sm"></i>
                        <span className='review-error-message'>
                            Please enter your headline
                        </span>
                    </div>}

                </div>

                <div className='review-section-container' >
                    <h2 className='review-section-header' >Add a written review</h2>
                    <textarea className='comment-input' 
                        value={comment} 
                        onChange={e=>setComment(e.target.value)} 
                        placeholder="What did you like or dislike? What did you use product for?"
                    ></textarea>

                    {submitted && !comment && 
                    <div className='review-error-container'>
                        <i className="fa-solid fa-exclamation fa-sm"></i>
                        <span className='review-error-message'>
                            Please add a written review
                        </span>
                    </div>}
                </div>

                <div className='review-section-container' >
                    <h2 className='review-section-header' >Choose your public name</h2>
                    <span id="info-note" >This is how you'll appear to other customers</span>
                    <div className='user-info'>
                        <img id="user-profile-pic" src={defaultProfile} alt="#" />
                        <input className='review-username review-headline' 
                            value={publicName} 
                            onChange={e=>setPublicName(e.target.value)}
                        />
                    </div>
                    <span id="info-note-2">You can always come back to this review and edit it</span>
                    
                    {submitted && !publicName && 
                    <div className='review-error-container'>
                        <i className="fa-solid fa-exclamation fa-sm"></i>
                        <span className='review-error-message'>
                            Please add a public name
                        </span>
                    </div>}

                </div>
                
                <div className='review-submit-container' >
                    <button id="review-cancel-button" onClick={handleCancel}>Cancel</button>
                    <input id="review-submit-button" type="button" onClick={handleSubmit} value="Submit" />
                </div>
            </div>
        </div>
    )
    } else {
        return (<></>)
    }
}

export default ReviewForm;