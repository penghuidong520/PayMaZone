import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { fetchCategories, getCategories } from "../../store/category";
// import CategoryShow from './CategoryShow';

const CategoryNav = () => {

    const dispatch = useDispatch();
    const categories = useSelector(getCategories);
    const categoryList = categories.map(category => 
        <Link className="nav-category-link" to={`/category/${category.id}`} key={category.id}>
            <li className="nav-category-li" >
                {category.name}
            </li>
        </Link> 
    )

    useEffect(()=>{
        dispatch(fetchCategories());
    }, [dispatch])

    return (
        <div className="nav-category" >
            <div className="nav-category-container">
                <ul className="nav-category-ul">
                    <Link className="nav-category-link" to="/products">
                        <li className="nav-category-li" >
                            <i className="fa-solid fa-bars fa-lg"></i>
                            <span>&nbsp; All</span>
                        </li>
                    </Link>
                    {categoryList}
                </ul>
            </div>
        </div>
    )
}

export default CategoryNav;