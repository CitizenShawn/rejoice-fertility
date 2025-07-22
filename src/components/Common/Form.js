/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { useEffect } from 'react';

const Form = () => {
  useEffect(() => {
    // External scripts needed for JotForm
    const scriptUrls = [
      'https://cdn.jotfor.ms/s/static/87d70767e6b/static/prototype.forms.js',
      'https://cdn.jotfor.ms/s/static/87d70767e6b/static/jotform.forms.js',
      'https://cdn.jotfor.ms/s/static/87d70767e6b/js/punycode-1.4.1.min.js',
      'https://cdn.jotfor.ms/s/static/87d70767e6b/js/vendor/maskedinput_5.0.9.min.js',
      'https://cdn.jotfor.ms/s/static/87d70767e6b/js/vendor/smoothscroll.min.js',
      'https://cdn.jotfor.ms/s/static/87d70767e6b/js/errorNavigation.js',
    ];

    // Inject scripts sequentially
    scriptUrls.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });

    // Inject JotForm initialization config
    const jotFormInitScript = document.createElement('script');
    jotFormInitScript.innerHTML = `
      window.enableEventObserver = true;
      if (window.JotForm) {
        JotForm.newDefaultTheme = true;
        JotForm.extendsNewTheme = false;
        JotForm.singleProduct = false;
        JotForm.newPaymentUIForNewCreatedForms = true;
        JotForm.texts = ${JSON.stringify({
          confirmEmail: 'E-mail does not match',
          pleaseWait: 'Please wait...',
          validateEmail: 'You need to validate this e-mail',
          confirmClearForm: 'Are you sure you want to clear the form',
          lessThan: 'Your score should be less than or equal to',
          incompleteFields: 'There are incomplete required fields. Please complete them.',
          required: 'This field is required.',
          error: 'Error',
        })};
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
    document.body.appendChild(jotFormInitScript);

    // Inject external styles
    const linkUrls = [
      'https://cdn.jotfor.ms/stylebuilder/static/form-common.css?v=87bd99f',
      'https://cdn.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.64160',
      'https://cdn.jotfor.ms/css/styles/payment/payment_styles.css?3.3.64160',
      'https://cdn.jotfor.ms/css/styles/payment/payment_feature.css?3.3.64160',
    ];
    linkUrls.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <section
      sx={{
        bg: '#47E4E0',
        py: '4rem',
        scrollMarginTop: 100,
      }}
      id="form-section"
    >
      {/* JotForm HTML inserted dynamically */}
      <form
        className="jotform-form"
        action="https://submit.jotform.com/submit/251464191705052"
        method="post"
        name="form_251464191705052"
        id="251464191705052"
        acceptCharset="utf-8"
        autoComplete="on"
        dangerouslySetInnerHTML={{
          __html: `
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
                <li class="form-line" data-type="control_button">
                  <button type="submit">Submit</button>
                </li>
              </ul>
            </div>
          `,
        }}
      />
    </section>
  );
};

export default Form;
