import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProducts } from '../../store/products';
import ProductIndexItem from "./ProductIndexItem.js";
const ProductIndex = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    const productList = products.map(product => <li key={product.id}> <ProductIndexItem product={product}/></li>)
    
    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <>
            <h1>SOIDHFL:KDJLFJDSL:KJF:LKDJS</h1>
            <ul>
                {productList}
            </ul>
        </>
    )

}

export default ProductIndex;