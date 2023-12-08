import React from 'react'
import '../Projects/projects.css'
import data from '../../models/projectdata'


function Projects() {

    
  return (
    <div className='project-container'>
        <div className='project-div'>
            <div>
            <h2>Projects</h2>   
            </div>
            <div className='data-div'>
                
                    {
                        data.map((dta) => {
                            
                            return(
                                <div className='project-data'>
                                    <div className='img-data'>
                                        <img className="projectimage" src={dta.projimage} alt="#"/>
                                    </div>
                                    <div className='proj-details-div'>
                                        <div>
                                            <h3>{dta.projectname}</h3>
                                        </div>
                                        <div>
                                            <p>{dta.projdescription}</p>
                                        </div>
                                        <div>
                                            <p style={{textDecoration:"underline"}}>Skills</p>
                                        </div>
                                        <div className='skill-icon-div'>
                                        {
                                            dta.skillsused.map((i) => <img className='skills-icon' src={i}/>)
                                        }
                                        </div>
                                        <div className='proj-link'>
                                            <a href={dta.link} style={{color:"white"}} target='_blank'>{dta.link}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                
            </div>        
         </div>
    </div>
  )
}

export default Projects