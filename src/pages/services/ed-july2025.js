/** @jsx jsx */
import { jsx } from 'theme-ui';
import Faqs from '../../components/Common/Faqs';
import Questions from '../../components/Common/Questions';
import Header from '../../components/Common/Header';
import Banner from '../../components/Common/Banner';
import Layout from '../../components/Layout';
import Help from '../../components/Common/Help';
import { Seo } from '../../components/Seo';

const EmbryoDonationPage = () => {
  const data = [
    {
      question: 'What is the mission of RER?',
      answer:
        "Rejoice Embryo Rescue (RER) is a Tennessee LLC that was created to coordinate the receipt and secure storage of human embryos awaiting adoption by couples pursuing a future frozen embryo transfer with these donated embryos. RER works collaboratively with its affiliated faith-based Embryo Adoption agencies to facilitate frozen embryo transfers of donated embryos either at Rejoice Fertility in Knoxville, TN or at the clinic of the recipient couple’s choosing.",
    },
    {
      question: 'Does RER match donors and recipients?',
      answer:
        'No. RER is not an Embryo Adoption agency and does not match donors and recipients. RER works collaboratively with Embryo Adoption agencies which include Snowflakes, Embryo Adoption Services of Cedar Park and Flourish Adoption Services. All matching is performed by these agencies.',
    },
    {
      question: 'Does RER store embryos?',
      answer:
        'The embryology staff of Rejoice IVF Lab, LLC provide all needed embryology services such as receiving, shipping and continued storage of embryos. Rejoice IVF Lab, LLC is accredited by The Joint Commission, and is currently the ONLY accredited IVF Laboratory in the Greater Knoxville area.',
    },
    {
      question: 'Can we donate our embryos directly to RER?',
      answer: 'Yes. RER will accept donated embryos which will then be matched through the efforts of our affiliated Embryo Adoption agencies.',
    },
    {
      question: 'Is there an advantage to donating our embryos directly to RER?',
      answer:
        'If your embryos are currently stored at Rejoice then you will not be responsible for any outstanding storage charges when you donate your embryos through RER. If you wish to move your embryos to another clinic, embryo adoption agency or storage facility then you must first pay your outstanding storage fees. RER stores donated embryos FREE OF CHARGE for embryo donors whose embryos are to be thawed and transferred by Rejoice IVF Lab, LLC. If your embryos are matched with a couple who wish to have their FET at a different clinic, then shipping and handling fees will be charged to and paid for by the recipients (usually about $1,500).',
    },
    {
      question: 'Is there an advantage to working with a specific Embryo Adoption Agency like Snowflakes, Embryo Adoption Solutions of Cedar Park or Flourish Embryo Adoption as opposed to donating our embryos directly to RER?',
      answer: 'Some patients wishing to donate their embryos have decided that they elected to work with a particular Embryo Adoption Agency to place their embryos with an adopting family. In such cases you can further discuss with that agency whether or not you wish to have your embryos shipped and stored at Rejoice while awaiting adoption. The adopting couple can elect to have their embryo transfer at Rejoice or if the adopting couple wishes to have their embryo transfer at another clinic, then RER will coordinate the shipping of the embryos to that clinic. In such cases, the adopting family will not be responsible for any storage fees for the time that the embryos were under the care of RER, but the adopting family will be responsible for shipping and handling fees associated with the moving of the embryos into and out of RER.',
    },
    {
      question: 'Why is RER not charging storage fees in such cases?',
      answer:
        'Our name says it all...Rejoice Embryo RESCUE. We want to encourage patients to choose a life-affirming option when faced with the difficult decision to relinquish their embryos. Since economic concerns are often part of the decision we wish to remove any economic barriers to patients placing their embryos up for adoption.',
    },
    {
      question: 'How do our embryos get matched if we donate directly through RER?',
      answer:
        'All the embryos donated directly to RER are made available to our affiliated Embryo Adoption agencies. Counselors at these agencies will review your profile and if one agency believes that they have a potential match for you, then your embryos will be placed on a temporary hold while that match is explored. If the match does not work to the satisfaction of you and the recipient couple, then your embryos will be available immediately for matching with another couple. The counselors are motivated to place each and every set of embryos into a loving family.',
    },
    {
      question: 'We are currently working with an Embryo Adoption agency and wonder if we should request that our embryos be moved to RER while awaiting matching?',
      answer:
        'RER stores donated embryos FREE OF CHARGE. However, the free storage of embryos awaiting matching is only possible if the embryos were donated to RER or one of its affiliated Embryo Adoption agencies.',
    },
    {
      question: 'Where do the embryos placed into RER come from?',
      answer:
        'Some of the donated embryos are from our affiliated fertility practice Rejoice Fertility. Some are from donors who are currently working with one of our affiliated Embryo Adoption agencies and wish to have the embryos stored with RER while awaiting matching. Some are embryos previously donated to fertility clinics that are unable to provide matching services and so the clinics have turned over the stewardship of these embryos to RER and its affiliated Embryo Adoption agencies. Lastly, some are from donors who have heard about the outstanding Donor Embryo pregnancy rates at our fertility practice (Rejoice Fertility) and want their embryos to have the best chance at life. Regardless of where they came from, we are happy to help be a part of their journey.',
    },
    {
      question: "Are there any embryos you don’t accept?",
      answer:
        'RER accepts all embryos for donation regardless of quality, length of time frozen, type of device, method of freeze or stage of development of the embryo(s). If the embryos are PGT tested and have abnormal or mosaic results, we can only accept them if there is already a recipient willing to adopt them.',
    },
    {
      question: 'What if there is no FDA lab testing?',
      answer:
        'RER can still accept donation of the embryos.',
    },
    {
      question: 'Will embryos ever be thrown away?',
      answer:
        'No, Rejoice Fertility, Rejoice IVF Lab, and Rejoice Embryo Rescue are all collectively no-discard facilities. Every embryo that has a chance at life is treasured. Embryos that stop growing or degenerate and are no longer viable are sent for burial at no cost to the donors or recipients.',
    },
    {
      question: 'Does RER own the embryos that are awaiting matching?',
      answer:
        'IVF and embryo cryopreservation and transfer are areas in which legal principles and requirements have not been firmly established. Until your embryos are adopted by a recipient couple you will remain as the Legal Custodians, and thus you will need to give your consent for continued embryo cryopreservation of your embryos. The only exception to this would be in cases of Closed Embryo Adoption. In cases of Closed Embryo Adoption, Rejoice Embryo Rescue, LLC will be considered the Legal Custodians of your embryos from the time that they are received in Knoxville until they are adopted. At that time, the adopting couple become the Legal Custodians of your embryos. We would expect that they would remain the Legal Custodians until all the embryos are ultimately transferred into the uterus of the adopting parent. In cases of Open Embryo Adoption, the Adopting Parents will become the Legal Custodians of your embryos once the embryos are transferred into the uterus of the recipient unless all parties agree to an earlier transfer of custodianship.',
    },
    {
      question: 'Can Embryo Donors request that their embryos be returned to them for their own use or if they have found a recipient who wishes to adopt their embryos and have a transfer at another IVF clinic?',
      answer:
        'Yes, until the embryos are adopted the Embryo Donors can request that their embryos be returned to them for their own use or if they have found a recipient who wishes to adopt their embryos and have a transfer at another IVF clinic.',
    },
    {
      question: 'Tell us about Rejoice IVF Labs, LLC and how our embryos will be handled?',
      answer:
        'In October 2024, Rejoice Fertility and Rejoice IVF Lab, LLC relocated into a state-of-the-art nearly 10,000 square feet facility in Farragut, TN that can handle a large volume of fertility procedures. The new IVF laboratory at Rejoice has a state-of-the-art monitoring system for our cryostorage tanks. This novel system (Cryo-Sentinel) uses infrared imaging to detect early temperature changes in the embryo storage tanks alerting the staff to an issue before it is too late to correct an issue and save the embryos from a catastrophic event.',
    },
    {
      question: 'What safety protocols to you have in place regarding the handling of our embryos?',
      answer:
        "Firstly, Rejoice IVF Lab is a Joint Commission accredited IVF lab which means we have undergone a detailed and comprehensive evaluation process to ensure that we are following best practices in all aspects of our IVF Program. Secondly, we have robust protocols when embryos arrive in Knoxville via Cryoport, the world leader in embryo shipping, to verify each and every embryo storage device upon arrival to our facility. Arriving embryos must be accurately tracked in an inventory and we track our inventory both using paper charts (yes, very Old School), but also in an excel inventory that is backed up onto an encrypted cloud service. A monthly manual backup of our electronic files is performed by our Senior Embryologist Sarah Atkinson onto an encrypted flash drive just in case all other methods of redundancy were to fail. Thirdly, our embryo storage tanks are double alarmed with both temperature alarms, and thermal imagining alarms for early detection of a tank failure. All alarms will call out to our personal cell phones of the lab staff of 5 including Dr Gordon if anything goes wrong, ensuring we have 365 days/24 hours a day ability to respond with a human to an emergency. Additionally, our tanks are examined by one of our embryologists (as opposed to relying on electronic means that could fail) 3x per week to test their liquid nitrogen levels. The tanks are normally filled by lab personnel on a weekly or biweekly basis as needed. Our thermal imaging cameras have a twice a day sign off when we are in the lab to ensure tank temperatures are holding steady, and a phone app that we can check on them if we aren't here. Fourthly, we perform both physical tank canister inventories, as well as cross referencing with the paper files to ensure an accurate inventory. We confirm these with photographs of the cane tabs, then cross reference the photographs across our excel inventory. Lastly prior to an actual thaw, embryo storage devices are checked and double-checked at least 2 technicians witnessing and verifying with their signatures the identification of the embryos before they are thawed. The physician performing the embryo transfer must sign off on the identification of the devices before the transfer occurs. The devices from the thawed embryos remain attached to the embryology records. Finally, none of Rejoice IVF Lab's embryologist have ever been party to any mix-up, misidentification, mislabeling, or miscount of embryos.",
    },
    {
      question: 'Who can we speak to if we have additional questions or concerns?',
      answer:
        'We recognize that the decision to relinquish your embryos to an adopting couple is not an easy one and our staff is happy answer all of your concerns regarding this decision. Please feel free to reach out to us via email or phone and one of our staff will get back to you ASAP.',
    },
  ];
  const q = [
    {
      question: 'Step 1. Donor Screening',
      answer:
        'The Food and Drug Administration (FDA) is charged with monitoring IVF clinics that offer egg, sperm or embryo donation. In order to be registered with the FDA, we must follow certain protocols when it comes to screening embryo donors. The screening process involves filling out forms and a review of screening tests that were likely performed at the time of your IVF cycle. Once you have applied to donate your embryos you will need to complete a series of forms (listed at the end of this letter). You will be provided with the opportunity to request counseling and support regarding the decision to donate your embryos. Information regarding your IVF cycle and the embryos that are frozen will be requested from your IVF clinic. Additional blood tests are part of the screening process as noted by the FDA, but you can decline to have these blood tests performed. Your decision will not impact your ability to donate your embryos. Once all the screening and testing has been reviewed, then you will move to Step 2.',
    },
    {
      question: 'Step 2: Shipping and storage of your embryos',
      answer:
        "Rejoice Embryo Rescue, LLC will coordinate the shipping of your embryos to Rejoice IVF Lab, LLC using Cryoport, a trusted partner that most IVF clinics to use to ship embryos. Until they are adopted your embryos will be stored at Rejoice IVF Lab, LLC a The Joint Commission accredited IVF laboratory. You will not be billed for the shipping or storage of your embryos unless at some point you change your mind after your embryos have arrived in Knoxville. <br /><br />Rejoice IVF Lab, LLC has robust protocols so that when embryos are shipped in we verify each and every device upon arrival to our facility, ensuring that the number arriving is accurately tracked in our inventory. <br /><br />We have a dual tank monitoring systems that provide 24/7 continuous monitoring (industry standard is only one monitoring system). Our monitoring systems monitor the temperature inside the tanks and send alerts via cell signal if the temperature falls below the threshold. Our thermal video surveillance monitoring system (Cryosentinel) checks the outside of the storage tanks for early indication of a vacuum seal breach and this system allows us to remotely verify the status and integrity of all tanks before a problem arises. <br /><br />All alarms will call out to the personal cell phones of all five of our embryology lab staff, ensuring we have 365 days/24 hours a day coverage with an on-site staff member to respond to any emergency. In addition, the levels of liquid nitrogen in our tanks are measured by one of our embryologists (as opposed to relying on electronic means that could fail) 3x per week. Tanks are maintained by our staff and the liquid nitrogen is replenished on a regularly scheduled basis.",
    },
    {
      question: 'Step 3: Matching of your embryos with an adopting family',
      answer: 'Once your embryos have arrived at Rejoice IVF Lab, they will be entered into our donor database which can be searched by the faith-based adoption agencies with whom we are affiliated. At present these include: <br /><br /><br />Snowflakes (Nightlife Christian Adoptions) <br /><br /><br />Embryo Adoption Services of Cedar Park  <br /><br /><br />Flourish Adoption Ministries  <br /><br /><br />If you are more comfortable with a closed Embryo Adoption, then at this point your job is done once you have completed and signed all of the necessary forms. and we thank you for making the difficult but life-affirming decision to place your embryos up for adoption. <br /><br />If you have elected to pursue Open or Semi-open Embryo Adoption, then once a potential recipient match is found, the adoption agency (one of the 3 listed above) will reach out to you for approval. The agency will handle the legal contracts specifying the degree of contact between you and the recipient family. <br /><br />Once adopted, your embryos may remain at Rejoice IVF Lab if the adopting couple has elected to have their frozen embryo transfer performed here in Knoxville at Rejoice Fertility, or if the adopting couple elects (and you agree at the time of your donation), the embryos may be shipped to any accredited IVF laboratory by Rejoice IVF Lab using Cryoport. ',
    },
    {
      question: 'Step 4: Embryo transfer',
      answer:
        "The adopting couple are welcome to travel to Knoxville for their transfer. We are excited to have the highest donor embryo pregnancy rates in the country. Recipients who choose to undergo their frozen embryo transfer with us, can be sure that we follow comprehensive safety protocols. All embryos that are scheduled for thawing must be double-checked prior to the thaw by two laboratory staff members. These two technicians must witness and verify with their signatures the identification of any embryo before it is thawed. We also require the physician performing any transfer to confirm the identification of the actual embryo storage devices before the transfer. <br /><br />Rejoice IVF Lab is proud to be Knoxville's only accredited IVF lab, having earned our Joint Commission seal of approval every year since our initial accreditation. The quality control initiatives required by the Joint Commission are extremely rigorous and hold us to the utmost standards of care. In the world of fertility, there is no room for error. Following protocols, procedures, and regulations in an ethical manner are our top priority to protect our patients, and the lives entrusted to us. Rejoice IVF Lab embraces a culture of patient safety and complete transparency in all aspects of patient care. <br /><br />In addition, Rejoice IVF Lab has unparalleled experience in handling the multitude of different embryo storage devices and the associated protocols and techniques needed to successfully thaw older embryos along with those frozen more recently. We have thawed thousands of donated embryos and will do our very best to safely thaw your embryos. In fact, our very own Dr Gordon and Lab Supervisor/Head Embryologist, Sarah Atkinson had the privilege of having thawed and transferred the Guinness World Record breaking oldest embryos to have ever achieved a pregnancy. Those embryos were frozen for 30 years. <br /><br />No recipient is ever FORCED to travel to Knoxville (unless you, as the Donor were to require it, so please let us know if those are your wishes). We think patients should have the choice as to where they have their medical care. Of course, we hope recipient families choose to stay with Rejoice for the transfer, but ultimately, we believe it's all about the lives of the embryos, and helping further the mission by getting them adopted into loving families. We currently have recipients waiting for embryos so your embryos will likely be matched quickly. <br /><br />If you choose to donate your embryos to Rejoice, please know we will handle them with the utmost care, skill and respect. We would love to be by your side as you give this incredible gift to another couple.",
    },
  ];
  return (
    <Layout>
      <Seo
        title="Knoxville Embryo Donation | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header title={'Embryo Donation'} image={'/images/RER-logo-slide.jpg'} ctaPrimary={'Donate Embryos'} ctaPrimaryLink={'#form-section'} ctaSecondary={'Overview'} ctaSecondaryLink={'#overview'}/>
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
        <p>All of us here at Rejoice would like to thank you for considering embryo donation; a precious gift so very treasured by our recipient couples. Rejoice Embryo Rescue, LLC would love to be a part of your journey to give the gift of life. We are excited that patients who wish to donate their frozen embryos to couples pursuing Embryo Adoption now have another option.</p>
        <p>RER is not an Embryo Adoption agency and does not match donors and recipients. RER works collaboratively with Embryo Adoption agencies which include Snowflakes, Embryo Adoption Services of Cedar Park and Flourish Adoption Services. All matching is performed by these agencies. </p>
      </section>
      <Header title={'DONATE NOW'} image={'/images/embryos-child-1.jpg'} description={`If you have embryos that you wish to donate to another couple, then we would love to help you give the gift of life.\n
      Patients who wish to donate their IVF frozen embryos through either Open or Closed Embryo Adoption now have another option.\n
      Rejoice Embryo Rescue and its 3 affiliated faithbased Embryo Adoption Services are ready to help you through this difficult decision and process of placing your embryos with another family.\n
      Adoption counselors will work to place your embryos in families looking to adopt and you can determine your level of contact with the adopting family.`} ctaPrimary={'Start the Process'} ctaPrimaryLink={'#form-section'}/>
      <Header title={'What we ask of our donors'} image={'/images/embryo-child-2.jpg'} description={'Sign our consent form \nFill out a health questionaire \nProvide information for an adopting family \nDecide between open and closed adoption'}  ctaPrimary={'Start the Process'} ctaPrimaryLink={'#form-section'}  ctaSecondary={''} ctaSecondaryLink={'#'}/>
      <Header title={'What do donors NOT have to do'} image={'/images/embryos-child-3.jpg'} description={'Pay any fees for embryo storage \nPay any shipping fees to move their embryos \nFind a family to adopt their embryos'}  ctaPrimary={'Start the Process'} ctaPrimaryLink={'#form-section'}  ctaSecondary={''} ctaSecondaryLink={'#'}/>
      <Faqs data={data} />
      <section
      sx={{
        bg: '#47E4E0',
        py: '4rem',
        scrollMarginTop: 100,
      }}
      id="form-section"
    >
        
    <iframe
          title="Jotform"
          src="https://form.jotform.com/251745430663053"
          style={{ width: '100%', height: '1000px', border: 'none' }}
          allowFullScreen
    >
    </iframe>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-251745430663053']", "https://form.jotform.com/")</script>
    </section>
    <section
            sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0px',
          px: ['1rem', null, null, '2rem'],
          py: ['2rem', null, null, '4rem'],
          variant: 'text.normal',
        }}
        id="overview">
        <Banner title={'Overview of the Process'} image={'/images/RER-logo-slide.jpg'} ctaPrimary={''} ctaPrimaryLink={'#'} ctaSecondary={''} ctaSecondaryLink={'#'} description={'Rejoice Embryo Rescue, LLC and its affiliated faith-based Embryo Adoption Services are ready to help you place your embryos with an adopting family. Adoption counselors with one of our affiliates will work to place your embryos in families looking to adopt and you can determine your level of contact, if any, with the adopting family. Rejoice accepts all embryos for donation regardless of how they were frozen, type of device, medical history, age or embryo quality. The only embryos Rejoice cannot accept are PGT tested ABNORMAL embryos unless there is a recipient already willing to accept them for transfer. (Rejoice will consider PGT tested low-mosaic embryos on a case-by-case basis). Our goal is to keep your embryos together if at all possible and so adopting families adopt the entire set of embryos in order to encourage this goal.'}/>
        <Questions q={q} />  
      <Help />
    </Layout>
  );
};

export default EmbryoDonationPage;
