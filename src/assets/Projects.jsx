import React from 'react'
import Project from './Project'


const projects = [
    {
        id : 1,
        url : "/projects/notesApp.png",
        name : "Notes Web Application",
        description : "App developed with Spring Boot and React",
        fullDescription : "App developed with Spring Boot and React, also utilizing Spring Data JPA and SQL. Enables full CRUD operations. Some of the actions you can peroform with the app include: create, filter, archive, edit and delete notes",
        repository : "https://github.com/GiulianaZorzoli/notes-application",
        demo : null
    },
    {
        id : 2,
        url : "/projects/plantasInvasoras.png",
        name : "Game 'Plantas Invasoras' ",
        description : "Game developed with Java",
        fullDescription : "Game developed with Java for the 'Programming 1' course at the 'Universidad Nacional de General Sarmiento'. Implemented using Object-Oriented Programming concepts.",
        repository : "https://github.com/GiulianaZorzoli/Plantas-Invasoras",
        demo : null
    },
        {
        id : 3,
        url : "/projects/encriptador.png",
        name : "Text Encryptor",
        description : "App developed with HTML5, CSS3 and JavaScript",
        fullDescription : "App developed with HTML5, CSS3 and JavaScript for Oracle and Alura Latam program 'ONE'. Allows encrypting and decrypting text",
        repository : "https://github.com/GiulianaZorzoli/encriptador-de-texto",
        demo : "https://giulianazorzoli.github.io/encriptador-de-texto/"    
    },
        {
        id : 4,
        url : "/projects/taskApp.png",
        name : "Task Application",
        description : "App developed with Spring Boot, Spring Data JPA and Thymeleaf ",
        fullDescription : "App developed with Spring Boot, Spring Data JPA and Thymeleaf. Using SQL database. Allows to create, categorize, edit, complete and delete tasks.",
        repository : "https://github.com/GiulianaZorzoli/task-app-spring-boot",
        demo : null
    }
]

export const Projects = () => {
  return (
    <section id='projects'>
        <br />
        <h2>Projects</h2>
        <div className='projectWrapper'>
            {
                projects.map(project => <Project key={project.id} title={project.name} image={project.url} description={project.description} fullDescription ={project.fullDescription} repository = {project.repository} demo = {project.demo}></Project>)
            }
        </div>
        
    </section>
  )
}

export default Projects;
