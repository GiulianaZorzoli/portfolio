import React, { useEffect, useState } from 'react'

export const Project = ({title, image, description, fullDescription, repository, demo}) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShow = ()=>{
        if(showMore){
            setShowMore(false);
            console.log(showMore);
        }else{
            setShowMore(true);
            console.log(showMore)
        }
    }

    return (
        
    <div className={showMore == false ? 'projectContainer' : 'projectFullContainer'}>
        <div className='projectHeader'>
            <img src={`${image}`} alt="" />
        </div>
        <div className='projectDescription'>
            <div>
                <h3>{title}</h3>
                <p>{showMore == false ? description : fullDescription}</p>
            </div>
            <div className='projectButton'>
                <i onClick={toggleShow} className={showMore == false ? "bi bi-caret-down-fill" : "bi bi-caret-up-fill"}></i>
            </div>
        </div>
        { showMore == true ? 
            <div className='projectFooter'>
                <button> <a href={repository}>REPOSITORY</a></button>
                {demo !=null ? <button> <a href={demo}>DEMO</a></button> : ""}
                
            </div>
            : ""}
    </div>
  )
}

export default Project;