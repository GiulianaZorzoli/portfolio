import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const formationsEn = [
  {
    id: 1,
    title: "Bachelor of Computer Information Systems",
    academy: "Universidad Nacional de General Sarmiento",
    date: "May 2022 - Present",
    description: "Comprehensive program covering software development, system architecture, and IT fundamentals. Acquired expertise in Java, Python, Object-Oriented Programming, and software engineering best practices."
  },
  {
    id: 2,
    title: "Technical Degree in Computer Science",
    academy: "Universidad Nacional de General Sarmiento",
    date: "May 2022 - Present",
    description: "Focused technical training in software development, databases, and system administration. Practical approach to modern programming technologies and methodologies."
  },
  {
    id: 3,
    title: "ONE Program - Oracle & Alura LATAM",
    academy: "Oracle & Alura LATAM",
    date: "January 2024 - July 2024",
    description: "Intensive training program covering modern development practices, cloud technologies, and enterprise-level software development with Oracle technologies."
  },
  {
    id: 4,
    title: "Full Stack Java Developer",
    academy: "Codo a Codo",
    date: "August 2023 - December 2023",
    description: "Comprehensive full-stack development program. Learned to create both frontend and backend of applications using Java, Spring Boot, HTML5, CSS3, Bootstrap, JavaScript, and MySQL."
  }
]

const formationsEs = [
  {
    id: 1,
    title: "Licenciatura en Sistemas",
    academy: "Universidad Nacional de General Sarmiento",
    date: "Mayo 2022 - Actualidad",
    description: "Programa integral que abarca desarrollo de software, arquitectura de sistemas y fundamentos IT. Adquirí experiencia en Java, Python, Programación Orientada a Objetos y mejores prácticas de ingeniería de software."
  },
  {
    id: 2,
    title: "Tecnicatura en Informática",
    academy: "Universidad Nacional de General Sarmiento",
    date: "Mayo 2022 - Actualidad",
    description: "Formación técnica enfocada en desarrollo de software, bases de datos y administración de sistemas. Enfoque práctico en tecnologías y metodologías de programación modernas."
  },
  {
    id: 3,
    title: "Programa ONE - Oracle & Alura LATAM",
    academy: "Oracle & Alura LATAM",
    date: "Enero 2024 - Julio 2024",
    description: "Programa de formación intensiva cubriendo prácticas de desarrollo modernas, tecnologías cloud y desarrollo de software de nivel empresarial con tecnologías Oracle."
  },
  {
    id: 4,
    title: "Full Stack Java",
    academy: "Codo a Codo",
    date: "Agosto 2023 - Diciembre 2023",
    description: "Programa integral de desarrollo full-stack. Aprendí a crear tanto el frontend como el backend de aplicaciones usando Java, Spring Boot, HTML5, CSS3, Bootstrap, JavaScript y MySQL."
  }
]

export const Formation = ({title, academy, date, description, index}) => {
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
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className='formationContainer'
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h3>{title}</h3>
      <h4>{academy}</h4>
      <p>{date}</p>
      <p>{description}</p>
    </motion.div>
  )
}

export const Formations = ({lang}) => {
  const formations = lang ? formationsEn : formationsEs;

  return (
    <section id='formation'>
      <h2>{lang ? 'Formation' : 'Formación'}</h2>
      {formations.map((formation, index) => (
        <Formation
          key={formation.id}
          title={formation.title}
          academy={formation.academy}
          date={formation.date}
          description={formation.description}
          index={index}
        />
      ))}
    </section>
  )
}

export default Formations;