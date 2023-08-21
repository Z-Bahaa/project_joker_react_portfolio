import './portfolio.css'
import projects from '../../data/projects'



const Portfolio = () => {
  return (
    <div className="section">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          projects.map(item => (
            <div  key={item.id} className="portfolio__item">
              <img src={item.img} className="portfolio__item-image" alt=""/>
              <h3>{item.title || 'This is a portfolio item title'}</h3>
              <p>{item.title || 'This is a portfolio item title'}</p>
              <div className="portfolio__item-cta">
                <a className="btn" href={item.github} target='_blank' rel="noreferrer">Github</a>
                <a className="btn btn-primary" href={item.demo} target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio