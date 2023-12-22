/** @jsx jsx */
import { jsx } from 'theme-ui';
import Layout from '../components/Layout';
import Header from '../components/Common/Header';
import Intro from '../components/Consultation/Intro';
import Help from '../components/Common/Help';
import { Seo } from '../components/Seo';
import Form from '../components/Common/Form';

const FreeConsultationPage = () => {
  return (
    <Layout>
      <Seo
        title="Free Consultations | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <div>
        <Header
          title={'Free Consultations'}
          image={'/images/free-consultations.jpeg'}
          ctaSecondaryLink="#form-section"
        />
        <Intro />
        <Form formUrl="https://usebasin.com/f/2ec6c12cacdc" />
        <Help />
      </div>
    </Layout>
  );
};

export default FreeConsultationPage;
