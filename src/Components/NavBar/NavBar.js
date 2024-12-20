
import { useState } from 'react'
import './NavBar.scss'
import Calendly from '../Calendly/Calendly';




const NavBar = ({ openModalWithParams }) => {
  const [isActive, setActive] = useState(false)

  const clickHandler = () => {
   setActive(!isActive);
  }


  return(
        <nav className='nav__bar uppercase' >
          <div className='nav__bar-author'> 
            <div>
              <a href='#header'><h2 className='author'>ADDECODER</h2></a>
            </div>
          </div>
          <div className={`nav__bar-links ${isActive ? 'active': ''}`}  style={isActive ? {clipPath: 'circle(140% at 80% 90%)'} : {} }>
              <a href="#header" className='nav__link' onClick={clickHandler}>start</a>
              <a href="#services" className='nav__link' onClick={clickHandler}>leistungen</a>
              <a href="#UberUns" className='nav__link' onClick={clickHandler} >über uns</a>
              <a href="#contact" className='nav__link' onClick={clickHandler}>kontakt</a>
          </div>
          <Calendly className openModalWithParams={openModalWithParams}/>
          <div className={`nav__burger-icon ${isActive ? 'close' : ''}`} onClick={clickHandler}>
              <div className='burger-icon-line'></div>
          </div>
        </nav>
    )
}

export default NavBar