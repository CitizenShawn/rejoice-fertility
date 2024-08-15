/** @jsx jsx */
import { jsx } from 'theme-ui';
import Faqs from '../../../components/Common/Faqs';
import Questions from '../../../components/Common/Questions';
import Header from '../../../components/Common/Header';
import Layout from '../../../components/Layout';
import Help from '../../../components/Common/Help';
import { Seo } from '../../../components/Seo';

const NightlightPage = () => {
  return (
    <Layout>
      <Seo
        title="Knoxville Embryo Adoption | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header title={'Embryo Adoption Services of Cedar Park'} description={''} image={'/images/cedar-park.jpg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'adoptembryos.org'} ctaSecondary={''} ctaSecondaryLink={''} />
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
