import { Box } from '@theme-ui/components';
import React from 'react';

const Contact = () => {
  return (
    <Box name="contact" id="Contact" sx={styles.container}>
      <h1>This is contact box</h1>
    </Box>
  );
};

export default Contact;

const styles = {
  container: {
    height: '100vh',
  },
};
