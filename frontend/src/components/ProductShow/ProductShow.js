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

    if (product) {
        return (
            <>
                <h1> { product.name }</h1>
                <span>price: { product.price }</span>
                <p>Description: { product.description }</p>
            </>
        )
    } else {
        return (
            <></>
        )
    }

}

export default ProductShow