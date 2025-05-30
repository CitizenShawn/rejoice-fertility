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
      <script type="text/javascript" src="https://form.jotform.com/jsform/251464191705052"></script>
    </section>
  );
};

export default Form;
