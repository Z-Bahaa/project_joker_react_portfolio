import './experience.css'
import experiences from '../../data/experiences'
import { AiFillCheckCircle } from 'react-icons/ai'

const Experience = () => {
  return (
    <div className="section" id="experience">
    <h5>What Skills Do I Have?</h5>
    <h2>My Experiences</h2>
    <div className="experience__container">
      {
        experiences.map((feild) => (
          <div>
            <h3>{feild.title}</h3>
            <div c></div>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Experience
