import './header.css';
import CTA from './CTA'
import ME from '../../assets/me-3.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div className='header container' id='home'>
      <div className='header__container'>
        <h5>Hello, I'm</h5>
        <h1>Z. bahaa</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href='#contact' className="scroll__down">Scroll Down</a>
      </div>
    </div>
  )
}

export default Header
