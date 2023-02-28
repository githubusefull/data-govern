import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic2 from './pic2.png';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic6 from './pic6.jpg';
import progr1 from './programming1.png';
import progr2 from './programming2.png';

import './Slider2.css';
import {TfiMoreAlt} from 'react-icons/tfi';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 414, min: 0 },
    items: 1
  }
 
};


function Slider2() {
  return (
    <div className='slide-title'>
       <div >
    <h4>Learn How to Code</h4>
  </div>
<Carousel responsive={responsive} className="slide">
 
  <div class="containerrr">
  <img src={pic2} alt="Avatar" class="img-slide" />
  <div class="overlay">Binary System. 

    <a type='button' href='d' className='btn-more'><TfiMoreAlt/></a>

  </div>

</div>
  <div class="containerrr">
  <img src={pic3} alt="Avatar" class="img-slide"  />
  <div class="overlay">Data Visualization.

    <a type='button' href='d' className='btn-more'><TfiMoreAlt/></a>

  </div>

</div>
  <div class="containerrr">
  <img src={pic4} alt="Avatar" class="img-slide"  />
  <div class="overlay">Big Data.

    <a type='button' href='d' className='btn-more'><TfiMoreAlt/></a>

  </div>

</div>
  <div class="containerrr">
  <img src={pic6} alt="Avatar" class="img-slide"  />
  <div class="overlay">Machine Learning.

    <a type='button' href='d' className='btn-more'><TfiMoreAlt/></a>

  </div>

</div>
  <div class="containerrr">
  <img src={progr1} alt="Avatar" class="img-slide" />
  <div class="overlay">Coding.

    <a type='button' href='d' className='btn-more'><TfiMoreAlt/></a>

  </div>

</div>
<div class="containerrr">
  <img src={progr2} alt="Avatar" class="img-slide"  />
  <div class="overlay">Coding.
    <a type='button' href='d' className='btn-more'><TfiMoreAlt/></a>

  </div>

</div>
<div class="containerrr">
  <img src={progr1} alt="Avatar" class="img-slide"  />
  <div class="overlay">Coding.
    <a type='button' href='d' className='btn-more'><TfiMoreAlt/></a>

  </div>

</div>
<div class="containerrr">
  <img src={progr1} alt="Avatar" class="img-slide"  />
  <div class="overlay">Coding.
    <a type='button' href='d' className='btn-more'><TfiMoreAlt/></a>

  </div>

</div>
<div class="containerrr">
  <img src={progr2} alt="Avatar" class="img-slide" />
  <div class="overlay">Coding.
    <a type='button' href='d' className='btn-more'><TfiMoreAlt/></a>

  </div>

</div>

</Carousel>
   </div>
  
  )
}

export default Slider2