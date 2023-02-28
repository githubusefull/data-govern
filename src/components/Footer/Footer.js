import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';

    function Footer() {
  return (
    <MDBFooter class="footer" bgColor="light" className='text-center text-lg-start text-muted'>   
   <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                DATA
              </h6>
              <p>
              Inside Data-Govern you’ll find all you need about your data govern work. Use over 50,000 public datasets and 400,000 public notebooks .

              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='/services' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset'>
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon='home' className='me-3 icon-home' />
                Morroco, Rabat, Hassan 
              </p>
              <p>
                <MDBIcon  icon='envelope' className='me-3 icon-footer' />
                data@gmail.com
              </p>
              <p>
                <MDBIcon  icon='phone' className='me-3 icon-footer' /> + 21206000000
              </p>
              <p>
                <MDBIcon icon='print' className='me-3 icon-footer' /> + 21206000000
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
     
      <div className='text-center p-3' style={{ backgroundColor: "#EDF1D6"}}>
        <>© 2023 Copyright : Data-Govern </>
        <a className='text-reset fw-bold' href='https://data-gover.com/'>
        </a>
      </div>
       </MDBFooter>
    
  );
}

export default Footer;