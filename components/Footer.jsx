import React from 'react'
import Image from 'next/image'
import logo from '../src/assets/Logo.png'
import {GrFacebookOption, GrTwitter, GrLinkedinOption} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='logo'>
          {/* <Image src={logo} width={180} height={30} alt='logo' /> */}
          <h1>WhyNaitik</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ullam.</p>
          <div className='icon-container'>
            <div><GrTwitter size={20} /></div>
            <div><GrFacebookOption size={20} /></div>
            <div><GrLinkedinOption size={20} /></div>
          </div>
        </div>

        <div className='footer-links'>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Support</h3>
          <ul>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Contact</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>

      <div className='copyright'>
        <p>Copyright © 2023 Whynaitik</p>
        <p>Design by. <span>Naitik Designs</span></p>
        <p>Code by. <span>WhyNaitik on github</span></p>
      </div>
    </footer>
  )
}

export default Footer