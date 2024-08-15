/** @jsx jsx */
import { jsx } from 'theme-ui';
import Faq from './Faq';

const Questions = ({ q }) => {
  return (
    <section
    sx={{
      background: '#47E4E0',
      //backgroundImage: `url('/images/background2.png')`,
      mt: '3rem',
      py: '32px',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      gap: '1rem',
      px: '1rem',
    }}
    >
      <h3
        sx={{
          fontWeight: 600,
          textAlign: 'center',
          variant: 'text.xl',
          color: 'black',
          my: '1.5rem',
        }}
      >
        Questions and Answers
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
        {q.map((item, index) => (
          <Faq data={{ ...item, index }} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Questions;
