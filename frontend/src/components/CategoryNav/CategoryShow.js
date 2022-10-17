import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts, getProducts } from '../../store/products';
import ProductIndexItem from "../ProductIndex/ProductIndexItem";

const CategoryShow = ({category}) => {
    const dispatch = useDispatch();
    const {categoryId} = useParams();
    // might need to change the selector to choose from all products to decrease the time render
    const products = useSelector(getProducts);
    const productList = products.map((product)=> {
        if (product.categoryId === parseInt(categoryId)) {
            return <ProductIndexItem product={product} />
        }
        return null
    })

    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch, categoryId])

    return (
        <>
            <ul>
                { productList }
            </ul>
        </>
    )

}

export default CategoryShow;