import React,{useState} from 'react'
import './Header.css'
import Logo from '../assets/logo1.png'
import Toggle from './Toggle';
//import Bars from '../assets/bars.png'
import { FaBars,FaTimes } from "react-icons/fa";
import { themeContext } from '../Context';
import { useContext } from 'react';

const Header = () => {
const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click);

 const theme = useContext(themeContext);
 const darkMode = theme.state.darkMode

  return (
    <div className='header'>
       <img  src={Logo}   className='logo' alt=''/>
          <div className='btn'>
  <Toggle/>
  </div>
     <ul className={ click ? 'header-menu active' : 'header-menu '}   style={{color:darkMode ? 'white': ''}}>
     <li>Home</li>
     <li>Programs</li>
     <li>Why Us</li>
     <li>Plans</li>
     <li>Testimonilas</li>
   </ul>
  <div className="hamburger" onClick={handleClick}>
  {click ? (
    <FaTimes className="iconhambx"  size={20} /*style={{color: "#fff"}}*//>
  ): (
    <FaBars  className="iconhamb"  size={20}/* style={{color: "#fff"}}*//>
  )}


</div>
 
    </div>
  )
}

export default Header




/*  

const mobile = window.innerWidth<=768 ? true: false;
const [menuOpened,setMenuOpened] = useState(false)

<div className='header'>
       <img  src={Logo}   className='logo' alt=''/>
       {(menuOpened=== false && mobile=== true)? (
        <div style={{backgroundColor: 'var(--appColor)',padding:'0.5rem',borderRadius:'5px'}}  
        onClick={()=> setMenuOpened(true)}
        >



          <img src={Bars} alt="" style={{width: '1.5rem',height:'1.5rem'}} />
        </div>
       ) : (

     <ul className='header-menu'>
     <li>Home</li>
     <li>Programs</li>
     <li>Why Us</li>
     <li>Plans</li>
     <li>Testimonilas</li>
   </ul>
       )}
 
    </div> */