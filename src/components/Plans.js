import React from 'react'
import './Plans.css'
import {plansData} from '../data/plansData'
import whitetick from '../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className='plans-container'>
     <div className='programs-header' style={{gap:'2rem'}}>
       <span className='stroke-text'>READY TO START</span>
      <span>YOUR JOURNEY</span>
     </div>

{/*plans card */}
<div className='plans'>
  {plansData.map((plan,i)=>(
   <div  key={plan.id} className='plan'>
   {plan.icon}
   <span>{plan.name}</span>
   <span>$ {plan.price}</span>

   <div className='features'>
    {plan.features.map((feature,i) => (
<div className='feature' key={i}>
    <img src={whitetick} alt=''/>
       <span  >{feature}</span>
      </div>

    ))}
      

   </div>
   </div>
  ))}

</div>
    </div>
  )
}

export default Plans