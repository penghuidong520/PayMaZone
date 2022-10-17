import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchProduct, getProduct } from '../../store/products';

const ProductShow = () => {
    const dispatch = useDispatch();
    const {productId} = useParams();
    const product = useSelector(getProduct(productId));
    useEffect(()=>{
        dispatch(fetchProduct(productId));
    }, [dispatch, productId])

    let tens = '';
    let decimal = '';
    if (product) {
        [tens, decimal] = product.price.toString().split(".");
    } else {
        tens = 'Undefined Price';
    }

    if (product) {
        return (
            <div className="product-show-container" >
                <div className="show-container" >
                    <div className="product-show-img-container" >
                        { product.photourls && <img className="show-img" src={product.photourls[0]} alt=""/>}
                        { !product.photourls && <img className="show-img" src="#" alt=""/>}
                    </div>
                    <div className="product-show-description-container" >
                        <h2 id="product-name"> { product.name }</h2>
                        <hr className="product-hr" />
                        <div className="price-container" >
                            <span className="decimal" >$</span>
                            <span id="tens" >{tens}</span>
                            <span className="decimal" >{decimal}</span>
                        </div>
                        <div id="show-detail" ></div>
                        <span>Description: </span>
                            <p>{ product.description }</p>
                    </div>
                    <div className="product-cart" >

                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }

}

export default ProductShow