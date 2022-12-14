import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'

const Header = () => {
  return (
    <div className='header-container'>
      <div className="header-content">
        <div className="header-heading">
          <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
        </div>
        <div className="header-description">
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>
        <div className="header-form">
          <form>
            <input type="email" className="header-form-input" placeholder="Your Email Address"/>
            <button type='button'>Get Started</button>
          </form>
        </div>
        <div className='header-signup'>
          <img src={people} alt='people' />
          <p>1.6000 people requested access to visit in the last 24 hours</p>
        </div>
      </div>
      <div className="header-illustration">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header