import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProduct, getProduct } from '../../store/products';
import filledStar from '../../images/filled_star.png';
import emptyStar from '../../images/empty_star.png';

const ProductIndexItem = ({product}) => {
    // const productId = useParams();
    const dispatch = useDispatch();
    const prod = useSelector(getProduct(product.id));
    let tens = '';
    let decimal = '';
    if (product) {
        [tens, decimal] = product.price.toString().split(".");
    }

    // reviews
    let reviews = [];
    let totalRating = 0;
    let avgRating = 0;
    if (prod) {
        reviews = prod.reviews;
    }
    // debugger
    if (reviews) {
        reviews.forEach(review => {
            totalRating += review.rating;
        })
        if (reviews.length > 0) {
            avgRating = Math.floor(totalRating / reviews.length);
        }
    }


    useEffect(()=>{
        dispatch(fetchProduct(product.id));
    }, [dispatch, product.id])
    if (prod) {
        return (
                <div className='category-list' >
                    <div className='category-item-product-container'>
                        <Link className='category-list-link' to={`/products/${prod.id}`} >
                            { prod.photourls && <img id="category-show-img" src={prod.photourls[0]} alt=""/>}
                        </Link>
                    </div>
                    <Link id="category-product-item-link" to={`/products/${prod.id}`} >
                        <p className='category-product-name' >
                            {prod.name}
                        </p>
                    </Link>
                    <div className='category-product-price'>
                        <span className="index-decimal" >$</span>
                        <span id="index-tens" >{tens}</span>
                        <span className="index-decimal" >{decimal}</span>
                    </div>
                    <div className='result-product-reviews' >
                    {[...Array(5)].map((start, idx)=>{
                        const ratingValue = idx + 1;
                        return (
                            <img className="avg-stars result-stars" src={ratingValue <= avgRating ? filledStar : emptyStar} key={idx} alt="#" />
                        )
                    })}
                    <span className='result-product-total-reviews' >{prod.reviews.length}</span>
                </div>
                </div>
        )
    } else {
        return (<></>);
    }
}

export default ProductIndexItem;