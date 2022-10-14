import React from 'react'
import './Programs.css'
import {programsData} from '../data/programsData';

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
    {/*header */}
    <div className='programs-header'>
     <span className='stroke-text'>Explorer our</span>
    <span>Programs</span>
    <span  className='stroke-text' >to shape you</span>
    </div>

    <div className='program-categories'> 
    {programsData.map((program)=>(
      <div className='category' key={program.id}>
       {program.image}
       <span>{program.heading}</span>
       <span>{program.details}</span>
      </div>
    ))}
    </div>
     
    </div>
  )
}

export default Programs