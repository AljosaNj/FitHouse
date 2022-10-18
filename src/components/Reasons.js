import React from 'react'
import './Reasons.css'
import image1 from '../assets/image1.png';
import image2 from '../assets/gym3.jpg';
import image3 from '../assets/gym7.jpg';
import image4 from '../assets/gym5.jpg';
import correct from '../assets/correct.png';

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
     <div className='left-r'>
      <img  src={image1} alt=''/>
      <img  src={image2} alt=''/>
      <img  src={image3} alt=''/>
      <img  src={image4} alt=''/>
     </div>
        
        <div className='right-r'>
         <span>FitHouse</span>
         <div>
          <span className='stroke-text'>why</span>
          <span>  choose us?</span>
         </div>
         <div className='details-r'>
            <div>
             <img   src={correct}  alt=''/>
             <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>

            <div>
             <img   src={correct}  alt=''/>
             <span>gym hygiene </span>
            </div>

            <div>
             <img   src={correct}  alt=''/>
             <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>

            <div>
             <img   src={correct}  alt=''/>
             <span>massage service and sauna</span>
            </div>

               <div>
             <img   src={correct}  alt=''/>
             <span>parking spot for members</span>
            </div>
   
               <div>
             <img   src={correct}  alt=''/>
             <span>The Best Service Available</span>
            </div>

             <div>
             <img   src={correct}  alt=''/>
             <span> Free Consultation</span>
            </div>

               <div>
             <img   src={correct}  alt=''/>
             <span>New exercise equipment</span>
            </div> 


         </div>


        </div>
    </div>
  )
}

export default Reasons