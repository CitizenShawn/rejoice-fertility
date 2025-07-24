/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';

const Form = () => {
  React.useEffect(() => {
    // Helper to append a script tag
    const loadScript = (src, isAsync = false) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = isAsync;
      document.body.appendChild(script);
      return script;
    };

    // Load external JotForm scripts
    const scripts = [
      loadScript("https://cdn.jotfor.ms/s/static/dd9c713ec4a/static/prototype.forms.js"),
      loadScript("https://cdn.jotfor.ms/s/static/dd9c713ec4a/static/jotform.forms.js"),
      loadScript("https://cdn.jotfor.ms/s/static/dd9c713ec4a/js/punycode-1.4.1.min.js", true),
      loadScript("https://cdn.jotfor.ms/s/static/dd9c713ec4a/js/vendor/maskedinput_5.0.9.min.js"),
      loadScript("https://cdn.jotfor.ms/s/static/dd9c713ec4a/js/vendor/smoothscroll.min.js"),
      loadScript("https://cdn.jotfor.ms/s/static/dd9c713ec4a/js/errorNavigation.js")
    ];

    // Inline JotForm initialization script
    const inlineScript = document.createElement('script');
    inlineScript.type = 'text/javascript';
    inlineScript.innerHTML = `
      window.enableEventObserver = true;
      JotForm.newDefaultTheme = true;
      JotForm.extendsNewTheme = false;
      JotForm.singleProduct = false;
      JotForm.newPaymentUIForNewCreatedForms = true;
      JotForm.texts = {
        "confirmEmail":"E-mail does not match",
        "pleaseWait":"Please wait...",
        "validateEmail":"You need to validate this e-mail",
        "confirmClearForm":"Are you sure you want to clear the form",
        "lessThan":"Your score should be less than or equal to",
        "incompleteFields":"There are incomplete required fields. Please complete them.",
        "required":"This field is required.",
        "requireOne":"At least one field required.",
        "requireEveryRow":"Every row is required.",
        "requireEveryCell":"Every cell is required.",
        "email":"Enter a valid e-mail address",
        "alphabetic":"This field can only contain letters",
        "numeric":"This field can only contain numeric values",
        "alphanumeric":"This field can only contain letters and numbers.",
        "cyrillic":"This field can only contain cyrillic characters",
        "url":"This field can only contain a valid URL",
        "currency":"This field can only contain currency values.",
        "fillMask":"Field value must fill mask.",
        "uploadExtensions":"You can only upload following files:",
        "noUploadExtensions":"File has no extension file type (e.g. .txt, .png, .jpeg)",
        "uploadFilesize":"File size cannot be bigger than:",
        "uploadFilesizemin":"File size cannot be smaller than:",
        "gradingScoreError":"Score total should only be less than or equal to",
        "inputCarretErrorA":"Input should not be less than the minimum value:",
        "inputCarretErrorB":"Input should not be greater than the maximum value:",
        "maxDigitsError":"The maximum digits allowed is",
        "minCharactersError":"The number of characters should not be less than the minimum value:",
        "maxCharactersError":"The number of characters should not be more than the maximum value:",
        "freeEmailError":"Free email accounts are not allowed",
        "minSelectionsError":"The minimum required number of selections is ",
        "maxSelectionsError":"The maximum number of selections allowed is ",
        "pastDatesDisallowed":"Date must not be in the past.",
        "dateLimited":"This date is unavailable.",
        "dateInvalid":"This date is not valid. The date format is {format}",
        "dateInvalidSeparate":"This date is not valid. Enter a valid {element}.",
        "ageVerificationError":"You must be older than {minAge} years old to submit this form.",
        "multipleFileUploads_typeError":"{file} has invalid extension. Only {extensions} are allowed.",
        "multipleFileUploads_sizeError":"{file} is too large, maximum file size is {sizeLimit}.",
        "multipleFileUploads_minSizeError":"{file} is too small, minimum file size is {minSizeLimit}.",
        "multipleFileUploads_emptyError":"{file} is empty, please select files again without it.",
        "multipleFileUploads_uploadFailed":"File upload failed, please remove it and upload the file again.",
        "multipleFileUploads_onLeave":"The files are being uploaded, if you leave now the upload will be cancelled.",
        "multipleFileUploads_fileLimitError":"Only {fileLimit} file uploads allowed.",
        "dragAndDropFilesHere_infoMessage":"Drag and drop files here",
        "chooseAFile_infoMessage":"Choose a file",
        "maxFileSize_infoMessage":"Max. file size",
        "generalError":"There are errors on the form. Please fix them before continuing.",
        "generalPageError":"There are errors on this page. Please fix them before continuing.",
        "wordLimitError":"Too many words. The limit is",
        "wordMinLimitError":"Too few words.  The minimum is",
        "characterLimitError":"Too many Characters.  The limit is",
        "characterMinLimitError":"Too few characters. The minimum is",
        "ccInvalidNumber":"Credit Card Number is invalid.",
        "ccInvalidCVC":"CVC number is invalid.",
        "ccInvalidExpireDate":"Expire date is invalid.",
        "ccInvalidExpireMonth":"Expiration month is invalid.",
        "ccInvalidExpireYear":"Expiration year is invalid.",
        "ccMissingDetails":"Please fill up the credit card details.",
        "ccMissingProduct":"Please select at least one product.",
        "ccMissingDonation":"Please enter numeric values for donation amount.",
        "disallowDecimals":"Please enter a whole number.",
        "restrictedDomain":"This domain is not allowed",
        "ccDonationMinLimitError":"Minimum amount is {minAmount} {currency}",
        "requiredLegend":"All fields marked with * are required and must be filled.",
        "geoPermissionTitle":"Permission Denied",
        "geoPermissionDesc":"Check your browser's privacy settings.",
        "geoNotAvailableTitle":"Position Unavailable",
        "geoNotAvailableDesc":"Location provider not available. Please enter the address manually.",
        "geoTimeoutTitle":"Timeout",
        "geoTimeoutDesc":"Please check your internet connection and try again.",
        "selectedTime":"Selected Time",
        "formerSelectedTime":"Former Time",
        "cancelAppointment":"Cancel Appointment",
        "cancelSelection":"Cancel Selection",
        "confirmSelection":"Confirm Selection",
        "noSlotsAvailable":"No slots available",
        "slotUnavailable":"{time} on {date} has been selected is unavailable. Please select another slot.",
        "multipleError":"There are {count} errors on this page. Please correct them before moving on.",
        "oneError":"There is {count} error on this page. Please correct it before moving on.",
        "doneMessage":"Well done! All errors are fixed.",
        "invalidTime":"Enter a valid time",
        "doneButton":"Done",
        "reviewSubmitText":"Review and Submit",
        "nextButtonText":"Next",
        "prevButtonText":"Previous",
        "seeErrorsButton":"See Errors",
        "notEnoughStock":"Not enough stock for the current selection",
        "notEnoughStock_remainedItems":"Not enough stock for the current selection ({count} items left)",
        "soldOut":"Sold Out",
        "justSoldOut":"Just Sold Out",
        "selectionSoldOut":"Selection Sold Out",
        "subProductItemsLeft":"({count} items left)",
        "startButtonText":"START",
        "submitButtonText":"Submit",
        "submissionLimit":"Sorry! Only one entry is allowed. <br> Multiple submissions are disabled for this form.",
        "reviewBackText":"Back to Form",
        "seeAllText":"See All",
        "progressMiddleText":"of",
        "fieldError":"field has an error.",
        "error":"Error"
      };
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
    document.body.appendChild(inlineScript);

    return () => {
      scripts.forEach((s) => document.body.removeChild(s));
      document.body.removeChild(inlineScript);
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
      {/* The actual JotForm HTML */}
      <form
        className="jotform-form"
        action="https://submit.jotform.com/submit/251464191705052"
        method="post"
        name="form_251464191705052"
        id="251464191705052"
        acceptCharset="utf-8"
        autoComplete="on"
      >
        {/* Your JotForm form fields */}
        <div role="main" className="form-all">
          <ul className="form-section page-section" role="presentation">
            <li className="form-line" data-type="control_fullname" id="id_4">
              <label className="form-label form-label-top form-label-auto" htmlFor="first_4">
                Name
              </label>
              <div className="form-input-wide" data-layout="full">
                <span className="form-sub-label-container" data-input-type="first">
                  <input type="text" id="first_4" name="q4_name[first]" className="form-textbox" />
                  <label className="form-sub-label" htmlFor="first_4">First Name</label>
                </span>
                <span className="form-sub-label-container" data-input-type="last">
                  <input type="text" id="last_4" name="q4_name[last]" className="form-textbox" />
                  <label className="form-sub-label" htmlFor="last_4">Last Name</label>
                </span>
              </div>
            </li>

            <li className="form-line" data-type="control_email" id="id_5">
              <label className="form-label form-label-top form-label-auto" htmlFor="input_5">
                Email
              </label>
              <div className="form-input-wide" data-layout="half">
                <input type="email" id="input_5" name="q5_email" className="form-textbox" />
              </div>
            </li>

            <li className="form-line" data-type="control_phone" id="id_6">
              <label className="form-label form-label-top form-label-auto" htmlFor="input_6_full">
                Phone Number
              </label>
              <div className="form-input-wide" data-layout="half">
                <input type="tel" id="input_6_full" name="q6_phoneNumber[full]" className="form-textbox" />
              </div>
            </li>

            <li className="form-line" data-type="control_dropdown" id="id_7">
              <label className="form-label form-label-top form-label-auto" htmlFor="input_7">
                How can we help you?
              </label>
              <div className="form-input-wide" data-layout="half">
                <select id="input_7" name="q7_howCan" className="form-dropdown">
                  <option value="">Please Select</option>
                  <option value="I want to make an appointment">I want to make an appointment</option>
                  <option value="I want a question for Dr. Gordon">I want a question for Dr. Gordon</option>
                  <option value="I need something else">I need something else</option>
                </select>
              </div>
            </li>

            <li className="form-line" data-type="control_textarea" id="id_8">
              <label className="form-label form-label-top form-label-auto" htmlFor="input_8">
                Comments / Questions
              </label>
              <div className="form-input-wide" data-layout="full">
                <textarea id="input_8" name="q8_comments" className="form-textarea" />
              </div>
            </li>

            <li className="form-line" data-type="control_button" id="id_2">
              <div className="form-input-wide" data-layout="full">
                <button id="input_2" type="submit" className="form-submit-button">Submit</button>
              </div>
            </li>
          </ul>
        </div>
      </form>
    </section>
  );
};

export default Form;

