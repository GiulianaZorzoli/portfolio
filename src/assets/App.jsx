import React, { useState } from 'react'
import Navbar from './Navbar'
import Name from './Name'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'
import Formations from './Formations'
import ContactMe from './ContactMe'
import Footer from './Footer'


export const App = () => {
    const [lang, setLang] = useState(true);

    const onChangeLang=()=>{
        if(lang){
            setLang(false);
        }else{
            setLang(true);
        }
    }
  
    return (
    <>  
        <Navbar lang={lang} changeLang={onChangeLang}></Navbar>
        <Name lang={lang}></Name>
        <AboutMe lang={lang}></AboutMe>
        <Projects lang={lang}></Projects>
        <Skills lang={lang}></Skills>
        <Formations lang={lang}></Formations>
        <ContactMe lang={lang}></ContactMe>
        <Footer lang ={lang}></Footer>
    </>
  )
}
export default App;
