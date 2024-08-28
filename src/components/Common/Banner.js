/** @jsx jsx */
import { jsx } from 'theme-ui';
import { React, useEffect } from 'react';
import { Link } from 'gatsby';

const Banner = ({
  title,
  ctaPrimary = 'Request Appointment',
  ctaSecondary = 'Request Free Consultation',
  ctaPrimaryLink = '/contact-us',
  ctaSecondaryLink = '/free-consultations',
  description,
  image,
}) => {
  return (
    <header
      sx={{
        background: '#47E4E0',
      }}
    >
      <div
        sx={{
          maxWidth: '1920px',
          mx: 'auto',
          minHeight: '100px',
          display: 'flex',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          height: '100%',
          position: 'relative',
        }}
      >
        <div
          x={{
            flex: ['1 0 100%', null, '1 0 50%'],
            maxWidth: ['100%', null, '50%'],
            position: 'relative',
            minHeight: ['100%', null, '100px'],
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            px: ['1rem', null, '3rem'],
            py: ['1rem', null, '3rem'],
            justifyContent: 'center',
            alignItems: ['center', null, 'initial'],
          }}
        >
          <h1
            sx={{
              variant: 'text.xxl',
              lineHeight: 1.15,
              color: '#FFFFFF',
              textAlign: ['center', null, 'left'],
              maxWidth: '600px',
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              sx={{
                variant: 'text.normal',
                lineHeight: '1.5',
                letterSpacing: '0.09em',
                color: '#FFFFFF',
                textAlign: ['center', null, 'left'],
                maxWidth: '600px',
              }}
            >
              {description}
            </p>
          )}{' '}
          <div
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: ['center', null, 'start'],
              a: {
                px: '1.5rem',
                py: '1rem',
                display: 'inline-block',
                variant: 'text.xs',
                borderRadius: '8px',
                minWidth: '200px',
                textAlign: 'center',
                transition: 'all 0.3s',
              },
            }}
          >
            {ctaPrimary &&
              (ctaPrimaryLink[0] !== '#' ? (
                <Link
                  to={ctaPrimaryLink}
                  sx={{
                    background: '#343753',
                    color: '#000',
                    '&:hover': {
                      opacity: 0.75,
                    },
                  }}
                  title={ctaPrimary}
                >
                  {ctaPrimary}
                </Link>
              ) : (
                <a
                  href={ctaPrimaryLink}
                  sx={{
                    background: '#343753',
                    color: '#000',
                    '&:hover': {
                      opacity: 0.75,
                    },
                  }}
                  title={ctaPrimary}
                >
                  {ctaPrimary}
                </a>
              ))}
            {ctaSecondary &&
              (ctaSecondaryLink[0] !== '#' ? (
                <Link
                  to={ctaSecondaryLink}
                  sx={{
                    color: ' #FFFFFF',
                    border: '1px solid #fff',
                    '&:hover': {
                      color: '#47E4E0',
                      borderColor: '#47E4E0',
                    },
                  }}
                  title={ctaSecondary}
                >
                  {ctaSecondary}
                </Link>
              ) : (
                <a
                  href={ctaSecondaryLink}
                  sx={{
                    color: ' #FFFFFF',
                    border: '1px solid #fff',
                    '&:hover': {
                      color: '#47E4E0',
                      borderColor: '#47E4E0',
                    },
                  }}
                  title={ctaSecondary}
                >
                  {ctaSecondary}
                </a>
              ))}
        </div>
        <div
          sx={{
            flex: ['1 0 100%', null, '1 0 50%'],
            maxWidth: ['100%', null, '50%'],
            position: 'relative',
            minHeight: ['100%', null, '100px'],
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            px: ['1rem', null, '3rem'],
            py: ['1rem', null, '3rem'],
            justifyContent: 'center',
            alignItems: ['center', null, 'initial'],
          }}
        >
          <h1
            sx={{
              variant: 'text.xxl',
              lineHeight: 1.15,
              color: '#FFFFFF',
              textAlign: ['center', null, 'left'],
              maxWidth: '600px',
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              sx={{
                variant: 'text.normal',
                lineHeight: '1.5',
                letterSpacing: '0.09em',
                color: '#FFFFFF',
                textAlign: ['center', null, 'left'],
                maxWidth: '600px',
              }}
            >
              {description}
            </p>
          )}{' '}
          <div
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: ['center', null, 'start'],
              a: {
                px: '1.5rem',
                py: '1rem',
                display: 'inline-block',
                variant: 'text.xs',
                borderRadius: '8px',
                minWidth: '200px',
                textAlign: 'center',
                transition: 'all 0.3s',
              },
            }}
          >
            {ctaPrimary &&
              (ctaPrimaryLink[0] !== '#' ? (
                <Link
                  to={ctaPrimaryLink}
                  sx={{
                    background: '#343753',
                    color: '#000',
                    '&:hover': {
                      opacity: 0.75,
                    },
                  }}
                  title={ctaPrimary}
                >
                  {ctaPrimary}
                </Link>
              ) : (
                <a
                  href={ctaPrimaryLink}
                  sx={{
                    background: '#343753',
                    color: '#000',
                    '&:hover': {
                      opacity: 0.75,
                    },
                  }}
                  title={ctaPrimary}
                >
                  {ctaPrimary}
                </a>
              ))}
            {ctaSecondary &&
              (ctaSecondaryLink[0] !== '#' ? (
                <Link
                  to={ctaSecondaryLink}
                  sx={{
                    color: ' #FFFFFF',
                    border: '1px solid #fff',
                    '&:hover': {
                      color: '#47E4E0',
                      borderColor: '#47E4E0',
                    },
                  }}
                  title={ctaSecondary}
                >
                  {ctaSecondary}
                </Link>
              ) : (
                <a
                  href={ctaSecondaryLink}
                  sx={{
                    color: ' #FFFFFF',
                    border: '1px solid #fff',
                    '&:hover': {
                      color: '#47E4E0',
                      borderColor: '#47E4E0',
                    },
                  }}
                  title={ctaSecondary}
                >
                  {ctaSecondary}
                </a>
              ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
