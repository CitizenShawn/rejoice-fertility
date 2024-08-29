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
      question: 'Why are there embryos available for adoption?',
      answer:
        'Stimulated Cycle IVF can result in the production of 12-30 eggs or more in some patients. One of the unanticipated issues associated with traditional IVF has been the question of what to do with the extra embryos that are left stored frozen in liquid nitrogen once a couple believes that their family is complete. Some couples are willing to allow others to adopt these embryos.',
    },
    {
      question: 'How common is Embryo Adoption?',
      answer:
        'Although many IVF clinics offer Embryo Adoption / Embryo Donation, none has the depth of experience found at Rejoice Fertility. Although there are over 200,000 IVF procedures performed in the United States every year there are fewer than 2000 cycles of Embryo Adoption performed yearly.',
    },
    {
      question: 'Who are the best candidates for Embryo Adoption?',
      answer:
        'The best candidates for EA are those couples where the wife has a normal uterus and no medical reason which could result in a lower chance of success such as the presence of a dilated, fluid-filled fallopian tube (hydrosalpinx).',
    },
    {
      question: 'How successful is EA?',
      answer: 'Success rates with Embryo Donation/Adoption are close to 50% per cycle',
    },
    {
      question: 'What about couples with male factor?',
      answer:
        'Some couples feel more comfortable with EA as opposed to the use of donor egg or donor sperm.',
    },
    {
      question: 'Can couples without a fertility problem adopt embryos?',
      answer: 'Absolutely. Some patients have pursued EA because they feel called to adopt.',
    },
    {
      question: 'How expensive is this treatment?',
      answer:
        'The treatment cost per cycle is less than $4,000 but that does not include pre-screening and the costs associated with the matching process through Snowflake Embryo Adoption or the National Embryo Donation Center.',
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
      <Header title={'Embryo Adoption'} image={'/images/embryo-adoption-crop.jpg'} />
      <Banner title={'NEDC And Rejoice Fertility'} description={'For information about the relationship between NEDC and Rejoice Fertility and how that affects patients pursuing embryo adoption using NEDC donated embryos , who are currently matched or have embryos on reserve, please click the link below.'} image={'/images/cedar-park.jpg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'/services/embryo-adoption-new#NEDC'} ctaSecondary={''} ctaSecondaryLink={''} />
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
          Some have estimated that there may be as many as 5,000,000 frozen embryos stored in IVF
          Clinic across the United States but no one is really sure of the actual number with a range of
          600,000 to 1.5 million frequently quoted.
        </p>
        <p>
          Some couples are willing to donate their frozen embryos to recipient couples who are willing to
          undergo a frozen embryo transfer with these embryos.
        </p>
        <p>
          At Rejoice Fertility we have the single-clinic largest experience with Embryo Adoption in the entire
          world.
            </p>
        <p>
          All of our matching of embryo donors and recipients is currently accomplished through the efforts of
          three organizations: <a href='/services/embryo-adoption-organizations/nightlight'>Nightlight Christian Adoptions Snowflakes Embryo Adoption Program</a>, 
          <a href='/services/embryo-adoption-organizations/eas-cedar-park'>Embryo Adoption Services of Cedar Park</a> 
           and <a href='/services/embryo-adoption-organizations/cac'>Christian Adoption Consultants</a>. 
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
            Our embryology team has the most experience of any IVF program in the
            country with the thawing and care of donated embryos especially those that
            have been frozen for decades including several amazing outcomes such as the 
            delivery of healthy twins after the transfer of embryos stored for 30 years!
              </p>
        <h4><strong>2. EXPERIENCE</strong></h4>
        <p>
            Our team has coordinated hundreds of frozen embryo transfer cycles for patients
            pursuing embryo adoption.
              </p>
        <h4><strong>3. EXCELLENCE</strong></h4>
        <p>
            All embryos are handled with the upmost care. Rejoice IVF is the only accredited
            IVF Program in the Greater Knoxville Area having secured this accreditation by
            The Joint Commission back in 2021.
                </p>
        <h4><strong>4. EXPANSION</strong></h4>
        <p>
            Our new state-of-the-art IVF Laboratory and clinical space will be ready in August
            2024 and with many patient-friendly features such as Private Rooms for pre-transfer
            discussions with Dr. Gordon.
              </p>
        <h4><strong>5. EMPATHY</strong></h4>
        <p>
            All of us here at Rejoice Fertility believe that every embryo deserves a chance at life
            and that the only embryo that cannot result in a healthy baby is the embryo that you
            do not transfer into a patient.
              </p>
      </section>
      <Header title={'Nightlight Christian Adoptions'} description={'Snowflakes Embryo Adoption Program'} image={'/images/nightlight-christian-adoptions-header.jpeg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'/services/embryo-adoption-organizations/nightlight'} ctaSecondary={''} ctaSecondaryLink={''} />
      <Header title={'Embryo Adoption Services of Cedar Park'} description={''} image={'/images/cedar-park.jpg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'/services/embryo-adoption-organizations/eas-cedar-park'} ctaSecondary={''} ctaSecondaryLink={''} />
      <Header title={'Christian Adoption Consultants'} description={''} image={'/images/CAC-cropped.jpg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'/services/embryo-adoption-organizations/cac'} ctaSecondary={''} ctaSecondaryLink={''} />
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
      <Header title={'NEDC and Rejoice Fertility'} description={''} image={'/images/pexels-pixabay-51953.jpg'} ctaPrimary={''} ctaPrimaryLink={''} ctaSecondary={''} ctaSecondaryLink={''} />
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
        on August 23, 2024 to the mutual benefit of all parties, and most importantly, all patients
        </p>
        <p>
        The parties agreed that all Rejoice patients (both Dr. Keenan’s and Dr. Gordon’s) who were matched with NEDC
        donated embryos or had NEDC embryos on reserve as of 8/1/24 could choose to keep these embryos at Rejoice
        and have their future care with Dr. Gordon and the nursing and embryology team at Rejoice, OR choose to have
        future embryo transfers with Dr. Keenan in Powell, TN, OR choose to have their care with another NEDC affiliated
        clinic.
        </p>
      </section>
      <Questions q={q} />
      <Help />
    </Layout>
  );
};

export default EmbryoAdoptionTestPage;
