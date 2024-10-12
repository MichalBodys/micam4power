

import NavBar from '../../Components/NavBar/NavBar'
import './Header.scss'
import { useState, useEffect } from 'react'



const Header = ({ openModalWithParams }) => { 
    const [visibleIndex, setVisibleIndex] = useState(0);

    const spans = [
        "für mehr mitarbeiterbindung",
        "für mehr kunden",
        "für mehr erfolg",
      ];

    useEffect(() => {
        const interval = setInterval(() => {
          setVisibleIndex((prevIndex) => (prevIndex + 1) % 3); 
        }, 2000);
    
        return () => clearInterval(interval); 
      }, []);

    return(
        <header id='header' >
            <NavBar openModalWithParams={openModalWithParams}/>
            <div className='container'>
                <div className='title-box bebas-neue-regular'>
                <h1 className='web-title'>Wir verlassen die komfortzone...</h1>
              <p className='web-title-description'>
                {spans.map((text, index) =>(
                   <span
                        key={index}
                        className='transition-opacity glowing-text glowing-text text-xl'
                        style={{ opacity: visibleIndex === index ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                        {text}
                   </span>
                ))}
                </p>
                </div>
            </div>

       </header>

    )
}

export default Header