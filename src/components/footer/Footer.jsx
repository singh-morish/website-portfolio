import React from 'react'
import "./Footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
import {FiInstagram} from "react-icons/fi"
const Footer = () => {
  return (
    <footer>
      <a href="#1" className='footer_logo'>EGATOR</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#expereince">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testomonials">Testomonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com"><FaFacebookF/></a>
        <a href="http://twitter.com"><FaXTwitter/></a>
        <a href="http://instagram.com"><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer