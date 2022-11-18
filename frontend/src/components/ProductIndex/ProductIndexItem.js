import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProduct, getProduct } from '../../store/products';

const ProductIndexItem = ({product}) => {
    // const productId = useParams();
    const dispatch = useDispatch();
    const prod = useSelector(getProduct(product.id));
    let tens = '';
    let decimal = '';
    if (product) {
        [tens, decimal] = product.price.toString().split(".");
    }
    useEffect(()=>{
        dispatch(fetchProduct(product.id));
    }, [dispatch, product.id])
    if (prod) {
        return (
                <div className='category-list' >
                    <Link className='category-list-link' to={`/products/${prod.id}`} >
                        { prod.photourls && <img id="category-show-img" src={prod.photourls[0]} alt=""/>}
                    </Link>
                    <p className='category-product-name' >{prod.name}</p>
                    <div className='category-product-price'>
                        <span className="index-decimal" >$</span>
                        <span id="index-tens" >{tens}</span>
                        <span className="index-decimal" >{decimal}</span>
                    </div>
                </div>
        )
    } else {
        return (<></>);
    }
}

export default ProductIndexItem;