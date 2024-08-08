/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { useForm, ValidationError } from '@formspree/react';

const Form = ({ formUrl = 'https://usebasin.com/f/f95fb9d7171b' }) => {
  // const [state, handleSubmit] = useForm('mrgdabgl');
  // if (state.succeeded) {
  //   return (
  //     <section
  //       sx={{
  //         bg: '#FFE664',
  //         py: '4rem',
  //       }}
  //     >
  //       <div
  //         sx={{
  //           px: ['1rem', null, null, '2rem'],
  //           py: ['1rem', null, null, '2rem'],
  //           maxWidth: ['528px', null, null, '576px'],
  //           margin: 'auto',
  //           p: {
  //             variant: 'text.lg',
  //             display: 'flex',
  //             flexDirection: 'column',
  //             justifyContent: 'center',
  //             gap: '0.25rem',
  //             textAlign: 'center',
  //           },
  //         }}
  //       >
  //         <p>Your form has been submitted!</p>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section
      sx={{
        bg: '#47E4E0',
        py: '4rem',
        scrollMarginTop: 100,
      }}
      id="form-section"
    >
      <div
        sx={{
          p: ['1rem', null, null, '2rem'],
          maxWidth: ['528px', null, null, '576px'],
          margin: 'auto',
          label: {
            variant: 'text.normal',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          },
        }}
      >
        <form action={formUrl} method="POST">
          <div sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
                'input, textarea, select': {
                  border: '1px solid #ccc',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                },
              }}
            >
              <label htmlFor="first_name">
                First Name
                <input id="first_name" type="text" name="first_name" />
              </label>
              {/* <ValidationError prefix="First Name" field="first_name" errors={state.errors} /> */}
              <label htmlFor="last_name">
                Last Name
                <input id="last_name" type="text" name="last_name" />
              </label>
              {/* <ValidationError prefix="Last Name" field="last_name" errors={state.errors} /> */}
              <label htmlFor="email">
                Email Address
                <input id="email" type="email" name="email" />
              </label>
              {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
              <label htmlFor="phone">
                Phone
                <input id="phone" type="tel" name="phone" />
              </label>
              {/* <ValidationError prefix="Phone" field="phone" errors={state.errors} /> */}
              <label htmlFor="context">
                How can we help you?
                <select name="context" id="context">
                  <option value="">Choose one</option>
                  <option value="appointment">I want to make an appointment</option>
                  <option value="gordon">I have a question for Dr. Gordon</option>
                  //<option value="keenan">I have a question for Dr. Keenan</option>
                  <option value="other">I need something else</option>
                </select>
              </label>
              {/* <ValidationError prefix="Context" field="context" errors={state.errors} /> */}
              <label htmlFor="message">
                Comments / Questions
                <textarea id="message" name="message" rows={5} />
              </label>
              {/* <ValidationError prefix="Message" field="message" errors={state.errors} /> */}
              <div
                sx={{
                  background: '#343753',
                  maxWidth: ['528px', null, null, '576px'],
                  textAlign: 'center',
                  borderRadius: '8px',
                  mt: '1.5rem',
                  color: 'white',
                  transition: 'all 0.3s',
                  '&:hover': {
                    opacity: '0.8',
                  },
                }}
              >
                <button
                  type="submit"
                  //    disabled={state.submitting}
                  sx={{
                    all: 'unset',
                    boxSizing: 'border-box',
                    width: '100%',
                    cursor: 'pointer',
                    p: '1rem',
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
