import { Box, Container, Flex } from '@theme-ui/components';
import React from 'react';
import { Link } from 'react-scroll';
import { navItems } from './navbar.data';

const Header = () => {
  return (
    <header sx={styles.header} id="Header">
      <Container sx={styles.container}>
        <Box sx={styles.title}>Sun Kim</Box>
        <Flex sx={styles.linkContainer}>
          {navItems.map((navItem, i) => (
            <Link
              activeClass="active"
              to={navItem.path}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              key={i}
            >
              {navItem.label}
            </Link>
          ))}
        </Flex>
      </Container>
    </header>
  );
};

export default Header;

const styles = {
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
    },
  },
};
