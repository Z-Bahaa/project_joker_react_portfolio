import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai'
import { BiBookAlt } from 'react-icons/bi'
import { BsBagDash } from 'react-icons/bs'
import { useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNAv] = useState('#')
  return (
    <div className="nav">
      <a href="#home" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNAv('#')}><AiOutlineHome /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNAv('#about')}><AiOutlineUser /></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNAv('#experience')}><BiBookAlt /></a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNAv('#services')}><BsBagDash /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNAv('#contact')}><AiOutlineMessage /></a>
    </div>
  )
}

export default Nav
