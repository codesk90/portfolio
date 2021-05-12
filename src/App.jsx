import About from './components/pages/About';
import Works from './components/pages/work/Works';
import Layout from './components/layout/Layout';
import Contact from './components/pages/Contact';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Layout>
        <About />
        <Works />
        <Contact />
      </Layout>
    </Fragment>
  );
}

export default App;
