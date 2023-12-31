/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { FiArrowRight } from 'react-icons/fi';
import * as React from 'react';

const FeaturedSection = () => {
  const data = [
    {
      title: 'HOW can we help?',
      description:
        'Learn more about the services and procedures offered at Rejoice Fertility.',
      icon: '/images/icon1.png',
      link: '/services',
    },
    {
      title: `WHERE do you start?`,
      description:
        'Take your first steps in becoming a patient and find out more about Rejoice Fertility.',
      icon: '/images/icon2.png',
      link: '/getting-started',
    },
    {
      title: 'WHO will take care of you?',
      description:
        'Find out more about the team at Rejoice Fertility and our philosophy of patient care.',
      icon: '/images/icon3.png',
      link: '/about-us',
    },
  ];
  return (
    <section
      sx={
        {
          //pt: '1rem'
        }
      }
    >
      <div
        className="content"
        sx={{
          padding: ['1rem', null, null, '4rem'],
          //maxWidth: ' 1400px',
          margin: 'auto',
          display: 'flex',
        }}
      >
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            gap: '1rem',
            width: '100%',
            letterSpacing: '0.05rem',
            flexWrap: 'wrap',
          }}
        >
          {data.map((item) => (
            <div
              key={item.title}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flex: ['1 0 100%', null, 'calc(33% - 1rem)'],
                maxWidth: ['100%', null, 'calc(33% - 1rem)'],
                flexDirection: 'column',
                //alignItems: 'center',
                bg: '#F7F2ED',
                padding: '1.5rem',
              }}
            >
              <div
                sx={{
                  display: 'flex',
                  width: '64px',
                  height: '64px',
                  background: '#97C4B8',
                  borderRadius: '50px',
                  padding: '0.75rem',
                  mb: '1rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  sx={{
                    width: 'auto',
                    height: '100%',
                  }}
                  src={item.icon}
                  alt=""
                />
              </div>

              <div
                sx={
                  {
                    //maxWidth: "320px",
                  }
                }
              >
                <h3
                  sx={{
                    variant: 'text.normal',
                    fontWeight: '500',
                    mb: '12px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  sx={{
                    variant: 'text.xs',
                    fontWeight: '400',
                    mb: '12px',
                  }}
                >
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  sx={{
                    color: '#0688F6',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    '&:hover': {
                      color: '#343753',
                    },
                  }}
                >
                  Learn more
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
