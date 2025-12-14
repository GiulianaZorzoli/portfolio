import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SkillCategory = ({ title, icon, skills, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className='skillCategory'
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className='skillCategoryHeader'>
        <i className={icon}></i>
        <h3>{title}</h3>
      </div>
      <div className='skillGrid'>
        {skills.map((skill, idx) => (
          <div key={idx} className='skillItem'>
            <img src={skill.logo} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = ({lang}) => {
  const backendSkills = [
    { name: 'Java', logo: '/logos/javaLogo.png' },
    { name: 'Spring Framework', logo: '/logos/springLogo.png' },
    { name: 'Spring Boot', logo: '/logos/springBootLogo.png' },
    { name: 'Spring Data JPA', logo: '/logos/springDataJPALogo.png' },
    { name: 'Python', logo: '/logos/pythonLogo.png' },
    { name: 'Maven', logo: '/logos/mavenLogo.png' }
  ];

  const frontendSkills = [
    { name: 'HTML5', logo: '/logos/html5Logo.png' },
    { name: 'CSS3', logo: '/logos/css3Logo.png' },
    { name: 'JavaScript', logo: '/logos/javaScriptLogo.png' },
    { name: 'React', logo: '/logos/reactLogo.png' },
    { name: 'Bootstrap', logo: '/logos/bootstrapLogo.png' },
    { name: 'Thymeleaf', logo: '/logos/thymeleafLogo.png' }
  ];

  const devToolsSkills = [
    { name: 'Git', logo: '/logos/gitLogo.png' },
    { name: 'GitHub', logo: '/logos/githubLogo.png' },
    { name: 'Swagger', logo: '/logos/swaggerLogo.png' },
    { name: 'Postman', logo: '/logos/postmanLogo.png' },
    { name: 'REST', logo: '/logos/APIRestLogo.png' },
    { name: 'HTTP', logo: '/logos/httpLogo.png' }
  ];

  const databaseSkills = [
    { name: 'SQL', logo: '/logos/sqlLogo.png' },
    { name: 'MySQL', logo: '/logos/MySQLLogo.png' }
  ];

  const aiSkills = [
    { name: 'AI Knowledge', logo: '/logos/aiLogo.png' },
    { name: 'Prompt Engineering', logo: '/logos/promptLogo.png' },
    { name: 'Vibe Coding', logo: '/logos/vibeCodingLogo.png' },
    { name: 'Fine-tuning', logo: '/logos/fineTuningLogo.png' }
  ];

  return (
    <section id='skills'>
      <h2>{lang ? 'Technical Skills' : 'Habilidades Técnicas'}</h2>
      <div className='skillsContainer'>
        <SkillCategory
          title={lang ? 'Artificial Intelligence' : 'Inteligencia Artificial'}
          icon="bi bi-cpu"
          skills={aiSkills}
          index={0}
        />
        <SkillCategory
          title={lang ? 'Back End' : 'Back End'}
          icon="bi bi-server"
          skills={backendSkills}
          index={1}
        />
        <SkillCategory
          title={lang ? 'Front End' : 'Front End'}
          icon="bi bi-palette"
          skills={frontendSkills}
          index={2}
        />
        <SkillCategory
          title={lang ? 'Development Tools' : 'Herramientas de Desarrollo'}
          icon="bi bi-tools"
          skills={devToolsSkills}
          index={3}
        />
        <SkillCategory
          title={lang ? 'Database' : 'Bases de Datos'}
          icon="bi bi-database"
          skills={databaseSkills}
          index={4}
        />
      </div>
    </section>
  )
}

export default Skills;