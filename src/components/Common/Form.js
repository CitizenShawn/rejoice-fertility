/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { useEffect, useRef } from 'react';

const Form = () => {
  const shadowHost = useRef(null);

  useEffect(() => {
    if (!shadowHost.current) return;
    const shadow = shadowHost.current.attachShadow({ mode: 'open' });

    // JotForm HTML with custom submit button
    const formHTML = `
      <link rel="stylesheet" href="https://cdn.jotfor.ms/stylebuilder/static/form-common.css?v=87bd99f" />
      <link rel="stylesheet" href="https://cdn.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.64160" />
      <link rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_styles.css?3.3.64160" />
      <link rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_feature.css?3.3.64160" />
      <style>
        /* Custom button styling */
        .custom-submit {
          display: inline-block;
          color: #000000;
          border: 1px solid #000;
          background-color: transparent;
          padding: 0.5rem 1rem;
          margin-top: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          font-family: 'Cormorant Garamond';
        }
        .custom-submit:hover {
          color: #000000;
          border-color: #000000;
        }
        .form-submit-container {
          text-align: center;
        }
        .form-all {
          background-color: #47E4E0 !important;
        }
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
            <li class="form-line" data-type="control_fullname">
              <label class="form-label form-label-top">Name</label>
              <div class="form-input-wide">
                <input type="text" name="q4_name[first]" placeholder="First Name" />
                <input type="text" name="q4_name[last]" placeholder="Last Name" />
              </div>
            </li>
            <li class="form-line" data-type="control_email">
              <label class="form-label form-label-top">Email</label>
              <div class="form-input-wide">
                <input type="email" name="q5_email" placeholder="example@example.com" />
              </div>
            </li>
            <li class="form-line" data-type="control_phone">
              <label class="form-label form-label-top">Phone Number</label>
              <div class="form-input-wide">
                <input type="tel" name="q6_phoneNumber[full]" placeholder="(000) 000-0000" />
              </div>
            </li>
            <li class="form-line" data-type="control_textarea">
              <label class="form-label form-label-top">Comments / Questions</label>
              <div class="form-input-wide">
                <textarea name="q8_comments"></textarea>
              </div>
            </li>
          </ul>
          <div class="form-submit-container">
            <button type="submit" class="custom-submit">Submit</button>
          </div>
        </div>
      </form>
    `;

    shadow.innerHTML = formHTML;

    const submitBtn = shadow.querySelector('.custom-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'jotformSubmitClick',
          formId: '251464191705052',
        });
      });
    }

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
      <div ref={shadowHost} style={{ width: '100%' }} />
    </section>
  );
};

export default Form;
