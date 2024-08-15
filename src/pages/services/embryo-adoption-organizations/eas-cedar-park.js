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
      <Header title={'Nightlight'} description={'In 1997 Nightlight Christian Adoption pioneered embryo adoption to assist families with remaining embryos in forzen storage in selecting an adopting family to attempt pregnancy with them.'} image={'/images/nightlight-christian-adoptions-header.jpeg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'https://nightlight.org'} ctaSecondary={''} ctaSecondaryLink={''} />
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
          They named their new program <a href='nightlight.org/snowflakes-embryo-adoption-donation/'>"Snowflakes Embryo Adoption Program,"</a> likening each embryo to a
          unique, frozen snowflake. Snowflakes Embryo Adoption has since become the largest embryo adoption
          agency in the world.
          </p>
        <p>
          Embryo adoption follows adoption best practices, transferring remaining embryos from donors to
          recipients -- the adopting families -- who then undergo frozen embryo transfers (FETs) with the
          family receiving their embryos and give birth to their adopted child.
            </p>
        <p>
          To ensure the well-being of all parties involved, an <a href='mljadoptions.com/home-study'>adoption home study</a> is required. This process
          educates the adopting family and provides peace of mind to the embryo donors, knowing that the
          family receiving their embryos has been thorough vetted by the agency.
            </p>
        <p>
          Embryo adoption programs differ from <a href='en.wikipedia.org/wiki/Embryo_donation'>embryo donation</a> programs run out of fertility clinics. While
          the latter primarily focus on medical treatment, adoption agencies consider <a href='adoption.org/what-is-the-adoption-triad'>social and emotional
          aspects</a> for all involved in the adoption process.
            </p>
        <p>
          Encouraging open relationships is a key aspect of embryo adoption, allowing children born from this
          process to maintain connections with both their <a href='lavenderluz.com/cover-story-embryo-adoption/'>biological background</a> and their adoptive family's
          experiences. In contrast, embryo donation programs often priortize anonymity, providing little to no
          information to either the donor nor receipient and encouraging <a href='embryoadoption.org/2018/10/secrecy-privacy/'>privacy rather than secrecy</a>.
            </p>
        <h3><strong>TOP REASONS TO CHOOSE SNOWFLAKES FOR EMBRYO ADOPTION</strong></h3>
        <ul>
        <li>Snowflakes was established by Nightlight Christian Adoptions in 1997.</li>
        <li>Over 2,000 have donated their remaining embryos through Snowflakes -- sometimes referred to as leftover
          embryos or unused embryos -- allowing them to choose the adoptive family of their embryos.</li>
        <li>More than 120 babies are expected to be born through the program in 2024, making a total number of
          over 1,300 Snowflakes Babies born!</li>
        <li>Embryo adoption is a low-cost adoption option, allowing you to experience pregnancy and give birth
          to your adopted child.</li>
        <li>Snowflakes has no waiting lists for adoptive families to be matched with embryos.</li>
        <li>Hoping to rescue an embryo from frozen storage? You may be interested in our <a href='nightlight.org/snowflakes-embryo-adoption-donation/open-hearts-program/'>Open Hearts Program</a>.</li>
        <li>Here are <a href='nightlight.org/wp-content/uploads/2023/06/50-Benefits-of-Snowflakes-2020.pdf'>50 more benefits you recieve</a> when you choose Snowflakes Embryo Adoption.</li>
            </ul>
      </section>
      <Faqs data={data} />
      <Help />
    </Layout>
  );
};

export default NightlightPage;
