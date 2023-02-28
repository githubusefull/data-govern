import React from 'react';
import './Slider.css';
import pic2 from './pic2.png';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';


function Slider() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner myslider">
      <div class="carousel-item active">
        <img src={pic2} class="d-block w-80 h-80" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
      </div>
      <div class="carousel-item">
        <img src={pic3} class="d-block w-80 h-80" alt="..." />
        <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>      </div>
      <div class="carousel-item">
        <img src={pic4} class="d-block w-80 h-80" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>      </div>
      <div class="carousel-item">
        <img src={pic5} class="d-block w-80 h-80" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={pic6} class="d-block w-80 h-80" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>      </div>
      <div class="carousel-item">
        <img src={pic3} class="d-block w-80 h-80" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider