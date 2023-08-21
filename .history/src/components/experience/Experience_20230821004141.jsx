import './experience.css'
import {experiences} from '../../data/experiences'
import { AiFillCheckCircle } from 'react-icons/ai'

const Experience = () => {
  return (
    <div className="section" id="experience">
      <h5>What Skills Do I Have?</h5>
      <h2>My Experiences</h2>
      <div className="experience__container">
        {
          experiences.map((field) => (
            <div>
              <h3>{field.title}</h3>
              <div className="experience__content">
                {
                  field.list.map((item) => (
                    <div className="experience__details">
                  
                        <AiFillCheckCircle className="experience__details-icon"/>   
                        <div>        
                          <h4>{item.name}</h4>
                          <small>{(item.experience + " ")} • <span>{" " + item.level}</span> </small>   
                        </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      <h5>What Skills Do I Have?</h5>
      <h2>My Experiences</h2>
      <div className="experience__container">
        
      </div>
    </div>
  )
}

export default Experience
