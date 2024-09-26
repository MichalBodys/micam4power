
import { useEffect, useRef } from 'react'
import './AboutMe.scss'
import { motion, useInView, useAnimation } from 'framer-motion'


const AboutMe = () => {

  const ref = useRef(null);
  // const refr = useRef(null);
  const isInView = useInView(ref, { once: true })

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
   if(isInView){
    leftControls.start('visible');
    rightControls.start('visible')
   }
  }, )

    return(
        <section ref={ref} id='about' className='container about__me'>
          <motion.div
          variants={{
            hidden: { x: 1000},
            visible:{ x: 0}
          }}
          initial="hidden"
          animate={rightControls}
          transition={{duration: 1}}
          className='about_me-cards'>
            <div class="card">
              <div class="img one"></div>
              <div class="text text-one">
                <p className='text-base mb-3 font-bold'>las zielony</p>
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="card">
              <div class="img one"></div>
              <div class="text text-one">
                <p className='text-base mb-3 font-bold'>las zielony</p>
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="card">
              <div class="img one"></div>
              <div class="text text-one">
                <p className='text-base mb-3 font-bold'>las zielony</p>
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="card">
              <div class="img one"></div>
              <div class="text text-one">
                <p className='text-base mb-3 font-bold'>las zielony</p>
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="card">
              <div class="img one"></div>
              <div class="text text-one">
                <p className='text-base mb-3 font-bold'>las zielony</p>
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

          </motion.div>
    </section>
    )
}


export default AboutMe