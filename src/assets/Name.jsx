import React from 'react'
import { motion } from 'framer-motion'

export const Name = ({lang}) => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  return (
    <section className='nameSection'>
      <motion.div
        className='nameTextDiv'
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {
          lang === true
          ?
          <>
            <div className='subtitle'>Software Developer & AI Researcher</div>
            <h1>Giuliana Zorzoli</h1>
            <p className='tagline'>
              Specializing in AI research and development at Quantified. Focused on prompt engineering, fine-tuning, and creating innovative technical solutions with cutting-edge AI technologies.
            </p>
            <motion.button variants={buttonVariants}>
              <a href="https://drive.google.com/file/d/1sKqstx5WqlkSWi9ZpseJQ5n6A1CJ9Dvd/view?usp=sharing">View Resume</a>
            </motion.button>
          </>
          :
          <>
            <div className='subtitle'>Desarrolladora de Software e Investigadora en IA</div>
            <h1>Giuliana Zorzoli</h1>
            <p className='tagline'>
              Especializada en investigación y desarrollo de IA en Quantified. Enfocada en prompt engineering, fine-tuning y creación de soluciones técnicas innovadoras con tecnologías de IA de vanguardia.
            </p>
            <motion.button variants={buttonVariants}>
              <a href="https://drive.google.com/file/d/1sKqstx5WqlkSWi9ZpseJQ5n6A1CJ9Dvd/view?usp=sharing">Ver Currículum</a>
            </motion.button>
          </>
        }
      </motion.div>

      <motion.div
        className='imgDiv'
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img src="/perfil.png" alt="Giuliana Zorzoli - Full Stack Developer" />
      </motion.div>
    </section>
  )
}

export default Name;