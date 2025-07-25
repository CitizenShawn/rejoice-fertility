/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';

const Form = () => {
  React.useEffect(() => {
    const loadScript = (src, isAsync = false, onLoad) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = isAsync;
      if (onLoad) script.onload = onLoad;
      document.body.appendChild(script);
      return script;
    };

    const loadCSS = (href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = href;
      document.head.appendChild(link);
      return link;
    };

    // Load JotForm CSS styles
    const styles = [
      loadCSS('https://cdn.jotfor.ms/stylebuilder/static/form-common.css?v=a9a303c'),
      loadCSS('https://cdn.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.64223'),
      loadCSS('https://cdn.jotfor.ms/css/styles/payment/payment_styles.css?3.3.64223'),
      loadCSS('https://cdn.jotfor.ms/css/styles/payment/payment_feature.css?3.3.64223')
    ];

    // Load prototype.forms.js first
    loadScript("https://cdn.jotfor.ms/s/static/3d5d7d50e1a/static/prototype.forms.js");

    // Load jotform.forms.js and attach GTM event after it’s ready
    const jotFormScript = loadScript(
      "https://cdn.jotfor.ms/s/static/3d5d7d50e1a/static/jotform.forms.js",
      false,
      () => {
        if (window.JotForm) {
          window.enableEventObserver = true;
          JotForm.newDefaultTheme = true;
          JotForm.extendsNewTheme = false;
          JotForm.singleProduct = false;
          JotForm.newPaymentUIForNewCreatedForms = true;
          JotForm.texts = { required: "This field is required." };
          JotForm.newPaymentUI = true;
          JotForm.init();

          // Attach a native submit event listener
          const form = document.getElementById('251464191705052');
          if (form) {
            form.addEventListener('submit', () => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({ event: 'contactFormSubmit' });
            });
          }
        }
      }
    );

    // Load additional scripts
    const otherScripts = [
      loadScript("https://cdn.jotfor.ms/s/static/3d5d7d50e1a/js/punycode-1.4.1.min.js", true),
      loadScript("https://cdn.jotfor.ms/s/static/3d5d7d50e1a/js/vendor/maskedinput_5.0.9.min.js"),
      loadScript("https://cdn.jotfor.ms/s/static/3d5d7d50e1a/js/vendor/smoothscroll.min.js"),
      loadScript("https://cdn.jotfor.ms/s/static/3d5d7d50e1a/js/errorNavigation.js")
    ];

    return () => {
      styles.forEach((s) => document.head.removeChild(s));
      if (jotFormScript) document.body.removeChild(jotFormScript);
      otherScripts.forEach((s) => document.body.removeChild(s));
    };
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
      <form
        className="jotform-form"
        action="https://submit.jotform.com/submit/251464191705052"
        method="post"
        name="form_251464191705052"
        id="251464191705052"
        acceptCharset="utf-8"
        autoComplete="on"
      >
        <div role="main" className="form-all">
          <ul className="form-section page-section" role="presentation">
            <li className="form-line" id="id_4">
              <label className="form-label" htmlFor="first_4">Name</label>
              <div className="form-input-wide">
                <input type="text" id="first_4" name="q4_name[first]" className="form-textbox" placeholder="First Name" />
                <input type="text" id="last_4" name="q4_name[last]" className="form-textbox" placeholder="Last Name" />
              </div>
            </li>
            <li className="form-line" id="id_5">
              <label className="form-label" htmlFor="input_5">Email</label>
              <input type="email" id="input_5" name="q5_email" className="form-textbox" placeholder="example@example.com" />
            </li>
            <li className="form-line" id="id_6">
              <label className="form-label" htmlFor="input_6_full">Phone Number</label>
              <input type="tel" id="input_6_full" name="q6_phoneNumber[full]" className="form-textbox" placeholder="(000) 000-0000" />
            </li>
            <li className="form-line" id="id_7">
              <label className="form-label" htmlFor="input_7">How can we help you?</label>
              <select id="input_7" name="q7_howCan" className="form-dropdown">
                <option value="">Please Select</option>
                <option value="I want to make an appointment">I want to make an appointment</option>
                <option value="I want a question for Dr. Gordon">I want a question for Dr. Gordon</option>
                <option value="I need something else">I need something else</option>
              </select>
            </li>
            <li className="form-line" id="id_8">
              <label className="form-label" htmlFor="input_8">Comments / Questions</label>
              <textarea id="input_8" name="q8_comments" className="form-textarea" />
            </li>
            <li className="form-line" id="id_2">
              <button id="input_2" type="submit" className="form-submit-button">Submit</button>
            </li>
          </ul>
        </div>
      </form>
    </section>
  );
};

export default Form;


