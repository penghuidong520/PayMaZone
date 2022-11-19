import defaultProfile from '../../images/default-profile.png';
import filledStar from '../../images/filled_star.png';
import emptyStar from '../../images/empty_star.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { deleteReview } from '../../store/review';
import { fetchProduct } from '../../store/products';

const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch();
    const {productId} = useParams();
    const sessionUser = useSelector(state => state.session.user);

    const handleDeleteReview = e => {
        e.preventDefault();
        dispatch(deleteReview(review.id));
        dispatch(fetchProduct(productId));
    }

    return (
        <div className="user-review-container">
            <div className="review-user-header">
                <img id="user-profile-pic" src={defaultProfile} alt="#" />
                <span className='review-username' >{review.username}</span>
            </div>
            <div className='review-title'>
                {[...Array(5)].map((start, idx)=>{
                    const ratingValue = idx + 1;
                    return (
                        <img className="review-stars" src={ratingValue <= review.rating ? filledStar : emptyStar} key={idx} alt="#" />
                    )
                })}
                <span className='review-heading' >{review.title}</span>
            </div>
            <span className='review-date' >{review.updated_at}</span>
            <div className='review-content' >
                <p className='review-comment' >{review.comment}</p>
            </div>
            { sessionUser.id === review.user_id && 
            <div className='review-edit'>
                <Link to={`/products/${productId}/review/${review.id}`} >
                    <button className='review-edit-action'>Edit Review</button>  
                </Link>
                <button onClick={handleDeleteReview} className='review-edit-action'>Delete Review</button>  
            </div>}
        </div>
    )
}

export default ReviewIndexItem;