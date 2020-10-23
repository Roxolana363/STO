import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../img/Mask Group 27.png';
import Slide2 from '../img/Mask Group 29.png';
import Slide3 from '../img/Mask Group 31.png';

export default class CarouselBox extends Component {
  render(){
    return(
       <Carousel>
        <Carousel.Item>
         <img
           className="d-block"
           src={Slide1}
           alt="Slide1"
         />
        </Carousel.Item>
        <Carousel.Item>
         <img
           className="d-block"
           src={Slide2}
           alt="Slide2"
         />
        </Carousel.Item>
        <Carousel.Item>
         <img
           className="d-block"
           src={Slide3}
           alt="Slide3"
         />
        </Carousel.Item>
      </Carousel>
    );
  }
}
