/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import * as React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const Doctors = () => {
  return (
    <section
      sx={{
        bg: '#61A19E',
        px: ['1rem', null, null, '2rem'],
        py: '3rem',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          maxWidth: '1400px',
          mx: 'auto',
          px: ['0px', null, null, '2rem'],
        }}
      >
        <div
          sx={{
            flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
            maxWidth: ['100%', null, 'calc(50% - 1rem) '],
            gap: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: ['center', null, 'initial'],
            justifyContent: 'center',
            mb: '1rem',
          }}
        >
          <h3
            sx={{
              variant: 'text.xl',
              fontWeight: '600',
            }}
          >
            Our Doctors
          </h3>
          <p
            sx={{
              variant: 'text.normal',
              fontWeight: '400',
              color: 'black',
            }}
          >
            Dr. John David Gordon and Dr. Jeffrey Keenan bring nearly 50 years of combined
            experience caring for patients struggling with reproductive health issues.
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
            a: {
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
          <Link to="/about-us">
            <img src="/images/gordon.jpg" alt="" />
            <div className="member-info-container">
              <h4>
                Dr. John Gordon
                <span>
                  <BsArrowUpRight />
                </span>
              </h4>
              <p>MD</p>
            </div>
          </Link>
          <Link to="/about-us">
            <img src="/images/keenan.jpg" alt="" />
            <div className="member-info-container">
              <h4>
                Dr. Jeffrey Keenan
                <span>
                  <BsArrowUpRight />
                </span>
              </h4>
              <p>MD, HCLD</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
