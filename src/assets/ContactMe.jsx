import React from 'react'

export const ContactMe = () => {


  return (
    <section id='contact'>
      <br />
        <h2>Contact Me</h2>
        <form action="https://formsubmit.co/daabf6254aa3dfa7dade9834ad9d54d2" className='contactForm' method="POST">
            <input type="text" placeholder='Name*' required name='name'/>
            <input type="text" placeholder='Email*' required name='email' />
            <textarea name="message" id="message" placeholder='Message*'required></textarea>
            <input type="hidden" name='_captcha' value="false" />
            <input type="hidden" name='_next' value="https://giuliana-zorzoli.netlify.app/" />
            <button type='submit'>Let's get to work!</button>
        </form>
        <br />
    </section>
  )
}
export default ContactMe;