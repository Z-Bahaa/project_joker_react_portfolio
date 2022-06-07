import './about.css'
import ME from '../../assets/me-about-2.jpg'
import { FiAward, FiUsers } from 'react-icons/fi'
import { AiFillFolderOpen } from 'react-icons/ai'
const About = () => {
  return (
    <div className="section" id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">

            <div className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </div>

            <div className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </div>

            <div className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </div>

          </div> */}

          <p>
         I'm Zeyad Bahaa a Self taught Frontend developer. I'm interested in new technology.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </div>
  )
}

export default About
