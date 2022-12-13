import { Link } from 'react-router-dom';
import alexa from '../../images/alexa-home.jpg';
import fitness from '../../images/fitness.jpg';
import basketball from '../../images/basketball1.jpg';
import sanitizing from '../../images/sanitizer.jpg';
import gaming from '../../images/dota.jpg';

import Carousel from 'react-bootstrap/Carousel';
import HomeCarousel from './HomeCarousel';

const HomePage = () => {



    return (
        <div className="carousel-container" >
            <div className="carousel-background-carousel" >
                {/* <HomeCarousel /> */}
                <Link to="products/4" >
                    <img className='carousel-img' src={alexa} alt="#" />
                    {/* <div className='carousel-fade'>
                        
                    </div> */}
                </Link>
            </div>
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
            </div>
        </div>
    )
}

export default HomePage