
import { useEffect, useRef } from 'react'
import './AboutMe.scss'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useSelector } from 'react-redux';
  



const Services = () => {

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
        <section ref={ref} id='services' className='container services flex justify-center'>
          <motion.div
          variants={{
            hidden: { x: 1000},
            visible:{ x: 0}
          }}
          initial="hidden"
          animate={rightControls}
          transition={{duration: 1}}
          className='services-cards'>
            {cards.map((card) => (
            <div key={card.id}className="card h-[150px] w-[255px]">
              <div className="img one flex justify-center items-center flex-col">
              <div className='text-xl scale-150 mb-2' dangerouslySetInnerHTML={{ __html: card.svg }} />
              <p className='text-xs text-center mt-2 card-bg'>{card.title}</p>
              </div>
              <div className="text text-one">
                <p className='text-sm mb-3 font-bold h-1/3'>{card.description1}</p>
                <hr className="shadow-cyan-500/50 mt-10" />
                <p className='text-xs mt-5 h-1/3'>{card.description2}</p>
              </div>
            </div>
            ))}
          </motion.div>
    </section>
    )
}


export default Services