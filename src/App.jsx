import Home from './components/pages/Home';
import Works from './components/pages/work/Works';
import Layout from './components/layout/Layout';
import Contact from './components/pages/Contact';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Layout>
        <Home />
        <Works />
        <Contact />
      </Layout>
    </Fragment>
  );
}

export default App;
