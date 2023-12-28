/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

const Faq = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      sx={{
        width: '100%',
        mx: 'auto',
        borderRadius: '0.25rem 0.25rem 0 0',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        p: '1.25rem',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          alignItems: 'center',
          cursor: 'pointer',
          color: 'black',
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
                  color: 'black',
                  fontWeight: 400,
                  variant: 'text.normal',
                  pb: '1rem',
                  p: {},
                  a: {
                    color: 'black',
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
