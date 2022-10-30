import React from 'react'
import './Hero.css'
import Header from './Header';
//import Toggle from './Toggle';
import HeroImage from '../assets/fit6.png'
import Fit from '../assets/fit3.png'
import Muscle from '../assets/muscle.png'
import Run from '../assets/fit2.png'
import ColGreen from '../assets/green.png'
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll';


const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className='hero' id='home'>

      <div className='blur hero-blur'></div>
     <div className='left-h'>
     <Header/>
     <div className='the-best-ad'>
      <motion.div 
      initial={{left:mobile?'165px':'238px'}}
      whileInView={{left:'8px'}}
      transition={{...transition,type:'tween'}}>

      </motion.div>
      <span>the best fitness club in the town</span>
     </div>
     {/*hero heading */}
     <div className='hero-text'>
        <div>
          <span className='stroke-text'>Shape</span>
          <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div ><span>in here we will help you to shape and<br/> build your body and live up your life to fullest 
            </span>
            </div>
     </div>
     {/*figures */}
     <div className='figures'>
   <div>
    <span>
<NumberCounter end={140} start={100}  delay='4' preFix="+"/>

    </span>
    <span>different exercises</span>
   </div>
     <div>
    <span>
<NumberCounter end={978} start={800}  delay='4' preFix="+"/>
    </span>
    <span>of our members</span>
   </div>
     <div>
    <span>
    <NumberCounter end={50} start={0}  delay='4' preFix="+"/>  
    </span>
    <span>fitness programs</span>
   </div>
     </div>
     {/*herro buttons */}
     <div className='hero-buttons'>
       <button className='btn'>  <Link   to='plans' smooth='true'   >Get Started</Link>   </button>
       <button className='btn'> <Link   to='contact' smooth='true'   >Contact</Link> </button>
     </div>
     </div>
<div className='right-h'>
{/*<div className='btn'>
  <Toggle/>
  </div>*/}


<motion.div 
initial={{right:'-1rem'}}
whileInView={{right:'4rem'}}
transition={transition}
className='heart-rate'>
  <img src={Fit} alt=""/>
  <span>Build Strength</span>
 {/*<span>116 bpm</span> */} 
</motion.div>
<div 
className='muscle-rate'>
  <img src={Muscle} alt=""/>
  <span>Build Muscles</span>
    <div className='blur hero-blur'></div>
</div>


 {/*Hero images */}

<img  src={HeroImage} alt='' className='hero-image'/>
<img  src={ColGreen}  alt=''  className='hero-green'  />
{/*<img src={HeroBack}  alt='' className='hero-image-back'/>*/}
{/*calories */}
<motion.div
initial={{right:'37rem'}}
whileInView={{right:'27rem'}}
transition={transition}
className='calories'>
 <img  src={Run} alt=''/>
 <div>
  <span>Burning calories</span>
 {/*<span>220 kcal</span> */}
 </div>
 
</motion.div>
</div>
    </div>
  )
}

export default Hero