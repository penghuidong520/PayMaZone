import Carousel from 'react-bootstrap/Carousel';
import alexa from '../../images/alexa-home.jpg';
import fitness from '../../images/fitness.jpg';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={alexa}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={fitness}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;