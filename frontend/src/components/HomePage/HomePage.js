import { Link } from 'react-router-dom';
import alexa from '../../images/alexa-home.jpg';

const HomePage = () => {



    return (
        <div className="carousel-container" >
            <div className="carousel-background-carousel" >
                <Link to="products/4" >
                    <img className='carousel-img' src={alexa} alt="#" />
                </Link>
            </div>
            <div className="features-container" >
                <div className="feature" >
                    <img src="#" alt="#" />
                </div>
                <div className="feature" >
                    <img src="#" alt="#" />
                </div>
                <div className="feature" >
                    <img src="#" alt="#" />
                </div>
                <div className="feature" >
                    <img src="#" alt="#" />
                </div>
            </div>
        </div>
    )
}

export default HomePage