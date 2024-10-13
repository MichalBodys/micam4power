

import { IconLineHeight } from '@tabler/icons-react';
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
                  <div className='mb-20'>
                    <p className='text-lg'>Willkommen bei ADDECODER, Ihrem Partner für erfolgreiches Marketing!</p>
                    <p className='text-lg'>Wir entwickeln maßgeschneiderte Strategien, die Ihre Produkte und Ihr Unternehmen
                      ins Rampenlicht rücken und Ihr Wachstum nachhaltig fördern. </p>
                  </div>
                <h1 className='web-title'>Wir verlassen die komfortzone...</h1>
                <p className='web-title-description'>
                {spans.map((text, index) =>(
                   <span
                        key={index}
                        className='transition-opacity text-xl'
                        style={{ opacity: visibleIndex === index ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                        {text}
                   </span>
                ))}
                </p>
                <p className='mt-20 text-lg'>Wir entwickeln maßgeschneiderte Strategien, die Ihre Produkte und Ihr Unternehmen
                ins Rampenlicht rücken und Ihr Wachstum nachhaltig fördern. </p>
                </div>
            </div>

       </header>

    )
}

export default Header