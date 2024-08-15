/** @jsx jsx */
import { jsx } from 'theme-ui';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KXH3QS6T"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <div id="modal"></div>
    </div>
  );
};

export default Layout;
