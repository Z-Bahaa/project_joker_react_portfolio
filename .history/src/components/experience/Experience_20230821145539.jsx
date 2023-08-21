import './experience.css'
import {skills} from '../../data/experiences'
import { AiFillCheckCircle } from 'react-icons/ai'
import GFG from '../../assets/GFG.png'

const Experience = () => {
  return (
    <div className="section" id="experience">
      <h5>What Skills Do I Have?</h5>
      <h2>My Experiences</h2>
      <div className="history__container">
        {
          skills.map((field) => (
            <div>
              <div className="image-container">
                <img src={GFG} alt=''/>
              </div>
              <div className="course-details-container">
                <p>March 2023 - May 2023 (Course)</p>
                <h1>Master C++ Programming - Complete Beginner to Advanced</h1>
                <section>
                  <span>Sandeep Jain </span>
                  <p> •  GeeksForGeeks</p>
                </section>
              </div>
              <a href="https://z-bahaa-shop-1.netlify.app/" target="_blank" rel="noreferrer">
                <button className="btn btn-primary" > 
                  <h1>visit company</h1>
                </button>
              </a>
            </div>
          ))
        }
      </div>
      <h2>Acquired Skills</h2>
      <div className="experience__container">
        {
          skills.map((field) => (
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
      
    </div>
  )
}

export default Experience
