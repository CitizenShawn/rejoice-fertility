/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import {
  FaBars,
  FaInstagram,
  FaTimes,
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaChevronDown,
} from 'react-icons/fa';

const Navbar = () => {
  const menuItems = [
    {
      name: 'About Us',
      slug: '/about-us',
      items: [
        {
          name: 'Contact Us',
          slug: '/contact-us',
        },
      ],
    },
    {
      name: 'Services',
      slug: '/services',
      items: [
        {
          name: 'Diagnosis & Testing',
          slug: '/services/diagnosis-and-testing',
        },
        {
          name: 'Fertility Treatment : Non-IVF',
          slug: '/services/fertility-treatment-and-non-ivf',
        },
        {
          name: 'IVF',
          slug: '/services/ivf',
        },
        {
          name: 'Embryo Adoption',
          slug: '/services/embryo-adoption',
        },
      ],
    },
    {
      name: 'Free Consultations',
      slug: '/free-consultations',
    },
    {
      name: 'Pricing',
      slug: '/pricing',
    },
    {
      name: 'Out-of-Town Patients',
      slug: '/out-of-town-patients',
    },
    {
      name: 'Blog',
      slug: '/blog',
    },
  ];

  const [mobile, setMobile] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);
  const [width, setWidth] = useState(0);

  /**
   * Updates width when resized for responsiveness of menu item
   */
  const updateWidth = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
    setMenuVisible(false);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    if (width <= 1366) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  return (
    <>
      <nav
        sx={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
          bg: '#fff',
        }}
      >
        {/* <div sx={{
          maxWidth: '1400px',
          mx: 'auto',
          textAlign: 'end',
          fontSize: ['12px', null, null, '16px'],
          p: ['10px', null, null, '12px'],
          fontWeight: '500',
          bg: '#fff',
          color: '#343754',
          borderRadius: '4px',
          a: {
            textDecoration: 'underline',
          },
          'a:hover': {
            textDecoration: 'none',
          }
        }}> <a sx={{ color: '#666' }} href='https://southeasternfertility.org/FINAL-V2-out-of-town-patients.pdf'> Information for out-of-town patients</a>
        </div> */}
        <div
          class="dualcol-test"
          /*sx={{
            color: '#343754',
            bg: '#97C4B8',
            px: '1rem',
            a: {
              color: '#343753',
              fontWeight: '700',
            },
          }}*/
        >
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
              gap: '0.25rem',
              maxWidth: ' 1400px',
              margin: 'auto',
              height: '50px',
              a: {
                color: '#343753',
                p: '0.75rem 0.5rem',
                cursor: 'pointer',

                '&:hover': {
                  color: '#FFFFFF',
                },
              },
            }}
          >
            <a
              href="https://www.facebook.com/RejoiceFertility/"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/RejoiceIVF"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/rejoiceivf/"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@rejoicefertility"
              target="_blank"
              rel="noopener noreferrer"
              title="Watch us on Youtube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div
          sx={{
            maxWidth: ' 1400px',
            mx: 'auto',
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            px: '2rem',
          }}
        >
          <div sx={{ py: '1rem', flexShrink: '1' }}>
            <Link to="/" sx={{ minWidth: '100px', display: 'block' }} title={'Home'}>
              <img src="/images/with-logo.png" alt="" width="194px" />
            </Link>
          </div>
          <div
            sx={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'center',
              a: {
                color: '#666',
                variant: 'text.xs',
                fontWeight: '500',
                padding: '0.75rem 0.5rem',
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center',
                justifyContent: 'center',
              },
              'a:hover': {
                color: '#343753',
              },
            }}
          >
            {!mobile &&
              menuItems.map((menuItem) => (
                <div
                  key={menuItem.name}
                  sx={{
                    position: 'relative',
                    'div a': {
                      display: 'none',
                    },
                    '&:hover': {
                      div: {
                        top: '100%',
                        position: 'absolute',
                        pt: '1rem',
                      },
                      'div a': {
                        background: '#fff',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        minWidth: '250px',
                      },
                    },
                  }}
                >
                  <Link key={menuItem.slug} to={menuItem.slug} title={menuItem.name}>
                    {menuItem.name}
                    {menuItem?.items && <FaChevronDown />}
                  </Link>

                  {menuItem?.items && (
                    <div className="menuItems">
                      {menuItem.items.map((item) => (
                        <Link key={item.slug} to={item.slug} title={item.name}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            {mobile && (
              <button
                sx={{
                  all: 'unset',
                  p: '0.5rem',
                  cursor: 'pointer',
                }}
                aria-haspopup="true"
                aria-controls="mobile-menu"
                aria-expanded={menuVisible ? 'false' : 'true'}
                onClick={() => setMenuVisible((prev) => !prev)}
              >
                {menuVisible ? <FaTimes /> : <FaBars />}
              </button>
            )}
          </div>
        </div>
        {menuVisible && (
          <div
            id="mobile-menu"
            aria-expanded={menuVisible ? 'true' : 'false'}
            sx={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              bg: '#fff',
              zIndex: '999',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: '2rem',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                a: {
                  color: '#666',
                  variant: 'text.normal',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                'a:hover': {
                  color: '#4B938EE5',
                },
              }}
            >
              {menuItems.map((menuItem) => (
                <div
                  key={menuItem.name}
                  sx={{
                    position: 'relative',

                    'div a': {
                      display: 'flex',
                      justifyContent: 'center',
                      textAlign: 'center',
                      minWidth: '250px',
                    },
                  }}
                >
                  <Link
                    aria-role="menuitem"
                    key={menuItem.slug}
                    to={menuItem.slug}
                    title={menuItem.name}
                  >
                    {menuItem.name}
                  </Link>

                  {menuItem?.items && (
                    <div>
                      {menuItem.items.map((item) => (
                        <Link aria-role="menuitem" key={item.slug} to={item.slug} title={item.name}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
