/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { Link } from 'gatsby';

const Doctors = () => {
  return (
    <section
      sx={{
        bg: '#47E4E0',
        px: ['1rem', null, null, '3.75rem'],
        py: '3rem',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: '2rem',
          flexWrap: 'wrap',
          maxWidth: '1400px',
          mx: 'auto',
          px: '2rem',
        }}
      >
        <div
          sx={{
            flex: ['1 0 100%', null, '1 0 calc(40% - 1rem)'],
            maxWidth: ['100%', null, '1 0 calc(40% - 1rem) '],
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <h3
            sx={{
              fontWeight: 600,
              variant: 'text.xl',
              mb: '1rem',
            }}
          >
            Our Doctors
          </h3>
          <p
            sx={{
              fontWeight: 400,
              variant: 'text.normal',
            }}
          >
            Dr. John Gordon leads our caring, committed team.
          </p>
        </div>
        <div
          sx={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
            maxWidth: ['100%', null, 'calc(50% - 1rem) '],
            justifyContent: ['center', null, null, 'end'],
            '.doctor-container': {
              flex: ['1 0 auto', null, '1 0 calc(50% - 1rem)'],
              maxWidth: ['100%', null, 'calc(50% - 1rem) '],
              position: 'relative',
            },
            img: {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              maxHeight: '360px',
            },
            '.member-info-container': {
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              margin: '20px 16px',
              background: 'rgba(255, 255, 255, 0.3)',
              border: ' 1px solid rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(12px)',
              color: '#666',
              padding: '0.5rem',
              h4: {
                width: '100%',
                fontSize: '1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '0.25rem',
              },
              p: {
                fontSize: '0.875rem',
              },
            },
          }}
        >
          <div className="doctor-container">
            <img src="/images/gordon.jpg" alt="" />
            <div className="member-info-container">
              <h4>
                Dr. John Gordon
              </h4>
              <p>M.D.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
