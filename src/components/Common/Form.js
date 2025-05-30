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
    <iframe
      id="JotFormIFrame-251464191705052"
      title="Contact Form"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allow="geolocation; microphone; camera; fullscreen; payment"
      src="https://form.jotform.com/251464191705052"
      frameborder="0"
      style="min-width:100%;max-width:100%;height:539px;border:none;"
      scrolling="no"
    >
    </iframe>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-251464191705052']", "https://form.jotform.com/")</script>
    </section>
  );
};

export default Form;
