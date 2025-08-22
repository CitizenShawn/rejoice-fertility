/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { Link } from 'gatsby';

const Location = () => {
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
            Our Location - <a href='https://www.google.com/maps/place/11132+Kingston+Pike,+Farragut,+TN+37934/@35.8858771,-84.1520417,17z/data=!3m1!4b1!4m6!3m5!1s0x885c2f6ec7e3bf6d:0x8f4567ff95a2e5be!8m2!3d35.8858728!4d-84.1494668!16s%2Fg%2F11vr9xg416?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D'>11132 Kingston Pike Knoxville, TN 37934</a>
          </h3>
          <p
            sx={{
              fontWeight: 400,
              variant: 'text.normal',
            }}
          >
            Rejoice Fertility is located in a brand-new state-of-the-art nearly 10,000 square feet facility in Farragut, TN that provides a warm and welcoming atmosphere for all our patients. The office was designed and built by Dr. Gordon drawing on inspiration from the natural beauty found here in East Tennessee. We can handle a large volume of fertility procedures and with the safety of our patients in mind (including the frozen embryos under our care), the new IVF laboratory at Rejoice has an advanced monitoring system for our cryostorage tanks. This novel system (Cryo-Sentinel) uses infrared imaging to detect early temperature changes in the embryo storage tanks alerting the staff to an issue before it is too late to correct an issue and save the embryos from a catastrophic event.
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
            <img src="/images/RejoiceOutside.jpg" alt="" />
            <div className="member-info-container">
              <h4>
                Our Location
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
