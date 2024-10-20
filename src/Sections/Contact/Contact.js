import './Contact.scss'
import { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView, useAnimation } from 'framer-motion';

const Contact = () => {
  const form = useRef();  // For emailJS to reference the form
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // Collect form data

    const name = formData.get('name'); // Retrieve the value from each field
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    console.log('Form Data Collected:', {
      name,
      email,
      subject,
      message,
    });

    // Now you can send this data using emailJS or any other method
    emailjs.sendForm('service_86dnt9n', 'template_aby0s18', form.current, 'joQSTcLN9fUXb2Sqt')
      .then((result) => {
        console.log(result.text);
        console.log('Message successfully sent!');
        e.target.reset(); // Reset the form after successful submission
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact' className='contact'>
      <motion.div ref={ref} className='container flex gap-5 flex-col md:flex-row'
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <div className='h-[400px] border shadow-md shadow-stone-50 md:w-1/3 flex flex-col rounded-lg contact-data relative overflow-hidden gap-3'>
          <div className='m-6'>
            <p className='text-xl font-bold'>Kontaktinformationen</p>
            <p className='text-base'> Lassen Sie uns Ihnen helfen, noch besser zu werden in dem, was Sie tun.</p>
          </div>
          <div className='flex flex-col gap-4 m-6 text-base'>
            <p><i className="fa-brands fa-linkedin"></i> <a href='https://www.linkedin.com/in/ireneusz-masarczyk/'>Linkedin</a></p>
            <p><i className="fa-brands fa-facebook"></i> <a href='https://www.facebook.com/profile.php?id=61560640106719'>Facebook</a></p>
            <p><i className="fa-solid fa-phone"> </i> <a href="tel:+491716271567">+49 (0) 171 6271567</a></p>
            <p><i className="fa-solid fa-envelope"></i> <a href="mailto:info@addecoder.de">info@addecoder.de</a></p>
          </div>
        </div>
        <div className='md:w-2/3 grid grid-cols-1 gap-6 form-box'>
          <form ref={form} onSubmit={sendEmail}> 
            <div className='flex gap-5 md:flex-row flex-col mb-5'>
              <div className='w-1/2 border-b-white border-b'>
                <label htmlFor="name" className="block text-sm font-medium glowing-text">Ihr Name</label>
                <input type="text" id="name" name="from_name" className="mt-2 block w-full border-gray-300" required />
              </div>
              <div className='w-1/2  border-b-white border-b'>
                <label htmlFor="email" className="block text-sm font-medium glowing-text">Ihre E-Mail</label>
                <input type="email" id="email" name="user_email" className="mt-2 block w-full border-gray-300" required />
              </div>
            </div>
            <div className='border-b-white border-b my-5'>
              <label htmlFor="subject" className="block text-sm font-medium glowing-text">Ihr Betreff</label>
              <input type="text" id="subject" name="user_subject" className="mt-2 block w-full border-gray-300" required />
            </div>
            <div className='border-b-white border-b my-5'>
              <label htmlFor="message" className="block text-sm font-medium glowing-text">Nachricht</label>
              <textarea id="message" name="message" rows="4" className="block w-full border-gray-300 h-[200px]" placeholder="Schreiben Sie hier Ihre Nachricht" required></textarea>
            </div>
            <div>
              <button type="submit" className="font-bold py-2 px-4 rounded-md focus:outline-none relative">
                Nachricht senden
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
