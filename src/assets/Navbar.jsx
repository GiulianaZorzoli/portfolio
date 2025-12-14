import React, { useState } from 'react'

export const Navbar = ({lang,changeLang}) => {
  let about='ABOUT';
  let experience='EXPERIENCE';
  let projects='PROJECTS';
  let skills='SKILLS';
  let formation='FORMATION'
  let contact = 'CONTACT'

  if(lang==false){
    about='SOBRE MI';
    experience='EXPERIENCIA';
    projects='PROYECTOS';
    skills='HABILIDADES';
    formation ='FORMACION';
    contact='CONTACTO';
  }

  const [showMenu, setShowMenu] = useState(false);

  const toogleShowMenu = () =>{
    if(showMenu){
      setShowMenu(false);
    }else{
      setShowMenu(true);
    }
  }

  const [theme,setTheme]=useState(false);

  const handleChange = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    document.documentElement.setAttribute('tema', newTheme ? "dark" : "light");
  }


  return (
    <header>
      <nav>
        <div className='themeAndLang'>
          <div className="toggle-container">
            <input type="checkbox" onChange={handleChange} value={theme}/>
            <div className='slider round'></div>
          </div>
          <button className='language' onClick={changeLang}> {lang== true ? 'Español' : 'English'}</button>
        </div>
        <div className='navbar'>
          <button className='menuButton'><i className="bi bi-list" onClick={toogleShowMenu}></i></button>  
          <div className='menuDesktop'>
            <a href="#aboutMe" className='navElement'>{about}</a>
            <a href="#experience" className='navElement'>{experience}</a>
            <a href="#projects" className='navElement'>{projects}</a>
            <a href="#skills" className='navElement'>{skills}</a>
            <a href="#formation" className='navElement'>{formation}</a>
            <a href="#contact" className='navElement'>{contact}</a>
          </div>
        </div>
      </nav>
      <div className={showMenu == false ? "menu hidden" : "menu"}>
        <ul >
          <li> <a href="#aboutMe">{about}</a></li>
          <li> <a href="#experience">{experience}</a></li>
          <li> <a href="#proyects">{projects}</a></li>
          <li><a href="#skills">{skills}</a></li>
          <li><a href="#formation">{formation}</a></li>
          <li><a href="#contact">{contact}</a></li>
        </ul>
      </div>

    </header>

  )
}

export default Navbar;
