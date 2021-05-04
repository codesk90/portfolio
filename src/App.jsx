import About from './components/pages/About';
import Works from './components/pages/Works';
import Layout from './components/layout/Layout';
import { Box } from '@theme-ui/components';
import Home from './components/pages/Home';

function App() {
  return (
    <Box as="div" sx={styles.layout}>
      <Layout>
        <Home />
        <About />
        <Works />
      </Layout>
    </Box>
  );
}

export default App;

const styles = {
  layout: {
    maxWidth: '1920px',
    mx: 'auto',
    p: '2em',
  },
};
