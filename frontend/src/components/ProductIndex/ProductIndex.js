import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProducts } from '../../store/products';
import ProductIndexItem from "./ProductIndexItem.js";
const ProductIndex = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    console.log(products);
    const productList = products.map(product => <ProductIndexItem product={product}/>)
    
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