import filledStar from '../../images/filled_star.png';
import emptyStar from '../../images/empty_star.png';
import defaultProfile from '../../images/default-profile.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchProduct } from '../../store/products';

const ReviewForm = ({location}) => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    let product;
    if (!location.query) {
        history.push(`/products/${productId}`);
    } else {
        product = location.query;
    }
    
    const sessionUser = useSelector(state => state.session.user);
    if (!sessionUser) history.push('./login');

    const [stars, setStars] = useState(0);
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [publicName, setPublicName] = useState(sessionUser.username)

    const [starErr, setStarErr] = useState(false);
    const [titleErr, setTitleErr] = useState(false);
    const [commentErr, setCommentErr] = useState(false);
    const [nameErr, setNameErr] = useState(false);


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
                            <img onClick={e => setStars(idx+1)} className="review-stars" src={ratingValue <= stars ? filledStar : emptyStar} key={idx} alt="#" />
                        )
                    })}
                    {starErr && 
                    <div className='review-error-container'>
                        <i class="fa-solid fa-exclamation fa-sm"></i>
                        <span className='review-error-message'>
                            Please select a star rating
                        </span>
                    </div>}
                </div>

                <div className='review-section-container' >
                    <h2 className='review-section-header'>Add a headline</h2>
                    <input className='review-headline' type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="What's most important to know?" />

                    {titleErr && 
                    <div className='review-error-container'>
                        <i class="fa-solid fa-exclamation fa-sm"></i>
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

                    {commentErr && 
                    <div className='review-error-container'>
                        <i class="fa-solid fa-exclamation fa-sm"></i>
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
                    
                    {nameErr && 
                    <div className='review-error-container'>
                        <i class="fa-solid fa-exclamation fa-sm"></i>
                        <span className='review-error-message'>
                            Please add a public name
                        </span>
                    </div>}

                </div>
                
                <div className='review-submit-container' >
                    <input id="review-submit-button" type="submit" />
                </div>
            </div>
        </div>
    )
    } else {
        return (<></>)
    }
}

export default ReviewForm;