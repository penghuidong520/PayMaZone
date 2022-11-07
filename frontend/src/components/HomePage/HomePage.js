import { Link } from 'react-router-dom';
import alexa from '../../images/alexa-home.jpg';
import fitness from '../../images/fitness.jpg';
import Carousel from 'react-bootstrap/Carousel';
import HomeCarousel from './HomeCarousel';

const HomePage = () => {



    return (
        <div className="carousel-container" >
            <div className="carousel-background-carousel" >
                <HomeCarousel />
                {/* <Link to="products/4" >
                    <img className='carousel-img' src={alexa} alt="#" />
                </Link> */}
            </div>
            <div className="features-container" >
                <Link className="feature" >
                    <img src="#" alt="#" />
                </Link>
                <Link className="feature" >
                    <img src="#" alt="#" />
                </Link>
                <Link className="feature" >
                    <img src="#" alt="#" />
                </Link>
                <Link className="feature" >
                    <img src="#" alt="#" />
                </Link>
            </div>
        </div>
    )
}

export default HomePage