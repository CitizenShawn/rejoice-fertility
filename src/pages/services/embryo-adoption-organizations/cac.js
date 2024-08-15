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
      question: 'How much are the fees of Embryo Adoption Services of Cedar Park?',
      answer:
        'Fees are: $375 application fee, $6,800 program fee, $1,800 home study fee. The "Program Fee" can be paid over time in a flexible payment plan. There are no fees for placing/donating families.',
    },
    {
      question: 'How long does it take?',
      answer:
        'Generally, 1-2 months to do the home study, and find your match. We can give you a better estimate when we get some information about your family and your needs.',
    },
    {
      question: 'Do you have to have a home study?',
      answer:
        'Yes, adopting families must have a home study by a licensed social worker prior to matching you with a family. We do have a social worker that can come to you, anywhere in the U.S.',
    },
    {
      question: 'How many embryos do we receive once we are matched with a family?',
      answer: 'You will receive all the embryos that the donating/placing family has remaining. This could be 2-20 embryos (average 4-8). Once your family is complete, the embryos remaining would be matched with another family, and would not be your responsibility to make any decisions for the remaining embryos. If any born children come from another match, it can be possible to have contact with that family for the sake of sibling relationships. Not required.',
    },
    {
      question: 'Do you have embryos available right now?',
      answer:
        'Yes, we do. This includes embryos from many different racial and ethnic backgrounds and combinations. We currently have no waiting list.',
    },
    {
      question: 'If we are making our embryos available for another family, can we decide which family they will be placed in?',
      answer: 'Yes, we will send you a family profile for an approved adopting family, based on strong similarities, values, and the desired degree of contact with each other. If this family feels right to you, we will send your info to them to see and approve of as well. If everyone is comfortable, that is a successful "family match". You can choose any desired contact you desire, including "no contact".',
    },
    {
      question: 'Do you handle the shipping and logistics of shipping the embryos?',
      answer:
        'Yes, we do that, working with both clinics. You pay only shipping fees for the actual carrier, FEDEX, etc.',
    },
    {
      question: 'What are the average success rates?',
      answer:
        'Generally speaking, on a national average, there is a born child per transfer about 35-40% of the time. There are many variables that can increase the odds of success. To date, our success rates are higher that the national average. You will receive an entire set of embryos, so you will be able to try more than one time, thereby greatly increasing your chances of a live baby through your match.',
    },
    {
      question: 'Do we get medical history background on the donating/placing families?',
      answer:
        'Absolutely, you will have all that information before you make a final decision if this is the right family match for you. Photos and letters from the placing/donating family will be sent to you as well in almost all cases. There are rare exceptions where photos are not provided.',
    },
  ];
  return (
    <Layout>
      <Seo
        title="Knoxville Embryo Adoption | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header title={'Christian Adoption Consultants'} description={''} image={'/images/CAC-cropped.jpg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'https://www.christianadoptionconsultants.com'} ctaSecondary={'Specialty Pricing'} ctaSecondaryLink={'https://www.christianadoptionconsultants.com/embryo-adoption-rejoice-fertility-special-pricing/'} />
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
        Founded in 2006, Christian Adoption Consultants (CAC) are a team of professionals that help people
        adopt with personalized support.
        </p>
        <p>
          CAC uses an approach that goes through multiple agencies while also keeping the process ethical
          start to finish. While CAC does go through different agencies and attorneys, clients always know
          exactly what they are getting into. CAC doesn't recieve any additional funds from these agencies;
          all of their funding comes from consultation fees.
          </p>
        <p>
          CAC is committed to providing personalized support, even going so far as to set up boundaries for
          every client. With the largest support team of any adoption consultation agency in the country, you
          can rest assured that CAC will help you throughout the entirety of the adoption process.
            </p>
        <p>
          CAC is partnering with Rejoice Fertility to ensure that you are getting the support you deserve throughout
          the embryo adoption process. Christian Adoption Consultants have even set up special pricing for clients
          who choose embryo adoption with Rejoice Fertility.
            </p>
      </section>
      <Help />
    </Layout>
  );
};

export default NightlightPage;
