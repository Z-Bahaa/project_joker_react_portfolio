import './experience.css'
import { backendExperiences, frontendExperiences } from '../../data/experiences'
import { AiFillCheckCircle } from 'react-icons/ai'

const Experience = () => {
  return (
    <div className="section" id="experience">
      <h5>What Skills Do I Have?</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
          <div className="experience__content">
            {
              frontendExperiences.map(({name, experience}) => (
                <div className="experience__details">
                 
                <AiFillCheckCircle className="experience__details-icon"/>   
                <div>        
                  <h4>{name}</h4>
                  <small>{experience}</small>   
                </div>
            </div>
              ))
            }
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
          {
            backendExperiences.map(({name, experience}) => (
              <div className="experience__details">
               
              <AiFillCheckCircle className="experience__details-icon"/>   
              <div>        
                <h4>{name}</h4>
                <small>{experience}</small>   
              </div>
          </div>
            ))
          }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience
