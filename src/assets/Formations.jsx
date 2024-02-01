import React from 'react'

const formations = [
  {
    id : 1,
    title : "Bachelor of Computer Information Systems",
    academy : "Universidad Nacional de General Sarmiento",
    date : "2022 - now",
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

export const Formations = () => {
  return (
    <section id='formation'>
      <br />
        <h2>Formation</h2>
        {
          formations.map(formation => <Formation key={formation.id} title={formation.title} academy={formation.academy} date={formation.date} description={formation.description}></Formation> )
        }
    </section>
  )
}
export default Formations;