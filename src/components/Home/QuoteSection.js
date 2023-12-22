/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import * as React from 'react';

const QuoteSection = () => {
  return (
    <section>
      <div
        sx={{
          bg: ['#1D2939', null, null, '#343753'],
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          //padding: '96px',
          //padding: ['2rem', null, null, '96px']
          py: ['3rem', null, null, '96px'],
          px: ['1rem', null, null, '96px'],
        }}
      >
        <img src="/images/quote.png" alt="" />
        <p
          sx={{
            variant: 'text.lg',
            padding: ['3rem', null, null, '2.5rem'],
          }}
        >
          Very Supportive! Dr Keenan and nurse Mari were kind and supportive during this time in our
          journey. We have highly recommended this team to others struggling with fertility.
        </p>
        <p
          sx={{
            variant: 'text.normal',
            mt: '1rem',
          }}
        >
          — Mia S.
        </p>
      </div>
    </section>
  );
};
export default QuoteSection;
