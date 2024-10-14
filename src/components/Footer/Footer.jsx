import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi sapiente, eligendi aliquid eaque nemo alias quam deserunt saepe. Atque at illum, assumenda error soluta unde similique! Vero, velit! Cum?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Nom company</h2>
                <li>Acceuil</li>
                <li>A propos</li>
             
            </div>
            <div className="footer-content-right">
                <h2>Nous contacter</h2>
                <ul>
                    <li>+264-34-01-234-56</li>
                    <li>contact@bijoux.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 Bijoux-Boutique.com - Tout droit réservé</p>
    </div>
  )
}

export default Footer
