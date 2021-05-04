import { Box, Container, Flex } from '@theme-ui/components';
import React from 'react';
import { Link } from 'react-scroll';
import { navItems } from './navbar.data';
// import './style.css';

const Header = () => {
  return (
    <Box as="header" id="Header" sx={styles.header}>
      <Container sx={styles.container}>
        <Box sx={styles.title}>Sun Kim</Box>
        <Flex sx={styles.linkContainer}>
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
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    p: '2em',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    fontSize: '2em',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    a: {
      fontSize: '1.25em',
      px: '1.5em',
      cursor: 'pointer',
    },
  },
};
