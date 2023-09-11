import { AiOutlineLinkedin, AiOutlineFacebook,} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'
import {SiLeetcode} from 'react-icons/si';



const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href='https://leetcode.com/zizobahaapersonal/' target='_blank'  rel="noreferrer"><SiLeetcode size="30px"/></a>
      <a href='https://www.linkedin.com/in/zizo-bahaa' target='_blank'  rel="noreferrer"><AiOutlineLinkedin size="30px" /></a>
      <a href='https://github.com/Z-Bahaa' target='_blank'  rel="noreferrer"><FiGithub size="30px"/></a>
      <a href='https://www.facebook.com/profile.php?id=100071918118359' target='_blank'  rel="noreferrer"><AiOutlineFacebook size="30px" /></a>
    </div>
  )
}

export default HeaderSocials
