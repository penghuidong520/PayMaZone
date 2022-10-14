import { useEffect } from "react";
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

    return (
        <>
            <h1>{ product && product.name }</h1>
            <p>{ product && product.description }</p>
        </>
    )
}

export default ProductShow