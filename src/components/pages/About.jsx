import { Box } from '@theme-ui/components';
import React from 'react';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name="about" id="About">
      <Box sx={styles.container}>
        <Box className="home-content">
          Hi, I'm Sun Kim. <br /> I'm a Front End Developer
        </Box>
      </Box>
    </Element>
  );
};

export default About;

const styles = {
  container: {
    height: '100vh',
  },
};
