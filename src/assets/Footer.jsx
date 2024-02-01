import React from 'react'

export const Footer = ({lang}) => {
  return (
    <section className='footer'>
        <div>
          <h5>{lang==true?'Social Media' : 'Redes Sociales'}</h5>
          <div>
            <a href="https://www.linkedin.com/in/giuliana-zorzoli/"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/GiulianaZorzoli"><i className="bi bi-github"></i></a>
          </div>
        </div>
        <div>
          <h5>{lang == true ? 'Contact me via email' : 'Contáctame por mail'}</h5>
          <h6>giulijazorzoli@gmail.com</h6>
        </div>
    </section>
  )
}
export default Footer;