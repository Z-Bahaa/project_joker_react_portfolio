import { AiOutlineLinkedin, AiOutlineFacebook,} from 'react-icons/ai'
import { FiTwitter, FiGithub, FiInstagram} from 'react-icons/fi'
import { FaTiktok} from 'react-icons/fa'
import { SiMyanimelist} from 'react-icons/si'



const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href='https://www.linkedin.com/in/z-bahaa-194022234/' target='_blank'  rel="noreferrer"><AiOutlineLinkedin/></a>
      <a href='https://github.com/Z-Bahaa' target='_blank'  rel="noreferrer"><FiGithub /></a>
      <a href='https://www.facebook.com/profile.php?id=100071918118359' target='_blank'  rel="noreferrer"><AiOutlineFacebook /></a>
      <a href='https://twitter.com/ZBahaa2' target='_blank' rel="noreferrer"><FiTwitter /></a>
      <a href='https://www.tiktok.com/@z_bahaa' target='_blank' rel="noreferrer"><FaTiktok /></a>
      <a href='https://www.instagram.com/bahaa_zizo/' target='_blank' rel="noreferrer"><FiInstagram /></a>
      <a href='https://myanimelist.net/animelist/zizobahaa1' target='_blank' rel="noreferrer"><SiMyanimelist /></a>
    </div>
  )
}

export default HeaderSocials
