import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './assets/Navbar'
import Name from './assets/Name'
import AboutMe from './assets/AboutMe'
import Projects from './assets/Projects'
import Skills from './assets/Skills'
import Formations from './assets/Formations'
import ContactMe from './assets/ContactMe'
import Footer from './assets/Footer'
import './styles/style.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Name></Name>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <Skills></Skills>
    <Formations></Formations>
    <ContactMe></ContactMe>
    <Footer></Footer>
  </React.StrictMode>,
)
