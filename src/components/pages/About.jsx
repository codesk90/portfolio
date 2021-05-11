import React from 'react';
import { Element } from 'react-scroll';
import './styles.scss';

const About = () => {
  return (
    <Element name="about" id="about">
      <div className="container">
        <p className="home-content">
          Hi, My name is <span>Sun Kim</span>. <br />
          I'm a Front End Developer, I am a self-taught individual willing to
          learn any new technology. I have built websites from groud-up using
          PSD design
        </p>
      </div>
    </Element>
  );
};

export default About;
