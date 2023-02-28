import React from 'react';
import './NavBar.css';
import {TbMenu2} from 'react-icons/tb';
import { HiHome } from 'react-icons/hi';
import {TiMessage} from 'react-icons/ti';
import {AiFillSetting} from 'react-icons/ai';
import {BsFillInfoSquareFill} from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {ImLinkedin} from 'react-icons/im';
import {FaFreeCodeCamp} from 'react-icons/fa';
import {CgClose} from 'react-icons/cg';
import code from './code2.png';


function NavBar() {
  return (
   <header className='header' >
    <div className="container-fluid">
        <div className="navb-logo"   id="navbarModel">
        <img src={code} alt="" className="logo"/>
        </div>

        <div className="navb-items" >
            <div className="item">
              <a className='home' href="/">Home</a>
            </div>
            <div className="item">
              <a className='services' href="/about">About</a>
            </div>
            <div className="item">
              <a className='cases' href="/projects">Services</a>
            </div>
            <div className="item">
              <a className='about' href="/contact">Contact</a>
            </div>
            <div className="item-button2">
              <a  href="/signin" type="button">Sign In</a>
            </div>
            <div className="item-button">
              <a  href="/signup" type="button">Sign Up</a>
            </div>
        </div>
        <div className="mobile-toggler d-lg-none">
        
        <a href="/dddd"   

        className="mobile-toggler" 
        type="button" 
        data-bs-toggle="modal"
        aria-controls="navbModel"
        data-bs-target="#navbModel"
        aria-expanded="false"
        aria-label="Toggle navigation"

        >
           <TbMenu2 className='icon-menu' />
        </a>
        </div>
     


<div className="modal fade" id="navbModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content" >
      <div className="modal-header">
      <a className="nav-logo-modal"  href="ff" alt="logo">
         <img src={code} alt="" className="logo"/>
        </a> 
        <a href="/fde" data-bs-dismiss="modal" aria-label="Close">
          <CgClose className='icon-close' />
        </a>
      </div>
      <div className="modal-body">
        <div className="modal-line">
          <HiHome className='homee'/>
          <a href="/">Home</a>
        </div>
         <div className="modal-line">
        <BsFillInfoSquareFill className='aboutt'/>
          <a href="/about">About</a>
        </div>
        <div className="modal-line">
          <AiFillSetting className='case'/>
          <a href="/projects">Services</a>
        </div>
        <div className="modal-line">
          <TiMessage className='message'/>
          <a href="/contact">Contact</a>
        </div>
        <a  href="/contact"  className="navb-button">Contact Us</a>
        <a  href="/signin"  className="navb-button2">Sign In</a>
        <a  href="/signup"  className="navb-button3">Sign Up</a>

      </div>
      <div className="mobile-modal-footer">
       <a target="blank" href="/fdfdf">
        <FaFacebookSquare  />
       </a>
       <a target="blank" href="/fdgith">
        <BsGithub />
       </a>
       <a target="blank" href="linkdin">
        <ImLinkedin />
       </a>
       <a target="blank" href="/freecode">

        <FaFreeCodeCamp />
       </a>
      </div>
    </div>
  </div>
</div>
</div>
</header>
  )
}

export default NavBar;