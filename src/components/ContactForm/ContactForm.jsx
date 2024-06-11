
import { Link } from 'react-router-dom'
import './ContactForm.css'
import logo from '../../assets/Component 4.png'
export default function ContactForm() {
  return (
    <div className="signIn-Grid">
   

      <div className="form-div">
       

        <div className="sign">
        <img src={logo} alt=""  className='LOGO'/>
          <form className="signin-form">
            <div>
              <label htmlFor="email">adresse mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />

              <label htmlFor="Message">Message</label>
              <textarea
                type="text"
                id="Message"
                name="Message"
                placeholder="Ecrie votre Message"
                required

              />
            </div>

            <Link to="/WorkSpace">
              <button className="btn-start">Envoyer</button>
            </Link>
          </form>

          <span></span>
         
        </div>
      </div>
    </div>
  )
}
