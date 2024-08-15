/** @jsx jsx */
import { jsx } from 'theme-ui';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div id="modal"></div>
      </div>
  );
};

export default Layout;
