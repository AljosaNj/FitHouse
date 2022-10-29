import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
    <div className='time'>
     <span  >Opening hours</span>
     <span>monday : <i>7:00am - 10:30pm</i></span>
      <span>tuesday : <i>7:00am - 10:30pm</i></span>
       <span>wednesday : <i>7:00am - 10:30pm</i></span>
        <span>friday : <i>7:00am - 10:30pm</i></span>
         <span>saturday: <i>7:00am - 10:30pm</i></span>
          <span>sunday : <i>12:00pm - 18:30pm</i></span>
    </div>
    {/*<div className='blur contact-blur'></div> */} 
       <div className='address'>
        <span>Information</span>
          <span>Phone : <i>+123-556-7788</i></span>
      <span>Phone : <i>+111-333-4444</i></span>
       <span>Email : <i>fithouse@gmail.com</i></span>
        <span>Address : <i>green street 15 London</i></span>
       </div>

    </div>
  )
}

export default Contact