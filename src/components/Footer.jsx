import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react';
import './Footer.css';

function Footer() {
  return <div className='footer-container'>
      <div className="footer-left">
          <h1 className='footer-logo'>SHOPPIE.</h1>
          <p className='footer-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className="footer-social">
              <Facebook />
              <Instagram />
              <Twitter />
              <Pinterest />
          </div>
      </div>
      <div className="footer-center">
        <h3>Useful Links</h3>
        <ul className='links-list'>
            <li className='links'>
                Home
            </li>
            <li className='links'>
                Cart
            </li>
            <li className='links'>
                My Account
            </li>
            <li className='links'>
                Order Tracking
            </li>
            <li className='links'>
                Wishlist
            </li>
            <li className='links'>
                Terms of Service
            </li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Contact</h3>
        <div className="address">
            <Room />
            <p>629, Someramdom Address , Some county, Some country</p>
        </div>
        <div className="phone">
            <Phone />
            <p>+1 237 965 4545</p>
        </div>
        <div className="mail">
            <Mail />
            <p>contact@shoppie.com</p>
        </div>
      </div>
  </div>;
}

export default Footer;
