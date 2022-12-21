import { Link } from 'react-router-dom';
import alexa from '../../images/alexa-home.jpg';
import fitness from '../../images/fitness.jpg';
import basketball from '../../images/basketball1.jpg';
import sanitizing from '../../images/sanitizer.jpg';
import gaming from '../../images/dota.jpg';
import vr from '../../images/vr.jpg';
import collar from '../../images/pet_collar.jpg'

import Carousel from 'react-bootstrap/Carousel';
import HomeCarousel from './HomeCarousel';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/products';
import { getProducts, getProduct } from '../../store/products';


const HomePage = () => {
    const dispatch = useDispatch();
    const recommendProducts = useSelector(getProducts);
    // const recommendList = recommendProducts.map(product => {
    //     const [tens, decimal] = product.price.toString().split(".");

    //     return (
    //         <Link to={`products/${product.id}`} className="recommend-link" >
    //             <img id="category-show-img" src={product.photourls[0]} alt=""/>
    //         </Link>
    //     )
    // })

    const product1 = useSelector(getProduct(5))
    const product2 = useSelector(getProduct(31))
    const product3 = useSelector(getProduct(21))
    const product4 = useSelector(getProduct(35))
    const product5 = useSelector(getProduct(8))
    const product6 = useSelector(getProduct(26))
    let recommendList = [];
    if (product1 && product2 && product3 && product4 && product5 && product6) {
        recommendList = 
        <div className='recommend-list-inner' >
            <Link to={`products/${product1.id}`} className="recommend-link" >
                <img id="category-show-img" src={product1.photourls[0]} alt=""/>
            </Link>
            <Link to={`products/${product2.id}`} className="recommend-link" >
                <img id="category-show-img" src={product2.photourls[0]} alt=""/>
            </Link>
            <Link to={`products/${product3.id}`} className="recommend-link" >
                <img id="category-show-img" src={product3.photourls[0]} alt=""/>
            </Link>
            <Link to={`products/${product4.id}`} className="recommend-link" >
                <img id="category-show-img" src={product4.photourls[0]} alt=""/>
            </Link>
            <Link to={`products/${product5.id}`} className="recommend-link" >
                <img id="category-show-img" src={product5.photourls[0]} alt=""/>
            </Link>
            <Link to={`products/${product6.id}`} className="recommend-link" >
                <img id="category-show-img" src={product6.photourls[0]} alt=""/>
            </Link>
        </div>
    }

    useEffect(()=> {
        dispatch(fetchProduct(5));
        dispatch(fetchProduct(31));
        dispatch(fetchProduct(21));
        dispatch(fetchProduct(35));
        dispatch(fetchProduct(8));
        dispatch(fetchProduct(26));

    }, [])

    return (
        <div className="carousel-container" >
            <Link to="products/4" >
                <div className="carousel-background-carousel" >
                    {/* <HomeCarousel /> */}
                        {/* <img className='carousel-img' src={alexa} alt="#" /> */}
                        {/* <div className='carousel-fade'></div> */}
                </div>
            </Link>
            <div className="features-container" >
                <Link to="category/3" className="feature" >
                    <h2 className='feature-category' >Sports & Exercise</h2>
                    <img className='feature-img' src={basketball} alt="#" />
                </Link>
                <Link to="category/2" className="feature" >
                    <h2 className='feature-category' >Daily Cleaning</h2>
                    <img className='feature-img' src={sanitizing} alt="#" />
                </Link>
                <Link to="category/5" className="feature" >
                    <h2 className='feature-category' >Popular PC Games</h2>
                        <img className='feature-img' src={gaming} alt="#" />
                </Link>
                <Link to="category/1" className="feature" >
                    <h2 className='feature-category' >Explore new Technologies</h2>
                    <img className='feature-img' src={vr} alt="#" />
                </Link>
                <Link to="category/4" className="feature" >
                    <h2 className='feature-category' >Pet goods</h2>
                    <img className='feature-img' src={collar} alt="#" />
                </Link>
            </div>
            {recommendProducts && <div className='recommend-list-container'>
                <span id="recommendations">Recommendations</span>
                <div className='recommend-list-inner' >
                    {recommendList}
                </div>
            </div>}
        </div>
        
    )
}

export default HomePage