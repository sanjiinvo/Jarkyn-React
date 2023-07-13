import 'bootstrap/dist/css/bootstrap.min.css';
import './Scss/OurWorks.scss';
import Carousel from 'react-bootstrap/Carousel';
import economqv from '../images/econom-qv.jpg'
import standart from '../images/photostandart-qv.jpg'
import comfort from  '../images/comfort-qv.png'
import design from '../images/design-qv.jpg'
import car2 from '../images/newpocket/Newdesignphoto-qv.jpg'
import car3 from '../images/newpocket/neweconomphoto-qv.jpg'
import car4 from '../images/newpocket/newocomfortphoto-qv.jpg'
import car5 from '../images/newpocket/newstandartphoto-qv.jpg'
let WindowW = window.innerWidth


function OurWorks() {
  return (
    <div className='OurWorks'>
      <div className='Our-works-title'>
        Наши работы
      </div>
    <div id='ourworks' className='OurWorks-carrousel'>
        <Carousel className='Carousel-box'>
      <Carousel.Item>
        <div className='collage-box'>
        <img
          
          className="car-img"
          src={economqv}
          alt="First slide"
        />
                <img
          className="car-img"
          src={standart}
          alt="First slide"
        />
                <img
          className="car-img"
          src={comfort}
          alt="First slide"
        />
                <img
          className="car-img"
          src={design}
          alt="First slide"
        />
        
        </div>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='collage-box'>
        <img
          
          className="car-img"
          src={car2}
          alt="First slide"
        />
                <img
          className="car-img"
          src={car3}
          alt="First slide"
        />
                <img
          className="car-img"
          src={car4}
          alt="First slide"
        />
                <img
          className="car-img"
          src={car5}
          alt="First slide"
        />
        
        </div>

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='collage-box'>
        <img
          
          className="car-img"
          src={economqv}
          alt="First slide"
        />
                <img
          className="car-img"
          src={standart}
          alt="First slide"
        />
                <img
          className="car-img"
          src={comfort}
          alt="First slide"
        />
                <img
          className="car-img"
          src={design}
          alt="First slide"
        />
        
        </div>

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  </div>
    
  );

}


export default OurWorks;