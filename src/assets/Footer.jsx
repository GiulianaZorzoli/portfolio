import React from 'react'
import { motion } from 'framer-motion'

export const Footer = ({lang}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footerContent'>
        <div className='footerSection'>
          <h5>{lang ? 'Giuliana Zorzoli' : 'Giuliana Zorzoli'}</h5>
          <p className='footerTagline'>
            {lang
              ? 'Full Stack Developer specializing in enterprise solutions'
              : 'Desarrolladora Full Stack especializada en soluciones empresariales'}
          </p>
        </div>

        <div className='footerSection'>
          <h5>{lang ? 'Connect' : 'Conectar'}</h5>
          <div className='socialLinks'>
            <motion.a
              href="https://www.linkedin.com/in/giuliana-zorzoli/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <i className="bi bi-linkedin"></i>
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/GiulianaZorzoli"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <i className="bi bi-github"></i>
              <span>GitHub</span>
            </motion.a>
          </div>
        </div>

        <div className='footerSection'>
          <h5>{lang ? 'Contact' : 'Contacto'}</h5>
          <a href="mailto:giulijazorzoli@gmail.com" className='emailLink'>
            <i className="bi bi-envelope"></i>
            giulijazorzoli@gmail.com
          </a>
        </div>
      </div>

      <div className='footerBottom'>
        <p>© {currentYear} Giuliana Zorzoli. {lang ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
      </div>
    </footer>
  )
}

export default Footer;