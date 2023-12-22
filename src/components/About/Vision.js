/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';

const Vision = () => {
  return (
    <div
      sx={{
        textAlign: 'center',
        my: [null, null, null, '3rem'],
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        px: ['1rem', null, null, '0rem'],
        py: ['3rem', null, null, '0rem'],
      }}
    >
      <h3
        sx={{
          variant: 'text.xl',
          fontWeight: 600,
        }}
      >
        Our Vision
      </h3>
      <p
        sx={{
          fontWeight: 400,
          variant: 'text.normal',
          // fontSize: '20px',
          color: '#667085',
        }}
      >
        To provide comprehensive care and unwavering compassion to patients <br />
        struggling with reproductive health issues.
      </p>
    </div>
  );
};

export default Vision;
