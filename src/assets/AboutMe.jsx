import React from 'react'

export const AboutMe = ({lang}) => {
  return (
    <section className='aboutmeContainer'>
      {
        lang==true
        ?
        <div className='aboutMe' >
          <h3>About Me</h3>
          <p>Hello! I'm Giuliana Zorzoli, a passionate Full Stack developer with expertise in crafting robust Back End architectures and designing interactive, responsive user interfaces on the Front End. My portfolio showcases projects, educational background, and my deep passion for programming. Dive into my technological journey and explore how I seamlessly blend functionality with aesthetics in every line of code. Welcome to my digital space!</p>
        </div>
        :
        <div className='aboutMe' >
          <h3> Sobre Mi</h3>
          <p>¡Hola! Soy Giuliana Zorzoli, una apasionada programadora Full Stack especializada en la creación de arquitecturas robustas en el Back End y en el diseño de interfaces de usuario interactivas y responsivas en el Front End. Mi portfolio destaca proyectos, formación y mi amor por la programación. Explora mi viaje tecnológico y descubre cómo fusiono funcionalidad con estética en cada línea de código. ¡Bienvenido a mi espacio digital!</p>
      </div>
      }
       
    </section>
  )
}
export default AboutMe;