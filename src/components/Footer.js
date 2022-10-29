import React from 'react';
import './Footer.css';
import Wave from '../assets/wave.svg';
import {BsFacebook,BsInstagram,BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
  <img  src={Wave}  alt='' style={{width:"100%"}}  />
    <div className='f-content'>
     
     <div className='f-icons'>
<BsFacebook className='bs'    color='white'  size={'2rem'} />
<BsInstagram  className='bs'   color='white' size={'2rem'} />
<BsYoutube  className='bs'    color='white' size={'2rem'}   />
     </div>
    </div>

    </div>
  )
}

export default Footer