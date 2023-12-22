/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';

const StaffIntro = () => {
  return (
    <div
      sx={{
        maxWidth: '1400px',
        margin: 'auto',
        my: '3rem',
        p: {
          fontWeight: 400,
          variant: 'text.normal',
          color: '#667085',
        },
        gap: '0.75rem',
        px: '2rem',
      }}
    >
      <h3
        sx={{
          color: '#343753',
          fontWeight: 600,
          variant: 'text.xl',
          textAlign: 'center',
          mb: '1rem',
        }}
      >
        Our Staff
      </h3>
      <p
        sx={{
          mb: '1.5rem',
        }}
      >
        Our staff is constantly challenged to provide compassionate and sensitive care, realizing
        that women have many different needs and abilities in complying with their treatment plans.
        We ask you to write out your concerns at each visit, and will provide a written summary of
        instructions for you when you leave if appropriate.
      </p>
      <p>
        While we are a tertiary referral center for the region's general gynecologists, we do not
        require a referral to make an appointment. We do ask that you bring as much of your medical
        record to your initial visit as possible, though. We look forward to serving you and helping
        you achieve your goals!
      </p>
    </div>
  );
};

export default StaffIntro;
