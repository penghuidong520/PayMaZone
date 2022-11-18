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
    const [stars, setStars] = useState(0);
    const [title, setTitle] = useState('');

    if (!sessionUser) history.push('./login');

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
                </div>

                <div className='review-section-container' >
                    <h2 className='review-section-header'>Add a headline</h2>
                    <input className='review-headline' type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="What's most important to know?" />
                </div>

                <div className='review-section-container' >
                    <h2 className='review-section-header' >Add a written review</h2>
                    <textarea className='comment-input' ></textarea>
                </div>

                <div className='review-section-container' >
                    <span id="info-note" >This is how you'll appear to other customers</span>
                    <div className='user-info'>
                        <img id="user-profile-pic" src={defaultProfile} alt="#" />
                        <span className='review-username' >{sessionUser.username}</span>
                    </div>

                </div>
                
                <div className='review-submit-container' >
                    <input type="submit" />
                </div>
            </div>
        </div>
    )
    } else {
        return (<></>)
    }
}

export default ReviewForm;