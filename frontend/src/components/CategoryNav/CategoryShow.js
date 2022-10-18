import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategory } from "../../store/category";
import { fetchProducts, getProducts } from '../../store/products';
import ProductIndexItem from "../ProductIndex/ProductIndexItem";

const CategoryShow = () => {
    const dispatch = useDispatch();
    const {categoryId} = useParams();
    const category = useSelector(getCategory(categoryId));
    // might need to change the selector to choose from all products to decrease the time render
    const products = useSelector(getProducts);
    let has_item = false;
    const productList = products.map((product)=> {
        if (product.categoryId === parseInt(categoryId)) {
            has_item = true;
            return <ProductIndexItem product={product} />
        }
        return null
    })

    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch, categoryId])
    if (category) {
        return (
            <div className="category-show-wrapper">
                <div className="category-show-container" >
                    {!has_item && <h1 className="category-name">Currently no products for {category.name}</h1>}
                    {has_item && <h1 className="category-name">{category.name}</h1>}
                    {has_item && <div className="category-products-container">
                        { productList }
                    </div>}
                </div>
            </div>
        )
    } else {
        return (
            <h1>Not a valid category</h1>
        )
    }

}

export default CategoryShow;