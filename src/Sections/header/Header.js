

import NavBar from '../../Components/NavBar/NavBar'
import './Header.scss'
import { useState, useEffect, useRef } from 'react'



const Header = ({ openModalWithParams }) => { 
    const [visibleIndex, setVisibleIndex] = useState(0);
    const scrollTextRef = useRef(null); // Reference for scrolling text

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

      useEffect(() => {
        // Check if the user prefers reduced motion
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const scrollerInner = scrollTextRef.current;

            if (scrollerInner) {
                const scrollerContent = Array.from(scrollerInner.children);

                // Clone each item and set aria-hidden
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute('aria-hidden', true);
                    scrollerInner.appendChild(duplicatedItem);
                });
                
                // Set data-animated attribute to true
                scrollTextRef.current.setAttribute('data-animated', true);
            }
        }
    }, []);

    return(
        <header id='header' >
            <NavBar openModalWithParams={openModalWithParams}/>
            <div className='container'>
                <div className='title-box bebas-neue-regular overflow-hidden'>
                <h1 className='web-title'>Optimiere Dein Marketing mit ADDECODER…</h1>
                <p className='web-title-description hidden md:block'>
                {spans.map((text, index) =>(
                   <span
                        key={index}
                        className='transition-opacity text-xl me-5'
                        style={{ opacity: visibleIndex === index ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                        {text}
                   </span>
                ))}
                </p>
                <div className="scroll-container md:hidden">
                    <div className="scroll-text text-lg" ref={scrollTextRef}>
                        <span>für mehr mitarbeiterbindung</span>
                        <span className='mx-5'> für mehr kunden</span>
                        <span> für mehr erfolg</span>                   
                    </div>
                  </div>
                  <div className='mt-20'>
                    <p className='text-lg my-5 text-center md:text-start'>Wir entwickeln maßgeschneiderte und kosteneffiziente Marketingmaßnahmen, die Dein organisches Wachstum fördern. </p>
                    <p className='text-lg text-center md:text-start'>Bei der Entwicklung der passenden Marketingkampagnen kombinieren wir Kreativität mit datenbasierter Planung, damit Du planbar Deine Ziele erreichen kannst.  </p>
                  </div>
                </div>
            </div>

       </header>

    )
}

export default Header