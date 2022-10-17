import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { fetchCategories, getCategories } from "../../store/category";
// import CategoryShow from './CategoryShow';

const CategoryNav = () => {

    const dispatch = useDispatch();
    const categories = useSelector(getCategories);
    const categoryList = categories.map(category => <li className="nav-category-li" key={category.id}>
        <Link className="nav-category-link" to={`/category/${category.id}`} >
             {category.name}
        </Link> 
    </li>)

    useEffect(()=>{
        dispatch(fetchCategories());
    }, [dispatch])

    return (
        <div className="nav-category" >
            <div className="nav-category-container">
                <ul className="nav-category-ul">
                    <li className="nav-category-li" >
                        <Link className="nav-category-link" to="/products">
                            <i className="fa-solid fa-bars fa-lg"></i>
                            <span>&nbsp; All</span>
                        </Link>
                    </li>
                    {categoryList}
                </ul>
            </div>
        </div>
    )
}

export default CategoryNav;