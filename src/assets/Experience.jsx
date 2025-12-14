import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiencesEn = [
  {
    id: 1,
    title: "Software Developer",
    company: "Quantified",
    date: "May 2025 - Present",
    description: [
      "Research and development focused on Artificial Intelligence",
      "Working with AI models (prompt engineering and fine-tuning)",
      "Experimentation, evaluation, and continuous improvement of results",
      "Creative design of technical solutions applied to the product"
    ]
  },
  {
    id: 2,
    title: "Software Developer",
    company: "Huenei IT Services",
    date: "March 2024 - May 2025",
    description: [
      "Automation of manual processes",
      "Creative design of solutions",
      "Technical support"
    ]
  },
  {
    id: 3,
    title: "Teaching Assistant - Operating Systems and Networks",
    company: "Universidad Nacional de General Sarmiento",
    date: "August 2025 - Present",
    description: [
      "Teaching classes",
      "Grading exams",
      "Grading practical assignments"
    ]
  }
]

const experiencesEs = [
  {
    id: 1,
    title: "Desarrolladora de Software",
    company: "Quantified",
    date: "Mayo 2025 - Actualidad",
    description: [
      "Investigación y desarrollo con foco en Inteligencia Artificial",
      "Trabajo con modelos de IA (prompt engineering y fine-tuning)",
      "Experimentación, evaluación y mejora continua de resultados",
      "Diseño creativo de soluciones técnicas aplicadas al producto"
    ]
  },
  {
    id: 2,
    title: "Desarrolladora de Software",
    company: "Huenei IT Services",
    date: "Marzo 2024 - Mayo 2025",
    description: [
      "Automatización de procesos manuales",
      "Diseño creativo de soluciones",
      "Soporte técnico"
    ]
  },
  {
    id: 3,
    title: "Docente Ayudante - Sistemas Operativos y Redes",
    company: "Universidad Nacional de General Sarmiento",
    date: "Agosto 2025 - Actualidad",
    description: [
      "Dictado de clases",
      "Corrección de exámenes",
      "Corrección de trabajos prácticos"
    ]
  }
]

const ExperienceItem = ({title, company, date, description, index}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.15
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className='experienceContainer'
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className='experienceHeader'>
        <div>
          <h3>{title}</h3>
          <h4>{company}</h4>
        </div>
        <span className='experienceDate'>{date}</span>
      </div>
      <ul className='experienceDescription'>
        {description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export const Experience = ({lang}) => {
  const experiences = lang ? experiencesEn : experiencesEs;

  return (
    <section id='experience'>
      <h2>{lang ? 'Professional Experience' : 'Experiencia Profesional'}</h2>
      <div className='experiencesWrapper'>
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={experience.id}
            title={experience.title}
            company={experience.company}
            date={experience.date}
            description={experience.description}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience;
