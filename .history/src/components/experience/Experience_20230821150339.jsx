import './experience.css'
import {skills, experience} from '../../data/experiences'
import { AiFillCheckCircle } from 'react-icons/ai'

const Experience = () => {
  return (
    <div className="section" id="experience">
      <h5>What Skills Do I Have?</h5>
      <h2>My Experiences</h2>
      <div className="history__container">
        {
          experience.map((e) => (
            <div>
              <div className="image-container">
                <img src={e.image} alt='company logo'/>
              </div>
              <div className="course-details-container">
                <p>{}</p>
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
