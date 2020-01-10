import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../index.css';
import { Carousel } from 'react-responsive-carousel';
import wireframe1 from '../assets/wireframe1.png';
import wireframe2 from '../assets/wireframe2.png';
import wireframe3 from '../assets/wireframe3.png';
import wireframe4 from '../assets/wireframe4.png';
import login from '../assets/login.png';
import dashboard from '../assets/dashboard.png';
import test from '../assets/test.png';

function DemoCarousel() {
  return (
    <div className="container">
      <Carousel showStatus={false} infiniteLoop autoPlay transitionTime={1000} width={'30%'}>
        <div>
          <img src={wireframe1} alt="wireframe1" />
        </div>
        <div>
          <img src={wireframe2} alt="wireframe2" />
        </div>
        <div>
          <img src={wireframe3} alt="wireframe3" />
        </div>
        <div>
          <img src={wireframe4} alt="wireframe4" />
        </div>
      </Carousel>
    </div>
  );
}

export default DemoCarousel;
