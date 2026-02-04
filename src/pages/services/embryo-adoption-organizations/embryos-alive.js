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
      <Header title={'Embryos Alive'} description={'Embryo Rescue Program'} image={'/images/EmbryoAlive.png'} ctaPrimary={'Learn More'} ctaPrimaryLink={'https://embryosalive.com/'} ctaSecondary={''} ctaSecondaryLink={'#'} />
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
        Embryos Alive was created to offer families a compassionate, life-affirming option for embryos remaining in frozen storage. Through an ethical embryo adoption model, Embryos Alive connects placing families with adopting families who are prepared to receive embryos, attempt pregnancy, and give birth to their adopted child.
        </p>
        <p>
          Embryo adoption through Embryos Alive follows adoption-centered best practices, emphasizing dignity, intentionality, and care for everyone involved — including the child, the placing family, and the adopting family.
          </p>
        <p>
          Adopting families undergo frozen embryo transfers (FETs) with embryos placed in their care and experience pregnancy and childbirth as part of their adoption journey.
            </p>
        <p>
          To safeguard the well-being of all parties, Embryos Alive requires a comprehensive adoption home study. This process educates and prepares the adopting family while providing reassurance to placing families that their embryos are being entrusted to a thoroughly screened and supported home.
            </p>
        <p>
          Embryos Alive operates as an embryo adoption program rather than an embryo donation program through a fertility clinic. While clinic-based donation programs primarily focus on medical treatment, embryo adoption considers the lifelong social, emotional, and relational impact on the child and both families.
            </p>
        <p>
          Embryo adoption encourages transparency and openness, giving children born through this process the opportunity to understand their biological origins and maintain appropriate connections when mutually desired. In contrast, embryo donation programs often emphasize anonymity and limited information exchange.
            </p>
        <h3><strong>TOP REASONS TO CHOOSE EMBRYOS ALIVE FOR EMBRYO ADOPTION</strong></h3>
        <ul>
        <li>Embryos Alive is dedicated exclusively to embryo adoption, offering focused expertise and personalized guidance throughout the process.</li>
        <li>Placing families are given the opportunity to thoughtfully choose the adoptive family for their embryos.</li>
        <li>Embryo adoption allows adoptive families to experience pregnancy and childbirth while building their family through adoption.</li>
        <li>Embryo adoption is one of the most affordable adoption pathways available.</li>
        <li>Embryos Alive provides education, counseling, and support for both placing and adopting families.</li>
        <li>The program emphasizes ethical practices, relational openness, and long-term consideration for the child’s well-being.</li>
            </ul>
      </section>
      <Help />
    </Layout>
  );
};

export default NightlightPage;
