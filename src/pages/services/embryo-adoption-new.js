/** @jsx jsx */
import { jsx } from 'theme-ui';
import Faqs from '../../components/Common/Faqs';
import Questions from '../../components/Common/Questions';
import Header from '../../components/Common/Header';
import Layout from '../../components/Layout';
import Help from '../../components/Common/Help';
import { Seo } from '../../components/Seo';

const EmbryoAdoptionTestPage = () => {
  const data = [
    {
      question: 'What are the next steps that I need to take?',
      answer:
        'Per the mediation agreement signed on 8/23/24, all affected patients are being notified so that they can make their own choice via the outline above. Both parties request that patients make their choice known by September 30, 2024. If you have already sent in that form, then your choice will be honored by both entities. A link to this form can be found <a href="https://pdf.ac/3KY2Y9">HERE</a>',
    },
    {
      question: 'I was recently seen as a new patient (by either Dr. Gordon or Dr. Keenan) and have yet to matched with any NEDC embryos; what are my options?',
      answer:
        'If you wish to be matched with NEDC embryos, then you will remain a patient of Dr. Keenan. Contact his new practice and the NEDC. If you are interested in pursuing <a href="/services/embryo-adoption">Embryo Adoption at Rejoice</a> then you can do so with embryos matched to you by either Snowflakes Embryo Adoption or Embryo Adoption Services of Cedar Park. Please contact Rejoice at any time if you have any questions.',
    },
    {
      question: 'I am a Rejoice patient (previously seen by Dr. Gordon or Dr. Keenan) but have used all of my NEDC donated embryos, what are my options?',
      answer:
        'Please refer to the above question for all options available.',
    },
    {
      question: 'Where are my embryos now?',
      answer: 'Your adopted embryos remain where they always been since they arrived here in Knoxville - safe and sound in the cryostorage tanks (also called dewars) at Rejoice Fertility under the care of our experienced embryology team.',
    },
    {
      question: 'When will my embryos be moved if I choose to transfer my care to Dr. Keenan new practice?',
      answer:
        "Per the agreement of both parties all of the embryos for patients who wish to continue their care with Dr. Keenan and all of the unmatched embryos will hopefully be moved to Dr. Keenan's new practice location by October 15, 2024.",
    },
    {
      question: 'When will embryo transfers resume?',
      answer: 'At Rejoice, getting a brand new IVF Laboratory up and running requires diligence and attention to detail. We are scheduling our first group of embryo transfers in the new Rejoice Fertility building for the last week of September. During October we will be performing FETs over 3 weeks in order to catch up on patients who have been waitng patiently for their FETs. If you choose to continue your care with Dr. Keenan, please contact his new practice in Powell, TN or the NEDC.',
    },
    {
      question: 'What can I do if I have additional questions or concerns?',
      answer:
        'Dr. Gordon will continue to make himself available to all patients with questions or concerns. Patients are welcome to contact him via phone, email (dr.gordon@rejoiceivf.com), or via a video call using the DOXY.ME video conferencing system (please call Taylor or Alyssa at 865-777-0088 to schedule). All of us here at Rejoice are so sorry for any distress that this situation has caused and we are so happy that patients will be able to continue their care with the physician, clinical and embryology team of their choice!',
    },
    {
      question: 'I have been matched with embryos now what do I do?',
      answer:
        'You can schedule an in-person or virtual consult with Dr. Gordon and then based upon that consultation you will need to have a few basic tests performed: A vaginal ultrasound, a saline sonogram to check the inside of the cavity, and a trial embryo transfer (also called a mock transfer).',
    },
    {
      question: 'Do I need to travel to Knoxville for those tests?',
      answer:
        'No. You can have those tests performed by a fertility clinic in your geographic region if that is more convenient. However, many patients prefer to have these tests done by Dr. Gordon in Knoxville.',
    },
    {
      question: 'Do I need to undergo a "sham" cycle with hormones?',
      answer:
        'No. The vast majority of patients respond predictably to estrogen pills (estrace). If you are in the samll group of patients who require an atypical protocol then this can easily be employed in a future cycle.',
    },
    {
      question: 'Do I need to take Lupron?',
      answer:
        'Some patients do need to take Lupron but most do not and their cycles can be controlled by the use of oral contraceptives as needed.',
    },
    {
      question: 'Can I have a Natural Cycle FET?',
      answer:
        'Yes. BUT you need to have regular cycles and be willing to have closer monitoring during your cycle to ensure we do not miss ovulation.',
    },
  ];
  return (
    <Layout>
      <Seo
        title="Knoxville Embryo Adoption and NEDC | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header title={'NEDC and Rejoice Fertility'} image={'/images/embryo-adoption-crop.jpg'} />
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
          There were previous issues between Rejoice and the NEDC; however, those issues were worked out in Mediation 
          on August 23, 2024 to the mutual benefit of all parties, and most importantly, all patients.
        </p>
        <p>
          The parties agreed that all Rejoice patients (both Dr. Keenan's and Dr. Gordon's) who were matched with NEDC
          donated embryos or had NEDC embryos on reserve as of 8/1/24 could choose to keep those embryos at Rejoice
          and have their future care with Dr. Gordon and the nursing and embryology team at Rejoice, <strong>OR</strong>
          choose to have future embryo transfers with Dr. Keenan in Powell, TN <strong>OR</strong> choose to have their
          care with another NEDC affiliated clinic.
        </p>
      <Faqs data={data} />
      <Help />
    </Layout>
  );
};

export default EmbryoAdoptionTestPage;
