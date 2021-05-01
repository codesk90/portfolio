import { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Works from './components/pages/Works';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Works />
    </Fragment>
  );
}

export default App;
