import React from 'react'
import './Hero.css'
import Header from './Header';
import HeroImage from '../assets/fit6.png'
import Fit from '../assets/fit3.png'
import Muscle from '../assets/muscle.png'
import Run from '../assets/fit2.png'


const Hero = () => {
  return (
    <div className='hero'>
     <div className='left-h'>
     <Header/>
     <div className='the-best-ad'>
      <div></div>
      <span>the best fitnes club in town</span>
     </div>
     {/*hero heading */}
     <div className='hero-text'>
        <div>
          <span className='stroke-text'>Shape</span>
          <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div ><span>in here we will help you to shape and<br/> build your body and live up your life to fullest 
            </span>
            </div>
     </div>
     {/*figures */}
     <div className='figures'>
   <div>
    <span>+140</span>
    <span>expert coachs</span>
   </div>
     <div>
    <span>+978</span>
    <span>members joined</span>
   </div>
     <div>
    <span>+50</span>
    <span>fitness programs</span>
   </div>
     </div>
     {/*herro buttons */}
     <div className='hero-buttons'>
       <button className='btn'>Get Started</button>
       <button className='btn'>Learn More</button>
     </div>
     </div>
<div className='right-h'>
<button className='btn'>Join Now</button>

<div className='heart-rate'>
  <img src={Fit} alt=""/>
  <span>Build Strength</span>
 {/*<span>116 bpm</span> */} 
</div>
<div className='muscle-rate'>
  <img src={Muscle} alt=""/>
  <span>Build Muscles</span>
  
</div>


 {/*Hero images */}
<img  src={HeroImage} alt='' className='hero-image'/>
{/*<img src={HeroBack}  alt='' className='hero-image-back'/>*/}
{/*calories */}
<div className='calories'>
 <img  src={Run} alt=''/>
 <div>
  <span>Burning calories</span>
 {/*<span>220 kcal</span> */}
 </div>
 
</div>
</div>
    </div>
  )
}

export default Hero