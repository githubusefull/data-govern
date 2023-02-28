import React from 'react';
import './Team.css';
import pop from './blob.jpg';
import pic2 from './tk.jpg';
import pic3 from './trt.jpg';
import pic7 from './simo.png';
import {TfiMoreAlt} from 'react-icons/tfi';
function Team() {
 

  return (

     <div className='bo'>
      <h4 className='my-4'>Our Team</h4>
    <div className="bo">
     
      <div className="contain">
        
        <img src={pop} className="img" alt="" />
      <div className="content">
      <span className='name1'>Name : </span><span className='name2'>Lara</span>
        <br></br>
        <span className='name3'>Email : </span><span className='name4'>lara@gmail.com</span>
        <br></br> 
       
        <span><a href="/more" className='see-more' type="button"><TfiMoreAlt/></a></span>
      
        </div>
      </div>
      <div className="contain">
        <img src={pic2} className="img" alt="" />
      <div className="content">
      <span className='name1'>Name : </span><span className='name2'>said</span>
        <br></br>
        <span className='name3'>Email : </span><span className='name4'>said@gmail.com</span> 
        <br></br>   
       
        <span><a href="/more" className='see-more' type="button"><TfiMoreAlt/></a></span>
        
        </div>
      </div>
      <div className="contain">
        <img src={pic3} className="img" alt="" />
      <div className="content">
      <span className='name1'>Name : </span><span className='name2'>Jhon</span>
        <br></br>
        <span className='name3'>Email : </span><span className='name4'>jhon@gmail.com</span>  
        <br></br>  
        
        <span><a href="/more" className='see-more' type="button"><TfiMoreAlt/></a></span>
        
         </div>
      </div>
      <div className="contain">
        <img src={pic7} className="img" alt="" />
      <div className="content">
      <span className='name1'>Name : </span><span className='name2'>Mohamed</span>
        <br></br>
        <span className='name3'>Email : </span><span className='name4'>mohamed@gmail.com</span> 
        <br></br>  
        <span className='name5'>Phone : </span><span className='name6'>0634345674</span> 
        <br></br> 
        <span><a href="/more" className='see-more' type="button"><TfiMoreAlt/></a></span>
 
              </div>
      </div>
    </div>
    </div>

  )
}


export default Team;