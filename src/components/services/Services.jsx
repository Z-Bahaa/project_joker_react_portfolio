import './services.css'
import { BiCheck } from 'react-icons/bi'
import services from '../../data/services'

const Services = () => {
  return (
    <div className="section" id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      {
        services.map(({name, subheadings}) => (
          <div className="service">
            <div className="service__head">
              <h3>{name}</h3>
            </div>
            <ul className="service__list">
              {subheadings.map((sub) => (
                <li>
                  <BiCheck className="service__icon" />
                  <p>{sub}</p>
                </li>
              ))}
              
            </ul>
      </div>
      ))
      }

       
      </div>
    </div>
  )
}

export default Services
