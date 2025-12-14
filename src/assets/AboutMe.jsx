import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const AboutMe = ({lang}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className='aboutmeContainer' id='aboutMe'>
      <h2>{lang ? 'Professional Overview' : 'Resumen Profesional'}</h2>
      <motion.div
        ref={ref}
        className='aboutMe'
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {
          lang === true
          ?
          <>
            <p>
              Software developer and Computer Information Systems student with professional experience in research and development, particularly in Artificial Intelligence environments. Focused on continuous system improvement, experimentation, and creative design of technical solutions within the IT field.
            </p>
            <p>
              Currently working at Quantified on AI-focused R&D, applying prompt engineering and fine-tuning techniques to improve AI models. My role involves experimentation, result evaluation, and creative problem-solving to deliver innovative technical solutions.
            </p>
            <p>
              With a strong foundation in Java, Python, and modern web technologies, I combine technical expertise with creativity, fast learning, and adaptability. As a Teaching Assistant at Universidad Nacional de General Sarmiento, I also contribute to educating the next generation of IT professionals.
            </p>
          </>
          :
          <>
            <p>
              Desarrolladora de software y estudiante de la Licenciatura en Sistemas, con experiencia profesional en investigación y desarrollo, especialmente en entornos de Inteligencia Artificial. Interés en la mejora continua de sistemas, experimentación y diseño de soluciones técnicas creativas dentro del ámbito IT.
            </p>
            <p>
              Actualmente trabajando en Quantified en I+D enfocado en IA, aplicando técnicas de prompt engineering y fine-tuning para mejorar modelos de IA. Mi rol implica experimentación, evaluación de resultados y resolución creativa de problemas para entregar soluciones técnicas innovadoras.
            </p>
            <p>
              Con una sólida base en Java, Python y tecnologías web modernas, combino experiencia técnica con creatividad, aprendizaje rápido y adaptabilidad. Como Docente Ayudante en la Universidad Nacional de General Sarmiento, también contribuyo a educar a la próxima generación de profesionales IT.
            </p>
          </>
        }
      </motion.div>
    </section>
  )
}
export default AboutMe;