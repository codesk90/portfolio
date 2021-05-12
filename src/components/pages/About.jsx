import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Element, Link } from 'react-scroll';
import './styles.scss';

const About = () => {
  const [icon, setIcon] = useState(false);

  return (
    <Element name="about" id="about">
      <div className="container">
        <div className="wrapper">
          <h1>Sun M Kim</h1>
          <p>Front End Developer</p>
        </div>
        <div className="work-button" onMouseEnter={() => <FaArrowDown />}>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Works
            {icon}
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default About;
