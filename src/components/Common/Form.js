/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react':

const Form = () => {
  useEffect(() => {
    // Dynamically inject external scripts and styles
    const scriptUrls = [
      "https://cdn.jotfor.ms/s/static/87d70767e6b/static/prototype.forms.js",
      "https://cdn.jotfor.ms/s/static/87d70767e6b/static/jotform.forms.js",
      "https://cdn.jotfor.ms/s/static/87d70767e6b/js/punycode-1.4.1.min.js",
      "https://cdn.jotfor.ms/s/static/87d70767e6b/js/vendor/maskedinput_5.0.9.min.js",
      "https://cdn.jotfor.ms/s/static/87d70767e6b/js/vendor/smoothscroll.min.js",
      "https://cdn.jotfor.ms/s/static/87d70767e6b/js/errorNavigation.js",
    ];

    scriptUrls.forEach(src => {
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      document.body.appendChild(s);
    });

    // Insert JotForm config
    const jotFormScript = document.createElement('script');
    jotFormScript.innerHTML = `
      window.enableEventObserver = true;
      JotForm.newDefaultTheme = true;
      JotForm.extendsNewTheme = false;
      JotForm.singleProduct = false;
      JotForm.newPaymentUIForNewCreatedForms = true;
      JotForm.texts = ${JSON.stringify({
        confirmEmail: "E-mail does not match",
        pleaseWait: "Please wait...",
        validateEmail: "You need to validate this e-mail",
        confirmClearForm: "Are you sure you want to clear the form",
        lessThan: "Your score should be less than or equal to",
        incompleteFields: "There are incomplete required fields. Please complete them.",
        required: "This field is required.",
        // ... you can trim here if too long
        error: "Error"
      })};
      JotForm.newPaymentUI = true;
      JotForm.originalLanguage = "en";
      JotForm.isFormViewTrackingAllowed = true;
      JotForm.replaceTagTest = true;
      JotForm.activeRedirect = "thanktext";
      JotForm.uploadServerURL = "https://upload.jotform.com/upload";
      JotForm.clearFieldOnHide = "disable";
      JotForm.submitError = "jumpToFirstError";
      JotForm.isFullSource = true;
      JotForm.init();
    `;
    document.body.appendChild(jotFormScript);

    // Inject external styles
    const linkUrls = [
      "https://cdn.jotfor.ms/stylebuilder/static/form-common.css?v=87bd99f",
      "https://cdn.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.64160",
      "https://cdn.jotfor.ms/css/styles/payment/payment_styles.css?3.3.64160",
      "https://cdn.jotfor.ms/css/styles/payment/payment_feature.css?3.3.64160",
    ];
    linkUrls.forEach(href => {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = href;
      document.head.appendChild(l);
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
      {/* Embed JotForm iframe or raw HTML form */}
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
            <!-- rest of form fields go here -->
          `,
        }}
      />
    </section>
  );
};

export default Form;
