/** @jsx jsx */
import { jsx } from 'theme-ui';
import Faqs from '../../../components/Common/Faqs';
import Questions from '../../../components/Common/Questions';
import Header from '../../../components/Common/Header';
import Layout from '../../../components/Layout';
import Help from '../../../components/Common/Help';
import { Seo } from '../../../components/Seo';

const NightlightPage = () => {
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
  return (
    <Layout>
      <Seo
        title="Knoxville Embryo Adoption | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header title={'Flourish Adoption Ministries'} description={''} image={'/images/flourish-logo.jpg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'https://flourishadoptions.com/embryo-adoption'} ctaSecondary={''} ctaSecondaryLink={'#'} />
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
        Flourish Adoption Ministries was founded to support families and children through ethical, faith-centered adoption practices that honor life, family, and long-term relational well-being.
        </p>
        <p>
          Through its embryo adoption ministry, Flourish provides families with an opportunity to welcome children into their homes while offering hope and purpose for embryos remaining in frozen storage. Each embryo is treated with dignity and care, recognizing the profound responsibility entrusted to both the placing and adopting families.
          </p>
        <p>
          Flourish’s embryo adoption process follows established adoption best practices, emphasizing education, transparency, and compassionate support. Embryos are placed with carefully screened adoptive families who then undergo frozen embryo transfers (FETs) and have the opportunity to experience pregnancy and birth.
            </p>
        <p>
          To safeguard the well-being of everyone involved—children, placing families, and adopting families alike—Flourish requires an adoption home study. This process equips adopting parents for the journey ahead and offers reassurance to placing families that their embryos are being entrusted to a loving, prepared home.
            </p>
        <p>
          Unlike embryo donation programs typically facilitated through fertility clinics, Flourish approaches embryo adoption as a relational and lifelong commitment. While medical care is essential, equal attention is given to the emotional, social, and spiritual aspects of adoption.
            </p>
        <p>
          Flourish encourages openness and connection whenever possible, believing that children benefit from access to their biological history and the story of how they came to be part of their adoptive family. This commitment to transparency stands in contrast to anonymous donation models that often limit information and ongoing connection.
            </p>
        <h3><strong>TOP REASONS TO CHOOSE FLOURISH ADOPTION MINISTRIES</strong></h3>
        <ul>
        <li>Flourish Adoption Ministries was established in 2017 with a mission to provide "frozen" babies a chance at life.</li>
        <li>Embryo adoption through Flourish offers a more affordable adoption option while allowing families to experience pregnancy and birth.</li>
        <li>Flourish provides personalized guidance and support throughout every stage of the embryo adoption journey.</li>
        <li>Adoptive families benefit from education, counseling, and faith-based resources designed to support lifelong adoption relationships.</li>
            </ul>
      </section>
      <Help />
    </Layout>
  );
};

export default NightlightPage;
