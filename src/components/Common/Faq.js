/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

const Faq = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div sx={{ width: '100%', mx: 'auto' }}>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          alignItems: 'center',
          cursor: 'pointer',
          bg: '#fff',
          color: '#666',
          p: '1.25rem',
          borderRadius: '0.25rem 0.25rem 0 0',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        onKeyDown={() => {
          setIsOpen((prev) => !prev);
        }}
        role="button"
        tabIndex={data.index}
      >
        <div sx={{ display: 'flex', gap: '1rem' }}>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h4
              sx={{
                color: 'black',
                fontWeight: 500,
                variant: 'text.lg',
              }}
            >
              {data.question}
            </h4>
          </div>
        </div>
        <div>{isOpen ? <FiMinusCircle /> : <FiPlusCircle />}</div>
      </div>
      <div
        sx={{
          pt: '0.5rem',
          px: '2.5rem',
          bg: '#fff',
          color: 'black',
          borderRadius: '0 0 0.25rem 0.25rem',
          variant: 'text.normal',
          li: {
            pl: '7px',
          },
        }}
      >
        {isOpen
          ? data.answer && (
              <div
                sx={{
                  fontWeight: 400,
                  pb: '1rem',
                  p: {
                    mb: '0rem',
                  },
                  ul: {
                    mb: '0rem'
                  },
                  a: {
                    color: '#2E6D6A',
                  },
                }}
                dangerouslySetInnerHTML={{ __html: data.answer }}
              />
            )
          : null}
      </div>
    </div>
  );
};

export default Faq;
