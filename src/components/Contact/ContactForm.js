/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';
import Form from '../Common/Form';

const ContactForm = () => {
  return (
    <section
      sx={{
        display: 'flex',
        gap: '2rem',
        maxWidth: '1400px',
        margin: 'auto',
        padding: ['1rem', null, null, '2rem'],
        my: '3rem',
        flexWrap: 'wrap',
      }}
    >
      <div
        sx={{
          flex: ['1 0 100%', null, null, '1 0 calc(40% - 1rem)'],
          maxWidth: ['100%', null, null, 'calc(40% - 1rem)'],
          flexWrap: 'wrap',
          bg: '#47E4E0',
          padding: ['20px', null, null, '48px'],
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            mb: '2rem',
          }}
        >
          <h3
            sx={{
              variant: 'text.xl',
              fontWeight: '600',
            }}
          >
            Get in touch
          </h3>
          <p
            sx={{
              variant: 'text.normal',
              fontWeight: '400',
            }}
          >
            We’d love to hear from you. Our friendly team is always here to serve.
          </p>
        </div>
        <div
          sx={{
            display: 'flex',
            gap: '1rem',
            mb: '2rem',
            alignItems: 'baseline',
          }}
        >
          <FaEnvelope
            sx={{
              flex: '0 0 1.5rem',
              fontSize: '1.5rem',
            }}
          />
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <h3
              sx={{
                variant: 'text.lg',
                fontWeight: '500',
              }}
            >
              Connect with us
            </h3>
            <p>Our friendly team is here to help.</p>
            <a class="link" href="mailto:taylor@rejoiceivf.com">taylor@rejoiceivf.com</a>
          </div>
        </div>
        <div
          sx={{
            display: 'flex',
            gap: '1rem',
            mb: '2rem',
            alignItems: 'baseline',
          }}
        >
          <FaMapMarkerAlt
            sx={{
              flex: '0 0 1.5rem',
              fontSize: '1.5rem',
            }}
          />
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <h3
              sx={{
                variant: 'text.lg',
                fontWeight: '500',
              }}
            >
              Office
            </h3>
            <p>Come say hello at our office.</p>
            <p>11126 Kingston Pike Knoxville, TN 37934</p>
          </div>
        </div>
        <div
          sx={{
            display: 'flex',
            gap: '1rem',
            mb: '2rem',
            alignItems: 'baseline',
          }}
        >
          <FaPhoneAlt
            sx={{
              flex: '0 0 1.5rem',
              fontSize: '1.5rem',
            }}
          />
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <h3
              sx={{
                variant: 'text.lg',
                fontWeight: '500',
              }}
            >
              Phone
            </h3>
            <p>M - F : 8AM - 4:30PM</p>
            <a class="link" href="tel:865.777.0088">865.777.0088</a>
          </div>
        </div>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: ['center', null, null, 'flex-start'],

            variant: 'text.lg',
            gap: '2rem',
            py: '1rem',
            a: {
              color: '#000',
              '&:hover': { color: '#fff' },
            },
          }}
        >
          <a
            href="https://twitter.com/RejoiceIVF"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/RejoiceFertility/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/rejoiceivf/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@rejoicefertility"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on Youtube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* contact form */}

      <div
        sx={{
          flex: ['1 0 100%', null, '1 0 calc(60% - 1rem)'],
          maxWidth: ['100%', null, 'calc(60% - 1rem)'],
          flexWrap: 'wrap',
        }}
      >
        <Form />
      </div>
    </section>
  );
};

export default ContactForm;
