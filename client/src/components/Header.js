import React, { useState } from 'react';
import MenuItems from './MenuItems';
import './Header.css';
import { Link } from 'react-router-dom';
import logo_icon from '../images/logo_icon.png';
import logo_text from '../images/logo_text.png';
import { IoCloseSharp } from 'react-icons/io5';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="header">
      <div className="header-inner">
        <div className="logo">
          <Link className="title" to="/">
            <img className="logo-icon" src={logo_icon} alt="Logo" />
            <img className="logo-text" src={logo_text} alt="Logo" />
          </Link>
        </div>
        <div className="menu">
          <ul className="menu-horizontal">
            <MenuItems active="horizontal" />
          </ul>
          <div className="menu-icon" onClick={handleToggle}>
            <h4>Menu</h4>
          </div>
          {open ? (
            <div className="icon-panel">
              <Link className="title" to="/">
                <img className="logo-icon" src={logo_icon} alt="Logo" />
              </Link>
              <IoCloseSharp className="close-icon" onClick={handleToggle} />
            </div>
          ) : null}
          <ul
            className={`menu-vertical ${open ? 'open' : ''}`}
            onClick={handleToggle}>
            <MenuItems active="vertical" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
