import React from 'react'
import  './About.css';
import { Col,  Row,  Card, Form } from "react-bootstrap";
import code from './code2.png';
import gif from './giphy.gif';
function About() {
  return (
    <div className='container  my-5'>
       <div class="row">
  <div class="col-sm-6">

      <div className="card-body">
        <h5 className="card-title my-4" >About Us</h5>
             
        <Row className=" d-flex justify-content-center align-items-center">
   <p className='my-5'>
  <h3>
      
        Inside Data-Govern you’ll find all the code & data you need to do your data science work.
       
       </h3>
       <h3>
        Use over 50,000 public datasets and 400,000 public notebooks to conquer any analysis in no time.
         
        </h3>
  </p>

        <img src={gif} alt='' className='img-editor'  />

     

        </Row> 
       
</div>

  </div>


  <div className="sign-top col-sm-6">
<div class="card-body">
      <h5 className="card-title my-4  text-center">Sign Up</h5>
      
      <Row className=" vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={10} xs={13}>
            <div className="rowsign card-signup  shadow px-4">
              <Card.Body>
              <div className="border border-2  my-2"></div>

                <div className="mb-8 mt-md-8">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  <img src={code} className="nav-logo"  alt="logo"/>
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group  className="mb-4" controlId="Name">
                      
                        <Form.Control type="text" placeholder="Enter Name" className="input"/>
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        
                        <Form.Control type="email" placeholder="Enter Email" className="input"/>
                      </Form.Group>

                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Control  type="password" placeholder="Password" className="input"/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control type="password" placeholder="Confirm Password" className="input"/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                  
                        <a type="submit" className="button-sign my-5 p-3" href="/ff">Sign Up</a>
                      </div>
                    </Form>
                    
                </div>
                 
               </div>
              </Card.Body> 
              <Row className='my-4'>
              <p className='text-center my-3'>
                      Already have an account?? <span type="button" href='/signin'>Sign in</span>
                       
                      </p>
              </Row> 
            </div>
        
          </Col>
         
        </Row>
       </div>  
    </div>
    </div>
  </div>


  )
}

export default About;