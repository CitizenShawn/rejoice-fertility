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
      <script>window.enableEventObserver=true</script>
<script src="https://cdn.jotfor.ms/s/static/9e72811369a/static/prototype.forms.js" type="text/javascript"></script>
<script src="https://cdn.jotfor.ms/s/static/9e72811369a/static/jotform.forms.js" type="text/javascript"></script>
<script src="https://cdn.jotfor.ms/s/static/9e72811369a/js/punycode-1.4.1.min.js" type="text/javascript" defer></script>
<script src="https://cdn.jotfor.ms/s/static/9e72811369a/js/vendor/maskedinput_5.0.9.min.js" type="text/javascript"></script>
<script src="https://cdn.jotfor.ms/s/static/9e72811369a/js/vendor/smoothscroll.min.js" type="text/javascript"></script>
<script src="https://cdn.jotfor.ms/s/static/9e72811369a/js/errorNavigation.js" type="text/javascript"></script>
<script type="text/javascript">	JotForm.newDefaultTheme = true;
	JotForm.extendsNewTheme = false;
	JotForm.singleProduct = false;
	JotForm.newPaymentUIForNewCreatedForms = true;
	JotForm.texts = {"confirmEmail":"E-mail does not match","pleaseWait":"Please wait...","validateEmail":"You need to validate this e-mail","confirmClearForm":"Are you sure you want to clear the form","lessThan":"Your score should be less than or equal to","incompleteFields":"There are incomplete required fields. Please complete them.","required":"This field is required.","requireOne":"At least one field required.","requireEveryRow":"Every row is required.","requireEveryCell":"Every cell is required.","email":"Enter a valid e-mail address","alphabetic":"This field can only contain letters","numeric":"This field can only contain numeric values","alphanumeric":"This field can only contain letters and numbers.","cyrillic":"This field can only contain cyrillic characters","url":"This field can only contain a valid URL","currency":"This field can only contain currency values.","fillMask":"Field value must fill mask.","uploadExtensions":"You can only upload following files:","noUploadExtensions":"File has no extension file type (e.g. .txt, .png, .jpeg)","uploadFilesize":"File size cannot be bigger than:","uploadFilesizemin":"File size cannot be smaller than:","gradingScoreError":"Score total should only be less than or equal to","inputCarretErrorA":"Input should not be less than the minimum value:","inputCarretErrorB":"Input should not be greater than the maximum value:","maxDigitsError":"The maximum digits allowed is","minCharactersError":"The number of characters should not be less than the minimum value:","maxCharactersError":"The number of characters should not be more than the maximum value:","freeEmailError":"Free email accounts are not allowed","minSelectionsError":"The minimum required number of selections is ","maxSelectionsError":"The maximum number of selections allowed is ","pastDatesDisallowed":"Date must not be in the past.","dateLimited":"This date is unavailable.","dateInvalid":"This date is not valid. The date format is {format}","dateInvalidSeparate":"This date is not valid. Enter a valid {element}.","ageVerificationError":"You must be older than {minAge} years old to submit this form.","multipleFileUploads_typeError":"{file} has invalid extension. Only {extensions} are allowed.","multipleFileUploads_sizeError":"{file} is too large, maximum file size is {sizeLimit}.","multipleFileUploads_minSizeError":"{file} is too small, minimum file size is {minSizeLimit}.","multipleFileUploads_emptyError":"{file} is empty, please select files again without it.","multipleFileUploads_uploadFailed":"File upload failed, please remove it and upload the file again.","multipleFileUploads_onLeave":"The files are being uploaded, if you leave now the upload will be cancelled.","multipleFileUploads_fileLimitError":"Only {fileLimit} file uploads allowed.","dragAndDropFilesHere_infoMessage":"Drag and drop files here","chooseAFile_infoMessage":"Choose a file","maxFileSize_infoMessage":"Max. file size","generalError":"There are errors on the form. Please fix them before continuing.","generalPageError":"There are errors on this page. Please fix them before continuing.","wordLimitError":"Too many words. The limit is","wordMinLimitError":"Too few words.  The minimum is","characterLimitError":"Too many Characters.  The limit is","characterMinLimitError":"Too few characters. The minimum is","ccInvalidNumber":"Credit Card Number is invalid.","ccInvalidCVC":"CVC number is invalid.","ccInvalidExpireDate":"Expire date is invalid.","ccInvalidExpireMonth":"Expiration month is invalid.","ccInvalidExpireYear":"Expiration year is invalid.","ccMissingDetails":"Please fill up the credit card details.","ccMissingProduct":"Please select at least one product.","ccMissingDonation":"Please enter numeric values for donation amount.","disallowDecimals":"Please enter a whole number.","restrictedDomain":"This domain is not allowed","ccDonationMinLimitError":"Minimum amount is {minAmount} {currency}","requiredLegend":"All fields marked with * are required and must be filled.","geoPermissionTitle":"Permission Denied","geoPermissionDesc":"Check your browser's privacy settings.","geoNotAvailableTitle":"Position Unavailable","geoNotAvailableDesc":"Location provider not available. Please enter the address manually.","geoTimeoutTitle":"Timeout","geoTimeoutDesc":"Please check your internet connection and try again.","selectedTime":"Selected Time","formerSelectedTime":"Former Time","cancelAppointment":"Cancel Appointment","cancelSelection":"Cancel Selection","confirmSelection":"Confirm Selection","noSlotsAvailable":"No slots available","slotUnavailable":"{time} on {date} has been selected is unavailable. Please select another slot.","multipleError":"There are {count} errors on this page. Please correct them before moving on.","oneError":"There is {count} error on this page. Please correct it before moving on.","doneMessage":"Well done! All errors are fixed.","invalidTime":"Enter a valid time","doneButton":"Done","reviewSubmitText":"Review and Submit","nextButtonText":"Next","prevButtonText":"Previous","seeErrorsButton":"See Errors","notEnoughStock":"Not enough stock for the current selection","notEnoughStock_remainedItems":"Not enough stock for the current selection ({count} items left)","soldOut":"Sold Out","justSoldOut":"Just Sold Out","selectionSoldOut":"Selection Sold Out","subProductItemsLeft":"({count} items left)","startButtonText":"START","submitButtonText":"Submit","submissionLimit":"Sorry! Only one entry is allowed. <br> Multiple submissions are disabled for this form.","reviewBackText":"Back to Form","seeAllText":"See All","progressMiddleText":"of","fieldError":"field has an error.","error":"Error"};
	JotForm.newPaymentUI = true;
	JotForm.originalLanguage = "en";
	JotForm.isFormViewTrackingAllowed = true;
	JotForm.replaceTagTest = true;
	JotForm.uploadServerURL = "https://upload.jotform.com/upload";
	JotForm.clearFieldOnHide="disable";
	JotForm.submitError="jumpToFirstError";
	JotForm.isFullSource = true;

	JotForm.init(function(){
	/*INIT-START*/
      JotForm.setPhoneMaskingValidator( 'input_6_full', '\u0028\u0023\u0023\u0023\u0029 \u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023' );
if (window.JotForm && JotForm.accessible) $('input_8').setAttribute('tabindex',0);
      JotForm.alterTexts({"ageVerificationError":"You must be older than {minAge} years old to submit this form.","alphabetic":"This field can only contain letters","alphanumeric":"This field can only contain letters and numbers.","cancelAppointment":"Cancel Appointment","cancelSelection":"Cancel Selection","ccDonationMinLimitError":"Minimum amount is {minAmount} {currency}","ccInvalidCVC":"CVC number is invalid.","ccInvalidExpireDate":"Expire date is invalid.","ccInvalidExpireMonth":"Expiration month is invalid.","ccInvalidExpireYear":"Expiration year is invalid.","ccInvalidNumber":"Credit Card Number is invalid.","ccMissingDetails":"Please fill up the credit card details.","ccMissingDonation":"Please enter numeric values for donation amount.","ccMissingProduct":"Please select at least one product.","characterLimitError":"Too many Characters.  The limit is","characterMinLimitError":"Too few characters. The minimum is","chooseAFile_infoMessage":"Choose a file","confirmClearForm":"Are you sure you want to clear the form","confirmEmail":"E-mail does not match","confirmSelection":"Confirm Selection","currency":"This field can only contain currency values.","cyrillic":"This field can only contain cyrillic characters","dateInvalid":"This date is not valid. The date format is {format}","dateInvalidSeparate":"This date is not valid. Enter a valid {element}.","dateLimited":"This date is unavailable.","disallowDecimals":"Please enter a whole number.","doneButton":"Done","doneMessage":"Well done! All errors are fixed.","dragAndDropFilesHere_infoMessage":"Drag and drop files here","email":"Enter a valid e-mail address","error":"Error","fieldError":"field has an error.","fillMask":"Field value must fill mask.","formerSelectedTime":"Former Time","freeEmailError":"Free email accounts are not allowed","generalError":"There are errors on the form. Please fix them before continuing.","generalPageError":"There are errors on this page. Please fix them before continuing.","geoNotAvailableDesc":"Location provider not available. Please enter the address manually.","geoNotAvailableTitle":"Position Unavailable","geoPermissionDesc":"Check your browser's privacy settings.","geoPermissionTitle":"Permission Denied","geoTimeoutDesc":"Please check your internet connection and try again.","geoTimeoutTitle":"Timeout","gradingScoreError":"Score total should only be less than or equal to","incompleteFields":"There are incomplete required fields. Please complete them.","inputCarretErrorA":"Input should not be less than the minimum value:","inputCarretErrorB":"Input should not be greater than the maximum value:","invalidTime":"Enter a valid time","justSoldOut":"Just Sold Out","lessThan":"Your score should be less than or equal to","maxCharactersError":"The number of characters should not be more than the maximum value:","maxDigitsError":"The maximum digits allowed is","maxFileSize_infoMessage":"Max. file size","maxSelectionsError":"The maximum number of selections allowed is ","minCharactersError":"The number of characters should not be less than the minimum value:","minSelectionsError":"The minimum required number of selections is ","multipleError":"There are {count} errors on this page. Please correct them before moving on.","multipleFileUploads_emptyError":"{file} is empty, please select files again without it.","multipleFileUploads_fileLimitError":"Only {fileLimit} file uploads allowed.","multipleFileUploads_minSizeError":"{file} is too small, minimum file size is {minSizeLimit}.","multipleFileUploads_onLeave":"The files are being uploaded, if you leave now the upload will be cancelled.","multipleFileUploads_sizeError":"{file} is too large, maximum file size is {sizeLimit}.","multipleFileUploads_typeError":"{file} has invalid extension. Only {extensions} are allowed.","multipleFileUploads_uploadFailed":"File upload failed, please remove it and upload the file again.","nextButtonText":"Next","noSlotsAvailable":"No slots available","notEnoughStock":"Not enough stock for the current selection","notEnoughStock_remainedItems":"Not enough stock for the current selection ({count} items left)","noUploadExtensions":"File has no extension file type (e.g. .txt, .png, .jpeg)","numeric":"This field can only contain numeric values","oneError":"There is {count} error on this page. Please correct it before moving on.","pastDatesDisallowed":"Date must not be in the past.","pleaseWait":"Please wait...","prevButtonText":"Previous","progressMiddleText":"of","required":"This field is required.","requiredLegend":"All fields marked with * are required and must be filled.","requireEveryCell":"Every cell is required.","requireEveryRow":"Every row is required.","requireOne":"At least one field required.","restrictedDomain":"This domain is not allowed","reviewBackText":"Back to Form","reviewSubmitText":"Review and Submit","seeAllText":"See All","seeErrorsButton":"See Errors","selectedTime":"Selected Time","selectionSoldOut":"Selection Sold Out","slotUnavailable":"{time} on {date} has been selected is unavailable. Please select another slot.","soldOut":"Sold Out","startButtonText":"START","submissionLimit":"Sorry! Only one entry is allowed. &lt;br&gt; Multiple submissions are disabled for this form.","submitButtonText":"Submit","subProductItemsLeft":"({count} items left)","uploadExtensions":"You can only upload following files:","uploadFilesize":"File size cannot be bigger than:","uploadFilesizemin":"File size cannot be smaller than:","url":"This field can only contain a valid URL","validateEmail":"You need to validate this e-mail","wordLimitError":"Too many words. The limit is","wordMinLimitError":"Too few words.  The minimum is"});
	/*INIT-END*/
	});

   setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,null,{"name":"submit2","qid":"2","text":"Submit","type":"control_button"},null,{"description":"","name":"name","qid":"4","text":"Name","type":"control_fullname"},{"description":"","name":"email","qid":"5","subLabel":"example@example.com","text":"Email","type":"control_email"},{"description":"","name":"phoneNumber","qid":"6","text":"Phone Number","type":"control_phone"},{"description":"","name":"howCan","qid":"7","subLabel":"","text":"How can we help you?","type":"control_dropdown"},{"description":"","mde":"No","name":"comments","qid":"8","subLabel":"","text":"Comments \u002F Questions","type":"control_textarea","wysiwyg":"Disable"}]);}, 20); 
</script>
<link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/stylebuilder/static/form-common.css?v=da2db26
"/>
<style type="text/css">@media print{*{-webkit-print-color-adjust: exact !important;color-adjust: exact !important;}.form-section{display:inline!important}.form-pagebreak{display:none!important}.form-section-closed{height:auto!important}.page-section{position:initial!important}}</style>
<link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.63395"/>
<link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_styles.css?3.3.63395" />
<link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_feature.css?3.3.63395" />
<form class="jotform-form" onsubmit="return typeof testSubmitFunction !== 'undefined' && testSubmitFunction();" action="https://submit.jotform.com/submit/251464191705052" method="post" name="form_251464191705052" id="251464191705052" accept-charset="utf-8" autocomplete="on"><input type="hidden" name="formID" value="251464191705052" /><input type="hidden" id="JWTContainer" value="" /><input type="hidden" id="cardinalOrderNumber" value="" /><input type="hidden" id="jsExecutionTracker" name="jsExecutionTracker" value="build-date-1748639459067" /><input type="hidden" id="submitSource" name="submitSource" value="unknown" /><input type="hidden" id="buildDate" name="buildDate" value="1748639459067" /><input type="hidden" name="uploadServerUrl" value="https://upload.jotform.com/upload" /><input type="hidden" name="eventObserver" value="1" />
  <div role="main" class="form-all">
    <ul class="form-section page-section" role="presentation">
      <li class="form-line" data-type="control_fullname" id="id_4"><label class="form-label form-label-top form-label-auto" id="label_4" for="first_4" aria-hidden="false"> Name </label>
        <div id="cid_4" class="form-input-wide" data-layout="full">
          <div data-wrapper-react="true"><span class="form-sub-label-container" style="vertical-align:top" data-input-type="first"><input type="text" id="first_4" name="q4_name[first]" class="form-textbox" data-defaultvalue="" autoComplete="section-input_4 given-name" size="10" data-component="first" aria-labelledby="label_4 sublabel_4_first" value="" /><label class="form-sub-label" for="first_4" id="sublabel_4_first" style="min-height:13px">First Name</label></span><span class="form-sub-label-container" style="vertical-align:top" data-input-type="last"><input type="text" id="last_4" name="q4_name[last]" class="form-textbox" data-defaultvalue="" autoComplete="section-input_4 family-name" size="15" data-component="last" aria-labelledby="label_4 sublabel_4_last" value="" /><label class="form-sub-label" for="last_4" id="sublabel_4_last" style="min-height:13px">Last Name</label></span></div>
        </div>
      </li>
      <li class="form-line" data-type="control_email" id="id_5"><label class="form-label form-label-top form-label-auto" id="label_5" for="input_5" aria-hidden="false"> Email </label>
        <div id="cid_5" class="form-input-wide" data-layout="half"> <span class="form-sub-label-container" style="vertical-align:top"><input type="email" id="input_5" name="q5_email" class="form-textbox validate[Email]" data-defaultvalue="" autoComplete="section-input_5 email" style="width:310px" size="310" data-component="email" aria-labelledby="label_5 sublabel_input_5" value="" /><label class="form-sub-label" for="input_5" id="sublabel_input_5" style="min-height:13px">example@example.com</label></span> </div>
      </li>
      <li class="form-line" data-type="control_phone" id="id_6"><label class="form-label form-label-top form-label-auto" id="label_6" for="input_6_full"> Phone Number </label>
        <div id="cid_6" class="form-input-wide" data-layout="half"> <span class="form-sub-label-container" style="vertical-align:top"><input type="tel" id="input_6_full" name="q6_phoneNumber[full]" data-type="mask-number" class="mask-phone-number form-textbox validate[Fill Mask]" data-defaultvalue="" autoComplete="section-input_6 tel-national" style="width:310px" data-masked="true" placeholder="(000) 000-0000" data-component="phone" aria-labelledby="label_6 sublabel_6_masked" value="" /><label class="form-sub-label" for="input_6_full" id="sublabel_6_masked" style="min-height:13px">Please enter a valid phone number.</label></span> </div>
      </li>
      <li class="form-line" data-type="control_dropdown" id="id_7"><label class="form-label form-label-top form-label-auto" id="label_7" for="input_7" aria-hidden="false"> How can we help you? </label>
        <div id="cid_7" class="form-input-wide" data-layout="half"> <select class="form-dropdown" id="input_7" name="q7_howCan" style="width:310px" data-component="dropdown" aria-label="How can we help you?">
            <option value="">Please Select</option>
            <option value="I want to make an appointment">I want to make an appointment</option>
            <option value="I want a question for Dr. Gordon">I want a question for Dr. Gordon</option>
            <option value="I need something else">I need something else</option>
          </select> </div>
      </li>
      <li class="form-line" data-type="control_textarea" id="id_8"><label class="form-label form-label-top form-label-auto" id="label_8" for="input_8" aria-hidden="false"> Comments / Questions </label>
        <div id="cid_8" class="form-input-wide" data-layout="full"> <textarea id="input_8" class="form-textarea" name="q8_comments" style="width:648px;height:163px" data-component="textarea" aria-labelledby="label_8"></textarea> </div>
      </li>
      <li class="form-line" data-type="control_button" id="id_2">
        <div id="cid_2" class="form-input-wide" data-layout="full">
          <div data-align="auto" class="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField"><button id="input_2" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField legacy-submit" data-component="button" data-content="">Submit</button></div>
        </div>
      </li>
      <li style="display:none">Should be Empty: <input type="text" name="website" value="" type="hidden" /></li>
    </ul>
  </div>
  <script>
    JotForm.showJotFormPowered = "old_footer";
  </script>
  <script>
    JotForm.poweredByText = "Powered by Jotform";
  </script><input type="hidden" class="simple_spc" id="simple_spc" name="simple_spc" value="251464191705052" />
  <script type="text/javascript">
    var all_spc = document.querySelectorAll("form[id='251464191705052'] .si" + "mple" + "_spc");
    for (var i = 0; i < all_spc.length; i++)
    {
      all_spc[i].value = "251464191705052-251464191705052";
    }
  </script>
</form><script type="text/javascript">JotForm.ownerView=true;</script><script type="text/javascript">JotForm.isNewSACL=true;</script>
    </section>
  );
};

export default Form;
