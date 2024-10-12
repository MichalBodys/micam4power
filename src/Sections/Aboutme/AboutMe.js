
import { useEffect, useRef } from 'react'
import './AboutMe.scss'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useSelector } from 'react-redux';
  



const AboutMe = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const cards = useSelector((state) => state.Cards);

  useEffect(() => {
   if(isInView){
    leftControls.start('visible');
    rightControls.start('visible')
   }
  }, )

    return(
        <section ref={ref} id='about' className='container about__me flex justify-center'>
          <motion.div
          variants={{
            hidden: { x: 1000},
            visible:{ x: 0}
          }}
          initial="hidden"
          animate={rightControls}
          transition={{duration: 1}}
          className='about_me-cards'>
            {cards.map((card) => (
            <div class="card w-[250px]">
              <div class="img one"></div>
              <div class="text text-one">
                <p className='text-base mb-3 font-bold'>{card.title}</p>
                <hr className="shadow-cyan-500/50" />
                <p className='text-xs mt-5'>{card.description}</p>
              </div>
            </div>
            ))}
          </motion.div>
    </section>
    )
}


export default AboutMe