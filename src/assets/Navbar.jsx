import React, { useState } from 'react'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toogleShowMenu = () =>{
    if(showMenu){
      setShowMenu(false);
    }else{
      setShowMenu(true);
    }
  }

  const [theme,setTheme]=useState(false);
  
  const handleChange= event =>{
    if(theme){
      setTheme(false);
      document.documentElement.setAttribute('tema',"light");
    }else{
      setTheme(true)
      document.documentElement.setAttribute('tema',"dark");
    }
    console.log(theme)
  }

  return (
    <header>
      <nav>
        <div className='theme'>
          <div className="toggle-container">
            <input type="checkbox" onChange={handleChange} value={theme}/>
            <div className='slider round'></div>
          </div>
        </div>
        <div className='navbar'>
          <button><i className="bi bi-list" onClick={toogleShowMenu}></i></button>  
          <div className='menuDesktop'>
            <a href="#aboutMe">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#skills">SKILLS</a>
            <a href="#formation">FORMATION</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </nav>
      <div className={showMenu == false ? "menu hidden" : "menu"}>
        <ul >
          <li> <a href="#aboutMe">ABOUT</a></li>
          <li> <a href="#proyects">PROJECTS</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#formation">FORMATION</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>

    </header>

  )
}

export default Navbar;
