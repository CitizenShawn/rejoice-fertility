/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer
      sx={{
        bg: '#343753',
        px: ['1rem', null, null, '0px'],
        pt: ['3rem', null, null, '0px'],
      }}
    >
      <div
        sx={{
          // flex: ['1 0 100%', null, '1 0 calc(25% - 1rem)'],
          // flexWrap: 'wrap',
          maxWidth: '1400px',
          margin: 'auto',
          display: 'flex',
          flexDirection: ['column', null, null, 'row'],
          color: '#FFFFFF',
          justifyContent: 'space-between',
          padding: ['0px', null, null, '48px'],
          borderBottom: '1px solid #FFFFFF',
          a: {
            color: '#FFFFFF',
            textAlign: ['center', null, null, 'left'],
            '&:hover': {
              color: '#47E4E0',
            },
          },
        }}
      >
        <div
          sx={{
            // flex: ['1 0 100%', null, '1 0 calc(25% - 1rem)'],
            // flexWrap: 'wrap',
            maxWidth: ['304px', null, null, 'none'],
            marginBottom: ['3rem', null, null, '0rem'],
          }}
        >
          <img src="/images/Rejoice-Logo-no-slogan.png" width="224px" alt="" />
        </div>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: ['3rem', null, null, '0rem'],
            // flex: ['1 0 100%', null, '1 0 calc(25% - 1rem)'],
            // flexWrap: 'wrap',
            a: {
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: ['center', null, null, 'flex-start'],
              gap: '8px',
              '&:hover': {
                color: '#47E4E0',
              },
            },
          }}
        >
          <a href="https://www.google.com/maps/place/11132+Kingston+Pike,+Farragut,+TN+37934/@35.8858771,-84.1520417,17z/data=!3m1!4b1!4m6!3m5!1s0x885c2f6ec7e3bf6d:0x8f4567ff95a2e5be!8m2!3d35.8858728!4d-84.1494668!16s%2Fg%2F11vr9xg416?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D">
            <FaMapMarkerAlt /> 11132 Kingston Pike Knoxville, TN
            <br /> 37934
          </a>
          <a href="tel:8657770088">
            <FaPhone /> 865.777.0088
          </a>
          <a href="tel:8657772015">
            Fax: 865.777.0088
          </a>
        </div>

        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            marginBottom: ['0.75rem', null, null, '0rem'],
            // flex: ['1 0 100%', null, '1 0 calc(25% - 1rem)'],
            // flexWrap: 'wrap',
          }}
        >
          <Link to="/about-us">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/free-consultations">Free consultation</Link>
        </div>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            marginBottom: ['2rem', null, null, '0rem'],
          }}
        >
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>

      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', null, null, 'row'],
          gap: '16px',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: ['0', null, null, 'auto'],
          p: ['1.5rem', null, null, '2rem'],
          // flex: ['1 0 100%', null, '1 0 calc(25% - 1rem)'],
          // flexWrap: 'wrap',
        }}
      >
        <p
          sx={{
            color: '#FFFFFF',
          }}
        >
          © 2024 Rejoice Fertility. All rights reserved.
        </p>
        <div
          sx={{
            display: 'flex',
            gap: '16px',
            variant: 'text.normal',
            a: {
              color: '#FFFFFF',
              '&:hover': {
                color: '#47E4E0',
              },
            },
          }}
        >
          <a
            href="https://twitter.com/RejoiceIVF"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/RejoiceFertility/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on Facebook"
          >
            <FaFacebook />
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
            title="Follow us on Youtube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
