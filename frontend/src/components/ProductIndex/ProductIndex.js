import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProducts } from '../../store/products';
import ProductIndexItem from "./ProductIndexItem.js";
const ProductIndex = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    
    const productList = products.map(product =>  
        <ProductIndexItem key={product.id} product={product} />
    )
    
    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <div className="category-show-wrapper">
                <div className="category-show-container" >
                    <h1 className="category-name">All Products</h1>
                    <div className="category-products-container">
                        { productList }
                    </div>
                </div>
            </div>
    )

}

export default ProductIndex;