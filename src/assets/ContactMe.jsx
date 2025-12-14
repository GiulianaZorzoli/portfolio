import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const ContactMe = ({lang}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const placeholderName = lang ? 'Name*' : 'Nombre*';
  const placeholderMessage = lang ? 'Message*' : 'Mensaje*';
  const buttonText = lang ? "Let's get to work!" : '¡Trabajemos juntos!';

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id='contact'>
      <h2>{lang ? 'Contact Me' : 'Contáctame'}</h2>
      <motion.form
        ref={ref}
        action="https://formsubmit.co/daabf6254aa3dfa7dade9834ad9d54d2"
        className='contactForm'
        method="POST"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.input
          variants={itemVariants}
          type="text"
          placeholder={placeholderName}
          required
          name='name'
          aria-label={placeholderName}
        />
        <motion.input
          variants={itemVariants}
          type="email"
          placeholder='Email*'
          required
          name='email'
          aria-label="Email"
        />
        <motion.textarea
          variants={itemVariants}
          name="message"
          id="message"
          placeholder={placeholderMessage}
          required
          aria-label={placeholderMessage}
        />
        <input type="hidden" name='_captcha' value="false" />
        <input type="hidden" name='_next' value="https://giuliana-zorzoli.netlify.app/" />
        <motion.button variants={itemVariants} type='submit'>
          {buttonText}
        </motion.button>
      </motion.form>
    </section>
  )
}

export default ContactMe;