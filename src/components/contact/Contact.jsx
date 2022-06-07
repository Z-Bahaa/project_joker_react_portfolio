import './contact.css'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'


const Contact = () => {
  
  return (
    <div className="section" id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <div className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>zizobahaapersonal@gmail.com</h5>
            <a href="mailto:zizobahaapersonal@gmail.com">Send a message</a>
          </div>

          <div className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Zizo Bahaa</h5>
            <a href="https://m.me/100071918118359">Send a message</a>
          </div>
          <div className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+201020730202</h5>
            <a href="https://api.whatsapp.com/send?phone=201020730202" >Send a message</a>
          </div>

        </div>

{        <form 
          // ref={form} 
          // onSubmit={sendEmail}
          >
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" placeholder="Your Message" rows="7" required/>
          <button type="submit" className="btn btn-primary">send Message</button>
        </form>}
      </div>
    </div>
  )
}

export default Contact
