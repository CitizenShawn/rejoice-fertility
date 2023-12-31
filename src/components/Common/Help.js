/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { Link } from 'gatsby';

const Help = () => {
  return (
    <section
      sx={{
        background: '#F9FAFB',
        p: [null, null, null, '2rem'],
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',

          justifyContent: ['center', null, null, 'space-between'],
          gap: '2rem',
          maxWidth: '1400px',
          margin: 'auto',
          py: '4rem',
          px: ['1rem', null, null, '2rem'],
          background: '#F7F2EE',
          borderRadius: '8px',
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: ['center', null, null, 'start'],
            flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
            maxWidth: ['100%', null, '1 0 calc(50% - 1rem) '],
          }}
        >
          <h3
            sx={{
              variant: 'text.xl',
              fontWeight: 600,
            }}
          >
            We're Here to Help
          </h3>
          <p
            sx={{
              color: '#667085',
              variant: 'text.normal',
            }}
          >
            Hope starts with a conversation. Reach out to begin your journey.
          </p>
        </div>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
            maxWidth: ['100%', null, '1 0 calc(50% - 1rem) '],
            gap: '16px',
            alignItems: 'center',
            justifyContent: ['center', null, null, 'end'],
          }}
        >
          <Link
            to="/contact-us"
            sx={{
              color: '#343754',
              background: '#97C4B8',
              boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
              // px: ['96px', null, null, '12px'],
              // py: '20px',
              px: ['1rem', null, null, '1.5rem'],
              py: ['1rem', null, null, '1rem'],
              borderRadius: '8px',

              transition: 'all 0.3s',
              '&:hover': {
                bg: 'white',
              },
            }}
          >
            Request Appointment
          </Link>
          <Link
            to="/free-consultations"
            sx={{
              color: '#343754',
              bg: '#FFFFFF',
              // px: ['80px', null, null, '12px'],
              // py: '20px',
              px: ['1rem', null, null, '1.5rem'],
              py: ['1rem', null, null, '1rem'],
              borderRadius: '8px',
              justifyContent: 'center',
              transition: 'all 0.3s',
              '&:hover': {
                bg: '#97C4B8',
              },
            }}
          >
            Request Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Help;
