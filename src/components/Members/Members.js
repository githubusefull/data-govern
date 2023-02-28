import React from 'react';
import {  Col, Row } from 'react-bootstrap';
import './Members.css';
import pic from './blob.jpg';
import pic2 from './tk.jpg';
import pic3 from './trt.jpg';
import pic4 from './tk.jpg';
import pic5 from './tk.jpg';
import pic6 from './trt.jpg';
import pic7 from './simo.png';
function Members() {
 


    return (

        <section className="py-4 my-4 container">
             <Row>
                <Col>
             <h2 className='my-5'>Our Students</h2>
           <div className='text-center'>
  
  <img src={pic} alt=""  className="dot"/>
  <img src={pic2} alt=""  className="dot"/>
  <img src={pic3} alt=""  className="dot"/>
  <img src={pic4} alt=""  className="dot"/>
  <img src={pic3} alt=""  className="dot"/>
  <img src={pic4} alt=""  className="dot"/>
  <img src={pic5} alt=""  className="dot"/>
  <img src={pic7} alt=""  className="dot"/>
  <img src={pic4} alt=""  className="dot"/>
  <img src={pic3} alt=""  className="dot"/>
  <img src={pic7} alt=""  className="dot"/>
  <img src={pic3} alt=""  className="dot"/>
  <img src={pic4} alt=""  className="dot"/>
</div>

            </Col>
           <Col>
           <h2 className='my-5'>Our Members</h2>
           <div className='text-center'>
  <img src={pic} alt=""  className="dot"/>
  <img src={pic2} alt=""  className="dot"/>
  <img src={pic3} alt=""  className="dot"/>
  <img src={pic4} alt=""  className="dot"/>
  <img src={pic3} alt=""  className="dot"/>
  <img src={pic4} alt=""  className="dot"/>
  <img src={pic5} alt=""  className="dot"/>
  <img src={pic6} alt=""  className="dot"/>
  <img src={pic4} alt=""  className="dot"/>
  <img src={pic3} alt=""  className="dot"/>
  <img src={pic4} alt=""  className="dot"/>
  <img src={pic3} alt=""  className="dot"/>
  <img src={pic4} alt=""  className="dot"/>
</div>

           </Col>           
          </Row>
    </section>


    )
}

export default Members;