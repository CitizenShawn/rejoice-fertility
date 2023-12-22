/** @jsx jsx */
import { jsx } from 'theme-ui';
import Faq from './Faq';

const Faqs = ({ data }) => {
  return (
    <section
      sx={{
        background: '#FFE664',
        py: '32px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: '1rem',
        px: '1rem',
        mt: '0rem',
      }}
    >
      <h3
        sx={{
          fontWeight: 600,
          textAlign: 'center',
          variant: 'text.xl',
          color: '#343753',
          my: '1.5rem',
        }}
      >
        Frequently Asked Questions
      </h3>
      <div
        className="content"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          gap: '1rem',
          width: '100%',
        }}
      >
        {data.map((item, index) => (
          <Faq data={{ ...item, index }} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
