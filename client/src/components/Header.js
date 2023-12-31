import React, { useState, useEffect } from 'react';
import MenuItems from './MenuItems';
import './Header.css';
import { Link } from 'react-router-dom';
import logo_icon from '../images/logo_icon.png';
import logo_iconGreen from '../images/logo_iconGreen.png';
import { IoCloseSharp } from 'react-icons/io5';

const Header = ({ refs, handleLogoClick }) => {
  const [open, setOpen] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const [logoSrc, setLogoSrc] = useState(logo_icon);
  const [bgColor, setBgColor] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleLogoHover = () => {
    if (prevScroll !== 0) {
      setVisible(true);
      setBgColor(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const menuText = document.querySelector('.menu-text');
      if (!open) {
        if (currentScrollPos > prevScroll) {
          setVisible(false);
          setLogoSrc(logo_iconGreen);
          setBgColor(false);
          menuText.classList.add('color');
        } else {
          setVisible(true);
          setLogoSrc(currentScrollPos === 0 ? logo_icon : logo_iconGreen);
          setBgColor(currentScrollPos === 0 ? false : true);
          currentScrollPos === 0
            ? menuText.classList.remove('color')
            : menuText.classList.add('color');
        }
      } else {
        setLogoSrc(logo_icon);
      }

      setPrevScroll(currentScrollPos);
    };

    const handleTouchMove = () => {
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [prevScroll, open]);

  return (
    <div className="header">
      <div className="logo-icon-wrapper" onClick={handleLogoClick}>
        <Link className="title" to="/">
          <img
            className="logo-icon"
            src={logoSrc}
            alt="Logo"
            onMouseEnter={handleLogoHover}
          />
        </Link>
      </div>
      <div className="menu-text-wrapper" onClick={handleToggle}>
        <h4 className={`menu-text ${bgColor && 'color'}`}>Menu</h4>
      </div>
      <div className={`bg-color ${bgColor ? 'visible' : 'hidden'}`}></div>
      <div className={`header-inner ${visible ? 'visible' : 'hidden'}`}>
        <div className="logo-text-wrapper" onClick={handleLogoClick}>
          <Link className="title" to="/">
            <span className={`logo-text ${bgColor && 'color'}`}>YOSEMITE</span>
          </Link>
        </div>
        <div className="menu">
          <ul className={`menu-horizontal`}>
            <MenuItems
              active={`horizontal ${bgColor ? 'green' : 'white'}`}
              refs={refs}
            />
          </ul>
          {open ? (
            <IoCloseSharp className="close-icon" onClick={handleToggle} />
          ) : null}
          <ul
            className={`menu-vertical ${open ? 'open' : ''}`}
            onClick={handleToggle}>
            <MenuItems active="vertical" refs={refs} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
