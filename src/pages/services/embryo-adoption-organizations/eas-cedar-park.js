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
      <Header title={'Embryo Adoption Services of Cedar Park'} description={''} image={'/images/cedar-park.jpg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'https://adoptembryos.org'} ctaSecondary={''} ctaSecondaryLink={''} />
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
        <h4><strong>MISSION</strong></h4>
        <p>
          There are thousands of human embryos held in suspended animation, in freezers all over
          America, and around the world. Millions of couples that struggle with infertility year to hold a
          baby in their arms, but are unable to conceive. Our program is designed to bring those families
          together. Our service enables families to find each other, and for the embryos to have a chance to
          be born, for the sake of their own lives, and for the infinite number of future generations.
          </p>
        <p><em>"I knew you before you were yet formed in your mother's womb". - Psalm 139:13</em></p>
        <h4><strong>ABOUT US</strong></h4>
        <p>
          Embryo Adoption Services of Cedar Park is a Christian organization. We believe that life begins
          at conception, and that every embryo is worthy of a loving family. Our focus is to unite genetic
          families that have remaining embryos from previous IVF treatments, with adopting families, for
          the purposes of providing a loving, nurturing environment for the child, and bringing the endless
          joy of parenthood to those that embrace these little ones.
            </p>
        <p>
          Our Cedar Park program is designed to make embryo adoption both affordable and accessible, while
          at the same time providing a venue for both the genetic famility and the adopting family to
          have the advantage of choosing the kind of contact they will have with each other. Some families
          may want an "open" model; while some families may want to reserve contact through Cedar Park. We
          will work to procide the parameters that each family is most comfortable with. Counseling is
          available and encouraged to determine what would be the best for your family.
            </p>
      </section>
      <Faqs data={data} />
      <Help />
    </Layout>
  );
};

export default NightlightPage;
