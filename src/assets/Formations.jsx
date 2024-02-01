import React from 'react'

const formationsEn = [
  {
    id : 1,
    title : "Bachelor of Computer Information Systems",
    academy : "Universidad Nacional de General Sarmiento",
    date : "may 2022 - now",
    description : "Currently in the third year of the degree. I acquired knowledge on technologies such as Java and Python and programming techniques as Object-Oriented Programming. "
  },
  {
    id: 2,
    title : "FullStack Java",
    academy : "Codo A Codo",
    date : "august 2023 - december 2023 ",
    description : "Learned how to create both the frontend and the backend of an application. I acquired knowledge on technologies such as Java, HTML5, CSS3, Bootstrap, JavaScript and MySql."
  },
  {
    id : 3,
    title : "Programming Fundamentals",
    academy : "Argentina Programa",
    date : "february 2023 - may 2023",
    description : "Learned the fundaments of programming, such as programming logic, algorithms and control structures. Also learned the basics of C."
  }
]
const formationsEs = [
  {
    id : 1,
    title : "Licenciatura en Sistemas",
    academy : "Universidad Nacional de General Sarmiento",
    date : "mayo 2022 - actualidad",
    description : "Actualmente cursando el tercer año de la carrera. Obtuve conocimientos de tecnologías como Java y Python, y técnicas de programación como la Programación Orientada a Objetos. "
  },
  {
    id: 2,
    title : "FullStack Java",
    academy : "Codo A Codo",
    date : "augosto 2023 - diciembre 2023 ",
    description : "Aprendí a crear tanto el Front End como el Back End de una aplicación. Obtuve conocimiento de tecnologías como Java, HTML5, CSS3, Bootstrap, JavaScript y MySql."
  },
  {
    id : 3,
    title : "Fundamentos de la Programación",
    academy : "Argentina Programa",
    date : "febrero 2023 - mayo 2023",
    description : "Aprendí los fundamentos de la programación, como la lógica de programación, algoritmos y estructuras de control. Tambien aprendí los conocimientos básicos de la programación en C."
  }

]

export const Formation = ({title,academy,date,description}) => {
  return (
    <div className='formationContainer'>
      <h3>{title}</h3>
      <h4>{academy}</h4>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  )
}

export const Formations = ({lang}) => {
  return (
    <section id='formation'>
      <br />
        <h2>{lang==true ? 'Formation' : 'Formación'}</h2>
        {
          lang==true
          ?
            formationsEn.map(formation => <Formation key={formation.id} title={formation.title} academy={formation.academy} date={formation.date} description={formation.description}></Formation> )
          :
            formationsEs.map(formation => <Formation key={formation.id} title={formation.title} academy={formation.academy} date={formation.date} description={formation.description}></Formation> )
        }
    </section>
  )
}
export default Formations;