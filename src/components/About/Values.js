/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';

const Values = () => {
  const values = [
    {
      title: 'Holistic Treatment & Care',
      image: '/images/holistic.png',
      description:
        'We believe in a personalized, patient centered approach, asking for input from our patients so that treatment decisions can be guided by their physical, emotional, spiritual, and certainly financial concerns.',
    },
    {
      title: 'Integrity',
      image: '/images/integrity.png',
      description:
        'We provide a multidisciplinary approach to treatment and adhere to the highest standards of professionalism, ethics and personal   responsibility, worthy of the trust our patients place in us.',
    },
    {
      title: 'Life-affirming',
      image: '/images/affirming.png',
      description:
        'We believe in the sanctity of life and that each life created, whether naturally or through the use of reproductive technology, is unique and special.',
    },
    {
      title: 'Respect',
      image: '/images/respect.png',
      description: 'We treat all patients with respect and dignity.',
    },
  ];
  return (
    <section
      sx={{
        bg: '#343753',
        py: '4rem',
        img: {
          background: '#97C4B8',
          borderRadius: '10px',
          width: '2.75rem',
          height: '2.75rem',
          padding: '4px',
          mb: '2rem',
        },
      }}
    >
      <div sx={{}}>
        <h2
          sx={{
            color: '#343753',
            fontWeight: 600,
            // fontSize: '36px',
            variant: 'text.xl',
            color: '#FFFFFF',
            textAlign: 'center',
            pb: ['2rem', null, null, '1rem'],
          }}
        >
          Our Values
        </h2>
      </div>
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.25rem',
          maxWidth: '1400px',
          margin: 'auto',
          padding: '2rem',
          p: {
            color: '#667085',
            variant: 'text.xs',
            fontWeight: '400',
          },
          h3: {
            color: '#343753',
            mb: '1rem',
            variant: 'text.normal',
          },
        }}
      >
        {values.map((value) => (
          <div
            sx={{
              flex: ['1 0 100%', null, '1 0 calc(50% - 1%)', '1 0 calc(25% - 1rem)'],
              maxWidth: ['100%', null, 'calc(50% - 1rem)', 'calc(25% - 1rem)'],
              flexWrap: 'wrap',
              p: '2rem',
              overflow: 'hidden',
              background: '#F9FAFB',
              borderRadius: '10px',
            }}
          >
            <img src={value.image} alt="" />
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
