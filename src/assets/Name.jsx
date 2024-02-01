import React from 'react'

export const Name = ({lang}) => {
  return (
    <section className='nameSection'  > 
        
          {
            lang == true 
            ?  
            <div className='nameTextDiv'>
              <h1>Hello, <br></br> I'm Giuliana Zorzoli</h1> 
              <button><a href="https://drive.google.com/file/d/1WBHxmRdpOQI7m9uyp8pmr-LG5n0FuEx7/view?usp=drivesdk ">WATCH RESUME</a></button>
            </div>
            : 
            <div className='nameTextDiv'>
              <h1>Hola, <br></br> Soy Giuliana Zorzoli</h1> 
              <button><a href="https://drive.google.com/file/d/1WBHxmRdpOQI7m9uyp8pmr-LG5n0FuEx7/view?usp=drivesdk ">CURRICULUM</a></button>
            </div>
          }
           
            
        
        <div className='imgDiv' id='aboutMe'>
            <img src="/perfil.png" alt="imagen de perfil" />
        </div>
    </section>
  )
}

export default Name;