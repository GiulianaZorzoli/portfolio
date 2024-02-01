import React from 'react'

export const Skills = ({lang}) => {
  return (
    <section  id='skills'>
      <br />
      <h2>{lang == true ? 'Skills' : 'Habilidades'}</h2>
      <div className='skills'>
        <div className='carouselWrapper'>
          <div className='carouselContainer'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className='skillContainer'>
                    <div className='skillHeader'>
                      <div className='skillLogo'>
                        <i className="bi bi-motherboard"></i>
                      </div>
                      <h3>Back End</h3>
                    </div>
                    <div className='skillsWrapper'>
                      <div className="skillsContainer">
                        <div className='skill'><img src="/logos/javaLogo.png" alt="" /><h6>Java</h6></div>
                        <div className='skill'><img src="/logos/springLogo.png" alt="" /><h6>Spring Framework</h6></div>
                        <div className='skill'><img src="/logos/springDataJPALogo.png" alt="" /><h6>Spring Data JPA</h6></div>
                      </div> 
                      <div className="skillsContainer">
                        <div className='skill'><img src="/logos/pythonLogo.png" alt="" /><h6>Python</h6></div>
                        <div className='skill'><img src="/logos/springBootLogo.png" alt="" /><h6>Spring Boot</h6></div>
                        <div className='skill'><img src="/logos/mavenLogo.png" alt="" /><h6>Maven</h6></div>
                      </div> 
                      </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className='skillContainer'>
                    <div className="skillHeader">
                      <div className='skillLogo'>
                        <i className="bi bi-palette"></i>
                      </div>
                      <h3>Front End</h3>
                    </div>
                    <div className="skillsWrapper">
                      <div className="skillsContainer">
                      <div className='skill'><img src="/logos/html5Logo.png" alt="" /><h6>HTML5</h6></div>
                        <div className='skill'><img src="/logos/css3Logo.png" alt="" /><h6>CSS3</h6></div>
                        <div className='skill'><img src="/logos/javaScriptLogo.png" alt="" /><h6>JavaScript</h6></div>
                      </div>
                      <div className="skillsContainer">
                        <div className='skill'><img src="/logos/bootstrapLogo.png" alt="" /><h6>Bootstrap</h6></div>
                        <div className='skill'><img src="/logos/reactLogo.png" alt="" /><h6>React</h6></div>
                        <div className='skill'><img src="/logos/thymeleafLogo.png" alt="" /><h6>Thymeleaf</h6></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className='skillContainer'>
                    <div className="skillHeader">
                      <div className='skillLogo'>
                        <i className="bi bi-code-slash"></i>
                      </div>
                      <h3>Development</h3>
                    </div>
                    <div className="skillsWrapper">
                      <div className="skillsContainer">
                        <div className='skill'><img src="/logos/gitLogo.png" alt="" /><h6>Git</h6></div>
                        <div className='skill'><img src="/logos/swaggerLogo.png" alt="" /><h6>Swagger</h6></div>
                        <div className='skill'><img src="/logos/postmanLogo.png" alt="" /><h6>Postman</h6></div>
                      </div>
                      <div className="skillsContainer">
                        <div className='skill'><img src="/logos/APIRestLogo.png" alt="" /><h6>REST</h6></div>
                        <div className='skill'><img src="/logos/httpLogo.png" alt="" /><h6>HTTP Protocol</h6></div>
                        <div className='skill'><img src="/logos/githubLogo.png" alt="" /><h6>GitHub</h6></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className='skillContainer'>
                    <div className="skillHeader">
                      <div className='skillLogo'>
                        <i className="bi bi-database"></i>
                      </div>
                      <h3>Database</h3>
                    </div>
                    <div className="skillsWrapper">
                      <div className="skillsContainer">
                        <div className='skill'><img src="/logos/sqlLogo.png" alt="" /><h6>SQL</h6></div>
                        <div className='skill'><img src="/logos/MySQLLogo.png" alt="" /><h6>MySQL</h6></div>                  </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
    </div>
  </section>
  )
}

export default Skills;