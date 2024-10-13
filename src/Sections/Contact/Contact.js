import './Contact.scss'
import { useRef,  useEffect } from 'react';
import emailjs from '@emailjs/browser'
import { motion, useInView, useAnimation } from 'framer-motion'

const Contact = () => {


  const form = useRef();
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation()
  useEffect(()=> {
    if(isInView){
      mainControls.start('visible')
    }
  })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eysp83u', 'template_aby0s18', form.current, 'joQSTcLN9fUXb2Sqt')
      .then((result) => {
          console.log(result.text);
          console.log('message succesfull');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };




    return(
    <section id='contact' className='contact'>
        <motion.div ref={ref} className='container flex gap-5 flex-col md:flex-row'
        variants={{
          hidden: {opacity: 0, y:75},
          visible: {opacity: 1, y:0 }
        }}
        initial='hidden'
        animate={mainControls}
        transition={{delay: 0.2 ,duartion: 1}}
        >
          <div className='h-[400px] border shadow-lg shadow-cyan-500/50 md:w-1/3 flex flex-col rounded-lg contact-data relative overflow-hidden gap-3'>
            <div className='m-6'>
              <p className='text-xl font-bold'>Contact Information</p>
              <p className='text-base'>Lets us help you become even greater at what you do.</p>
            </div>
            <div className='flex flex-col gap-4 m-6 text-base'>
              <p><i className="fa-brands fa-linkedin"></i> <a href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/4925ba8d0bf80a4b1d8e8645d310590bf1b40b64/docs/rules/anchor-is-valid.md'>Linkedin</a></p>
              <p><i className="fa-solid fa-phone"> </i> <a tel="123123123">nr 1231321312</a></p>
              <p><i className="fa-solid fa-envelope"></i> <a email="emial">email@net.com</a></p>
            </div>
          </div>
          <div className='md:w-2/3 grid grid-cols-1 gap-6 form-box'>
            <form action="#" method="POST">
              <div className='flex gap-5 md:flex-row flex-col mb-5'>
                <div className='w-1/2 border-b-white border-b'>
                  <label htmlFor="name" className="block text-sm font-medium glowing-text">Your Name</label>
                  <input type="text" id="name" name="name" className="mt-2 block w-full border-gray-300 "/>
                </div>
                <div className='w-1/2  border-b-white border-b'>
                  <label htmlFor="email" className="block text-sm font-medium glowing-text">Your Email</label>
                  <input type="email" id="email" name="email" className="mt-2 block w-full border-gray-300 " />
                </div>
              </div>
              <div className='border-b-white border-b my-5'>
                <label htmlFor="subject" className="block text-sm font-medium glowing-text">Your Subject</label>
                <input type="text" id="subject" name="subject" className="mt-2 block w-full border-gray-300 " />
              </div>
              <div className='border-b-white border-b my-5'>
                <label htmlFor="message" className="block text-sm font-medium glowing-text">Message</label>
                <textarea id="message" name="message" rows="4" className="block w-full border-gray-300 h-[200px]" placeholder="Write here your message"></textarea>
              </div>
              <div>
                <button type="submit" className="font-bold py-2 px-4 rounded-md focus:outline-none">
                  send Message
                </button>
              </div>
            </form>
          </div>
      
        </motion.div>
    </section>
    )
}

export default Contact