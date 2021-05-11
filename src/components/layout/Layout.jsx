import { Fragment } from 'react';
import Header from './header/Header';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main id="content">{children}</main>
    </Fragment>
  );
};

export default Layout;
