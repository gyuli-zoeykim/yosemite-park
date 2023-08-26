import React from 'react';
import './MenuItems.css';
import { Link } from 'react-router-dom';

const MenuItems = ({ active, refs }) => {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <li
        className={`title ${active}`}
        onClick={() => scrollToSection(refs.who)}>
        <Link className="title" onClick={() => scrollToSection(refs.who)}>
          Who
        </Link>
      </li>
      <li className={active}>
        <Link className="title" onClick={() => scrollToSection(refs.what)}>
          What
        </Link>
      </li>
      <li className={active}>
        <Link className="title" onClick={() => scrollToSection(refs.ourImpact)}>
          Our Impact
        </Link>
      </li>
      <li className={active}>
        <Link className="title" onClick={() => scrollToSection(refs.history)}>
          History
        </Link>
      </li>
      <li className={active}>
        <Link className="title" to="/show">
          Gallery
        </Link>
      </li>
    </>
  );
};

export default MenuItems;
