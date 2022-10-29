import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
       <div className='blur contact-blur'></div>
    <div className='time'>
     <span  >Opening hours</span>
     <span>Monday : <i>7:00am - 10:30pm</i></span>
      <span>Tuesday : <i>7:00am - 10:30pm</i></span>
       <span>Wednesday : <i>7:00am - 10:30pm</i></span>
        <span>Friday : <i>7:00am - 10:30pm</i></span>
         <span>Saturday: <i>7:00am - 10:30pm</i></span>
          <span>Sunday : <i>12:00pm - 18:30pm</i></span>
    </div>
   
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