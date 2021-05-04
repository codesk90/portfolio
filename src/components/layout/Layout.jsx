import { Fragment } from 'react';
import Header from './header/Header';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main id="Content">{children}</main>
    </Fragment>
  );
};

export default Layout;
