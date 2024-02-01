import React from 'react'

export const ContactMe = ({lang}) => {

  let placeholderName='Name*';
  let placeholderMessage='Message*';
  let buttonText="Let's get to work!";

  if(lang==false){
    placeholderName='Nombre*';
    placeholderMessage='Mensaje*';
    buttonText='¡Trabajemos juntos!';
  }
  return (
    <section id='contact'>
      <br />
        <h2>{lang == true ? 'Contact Me' : 'Contáctame'}</h2>
        <form action="https://formsubmit.co/daabf6254aa3dfa7dade9834ad9d54d2" className='contactForm' method="POST">
            <input type="text" placeholder={placeholderName} required name='name'/>
            <input type="text" placeholder='Email*' required name='email' />
            <textarea name="message" id="message" placeholder={placeholderMessage}required></textarea>
            <input type="hidden" name='_captcha' value="false" />
            <input type="hidden" name='_next' value="https://giuliana-zorzoli.netlify.app/" />
            <button type='submit'>{buttonText}</button>
        </form>
        <br />
    </section>
  )
}
export default ContactMe;