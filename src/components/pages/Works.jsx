import { Box } from '@theme-ui/components';
import { Element } from 'react-scroll';

const Works = () => {
  return (
    <Element name="works" id="Works">
      <Box sx={styles.container}>
        <h1>This is all about work</h1>
      </Box>
    </Element>
  );
};

export default Works;

const styles = {
  container: {
    height: '100vh',
  },
};
