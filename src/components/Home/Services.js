/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { Link } from 'gatsby';

const HowCanWeHelp = () => {
  return (
    <section id="services">
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          py: '5rem',
          flexWrap: 'wrap',
          gap: '2rem',
          maxWidth: '1400px',
          px: '2rem',
          mx: 'auto',
        }}
      >
        <div
          sx={{
            flex: ['1 0 100%', null, '1 0 calc(30% - 1rem)'],
            maxWidth: ['100%', null, '1 0 calc(30% - 1rem) '],
          }}
        >
          <h2
            sx={{
              fontWeight: 600,
              variant: 'text.xl',
              mb: '0.5rem',
            }}
          >
            How Can We Help?
          </h2>
          <p
            sx={{
              fontWeight: 400,
              variant: 'text.normal',
              color: '#4D4F60',
            }}
          >
            Learn more about the options offered at Rejoice Fertility.
          </p>
        </div>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            flex: ['1 0 100%', null, '1 0 calc(70% - 1rem)'],
            maxWidth: ['100%', null, '1 0 calc(70% - 1rem) '],
            gap: '2rem',
            p: {
              my: '1rem',
              textAlign: 'center',
            },
            '.overlay': {
              transition: '.5s ease',
              opacity: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: '#61A19ECC',
            },
            a: {
              maxWidth: '350px',
              variant: 'text.normal',
            },
            'a>div': {
              position: 'relative',
            },
            img: {
              opacity: 1,
              display: 'block',
              width: '100%',
              height: 'auto',
              minHeight: '280px',
              maxHeight: '280px',
              objectFit: 'cover',
              transition: '.5s ease',
              backfaceVisibility: 'hidden',
            },
            'a:hover': {
              img: {
                opacity: '0.3',
              },
              '.overlay': {
                opacity: 1,
              },
              '.link': {
                color: '#343753',
                padding: '16px 32px',
              },
            },
          }}
        >
          <Link to="/services/diagnosis-and-testing">
            <div>
              <img src="/images/diagnosis-image.png" alt="" />
              <div class="overlay">
                <div class="link">learn more</div>
              </div>
            </div>
            <p>Diagnosis & Testing</p>
          </Link>
          <Link to="/services/ivf">
            <div>
              <img src="/images/ivf-image.png" alt="" />{' '}
              <div class="overlay">
                <div class="link">learn more</div>
              </div>{' '}
            </div>
            <p>IVF</p>
          </Link>
          <Link to="/services/fertility-treatment-and-non-ivf">
            <div>
              <img src="/images/fertility-treatment.png" alt="" />{' '}
              <div class="overlay">
                <div class="link">learn more</div>
              </div>{' '}
            </div>
            <p>Fertility Treatment : Non-IVF</p>
          </Link>
          <Link to="/services/embryo-adoption">
            <div>
              <img src="/images/baby.png" alt="" />{' '}
              <div class="overlay">
                <div class="link">learn more</div>
              </div>
            </div>
            <p>Embryo Adoption</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowCanWeHelp;
