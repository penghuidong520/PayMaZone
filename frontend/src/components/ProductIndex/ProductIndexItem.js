import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProduct } from '../../store/products';

const ProductIndexItem = ({product}) => {

    const dispatch = useDispatch();

    let tens = '';
    let decimal = '';

    if (product) {
        [tens, decimal] = product.price.toString().split(".");
    }
    useEffect(()=>{
        dispatch(fetchProduct(product.id));
    }, [dispatch, product.id])

    return (
            <div className='category-list' >
                <Link className='category-list-link' to={`/products/${product.id}`} >
                    { product.photourls && <img id="category-show-img" src={product.photourls[0]} alt=""/>}
                </Link>
                <p className='category-product-name' >{product.name}</p>
                <div className='category-product-price'>
                    <span className="index-decimal" >$</span>
                    <span id="index-tens" >{tens}</span>
                    <span className="index-decimal" >{decimal}</span>
                </div>
            </div>
    )
}

export default ProductIndexItem;