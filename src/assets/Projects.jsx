import React from 'react'
import Project from './Project'


const projectsEn = [
    {
        id : 1,
        url : "/projects/notesApp.png",
        name : "Notes Web Application",
        description : "App developed with Spring Boot and React",
        fullDescription : ["I have undertaken the creation of a note-taking application. The application's back end is developed using Java, incorporating Spring Boot, Spring Data JPA, and MySQL for the database. On the front end, React is employed, and the connection to the back end is facilitated through AXIOS.","Application Description:","The app is a comprehensive note-taking solution offering CRUD (Create, Read, Update, Delete) functionalities. Users can seamlessly create, edit, filter, and delete notes, providing a versatile and user-friendly platform for managing information.","Key Features:","Java Back End with Spring Boot: The back end is meticulously crafted using Java and Spring Boot, ensuring efficiency and scalability in handling note-related operations.","Spring Data JPA and MySQL:Utilizing Spring Data JPA and MySQL, The app ensures a robust and relational database system, facilitating the storage and retrieval of notes.","React Front End: The front end is developed using React, delivering a responsive and dynamic user interface that enhances the overall user experience.","AXIOS for Backend Communication: AXIOS is employed for seamless communication between the front-end React application and the Java-based Spring Boot back end, ensuring smooth data flow and real-time updates.","This project not only serves as an educational milestone but also showcases the practical application of Java, Spring Boot, React, and database technologies in developing a fully functional note-taking application."],
        repository : "https://github.com/GiulianaZorzoli/notes-application",
        demo : null
    },
    {
        id : 2,
        url : "/projects/plantasInvasoras.png",
        name : "Game 'Plantas Invasoras' ",
        description : "Game developed with Java",
        fullDescription :['In the context of the Programming 1 course, I have developed a game titled "Invasive Plants" using Java and applying object-oriented programming principles.','Game Description:',"'Invasive Plants' unfolds a unique storyline where a courageous dog takes on the role of the city's protector against malevolent invading plants. The goal is to defeat these invasive plants before they completely take over the urban environment. In each level, the character must defeat a certain number of plants before losing all of its lives.",'Key Features:',"Object-Oriented Programming (OOP): The game's structure adheres to OOP principles, ensuring a modular and easily maintainable codebase.",'Progressive Levels: The game features multiple levels, each with a gradual increase in difficulty, offering exciting challenges as the defending dog advances.','Multiplayer: The game supports two-player mode, allowing players to collaborate in facing the plant invasion. Strategic cooperation adds an extra layer of fun to the gameplay.','Lives and Consumables: Limited lives are implemented for the defending dog, adding a strategic element. Additionally, consumables enable players to recover lives and extend their playing time.','Character Selection: Players can choose from various defending dogs, providing a personalized gaming experience.','This project has not only been a valuable educational experience but also an opportunity to apply practical knowledge in game development using Java and object-oriented programming.'],
        repository : "https://github.com/GiulianaZorzoli/Plantas-Invasoras",
        demo : null
    },
        {
        id : 3,
        url : "/projects/encriptador.png",
        name : "Text Encryptor",
        description : "App developed with HTML5, CSS3 and JavaScript",
        fullDescription : ["In the context of the 'One' course offered by Oracle and Alura Latam, I have created a project for a text encryption application named. This application is built using HTML5, CSS3, and JavaScript, providing a seamless platform for encrypting and decrypting text.","Key Features:","HTML5, CSS3, and JavaScript Stack: The application leverages the power of HTML5 for structuring content, CSS3 for styling, and JavaScript for dynamic functionality. This ensures a modern, responsive, and visually appealing user interface.","Intuitive User Interface: The user interface is thoughtfully designed to be intuitive and user-friendly. Users can easily input text, select encryption or decryption, and obtain the processed result with minimal effort.","Responsive Design: The application is built with a responsive design, ensuring a seamless experience across various devices and screen sizes."],
        repository : "https://github.com/GiulianaZorzoli/encriptador-de-texto",
        demo : "https://giulianazorzoli.github.io/encriptador-de-texto/"    
    },
        {
        id : 4,
        url : "/projects/taskApp.png",
        name : "Task Application",
        description : "App developed with Spring Boot, Spring Data JPA and Thymeleaf ",
        fullDescription : ["I have undertaken the creation of a task management application. The application's back end is developed using Java, incorporating Spring Boot, Spring Data JPA, and MySQL for the database. On the front end, Thymeleaf is employed. The application offers CRUD (Create, Read, Update, Delete) operations, enabling users to create, edit, filter, mark as complete, and delete tasks as needed.","Application Description:","The application is a comprehensive solution for task management that facilitates essential operations in handling task lists. Users can create new tasks, edit them, filter them, mark them as complete, and delete them, providing a versatile and efficient platform for organizing their daily activities.", "Key Features:","Java Back End with Spring Boot: The back end is robustly developed using Java and Spring Boot, leveraging Spring Data JPA and MySQL for efficient database management and execution of CRUD operations." , "Thymeleaf for the Front End: Thymeleaf is utilized for the front end, offering a dynamic user interface that simplifies user interaction with the application and enhances the overall experience."],
        repository : "https://github.com/GiulianaZorzoli/task-app-spring-boot",
        demo : null
    }
]
const projectsEs = [
    {
        id : 1,
        url : "/projects/notesApp.png",
        name : "Applicación web de notas",
        description : "App desarrollada con Spring Boot y React",
        fullDescription : ["he emprendido la creación de una aplicación de notas. El back end de la aplicación está desarrollado con Java, incorporando Spring Boot, Spring Data JPA y MySQL para la base de datos. En el front end, se utiliza React, y la conexión con el back end se realiza mediante AXIOS.","Descripción de la Aplicación:","La aplicación es una solución completa de toma de notas que ofrece funcionalidades CRUD (Crear, Leer, Actualizar, Borrar). Los usuarios pueden crear, editar, filtrar y borrar notas de manera fluida, proporcionando una plataforma versátil y fácil de usar para gestionar información.","Características Clave:","Back End en Java con Spring Boot: El back end está meticulosamente creado con Java y Spring Boot, garantizando eficiencia y escalabilidad en el manejo de operaciones relacionadas con las notas.","Spring Data JPA y MySQL: Utilizando Spring Data JPA y MySQL, la aplicación asegura un sistema de base de datos robusto y relacional, facilitando el almacenamiento y recuperación de notas.","Front End en React: El front end se desarrolla con React, ofreciendo una interfaz de usuario receptiva y dinámica que mejora la experiencia general del usuario.", "AXIOS para la Comunicación con el Back End: AXIOS se emplea para una comunicación fluida entre la aplicación front-end de React y el back end basado en Java y Spring Boot, garantizando un flujo de datos sin problemas y actualizaciones en tiempo real.", "Este proyecto no solo sirve como un hito educativo, sino que también muestra la aplicación práctica de Java, Spring Boot, React y tecnologías de bases de datos en el desarrollo de una aplicación de toma de notas completamente funcional."],
        repository : "https://github.com/GiulianaZorzoli/notes-application",
        demo : null
    },
    {
        id : 2,
        url : "/projects/plantasInvasoras.png",
        name : "Juego 'Plantas Invasoras' ",
        description : "Juego desarrollado con Java",
        fullDescription : ['En el marco del curso de Programación 1, he desarrollado un juego llamado "Plantas Invasoras", utilizando Java y aplicando los principios de la programación orientada a objetos.','Descripción del Juego:','"Plantas Invasoras" presenta una trama única donde un valiente perro asume el papel de protector de la ciudad, que está siendo invadida por plantas malévolas. El objetivo es derrotar a estas plantas invasoras antes de que se apoderen por completo del entorno urbano. En cada nivel el personaje debe derrotar a una cierta cantidad de plantas antes de perder todas sus vidas.','Características Destacadas:','Programación Orientada a Objetos (POO): La estructura del juego sigue los principios de la POO para garantizar un código modular y fácil de mantener.','Niveles Progresivos: El juego incluye múltiples niveles, cada uno con un aumento gradual en la dificultad, ofreciendo desafíos emocionantes a medida que el perro defensor avanza.','Multijugador: Se puede jugar de a dos personas, enfrentando juntos la invasión de plantas. La cooperación estratégica agrega una capa adicional de diversión al juego.','Vidas y Consumibles: Se implementan vidas limitadas para el perro defensor, agregando un elemento estratégico. Además, los consumibles permiten a los jugadores recuperar vidas y prolongar su tiempo de juego.','Selección de Personajes: Los jugadores pueden elegir entre varios perros defensores, lo que brinda una experiencia de juego personalizada.','Este proyecto no solo ha sido una experiencia educativa valiosa, sino también una oportunidad para aplicar conocimientos prácticos en el desarrollo de juegos utilizando Java y la programación orientada a objetos.'],
        repository : "https://github.com/GiulianaZorzoli/Plantas-Invasoras",
        demo : null
    },
        {
        id : 3,
        url : "/projects/encriptador.png",
        name : "Encriptador de Texto",
        description : "App desarrollada con HTML5, CSS3 y JavaScript",
        fullDescription : ["En el marco del curso 'One' ofrecido por Oracle y Alura Latam, he creado un proyecto para una aplicación de encriptación de texto. Esta aplicación está construida utilizando HTML5, CSS3 y JavaScript, proporcionando una plataforma fluida para encriptar y desencriptar texto.","Características Clave:","Tecnologías HTML5, CSS3 y JavaScript: La aplicación aprovecha la potencia de HTML5 para estructurar el contenido, CSS3 para el estilo y JavaScript para la funcionalidad dinámica. Esto asegura una interfaz de usuario moderna, receptiva y visualmente atractiva.","Interfaz de Usuario Intuitiva: La interfaz de usuario está diseñada de manera reflexiva para ser intuitiva y fácil de usar. Los usuarios pueden ingresar texto, elegir si encriptar o desencriptar, y obtener el resultado procesado con un esfuerzo mínimo.","Diseño Adaptable: La aplicación está construida con un diseño adaptable, asegurando una experiencia sin inconvenientes en varios dispositivos y tamaños de pantalla."],
        repository : "https://github.com/GiulianaZorzoli/encriptador-de-texto",
        demo : "https://giulianazorzoli.github.io/encriptador-de-texto/"    
    },
        {
        id : 4,
        url : "/projects/taskApp.png",
        name : "Aplicación de Tareas",
        description : "Aplicación desarrollada con Spring Boot, Spring Data JPA y Thymeleaf ",
        fullDescription : ["He llevado a cabo la creación de una aplicación de gestión de tareas. La aplicación cuenta con un back end desarrollado en Java, haciendo uso de Spring Boot, Spring Data JPA y MySQL para la base de datos. Por otro lado, el front end está construido con Thymeleaf. La aplicación ofrece operaciones CRUD (Crear, Leer, Actualizar, Borrar), permitiendo a los usuarios crear, editar, filtrar, marcar como completas y borrar tareas según sus necesidades.", "Descripción de la Aplicación:","La aplicación es una solución integral para la gestión de tareas que facilita las operaciones esenciales en la administración de listas de tareas. Los usuarios pueden crear nuevas tareas, editarlas, filtrarlas, marcarlas como completas y eliminarlas, proporcionando una plataforma versátil y eficiente para la organización de sus actividades diarias.","Características Clave:","Back End en Java con Spring Boot: El back end está desarrollado de manera robusta con Java y Spring Boot, aprovechando Spring Data JPA y MySQL para la gestión eficiente de la base de datos y la ejecución de operaciones CRUD.","Thymeleaf para el Front End:El front end utiliza Thymeleaf, ofreciendo una interfaz de usuario dinámica que simplifica la interacción del usuario con la aplicación y mejora la experiencia general.",""],
        repository : "https://github.com/GiulianaZorzoli/task-app-spring-boot",
        demo : null
    }
]

export const Projects = ({lang}) => {
  return (
    <section id='projects'>
        <br />
        <h2>{lang == true ? 'Projects' : 'Proyectos'}</h2>
        <div className='projectWrapper'>
            {
                lang ==true
                ?
                    projectsEn.map(project => <Project key={project.id} title={project.name} image={project.url} description={project.description} fullDescription ={project.fullDescription} repository = {project.repository} demo = {project.demo}></Project>)
                :
                    projectsEs.map(project => <Project key={project.id} title={project.name} image={project.url} description={project.description} fullDescription ={project.fullDescription} repository = {project.repository} demo = {project.demo}></Project>)
            }
        </div>
        
    </section>
  )
}

export default Projects;
