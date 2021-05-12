import React from 'react';
import { Link } from 'react-scroll';
import { navItems } from './navbar.data';
import './header.scss';

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="title">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            SK
          </Link>
        </div>
        <div className="linkContainer">
          {navItems.map((navItem, i) => (
            <Link
              activeClass="active"
              to={navItem.path}
              spy={true}
              smooth={true}
              offset={navItem.offset}
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
