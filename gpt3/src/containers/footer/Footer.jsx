import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer-container'>
      <h2 className='gradient'>Do you want to step in to the future before others</h2>
      <div className='btn'>

      </div>
      <div className='footer-content'>
        <div className="logo">
          <img src={logo} alt='logo' />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="links">
          <h3>Links</h3>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="company">
          <h3>Company</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
          </div>
        <div className="getInTouch">
          <h3>Get in touch</h3>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <h6>© 2021 GPT-3. All rights reserved.</h6>
    </div>
  )
}

export default Footer