import './footer.css'
import { AiOutlineLinkedin, AiOutlineFacebook, } from 'react-icons/ai'
import { FiTwitter, FiGithub, FiInstagram } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'
import { SiMyanimelist } from 'react-icons/si'

const Footer = () => {
  return (
    <div className="footer">
      <a href="#home" className="footer__icon">Z. bahaa</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        // 
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials" >
        <a href='https://www.linkedin.com/in/z-bahaa-194022234/' target='_blank' rel="noreferrer"><AiOutlineLinkedin /></a>
        <a href='https://github.com/Z-Bahaa' target='_blank' rel="noreferrer"><FiGithub /></a>
        <a href='https://www.facebook.com/profile.php?id=100071918118359' target='_blank' rel="noreferrer"><AiOutlineFacebook /></a>
        <a href='https://twitter.com/ZBahaa2' target='_blank' rel="noreferrer"><FiTwitter /></a>
        <a href='https://www.tiktok.com/@z_bahaa' target='_blank' rel="noreferrer"><FaTiktok /></a>
        <a href='https://www.instagram.com/bahaa_zizo/' target='_blank' rel="noreferrer"><FiInstagram /></a>
        <a href='https://myanimelist.net/animelist/zizobahaa1' target='_blank' rel="noreferrer"><SiMyanimelist /></a>
      </div>

      <div className="footer__coptright">
        <small>&copy; Z.bahaa. All rights reserved.</small>
      </div>
    </div>
  )
}

export default Footer
