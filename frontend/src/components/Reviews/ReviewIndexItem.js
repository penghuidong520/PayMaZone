import defaultProfile from '../../images/default-profile.png';
import filledStar from '../../images/filled_star.png';
import emptyStar from '../../images/empty_star.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({review}) => {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className="user-review-container">
            <div className="review-user-header">
                <img src={defaultProfile} alt="#" />
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
                <button className='review-edit-action'>Edit Review</button>  
                <button className='review-edit-action'>Delete Review</button>  
            </div>}
        </div>
    )
}

export default ReviewIndexItem;