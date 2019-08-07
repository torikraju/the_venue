import React from 'react';
import Slider from 'react-slick';

import slideOne from '../../resources/images/slide_one.jpg';
import slideTow from '../../resources/images/slide_two.jpg';
import slideThree from '../../resources/images/slide_three.jpg';
import slideFour from '../../resources/images/slide_four.jpg';
import slideFive from '../../resources/images/slide_five.jpg';


export default () => {
  const slides = [slideOne, slideTow, slideThree, slideFour, slideFive];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        <Slider {...settings}>
          {slides.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              <div
                className="carrousel_image"
                style={{
                  background: `url(${item})`,
                  height: `${window.innerHeight}px`,
                }}
              />
            </div>
          ))}
        </Slider>
      </Slider>
    </div>
  );
};
