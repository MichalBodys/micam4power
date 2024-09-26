import './Contact.scss'
import { useRef,  useEffect } from 'react';
import emailjs from '@emailjs/browser'
import { motion, useInView, useAnimation } from 'framer-motion'

const Contact = () => {

  const nameInput = useRef()
  const phoneInput = useRef()
  const emailInput = useRef()
  const msgInput = useRef()

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
        <motion.div ref={ref} className='container'
        variants={{
          hidden: {opacity: 0, y:75},
          visible: {opacity: 1, y:0 }
        }}
        initial='hidden'
        animate={mainControls}
        transition={{delay: 0.2 ,duartion: 1}}
        >
            <h2 className='contact_title'>contact me </h2>
          <div className='form_box'>
            <img className='logo' src="../assets/img/logoMBW.png" alt="" />

            <form ref={form} className='contact_form' onSubmit={sendEmail}>
                <label htmlFor="name">name</label>
                <input  ref={nameInput} type="text" name='user_name' placeholder='Full Name' required/>

                <label htmlFor="phone" >phone</label>
                <input ref={phoneInput}  type="number" name='user_phone' placeholder='number' required/>

                <label htmlFor="email">e-mail</label>
                <input  ref={emailInput} type="email" name='user_email' placeholder='E-mail adress' required/>

                <label htmlFor="msg">message</label>
                <textarea ref={msgInput} name='message' placeholder='your message' required></textarea>
                <button type='submit' value='Send'>send</button>
            </form>
            <p>let's work togheter</p>
          </div>
        </motion.div>
    </section>
    )
}

export default Contact