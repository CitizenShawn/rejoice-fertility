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
        'The embryology staff of Rejoice IVF Lab, LLC provide all needed embryology services such as receiving, shipping and continued storage of embryos. Rejoice IVF Lab, LLC is accredited by The Joint Commission, and was the FIRST accredited IVF Laboratory in the Greater Knoxville area.',
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
        title="Rejoice Embryo Rescue | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header title={'Rejoice Embryo Rescue'} image={'/images/RER-logo-slide.jpg'} ctaPrimary={'Embryo Adoption'} ctaPrimaryLink={'/services/embryo-adoption'} ctaSecondary={'Donation Services'} ctaSecondaryLink={'/services/donate-embryos'} />
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
          At Rejoice Embryo Rescue, we believe that every embryo deserves a chance at life. 
          Our mission is built on the conviction that the only embryo that cannot result in a healthy baby 
          is the one never given the opportunity to be transferred. We have dedicated our practice to being 
          a sanctuary for these potential lives, accepting and caring for embryos regardless of their grade, 
          history, or how long they have been frozen.
        </p>
        <p>
          We specialize in the "rescue" of long-frozen and fragile embryos, utilizing advanced thawing protocols 
          to ensure that even those waiting decades have their moment. Whether you are looking to place your embryos 
          in a loving home or hoping to build your family, you are joining a movement that values every life. 
          Explore the pathways below to see how you can be part of this rescue story.
        </p>
        <p></p>
        
      </section>
      <Faqs data={data} />
      
      /** <Questions q={q} /> */
      <Help />
    </Layout>
  );
};

export default EmbryoAdoptionTestPage;
