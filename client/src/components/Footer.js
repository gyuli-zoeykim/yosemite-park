import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo_textGreen from '../images/logo_textGreen.png';

const Footer = ({ handleLogoClick }) => {
  return (
    <div className="footer">
      <div className="horizontal-line"></div>
      <div className="footer-wrapper-container">
        <div className="column mobile">
          <Link className="column-logo link effect" onClick={handleLogoClick}>
            <img src={logo_textGreen} alt="text" />
          </Link>
        </div>
        <div className="footer-wrapper">
          <div className="column desktop">
            <Link className="column-logo link effect" onClick={handleLogoClick}>
              <img src={logo_textGreen} alt="text" />
            </Link>
          </div>
          <div className="column">
            <a
              className="column-title link effect"
              href="https://www.google.com/maps/dir/Current+Location/9035+Village+Dr,+Yosemite+Valley,+CA+95389"
              target="_blank"
              rel="noopener noreferrer">
              Find Us
            </a>
            <a
              className="column-text link effect"
              href="https://www.google.com/maps/dir/Current+Location/9035+Village+Dr,+Yosemite+Valley,+CA+95389"
              target="_blank"
              rel="noopener noreferrer">
              <div className="address">
                9035 Village Dr
                <br />
                Yosemite Valley
                <br />
                CA 95389
              </div>
            </a>
          </div>
          <div className="column">
            <p className="column-title">Reference</p>
            <div>
              <a
                className="column-text link effect"
                href="https://yosemite.org/"
                target="_blank"
                rel="noopener noreferrer">
                Yosemite
              </a>
            </div>
            <div>
              <a
                className="column-text link effect"
                href="https://unsplash.com/s/photos/yosemite-national-park?orientation=landscape"
                target="_blank"
                rel="noopener noreferrer">
                Unsplash
              </a>
            </div>
            <div>
              <a
                className="column-text link effect"
                href="https://siteinspire.com/websites/11566-actionist-consulting-group"
                target="_blank"
                rel="noopener noreferrer">
                Siteinspire
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
