/** @jsx jsx */
import { jsx } from 'theme-ui';
import Faqs from '../../components/Common/Faqs';
import Questions from '../../components/Common/Questions';
import Header from '../../components/Common/Header';
import Banner from '../../components/Common/Banner';
import Layout from '../../components/Layout';
import Help from '../../components/Common/Help';
import { Seo } from '../../components/Seo';

const EmbryoAdoptionTestPage = () => {
  const data = [
    /*  EMBRYO RECIPIENTS FAQS =================================================== */
 
  {
    question: 'What is Embryo Adoption and where do the embryos come from?',
    answer: 'During a cycle of IVF a woman's eggs are fertilized in an IVF Lab and these fertilized eggs are then incubated for several days until they are ready to be transferred into her uterus or frozen for future use. Unfertilized eggs can also be frozen and commercial egg and sperm banks are used by many fertility clinics to help patients conceive. Eggs and sperm do not have any special moral value and patients often decide to discard their frozen eggs or frozen sperm when they no longer plan to pursue any additional treatments. However, patients often struggle with the decision of what to do with their “leftover” frozen embryos. 
    Embryo Adoption represents a life-affirming option for patients who, for a variety of reasons, cannot or do not wish to use their frozen embryos left over from a prior IVF cycle.  Our donors make the selfless decision that instead of destroying/ discarding their embryos (which is what happens in the majority of the clinics), that they would like to give the embryos a chance at life, and share that gift with an adopting family.  
    Some of the donated embryos are from our affiliated on-site fertility practice, Rejoice Fertility. Some are from donors who are currently working with one of our affiliated Embryo Adoption organizations and wish to have the embryos stored with Rejoice while awaiting matching. Some are embryos previously donated to fertility clinics that are unable to provide matching services or were abandoned so the clinics have turned over the custodianship of these embryos to Rejoice for matching through our affiliated Embryo Adoption organizations. Lastly, some are from donors who have heard about the outstanding Donor Embryo pregnancy rates at Rejoice Fertility and Rejoice IVF Lab and want their embryos to have the best chance at life. Regardless of where they came from, we are happy to help be a part of their journey.
    ',
  },

  {
    question: 'Do you have restrictions? How can I determine if I am a good candidate for Embryo Adoption? ',
    answer: 'Yes, there are both medical and non-medical restrictions.  
            <br />

            <p>Medical restrictions include no contraindication to pregnancy as well as screening criteria that address a patient’s age, BMI and her ability to carry a pregnancy. Patients who are interested in pursuing Embryo Adoption need to undergo some basic tests to determine if there are any issues that would need to be addressed prior to undergoing a frozen embryo transfer with adopted embryos.</p>
            <p>Medical clearance prior to Embryo Adoption is determined by the fertility physician at the clinic where a patient plans to have her embryo transfer and usually involves a consultation to review a patient’s medical/reproductive history, a pelvic ultrasound, an assessment of the inside of the uterus (saline sonogram, hysteroscopy or hysterosalpingogram), and basic laboratory screening for general health including evidence of STIs such as Hepatitis B, Hepatitis C and HIV. Different clinics may have different restrictions in terms of patient age, BMI and specific tests required to determine that a patient is medically cleared for a frozen embryo transfer with adopted embryos. Patients who have had recent fertility testing may not need to repeat ultrasounds or other testing to be medically cleared for Embryo Adoption at Rejoice Fertility.</p>
            <p>The non-medical restrictions are determined by the affiliated Embryo Adoption organizations. Rejoice Fertility is a medical practice, and we rely upon our affiliated organizations to screen and educate couples interested in Embryo Adoption separate from any medical evaluation. 
              Similarly, Rejoice Embryo Rescue (RER) is not an “adoption agency” but rather RER could be thought of as the “orphanage” that coordinates receiving and storing of donated embryos. All adopting parents must be approved through one of our affiliated faith-based Embryo Adoption organizations.   These affiliates have similar requirements to each other, and the most common requirements are:</p>
              <ul>
                <li>Married heterosexual couple</li>
                <li>Wife must be medically cleared to carry her own pregnancy (no surrogates/gestational carriers)</li>
                <li>Wife’s age must be maximum of 48 years old</li>
                <li>Wife & Husband must complete and get approval from a Home Evaluation or Home Study.  If the evaluation was not performed by one of our affiliates, then you must have it updated/approved by one of them</li>
              </ul>

              <p>Although Embryo Adoption is an excellent option for many couples, there are situations where a woman is not a good candidate for Embryo Adoption. </p>
              <p>For patients seeking to have their frozen embryo transfer at Rejoice Fertility here in Knoxville, the first step is to have a consultation appointment (in person or virtual) to discuss your medical history and interest in Embryo Adoption. Follow this link to schedule a free 15- minute virtual consultation to find out if Embryo Adoption may be a good option for you. <a href="https://rejoicefertility.com/free-consultations">https://rejoicefertility.com/free-consultations</a></p>



    ',
    
},

{
  question: 'What is the mission of RER?',
  answer: 'Rejoice Embryo Rescue (RER) was created to coordinate the receipt and secure storage of human embryos awaiting ‘adoption’ by couples pursuing a future frozen embryo transfer with these donated embryos. RER works collaboratively with its affiliated faith-based Embryo Adoption organizations to facilitate frozen embryo transfers of donated embryos either at Rejoice Fertility in Knoxville, TN (where we have significantly higher live birth rates from donated embryos per transfer than the rest of the nation) or at the clinic of your choice.',
  
},

{
question: 'Can the donors change their minds after my baby is born and take him/her back?',
answer: '
          <p>No, the donors have permanently surrendered all rights to the embryos and any child(ren) born from them.</p>
          <p>Title 36 of the Domestic Relations Tennessee Code § 36-2-401 - § 36-2-403  sets the parameters for Parentage of Children Born of Donated Embryos and is closely followed in the consent form you will be signing (<a href="https://drive.google.com/file/d/1mn-NR-c3R8wOLwysjNns6vOguzmZv3hk/view">Consent for Receipt of Donated Embryos</a>) as well as in the consent that the donor family has already signed with us (<a href="https://drive.google.com/file/d/1nOSl4vtxPTq5UAlUQ2H_cFuhuyEQI4Bi/view">Consent to Donate Embryos</a>).</p>
',

},

{
question: 'Who are the approved adoption agency affiliates?',
answer: '

        <ul>
          <li><a href="https://www.flourishconsultingservicesllc.com">Lauren Wilson LMSW (Flourish Consulting Services)</a></li>
          <li><a href="https://nightlight.org/snowflakes-embryo-adoption-donation/">Nightlight’s Snowflakes Embryo Adoption Program</a></li>
          <li><a href="https://www.christianadoptionconsultants.com">Christian Adoption Consultants</a></li>
          <li><a href="https://adoptembryos.org/">Embryo Adoption Services of Cedar Park</a></li>
          <li><a href="https://flourishadoptions.com/embryo-adoption">Flourish Adoption Ministries</a></li>
          <li><a href="https://embryosalive.com/">Embryos Alive</a></li>
        </ul>

',

},

{
question: 'What are the steps of the Embryo Adoption Process for patients doing their FET at Rejoice Fertility?',
answer: '

          <h3>Step 1: Consultation and Medical Clearance</h3><p>Not every couple is a good candidate for Embryo Adoption.  Dr. Gordon offers a free 15- minute virtual consultation (“a doxy call”) to guide you on this path.  If you choose to move forward with an FET at Rejoice, you will need to establish care by scheduling a new patient appointment onsite with us and having a few basic tests performed: A vaginal ultrasound, a saline infused sonogram (SIS) to check the inside of the uterine cavity, and a trial embryo transfer (also called a mock transfer). You may choose to have those tests performed by a fertility clinic in your geographic region if that is more convenient. However, many patients prefer to have these tests done by Dr. Gordon in Knoxville.</p>
          <h3>Step 2: Choosing Your Affiliated Embryo Adoption Facilitator</h3><p>Some patients come to Rejoice having already picked an affiliated Embryo Adoption organization with whom they wish to work but other couples have not yet chosen one. Such couples will need to choose which affiliate will facilitate their embryo adoption.</p>
          <h3>Step 3: Completing Your Home Evaluation/ Home Study</h3><p>Each affiliate will require a home study or family assessment. Home studies/family assessments evaluate living conditions and the overall readiness of adoptive parents to ensure a safe and happy placement. Typically, a social worker conducts the home evaluation; this may include components like interviews, home visit (in-person/virtual), and background checks. The home study also helps prospective parents understand and prepare for the challenges associated with raising a child who is not genetically related to them.</p>
          <h3>Step 4: Training and Preparation</h3><p>Each affiliate will require applicants to complete training to address the implications of creating or adding to their family through embryo adoption. It is important to be aware of the potential emotional, moral, ethical, and social implications of building a family through embryo adoption. You have the option to consult with a licensed therapist or specialist in embryo adoption to receive counseling and psychoeducation.</p>
          <h3>Step 5: Choosing Your Adoption Type</h3><p>One of the most important decisions when choosing to adopt an embryo is choosing between a known donor (open adoption) or non-identified donor (formerly anonymous). Each option has its own benefits and considerations, but this is a profoundly personal decision as it will determine your family dynamic down the road. Your affiliate will work with you to help educate and provide information on the option that fits best for your family.</p>
          <ul>
            <li> An open adoption gives the donor and adoptive parents a choice to communicate or potentially meet and have some degree of ongoing contact throughout the child’s life. The type of contact varies and some couples choose a semi-open adoption where you may not meet in person but email only contact or prefer to work through a third-party mediator.</li>
            <li>A non-identified donor (formerly anonymous) adoption typically does not include communication with the donors. You will still have access to genetic and medical history and photos (if provided) but their identities remain ‘anonymous.’ They won’t know who adopted the embryo, and you won’t know the identity of the donor. Please note: There is no guarantee that the donor will remain anonymous for the remainder of your child’s life, due to advancing technology and online DNA testing databases.</li>
          </ul>
          <h3>Step 6: Embryo Selection/Matching</h3>
          <p>After the home evaluation and education is complete and approved by one of our affiliates, the next step is the selection or matching of embryos. You may choose embryos from those available through your affiliate organization or you may look for a match with the embryos available through RER. When we receive word that you have been approved for matching by an affiliate, you will be sent an email granting you access to view RER’s Embryo Donor Database.   Please create an account and answer the basic intake questions.  You may then see the RER embryos available for adoption.   The precise steps in the embryo selection/matching process may vary depending on the affiliate you have chosen to facilitate your embryo selection and whether the embryo(s) are from known (open) or non-identified (formerly anonymous) donors.</p>
           <ul>
            <li><em>RER Embryos:</em> Rejoice Fertility has a database of embryos available for adoption that are comprised mostly of non-identified (formerly anonymous) donor embryos and a selection of known (open) donor embryo profiles. If you choose embryos from RER’s database, then you will be required to sign legal consents with Rejoice to receive the embryos.  (See Step 7)</li>
            <li><em>Other Agency Embryos:</em> Many of the affiliate agencies have their own embryo databases (separate from the RER database) and match embryos to adoptive families from these donors. If you choose one of their donors, as opposed to an RER donor, once you match with the affiliate agency embryos and have signed their legal documents, then you can proceed forward with having your frozen embryo transfer completed at Rejoice.</li>
          </ul>
          <h3></h3>
          <h3></h3>

',

},

{
question: 'Step 7: Completing the Legal Process',
answer: '

          <p>Embryo adoption is legally complex because the embryo is technically considered “property” rather than a child under the law in most jurisdictions.  Embryo adoption is not strictly an “adoption” because the legal definition of adoption refers to a child who is already born.  The proper terminology in TN is “embryo relinquishment and transfer of legal custodianship.” However as we are helping put these unborn children into families, we are comfortable using the word ‘adoption’ throughout our literature and website. </p>
          <p>The legal agreements will detail the relinquishment of parental rights by the donors and establish the adoptive parents as the legal parents of any child born from the embryos. If you choose to adopt RER embryos, then you (and Rejoice Fertility, PLLC) will sign a consent transferring legal custodianship of all the adopted embryos from Rejoice to you. A known/identified (open) donor adoption will require additional legal documentation referred to as an Open Donation Agreement (ODA) that outlines you and your donor’s terms for future contact.  This Agreement is drawn up by your affiliate, and the adopting family (you) pays the cost (ranges from $1800-$2000+).  This additional ODA agreement is not necessary for nonidentified (formerly anonymous) donor embryos.</p>
          <p>If you select embryos to adopt using the RER web-based database, then you will be prompted to pay donor fees at that time.  You will then be sent a link from Docusign to complete the legal consent form. It is <em>VERY IMPORTANT</em> while filling out this document that you list the correct Donor #s in the consent. Once you fill in the required information, you will be given a link to DocuSign’s Notary on Demand service to notarize this agreement virtually.  A device with a camera and microphone is required (phone or computer), and a picture ID for both partners is necessary for this step.  Both husband and wife must be available and on the call for the document to be notarized.</p>
          <ul>
            <li>Please be careful and <em>double check</em> you have not reversed any of the donor numbers, and all letters and numbers are included on the consent when you type in your selected donor(s).</li>
            <li><em>**If you chose any type of Open Donor, then you will not receive the email from Docusign until after you have been approved by the donating couple, please understand that we cannot control the speed with which the donating couple replies. **</em></li>
          </ul>
          <p>Once you have completed the online notary the document will be sent to Rejoice Fertility for review.  Typically, within 48 business hours after staff has approved, we will sign and notarize our part of the consent to make the transfer of legal custodianship complete.  You will then be sent an email to let you know that you are now the permanent legal custodians of the embryos.</p>
          <p><em>PLEASE NOTE:</em> For all types of embryo adoption, the transfer of legal custodianship of the donated embryos is not complete until the Consent for Receipt of Donated Embryos (sent by Docusign) is signed by both of you AND accepted by Rejoice.  In the event the Donor Family (in the case of Open) or Rejoice does not approve the transfer of legal custodianship of the embryos to you, then you will be refunded the donor fees collected for that particular donor.</p>
',

},

{
question: 'Step 8: Frozen Embryo Transfer (FET)',
answer: '

          <p>After the successful selection of an embryo and completion of the legal process, you can begin the process of scheduling your Frozen Embryo Transfer (FET).   Embryos that are not thawed for your FET will remain in storage at Rejoice IVF Lab (annual storage fees apply).</p>
          <p>All of us at Rejoice think that every patient should have the freedom of choice regarding which physician they chose for their medical care, do we allow our adopting families to move their embryos to their clinic of choice.</p>
          <p>Of course, we believe that Rejoice offers the best available care in addition to the fact that the embryos are already on site with us, eliminating shipping costs and unnecessary risk to the embryos during shipment. Rejoice IVF Lab, as reported by the CDC, has consistently had a <em>significantly higher live birth rate</em> per transfer with donor embryos than the rest of the nation. In addition to this proud achievement, our lab is the most experienced in the nation (and likely the world) at handling donated embryos, especially older embryos that others turn away or are unable or unwilling to thaw.</p>
          <p>Dr. Gordon and Rejoice IVF Laboratory Supervisor Sarah Atkinson hold the last TWO Guinness World Records for “Oldest Human Embryo to be Used Resulting in a Live Birth.” The birth of Thaddeus Pierce (frozen for over 30 years) in October 2025 was a story that circled the globe reaching an audience of several billion people.   If you would like to have your FET at Rejoice, please contact our front office at 865-777-0088. <a href="https://rejoicefertility.com/free-consultations">https://rejoicefertility.com/free-consultations</a></p>

',

},

  {
    question: 'Why do you call it adoption? Is it really a legal adoption?',
    answer: '
    
              <p>Embryo adoption is complex because the embryo is legally considered “property” rather than a child under the law in most jurisdictions.  Embryo adoption is not strictly an “adoption” because the legal definition of adoption refers to a child who is already born.  The proper terminology in TN is “embryo relinquishment and transfer of legal custodianship.” However, as we are helping put these unborn children into families, we are comfortable using the word ‘adoption’ throughout our literature and website.</p>
    
    ',
    
},


{
  question: 'Why do patients choose Embryo Adoption? What are the Benefits?',
  answer: '
  
            <p>There are a multitude of reasons that couples choose to pursue Embryo Adoption. Some couples have infertility but are not comfortable with creating embryos through IVF. Other couples have tried everything else and Embryo Adoption is an answer to their prayers. Some have genetic disorders they don’t want to pass on to their children; others have a heart for adoption and feel called to help the embryos waiting in limbo for a chance at life. Many patients also love that Embryo Adoption allows you to be pregnant, experience childbirth and control the prenatal environment that your unborn child experiences.  In many ways Embryo Adoption is an easier process compared with traditional domestic adoption, in addition, normally it is a faster process as well as usually much less expensive.</p>
  
  ',
  
},


{
question: 'We keep hearing about Rejoice Embryo Rescue (RER). What is RER?',
answer: '

          <p>Rejoice Embryo Rescue (RER) is a Tennessee LLC that was created to coordinate the receipt and secure storage of human embryos awaiting adoption by couples pursuing a future frozen embryo transfer with these donated embryos. RER works collaboratively with its affiliated faith-based Embryo Adoption organizations to facilitate frozen embryo transfers of donated embryos either at Rejoice Fertility in Knoxville, TN or at the clinic of the recipient couple’s choosing.</p>

',

},


{
question: 'Does RER match donors and recipients?',
answer: '

          <p>RER is not an Embryo Adoption organization and does not match donors and recipients. Instead, RER works collaboratively with Embryo Adoption organizations which currently includes Nightlight’s Snowflakes Embryo Adoption Program, Embryo Adoption Services of Cedar Park, Flourish Adoption Ministries, Embryos Alive, Christian Adoption Consultants and Lauren Wilson LMSW (Flourish Consulting Services). All matching is coordinated by one of these organizations.</p>

',

},


{
question: 'Do you recommend a specific Embryo Adoption affiliate more than the other?',
answer: '

          <p>We love all of our affiliates! They each bring something unique to the table and each offer different price points for the different levels of “hand holding” throughout the process. Some of you are already with one of our affiliates, and that’s great!  If you are not already involved with one of our affiliates, we encourage all adopting families to look through what each affiliate offers and make that decision for yourself.  We are happy to be walking through this journey with you and your chosen affiliate!</p>

',

},


{
question: 'I am confused about the different types of Embryo Adoption that I can choose?',
answer: '

          <p>Embryo donors decide the type of contact (if any) that they wish to have with you as the recipient couple adopting their embryos.  Every embryo donor profile lists this information and is marked according to their wishes as one of the (4) types listed below: </p>
          <p><em></em>“Nonidentified” (formerly known as Anonymous):</em> You will see de-identified donor profiles.  You will not know the identity of the donor family, but you will have access to the same medical information and photos (if any) provided to us as any of the other types of donations. The donor family will not be given any identifying information about you.  Please know that it is possible that future laws enacted in individual states or at a national level may require the disclosure of identities of the donors, recipients, and/or offspring resulting from this donation to any or all parties involved. Given rapidly expanding genetic testing availability, social media, and the potential for changes in law and regulations, there can be no guarantees of anonymity over time between donor linked individuals and/or donor conceived offspring.</p>
          <p><em>“Semi Open/Directed”:</em> The Donating Family will approve the family who is adopting their embryos by working with a consultant at one of our affiliates.  After you select a donor, the donating family will decide whether or not to approve the match. An additional agreement (fee paid by adopting family) coordinated by an affiliate will specify contact terms. You will not have any direct contact with the Donating Family, and minimal birth information will be provided to the donors through the affiliate.  Once a baby is born you will not have to provide ongoing updates.  You will not know the full identities of the Donor Family, and they will not know yours.  </p>
          <p><em>“Open/Directed through Agency”:</em> The Donating Family will approve the family who is adopting their embryos by working with a consultant at one of our affiliates.  After you select a donor, the donating family will decide whether or not to approve the match. An additional agreement (fee paid by adopting family) coordinated by an affiliate will specify contact terms. The donor family will utilize indirect contact provided through the affiliate for ongoing updates (such as emails, photos through the years) with the adopting family.   You will not know the full identities of the Donor Family, and they will not know yours.</p>
          <p><em>“Fully Open/Directed”:</em> The Donating Family will approve the family who is adopting their embryos by working with a consultant at one of our affiliates.  After you select a donor, the donating family will decide whether or not to approve the match. An additional agreement (fee paid by adopting family) coordinated by an affiliate will specify contact terms. The donor family will have direct contact with the adopting family for ongoing updates (such as emails, photos, phone calls, possible meetups). Your full identities will be known to the Donating Family, and you will know theirs. </p>
          <p>If you chose any form of open or semi-open embryo adoption, then one of our affiliates will be reaching out to the donor couple for their approval of the match, as well as drawing up contracts between you and the donors regarding the agreed upon levels of communication.  The donor couple could decline the match, and you would need to choose a new donor.</p>
          <p>For all types of embryo adoption with RER embryos, the transfer of legal custodianship of the donated embryos is not complete until the Consent for Receipt of Donated Embryos is signed by both of you AND accepted by Rejoice.  The fees for the donor will be collected upon selection, but in the event the Donor Family (in the case of Open) or Rejoice does not approve the transfer of legal custodianship, then you will be refunded the donor fees collected for that particular donor.</p>
          

',

},


{
question: 'How many embryos do I need to adopt?  Will they all make a baby?',
answer: '

          <p>Unfortunately, not all embryos survive thawing; and of those that are transferred, the live birth rate is roughly 50% per embryo transfer.  </p>
          <p>We recommend having at least 2 frozen embryos available when going into a cycle.  This is not mandatory but helps prevent cycle cancellation at the last minute if your embryos do not survive the thaw.    If you choose 2PN or multicell stage embryos, we recommend at least 5.  Some profiles have only 1 embryo in them, some profiles have more.  There is a limit to the # of RER donor profiles you can reserve at one time (maximum of 3 donors unless previously approved by Rejoice).  Rejoice reserves the right to cancel your reservation(s) if you select more without prior approval.</p>
          <p>In order to ensure the best outcome for your Embryo Adoption cycle please follow the requirements below:</p>
          <p>If you only want to transfer 1 embryo at a time AND you choose blastocyst stage embryos, then you must pick a donor whose embryos are frozen individually (1 frozen per device).</p>
          <p>We do not refreeze blastocyst stage embryos; a double freeze/thaw at the blastocyst stage can damage the embryo. This applies for both the current cycle AND any future sibling attempts as well.</p>


',

},

{
question: 'If we already privately adopted embryos, can we bring them to Rejoice?',
answer: '

          <p>Yes, but you still have to meet the affiliate requirements (except for home evaluation if you already are the legal owner of the embryos before you join our program), go through an embryo adoption education module, and have your adoption contract reviewed before gaining final approval from one of the affiliates to transfer your adopted embryos to Rejoice. Several of our affiliates offer specialized pricing.  As our team has the highest live birth rate per transfer from donated embryos, we don’t blame you for wanting to bring your treasured gifts to the most experienced hands in the nation!</p>

',

},


{
question: 'Do we have to have our transfer (FET) in Knoxville, or can we move the embryos to a different clinic once we adopt them?',
answer: '
          <p>All of us at Rejoice think that every patient should have the freedom of choice regarding which physician they chose for their medical care, so we do allow our adopting families to move their embryos to their clinic of choice.</p>
          <p>Of course, we believe that Rejoice offers the best available care in addition to the fact that the embryos are already on site with us, eliminating shipping costs and unnecessary risk to the embryos during shipment. Rejoice IVF Lab, as reported by the CDC, has consistently had a <em>significantly higher live birth rate</em> per transfer with donor embryos than the rest of the nation. In addition to this proud achievement, our lab is the most experienced in the nation (and likely the world) at handling donated embryos, especially older embryos that others turn away or are unable or unwilling to thaw.</p>
          <p>Dr. Gordon and Rejoice IVF Laboratory Supervisor Sarah Atkinson hold the last TWO Guinness World Records for “Oldest Human Embryo to be Used Resulting in a Live Birth.” The birth of Thaddeus Pierce (frozen for over 30 years) in October 2025 was a story that circled the globe reaching an audience of several billion people.   If you would like to have your FET at Rejoice, please contact our front office at 865-777-0088. <a href="https://rejoicefertility.com/free-consultations">https://rejoicefertility.com/free-consultations</a></p>
          <p>If instead of having your Frozen Embryo Transfer (FET) done here in Knoxville, you decide to move RER embryos to your own clinic, there will be an increase in the shipment handling fees on top of the donor fees paid through our database.  Currently these fees (only applicable if you want to move your adopted embryos to a different clinic that is not Rejoice) are an additional $3,000 for the 1st set of embryos and $1,500 for additional sets. In addition, you will be asked to pay for yearly storage ($750/yr) retroactive since the embryos originally arrived at Rejoice. You will also be responsible for the shipping fees (around $1,000) charged by Cryoport (the company used to ship embryos). None of these fees apply if the embryos remain at Rejoice for your FET.</p>
',

},


{
question: 'Does RER store embryos?',
answer: '<p>RER is supported by the embryology staff of Rejoice IVF Lab, LLC, who provide all needed embryology services such as receiving, shipping, handling and continued storage of embryos. Rejoice IVF Lab, LLC is accredited by The Joint Commission.  We are proud to have their Gold Seal of Approval.  Rejoice Fertility, Rejoice IVF Lab, and Rejoice Embryo Rescue (RER) are all onsite together in the same building in Knoxville, TN. </p>',

},


{
question: 'Do I pay storage on the embryos once adopted?',
answer: '<p>You get one year of free storage once you adopt.  After the first year, the storage fee is currently $750/year</p>',

},


{
question: 'What if I adopt embryos and then I can’t or don’t want to use them all?',
answer: '<p>After your family is complete, if you still have remaining embryos that you do not want to use, you are required to return them to Rejoice.  RER embryos may never be discarded.</p>
        <p>Please note: If you have a friend or family member who you want to take over custody of your embryos, the embryos must still first return to Rejoice’s custodianship so that your desired new adopting family can go through the proper approval through one of the affiliates and legal consents.</p>
',

},


{
question: 'How common is Embryo Adoption?',
answer: '<p>Although many IVF clinics offer Embryo Adoption / Embryo Donation, none has the depth of experience found at Rejoice Fertility. Although there are over 400,000 IVF procedures performed in the United States every year there are fewer than 3,000 cycles of Embryo Adoption performed yearly. </p>',

},


{
question: 'Why are there multiple different names for Rejoice?',
answer: '
        <p>Rejoice Embryo Rescue, LLC (RER) coordinates the screening of embryo donors and the shipping of donated embryos to Knoxville, Tennessee where they are received, stored and made available for matching through the efforts of affiliates.</p>
        <p>The Lab - Rejoice IVF Lab, LLC is a Joint Commission accredited IVF laboratory and is responsible for the receipt, storage, shipping and/or thawing and transfer of donated embryos to recipients.</p>
        <p>The Clinic - Rejoice Fertility, PLLC, provides medical services to patients seeking to conceive through a variety of treatments including embryo transfers using donated embryos. Per Tennessee State Code, the embryos adopted through RER will have been donated through an embryo relinquishment coordinated by RER to Rejoice Fertility, PLLC.  Once an adopting family selects the embryos, and all agreements and consents are signed, Rejoice Fertility, PLLC, will turn permanent legal embryo custodianship to the adopting family.</p>
',

},

{
question: 'Tell us about Rejoice IVF Lab, LLC and how our embryos will be handled?',
answer: '
          <p>In October 2024, Rejoice Fertility and Rejoice IVF Lab, LLC relocated into a state-of-the-art nearly 10,000 square ft facility in Farragut, TN that can handle a large volume of fertility procedures. Our new IVF laboratory at Rejoice has a state-of-the-art monitoring system for our cryostorage tanks. This novel system (Cryo-Sentinel) uses infrared imaging to detect early temperature changes in the embryo storage tanks alerting the staff to an issue before it is too late, which can save the embryos from a catastrophic event.</p>
          <p>Of course, we believe that Rejoice offers the best available care in addition to the fact that the embryos are already on site with us, eliminating shipping costs and unnecessary risk to the embryos during shipment. Rejoice IVF Lab, as reported by the CDC, has consistently had a significantly higher live birth rate per transfer with donor embryos than the rest of the nation. In addition to this proud achievement, our lab is the most experienced in the nation (and likely the world) at handling donated embryos, especially older embryos that others turn away or are unable or unwilling to thaw.</p>
          <p>Dr. Gordon and Rejoice IVF Laboratory Supervisor Sarah Atkinson hold the last TWO Guinness World Record for “Oldest Human Embryo to be Used Resulting in a Live Birth.” The birth of Thaddeus Pierce (frozen for over 30 years) in October 2025 was a story that circled the globe reaching an audience of several billion people.   If you would like to have your FET at Rejoice, please contact our front office at 865-777-0088. <a href="https://rejoicefertility.com/free-consultations">https://rejoicefertility.com/free-consultations</a></p>
',

},

{
question: 'What safety protocols does Rejoice have in place regarding the handling of our embryos?',
answer: '
          <p>Since 2021 Rejoice IVF Lab has been a Joint Commission accredited IVF lab, which means we have undergone a detailed and comprehensive evaluation process for years to ensure that we are and have been following best practices in all aspects of our IVF Program.</p>
          <p>Secondly, we have robust protocols when embryos arrive in Knoxville to verify each and every embryo storage device upon arrival to our facility. Arriving embryos must be accurately tracked in an inventory and we track our inventory both using paper charts but also in an excel inventory that is backed up onto an encrypted cloud service along with our EDC Embryo Donor Database. A monthly manual backup of our electronic files is performed by our Lab Supervisor onto an encrypted flash drive just in case all other methods of redundancy were to fail.</p>
          <p>Our embryo storage tanks are also double alarmed with both temperature alarms, and thermal imagining alarms for early detection of a tank failure. All alarms will call out to our personal cell phones of the lab staff including Dr Gordon if anything goes wrong, ensuring we have 365 days/24 hours a day ability to respond with a human to an emergency. Additionally, our tanks are examined by one of our embryologists (as opposed to relying on electronic means that could fail) 3x per week to test their liquid nitrogen levels. The tanks are normally filled by lab personnel on a weekly or biweekly basis as needed. Our thermal imaging cameras have a twice a day sign off when we are in the lab to ensure tank temperatures are holding steady, and a phone app that we can check on them if we aren't here. </p>
          <p>Lastly, we perform both physical tank canister inventories, as well as cross referencing with the paper files to ensure an accurate inventory. We confirm these with photographs of the cane tabs, then cross reference the photographs across our excel inventory. Lastly prior to an actual thaw, embryo storage devices are checked and double-checked with at least 2 trained technicians witnessing the identification of the embryos before they are thawed and verifying with their signatures. The physician performing the embryo transfer must also sign off on the identification of the devices before the transfer occurs. The devices from the thawed embryos remain attached to the embryology records. Finally, none of Rejoice IVF Lab's embryologists have ever been involved in any mix-up, misidentification, or mislabeling of embryos.</p>
',

},

{
question: 'How successful is Embryo Adoption?',
answer: '<p>Rejoice IVF Lab’s Success rates with FETs performed here in Knoxville with donor embryos are greater than 50% per transfer.  We are proud to be higher than the average rate in the rest of the nation, and our embryologists having helped to bring well over 1000 babies into this world!</p>',

},

{
question: 'What about couples with male factor?',
answer: '<p>With embryos, the egg and sperm are already combined before they enter our donation program, so male factor infertility in an adopting family does not matter at all.</p>',

},

{
question: 'Can couples without a fertility problem adopt embryos?',
answer: '<p>Yes!  People choose embryo adoption for many different reasons, and not all of them are because they are infertile.</p>',

},

{
question: 'How expensive is this treatment?',
answer: '
          <p>There are different fees associated with Embryo Adoption, payable to multiple different entities during different steps in the process.  The below list is not meant to be set in stone, nor all encompassing, please note your actual fees will vary, and pricing is always subject to change.</p>
          <p>As an estimate, you will pay fees to the following entities:</p>

          <h3>1. Rejoice Embryo Rescue (RER) Donor Fees</h3>
          <ul>
            <li>$450 for a Donor with 1 embryo</li>
            <li>$900 for a Donor with 2 or more embryos</li>
            <li>Please Note: If you wish to move the embryos out of Rejoice to a different clinic: additional fees of $3,000/set + $1,500 each additional set + $750/yr back storage + payment to the shipping company (usually $1,000) apply.</li>
          </ul>

          <h3>2. Rejoice Fertility and Rejoice IVF Lab Fees for Frozen Embryo Transfers (FET) at Rejoice in Knoxville, TN.</h3>
          <p>These are roughly $5,990 combined (clinic + lab) per cycle.  Contact our front desk at 865-777-0088 with questions about Rejoice clinic + lab fees for FETs performed at Rejoice.   Click the below link for detailed pricing. 
            <br /><a href="https://drive.google.com/file/d/1oii7xF7nY4Mh0S3sKSxPYQArhg7BNUvU/view">Link to Cycle Fees for Transfers at Rejoice Fertility</a></p>
          
          <h3>3. Affiliated Embryo Adoption Organization Fees</h3>
          <p>Fees are payable to the affiliated adoption agency you choose to work with. This is NOT a Rejoice fee, nor does Rejoice control this. Please see each affiliate’s page for the most updated pricing. </p>
          <p>This range can depend on what type of embryo adoption you choose, which affiliate you choose to work with, and whether or not you have had a previous home study or home evaluation performed anywhere.</p>
          <ul>
            <li>If you do not already have one- home evaluations/studies range from around $1,500 - $2,000.  If you already have a home evaluation/study there will be a much lower cost to review it (usually in the range of $325-$500+). Please ask for specifics from your chosen affiliate.</li>
            <li>Education modules – range from ~$325- $500+ depending on what is required.  Some affiliates include this if you are using their other services. Please ask for specifics from your chosen affiliate.</li>
            <li>Affiliate Program fees – range from $0 to $3,000+ Please ask for specifics from your chosen affiliate.</li>
          </ul>

          <h3>4. Medical Clearance</h3>
          <p>Prior to adopting embryos and having a Frozen Embryo Transfer (FET) you need to be medically cleared to carry a pregnancy.  Tests include: a vaginal ultrasound, a saline sonogram to check the inside of the cavity, and a trial embryo transfer (also called a mock transfer). You can have those tests performed by a fertility clinic in your geographic region if that is more convenient. However, many patients prefer to have these tests done by Dr. Gordon in Knoxville.  You may also have a free 15-min virtual appointment with Dr. Gordon to discuss what you need to do before traveling to Knoxville. <a href="https://rejoicefertility.com/free-consultations">https://rejoicefertility.com/free-consultations</a></p>
          <p>Schedule a new patient appointment – Currently $660 ($150 due upon scheduling, rest due at visit).</p>
          <ul>
            <li>Ideally visit is scheduled on cycle day 5-12 of the female patient’s cycle.</li>
            <li>Rejoice Fertility (the clinic) participates with BCBS, Cigna and Aetna, but the patient must have coverage for infertility and many do not.</li>
          </ul>
          <p>* If a patient has had the below tests done elsewhere in the past year and testing is not performed at this appointment then the cost drops to $420</p>
          <ul>
            <li>Trial Transfer</li>
            <li>Saline Infused Sonohistogram (SIS)</li>
            <li>Vaginal Ultrasound</li>
          </ul>

          <h3>5. Bloodwork</h3>
          <p>Also at the medical clearance appointment but not billed by Rejoice (billed directly by AEL laboratories if drawn while at Rejoice).  AEL will bill insurance, although there is a possibility that not all will covered.  If you have to self pay for the bloodwork the cost estimate is roughly ($330 female + $52 male).</p>

',

},

{
question: 'What tests will need to be performed in order to determine that I am medically cleared to pursue Embryo Adoption? Do I need to travel to Knoxville for those tests?',
answer: '
<p>You will need to have a few basic tests performed: A vaginal ultrasound, a saline sonogram to check the inside of the cavity, and a trial embryo transfer (also called a mock transfer).</p>
<p>You can have those tests performed by a fertility clinic in your geographic region if that is more convenient. However, many patients prefer to have these tests done by Dr. Gordon in Knoxville.</p>

',

},

{
question: 'For FETs in Knoxville: Do I need to undergo a "sham" cycle with hormones?',
answer: 'No. The vast majority of patients respond predictably to estrogen pills (estrace). If you are in the samll group of patients who require an atypical protocol then this can easily be employed in a future cycle.',

},

{
question: 'For FETs in Knoxville: Can I have a Natural Cycle FET?',
answer: 'Yes. BUT you need to have regular cycles and be willing to have closer monitoring during your cycle to ensure we do not miss ovulation.  Please note that natural cycles are harder to schedule with a higher likelihood of cancellation if your cycle does not line up to the time frame our lab is open.',

},

{
question: 'Can I see a copy of the adoption consent form before I decide?',
answer: 'Yes - you may see a copy of the consent form here: <a href="https://drive.google.com/file/d/1mn-NR-c3R8wOLwysjNns6vOguzmZv3hk/view">Click here to view consent</a>>',

},

{
question: 'Will my embryos ever be thrown away?',
answer: 'No, Rejoice Fertility, Rejoice IVF Lab, and Rejoice Embryo Rescue are all no-discard facilities, meaning no alive embryo is thrown away.  Every embryo that has a chance at life is treasured. Embryos that stop growing or degenerate and are no longer viable are sent for burial at no cost to the donors or recipients.',

},

{
question: 'Can I choose embryos that are not the same race as me?',
answer: 'Yes, our mission is to give every embryo a chance at life, even if they don’t look just like Mom & Dad!',

},

{
question: 'Will you help me choose an embryo donor?',
answer: 'Rejoice is not a matching service, you may directly select a donor out yourself on the database, or you may rely on the advice of the affiliated adoption agency to help you.  Rejoice does not advise on which embryos to select.',

},

{
question: 'Will I see photos and the medical history of the donors?',
answer: 'Most of the donor profiles have photos and medical histories for you to view.  Both nonidentified (formerly anonymous) and open will show you the same information on the database.   We only have what is visible on the database, we are not able to get more information than the donors are willing to give.',

},

{
question: 'When can I look at the donors?',
answer: 'For the privacy of our donors, you will not be granted access to view our database until you have received medical clearance, completed your education modules, and received final approval from one of our affiliated embryo adoption agencies.',

},

{
question: 'Can I put a donor profile on hold while I think about it?',
answer: 'No, in fairness to all patients, there are no “holds” on embryo donors.',

},

{
question: 'Are there videos and other resources I can read to learn more about embryo donation and adoption?',
answer: 'Yes, in fact it is recommended by the American Society of Reproductive Medicine that you take this step before embryo adoption.  You may do this counseling through any of our affiliates, and as a courtesy to our donors Lauren Wilson, LMSW has offered a discounted rate.  Please contact her directly at <a href="mailto:lauren@flourishcs.com                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ">lauren@flourishcs.com</a> for more information.',

}

  ];
  const q = [
    {
      question: 'What are the next steps that I need to take?',
      answer:
        'Per the mediation agreement signed on 8/23/24, all affected patients are being notified so that they can make their own choice via the outline above. Both parties request that patients make their choice known by Sept. 20, 2024. If you have already sent in that form, then your choice will be honored by both entities. A link to this form can be found here: <a href="https://pdf.ac/3KY2Y9">https://pdf.ac/3KY2Y9</a>',
    },
    {
      question: 'I was recently seen as a new patient (by either Dr. Gordon or Dr. Keenan) and have yet to matched with any NEDC embryos, what are my options?',
      answer:
        'If you wish to be matched with NEDC embryos, then you will remain a patient of Dr. Keenan’s. Contact Dr. Keenan’s new practice and the NEDC. If you are interested in pursuing Embryo Adoption at Rejoice then you can do so with embryos matched to you by either <a href="https://nightlight.org/snowflakes-embryo-adoption-donation/">Snowflakes Embryo Adoption</a> or <a href="https://adoptembryos.org/">Embryo Adoption Services of Cedar Park</a>. Please contact Rejoice at any time if you have any questions.',
    },
    {
      question: 'I am a Rejoice patient (previously seen by Dr. Gordon or Dr. Keenan) but have used all of my NEDC donated embryos, what are my options?',
      answer: 'Refer to above question for all options available.',
    },
    {
      question: 'Where are my embryos now?',
      answer:
        'Your adopted embryos remain where they have always been since they arrived here in Knoxville - safe and sound in the cryostorage tanks (also called dewars) at Rejoice Fertility under the care of our <a href="https://rejoicefertility.com/about-us">experienced embryology team.</a>',
    },
    {
      question: 'When will my embryos be moved if I choose to transfer my care to Dr. Keenan’s new practice?',
      answer: 'Per the agreement of both parties all of the embryos for patients who wish to continue their care with Dr. Keenan and all of the unmatched embryos will hopefully be moved to Dr. Keenan’s new practice location by October 15, 2024.',
    },
    {
      question: 'When will embryo transfers resume?',
      answer:
        'At Rejoice, getting a brand new IVF Laboratory up and running requires diligence and attention to detail. We are scheduling our first group of embryo transfers in the <a href="https://www.facebook.com/story.php?story_fbid=10211808426682206&id=1715810446&mibextid=WC7FNe&rdid=kbiLyaCUi6CHrBOW">new Rejoice Fertility building</a> for the last week of September. During October we will be performing FETs over 3 weeks in order to catch up on patients who have been waiting patiently for their FETs. If you choose to continue your care with Dr. Keenan, please contact his new practice in Powell, TN or the NEDC',
    },
    {
      question: 'What can I do if I have additional questions or concerns?',
      answer:
        'Dr. Gordon will continue to make himself available to all patients with questions or concerns. Patients are welcome to contact him via phone, email (<a href="mailto:dr.gordon@rejoiceivf.com">dr.gordon@rejoiceivf.com</a>) or via a video call using the DOXY.ME video conferencing system (please call Taylor or Alyssa at 865-777-0088 to schedule). All of us here at Rejoice are so sorry for any distress that this situation has caused and we are so happy that patients will be able to continue their care with the physician, clinical and embryology team of their choice!',
    },
  ];
  return (
    <Layout>
      <Seo
        title="Knoxville Embryo Adoption | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header title={'Embryo Adoption'} image={'/images/embryo-adoption-crop.jpg'}/>
      <Header
          title={'Learn How A Record Breaking Baby Was Born'}
          description={
            'Article by MIT Technology Review, Video by WVLT'
          }
          image={'/images/record-breaking.png'}
          ctaPrimary={'Read the Article Here'}
          ctaPrimaryLink={'https://www.technologyreview.com/2025/07/29/1120769/exclusive-record-breaking-baby-born-embryo-over-30-years-old/'}
          ctaSecondary={'Watch the Video'}
          ctaSecondaryLink={'https://www.wvlt.tv/video/2025/08/04/knoxville-clinic-helps-couple-welcome-baby-nearly-31-year-old-frozen-embryo/'}
        />
      <section
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          px: ['1rem', null, null, '2rem'],
          py: ['2rem', null, null, '4rem'],
          variant: 'text.normal',
        }}
        className="content"
      >
        <p>
        Some have estimated that there may be as many as 5,000,000 frozen embryos stored in IVF clinics across the United States but no one is really sure of the actual number with a range of 600,000 to 1.5 million frequently quoted.
        </p>
        <p>
        Some couples are willing to donate their frozen embryos to recipient couples who desire to build their family through embryo adoption.
        </p>
        <p>
          Our clinic, Rejoice Fertility, has the most experience with Embryo Adoption in the entire world. We provide the medical care and expertise to patients matched with adopted embryos through our affiliated embryo adoption organizations:
        <a href='/services/embryo-adoption-organizations/nightlight'>Nightlight Christian Adoptions Snowflakes Embryo Adoption Program</a>, 
          <a href='/services/embryo-adoption-organizations/eas-cedar-park'>Embryo Adoption Services of Cedar Park</a>, <a href='https://embryosalive.com/'>Embryos Alive</a> and <a href='https://flourishadoptions.com/embryo-adoption'>Flourish Embryo Adoption</a>. 
            </p>
        <p>
        Patients seeking to adopt embryos will undergo an evaluation to ensure that there are no medical
        contraindications to Embryo Adoption (performed either here in Knoxville or with a local fertility
        clinic close to where they live) and then undergo their embryo transfers in Knoxville. 
        </p>
        <p>
        Most patients will only need to spend a day or two in Knoxville for their embryo transfer although
        those seeking to have a Natural Cycle Frozen Embryo Transfer may have to spend a bit longer in order
        to complete the necessary monitoring of their natural cycle.
        </p>
        <h3><strong>TOP REASONS TO CHOOSE REJOICE FERTILITY FOR EMBRYO ADOPTION</strong></h3>
        <h4><strong>1. EXPERTISE</strong></h4>
        <p>
            Our embryology team has the most experience of any IVF program with the thawing and care of donated embryos, especially those that have been frozen for decades. Past successes include amazing outcomes such as the delivery of healthy twins after the transfer of embryos stored for 30 years!
              </p>
        <h4><strong>2. EXPERIENCE</strong></h4>
        <p>
            Our team has coordinated hundreds of frozen embryo transfer cycles for patients
            pursuing embryo adoption.
              </p>
        <h4><strong>3. EXCELLENCE</strong></h4>
        <p>
            All embryos are handled with the upmost care. Rejoice IVF was the FIRST accredited
            IVF Program in the Greater Knoxville Area having secured this accreditation by
            The Joint Commission back in 2021.
                </p>
        <h4><strong>4. EXPANSION</strong></h4>
        <p>
            We moved into our new state-of-the-art IVF Laboratory and clinical space in October 2024. Our office has many patient-friendly features such as Private Rooms for pre-transfer discussions with Dr. Gordon and the embryology team.
              </p>
        <h4><strong>5. EMPATHY</strong></h4>
        <p>
            All of us here at Rejoice Fertility believe that every embryo deserves a chance at life and that the only embryo that cannot result in a healthy baby is the embryo not given the opportunity to be transferred into a patient.
              </p>
      </section>
      <Header title={'Nightlight Christian Adoptions'} description={'Snowflakes Embryo Adoption Program'} image={'/images/nightlight-christian-adoptions-header.jpeg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'/services/embryo-adoption-organizations/nightlight'} ctaSecondary={''} ctaSecondaryLink={''} />
      <Header title={'Embryo Adoption Services of Cedar Park'} description={''} image={'/images/cedar-park.jpg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'/services/embryo-adoption-organizations/eas-cedar-park'} ctaSecondary={''} ctaSecondaryLink={''} />
      <Header title={'Flourish Adoption Ministries'} description={''} image={'/images/flourish-logo.jpg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'/services/embryo-adoption-organizations/flourish'} ctaSecondary={''} ctaSecondaryLink={''} />
      <Header title={'Embryos Alive'} description={''} image={'/images/EmbryoAlive.png'} ctaPrimary={'Learn More'} ctaPrimaryLink={'/services/embryo-adoption-organizations/embryos-alive'} ctaSecondary={''} ctaSecondaryLink={''} />
      <Faqs data={data} />
      <section
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          px: ['1rem', null, null, '2rem'],
          py: ['2rem', null, null, '4rem'],
          variant: 'text.normal',
        }}
        className="content"
        id="NEDC"
      ></section>
      <Header title={'Rejoice Fertility Separation from NEDC'} description={''} image={'/images/pexels-pixabay-51953.jpg'} ctaPrimary={''} ctaPrimaryLink={''} ctaSecondary={''} ctaSecondaryLink={''} />
      <section
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          px: ['1rem', null, null, '2rem'],
          py: ['2rem', null, null, '4rem'],
          variant: 'text.normal',
        }}
        className="content"
      >
        <p>
        Rejoice ended its affiliation with the National Embryo Donation Center in September 2024. A number of patients who adopted embryos through the NEDC remained with Dr. Gordon / Rejoice Fertility through a Mediation Agreement. Thank you. 
        </p>
      </section>
      <Help />
    </Layout>
  );
};

export default EmbryoAdoptionTestPage;
