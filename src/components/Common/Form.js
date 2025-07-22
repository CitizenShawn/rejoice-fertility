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

    // Add JotForm CSS directly in a <style> tag scoped to the container
    const jotformCSS = document.createElement('link');
    jotformCSS.rel = 'stylesheet';
    jotformCSS.href = 'https://cdn.jotfor.ms/stylebuilder/static/form-common.css?v=87bd99f';
    document.head.appendChild(jotformCSS);

    const jotformTheme = document.createElement('link');
    jotformTheme.rel = 'stylesheet';
    jotformTheme.href = 'https://cdn.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.64160';
    document.head.appendChild(jotformTheme);

    const jotformPaymentStyles = document.createElement('link');
    jotformPaymentStyles.rel = 'stylesheet';
    jotformPaymentStyles.href = 'https://cdn.jotfor.ms/css/styles/payment/payment_styles.css?3.3.64160';
    document.head.appendChild(jotformPaymentStyles);

    const jotformPaymentFeature = document.createElement('link');
    jotformPaymentFeature.rel = 'stylesheet';
    jotformPaymentFeature.href = 'https://cdn.jotfor.ms/css/styles/payment/payment_feature.css?3.3.64160';
    document.head.appendChild(jotformPaymentFeature);

    // Reset site fonts outside JotForm
    const resetFontStyle = document.createElement('style');
    resetFontStyle.innerHTML = `
      body *:not(.jotform-container *):not(.jotform-container) {
        font-family: "Your Primary Font", sans-serif !important;
      }
      /* Ensure form uses your font too */
      .jotform-container, .jotform-container * {
        font-family: "Your Primary Font", sans-serif;
      }
    `;
    document.head.appendChild(resetFontStyle);
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
      <div className="jotform-container">
        {/* JotForm HTML */}
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
      </div>
    </section>
  );
};

export default Form;
