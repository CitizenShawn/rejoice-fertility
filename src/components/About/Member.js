/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Member = ({ data }) => {
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
          p: '1.25rem',
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
              width: '4rem',
              height: '4rem',
              borderRadius: '50%',
              flex: '0 0 4rem',
            }}
          >
            <img
              src={data.image}
              alt=""
              sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </div>
          <div sx={{ display: 'flex', flexDirection: 'column' }}>
            <h4 sx={{ color: '#343753', variant: 'text.normal' }}>{data.name}</h4>
            <p sx={{ mt: '0.5rem', color: '#4D4F60', variant: 'text.xs' }}>{data.position}</p>
          </div>
        </div>
        <div>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
      </div>
      <div
        sx={{
          pl: '6.25rem',
          pt: '0.5rem',
          pr: '2.5rem',
          bg: '#fff',
          color: '#666',
        }}
      >
        {isOpen
          ? data.description && (
              <div
                sx={{
                  pb: '2rem',
                  p: {},
                  a: {
                    color: '#2E6D6A',
                  },
                }}
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            )
          : null}
      </div>
    </div>
  );
};

export default Member;
