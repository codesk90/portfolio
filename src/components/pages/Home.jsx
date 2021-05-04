import { Box } from '@theme-ui/components';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <Element name="home" id="Home">
      <Box sx={styles.container}>
        <h1>This is Introduction</h1>
      </Box>
    </Element>
  );
};

export default Home;

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // h1: {
    //   textAlign: 'center',
    // },
  },
};
