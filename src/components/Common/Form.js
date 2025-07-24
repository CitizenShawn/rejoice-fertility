/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { useEffect, useRef } from 'react';

const Form = () => {
  const shadowHost = useRef(null);
  const formRef = useRef(null); // Reference to the shadow form

  useEffect(() => {
    if (!shadowHost.current) return;

    const shadow = shadowHost.current.attachShadow({ mode: 'open' });

        const formHTML = `
      <link rel="stylesheet" href="https://cdn.jotfor.ms/stylebuilder/static/form-common.css?v=87bd99f" />
      <link rel="stylesheet" href="https://cdn.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.64217" />
      <link rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_styles.css?3.3.64217" />
      <link rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_feature.css?3.3.64217" />
      <style>
        .form-all { padding-bottom: 0; }
      </style>

      <form
        class="jotform-form"
        action="https://submit.jotform.com/submit/251464191705052"
        method="post"
        name="form_251464191705052"
        id="251464191705052"
        accept-charset="utf-8"
        autocomplete="on"
      >
        <input type="hidden" name="formID" value="251464191705052" />
        <div role="main" class="form-all">
          <ul class="form-section page-section" role="presentation">
            <li class="form-line" data-type="control_fullname" id="id_4">
              <label class="form-label form-label-top" id="label_4">Name</label>
              <div class="form-input-wide" id="cid_4">
                <input type="text" name="q4_name[first]" placeholder="First Name" />
                <input type="text" name="q4_name[last]" placeholder="Last Name" />
              </div>
            </li>
            <li class="form-line" data-type="control_email" id="id_5">
              <label class="form-label form-label-top" id="label_5">Email</label>
              <div class="form-input-wide" id="cid_5">
                <input type="email" name="q5_email" placeholder="example@example.com" />
              </div>
            </li>
            <li class="form-line" data-type="control_phone" id="id_6">
              <label class="form-label form-label-top" id="label_6">Phone Number</label>
              <div class="form-input-wide" id="cid_6">
                <input type="tel" name="q6_phoneNumber[full]" placeholder="(000) 000-0000" />
              </div>
            </li>
            <li class="form-line" data-type="control_dropdown" id="id_7">
              <label class="form-label form-label-top" id="label_7">How can we help you?</label>
              <div class="form-input-wide" id="cid_7">
                <select name="q7_howCan" style="width: 310px;">
                  <option value="">Please Select</option>
                  <option value="I want to make an appointment">I want to make an appointment</option>
                  <option value="I want a question for Dr. Gordon">I want a question for Dr. Gordon</option>
                  <option value="I need something else">I need something else</option>
                </select>
              </div>
            </li>
            <li class="form-line" data-type="control_textarea" id="id_8">
              <label class="form-label form-label-top" id="label_8">Comments / Questions</label>
              <div class="form-input-wide" id="cid_8">
                <textarea name="q8_comments" style="width: 648px; height: 163px;"></textarea>
              </div>
            </li>
          </ul>
        </div>
      </form>
    `;

    shadow.innerHTML = formHTML;
    formRef.current = shadow.querySelector('form');

    // Load JotForm scripts
    const scriptUrls = [
      'https://cdn.jotfor.ms/s/static/87d70767e6b/static/prototype.forms.js',
      'https://cdn.jotfor.ms/s/static/87d70767e6b/static/jotform.forms.js',
      'https://cdn.jotfor.ms/s/static/87d70767e6b/js/punycode-1.4.1.min.js',
      'https://cdn.jotfor.ms/s/static/87d70767e6b/js/vendor/maskedinput_5.0.9.min.js',
      'https://cdn.jotfor.ms/s/static/87d70767e6b/js/vendor/smoothscroll.min.js',
      'https://cdn.jotfor.ms/s/static/87d70767e6b/js/errorNavigation.js',
    ];
    scriptUrls.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      shadow.appendChild(script);
    });

    const jotFormInitScript = document.createElement('script');
    jotFormInitScript.innerHTML = `
      window.enableEventObserver = true;
      if (window.JotForm) {
        JotForm.newDefaultTheme = true;
        JotForm.extendsNewTheme = false;
        JotForm.singleProduct = false;
        JotForm.newPaymentUIForNewCreatedForms = true;
        JotForm.newPaymentUI = true;
        JotForm.originalLanguage = 'en';
        JotForm.isFormViewTrackingAllowed = true;
        JotForm.replaceTagTest = true;
        JotForm.activeRedirect = 'thanktext';
        JotForm.uploadServerURL = 'https://upload.jotform.com/upload';
        JotForm.clearFieldOnHide = 'disable';
        JotForm.submitError = 'jumpToFirstError';
        JotForm.isFullSource = true;
        JotForm.init();
      }
    `;
    shadow.appendChild(jotFormInitScript);
  }, []);

  const handleSubmit = () => {
    if (formRef.current) {
      if (formRef.current.requestSubmit) {
        formRef.current.requestSubmit(); // Modern browsers
      } else {
        formRef.current.submit(); // Fallback
      }

      // Send GTM event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'jotformSubmitClick',
        formId: '251464191705052',
      });
    }
  };

  return (
    <section
      sx={{
        bg: '#47E4E0',
        py: '4rem',
        scrollMarginTop: 100,
        textAlign: 'center',
      }}
      id="form-section"
    >
      {/* Shadow DOM Form */}
      <div ref={shadowHost} style={{ width: '100%', marginBottom: '1rem' }} />

      {/* External Submit Button */}
      <button
        type="button"
        onClick={handleSubmit}
        sx={{
          display: 'inline-block',
          color: '#000000',
          border: '1px solid #000',
          backgroundColor: 'transparent',
          px: '1rem',
          py: '0.5rem',
          mt: '1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: '#FFFFFF',
            borderColor: '#FFFFFF',
          },
        }}
      >
        Submit
      </button>
    </section>
  );
};

export default Form;
