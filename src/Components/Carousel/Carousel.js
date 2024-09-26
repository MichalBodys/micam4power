import { useSelector } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import './Carousel.scss'
import { motion, useInView, useAnimation } from 'framer-motion'

const Carousel = ({ projectId }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
      if(isInView){
        mainControls.start('visible');
      }
    })


    const projects = useSelector(state => state.projects)
    const project = projects.filter(project => project.id === projectId )
    const [curr, setCurr] = useState(0)
    const prev = () => {
      setCurr((curr) => (curr === 0 ? 3 - 1 : curr -1))
    //   console.log(curr);
    }
    const next = () => {
      setCurr((curr) => (curr === 3 -1 ? 0 : curr + 1))
      // console.log(curr);
    }
    // console.log(project);

    return(
    <motion.div ref={ref} className='carousel'
    variants={{
      hidden: {opacity: 0, y:75},
      visible: {opacity: 1, y:0}
    }}
    initial="hidden"
    animate={mainControls}
    transition={{duration: 1}}>
        {project[0].photos.map(photo =>
        <div className='carousel-slides' key={photo.nmb} style={{ transform: `translateX(-${curr * 100}%)`}}>
          <div className='carousel-slide'>
            <img src={photo.src} alt={photo.description} />
            <p className='slide-description'>{photo.description}</p>
          </div>
        </div>
         )}
         <div className='carousel-buttons'>
            <div onClick={prev}><i className="fa-solid fa-angle-left"></i></div>
            <div onClick={next}><i className="fa-solid fa-angle-right"></i></div>
        </div>
        <div className='carousel-dots'>
          <div className={curr === 0 ? 'active' : ''}></div>
          <div className={curr === 1 ? 'active' : ''}></div>
          <div className={curr === 2 ? 'active' : ''}></div>
        </div>
    </motion.div>
    )


}

export default Carousel