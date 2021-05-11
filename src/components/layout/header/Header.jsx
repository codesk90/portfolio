import React from 'react';
import { Link } from 'react-scroll';
import { navItems } from './navbar.data';
import './styles.scss';

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="title">Sun Kim</div>
        <div className="linkContainer">
          {navItems.map((navItem, i) => (
            <Link
              activeClass="active"
              to={navItem.path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              key={i}
            >
              {navItem.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
