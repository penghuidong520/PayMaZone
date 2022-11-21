import filledStar from '../../images/filled_star.png';
import emptyStar from '../../images/empty_star.png';
import { Link } from 'react-router-dom';

const SearchResultItem = ({product}) => {
    //reviews
    const reviews = product.reviews;
    let totalRating = 0;
    reviews.forEach(review => {
        totalRating += review.rating;
    })

    let avgRating = 0;
    if (reviews.length > 0) {
        avgRating = Math.floor(totalRating / reviews.length);
    }

    // price
    let tens = '';
    let decimal = '';
    if (product) {
        [tens, decimal] = product.price.toString().split(".");
    }

    return (
        <div className="result-product-container">
            <div className="result-image-container">
                <Link className='result-product-link' to={`/products/${product.id}`}>
                    <img className='result-image' src={product.photourls[0]} alt="#" />
                </Link>
            </div>
            <div className="result-info-container">
                <Link className='result-product-link' to={`/products/${product.id}`}>
                    <h2 className="result-product-name">{product.name}</h2>
                </Link>
                <div className='result-product-reviews' >
                    {[...Array(5)].map((start, idx)=>{
                        const ratingValue = idx + 1;
                        return (
                            <img className="avg-stars result-stars" src={ratingValue <= avgRating ? filledStar : emptyStar} key={idx} alt="#" />
                        )
                    })}
                    <span className='result-product-total-reviews' >{product.reviews.length}</span>
                </div>
                    
                <div className='category-product-price'>
                    <span className="index-decimal" >$</span>
                    <span id="index-tens" >{tens}</span>
                    <span className="index-decimal" >{decimal}</span>
                </div>
            </div>
        </div>
    )
}

export default SearchResultItem;