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
        <img src="/images/quote_new.png" alt="" />
        <p
          sx={{
            variant: 'text.lg',
            padding: ['3rem', null, null, '2.5rem'],
          }}
        >
          I can’t say enough good things about Rejoice Fertility. We feel right at home here & trust
          Dr.Gordon and his team fully. Dr.Gordon has been so informative, and helped guide us through
          each step and what we need to do next. Nurse Brittany always answers my hundreds of questions.
          All of the nurses and embryologists are SO kind. 
        </p>
        <p
          sx={{
            variant: 'text.normal',
            mt: '1rem',
          }}
        >
          — Kelsey H.
        </p>
      </div>
    </section>
  );
};
export default QuoteSection;
