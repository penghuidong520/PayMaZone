import RatingBar from "./RatingBar";

const ReviewIndex = ({reviews}) => {
    return (
    <div className="product-review-container">
        <div className="reviews-left-container">
            <h1>Customer Reviews</h1>
            <div className="average-rating">
                
            </div>
            <span className="total-reviews">{reviews.length} total ratings</span>
            <RatingBar reviews={reviews} />

            <div className="write-review-container">
                <div className="write-review-text">
                    <h2>Write a review for this product</h2>
                    <span>Share your thoughts and opinions</span>
                </div>
                <button> Write a customer review </button>
            </div>
        </div>

        <div className="reviews-middle-container">
            
        </div>

        <div className="reviews-right-container">
            
        </div>
    </div>
    )
}

export default ReviewIndex;