import React,{useState} from 'react';
import './Coach.css';
import {testimonialsData} from '../data/testimonialsData';
import leftArrow from '../assets/leftar.png';
import rightArrow from '../assets/rightar.png';
import {motion} from 'framer-motion';

const Coach = () => {
const transition = {type: 'spring', duration: 3};

 const [selected,setSelected] = useState(0);
 const tLength = testimonialsData.length;

  return (
    <div className='coach'>
    <div className='left-t'> 
     <span>Coaches</span>
     <span className='stroke-text'>FitHouse</span>
     <span>Our Team</span>
     <span>
      {testimonialsData[selected].review}
     </span>
     <span>
      <span style={{color:'var(--green)'}} >
       {testimonialsData[selected].name}
      </span>{""}
     - {testimonialsData[selected].status}
     </span>
    </div>
    <div className='right-t'>
     <motion.div
     initial={{opacity:0,x:-100}}
     transition={{...transition,duration:2}}
     whileInView={{opacity:1,x:0}}
     >

     </motion.div>
     <motion.div
     initial={{opacity:0,x:100}}
     transition={{...transition,duration:2}}
     whileInView={{opacity:1,x:0}}
     
     >

     </motion.div>
 <img  src={testimonialsData[selected].image}  alt=''/>
 <div className='arrows'>
  <img 
  onClick={()=>{
   selected===0
   ? setSelected(tLength - 1)
   : setSelected((prev) => prev -1)
  }}
  
  src={leftArrow} alt=''/>
  <img
  onClick={()=> {
   selected === tLength - 1
   ? setSelected(0)
   : setSelected((prev) => prev + 1);
  }}
  
  src={rightArrow}  alt='' />
  </div>
 </div>
    </div>
  )
}

export default Coach