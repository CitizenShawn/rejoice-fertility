/** @jsx jsx */
import { jsx } from 'theme-ui';
import Faqs from '../../components/Common/Faqs';
import Questions from '../../components/Common/Questions';
import Header from '../../components/Common/Header';
import Layout from '../../components/Layout';
import Help from '../../components/Common/Help';
import { Seo } from '../../components/Seo';

const CACPage = () => {
  return (
    <Layout>
      <Seo
        title="Knoxville Embryo Adoption | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header title={'Christian Adoption Consultants'} description={'Founded in 2006, Christian Adoption Consultants (CAC) are a team of professionals that help people adopt with personalized support.'} image={'/images/CAC-cropped.jpg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'christianadoptionconsultants.com'} ctaSecondary={'Specialty Pricing'} ctaSecondaryLink={'www.christianadoptionconsultants.com/embryo-adoption-rejoice-fertility-special-pricing/'} />
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

export default CACPage;