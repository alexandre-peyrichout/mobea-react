import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import login from '../assets/login.png';
import dashboard from '../assets/dashboard.png';
import test from '../assets/test.png';

function DemoCarousel() {
  return (
    <div className="container">
      <Carousel>
        <div>
          <img src={login} alt="login" />
        </div>
        <div>
          <img src={dashboard} alt="dashboard" />
        </div>
        <div>
          <img src={test} alt="test" />
        </div>
      </Carousel>
    </div>
  );
}

export default DemoCarousel;
