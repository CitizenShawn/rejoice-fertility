/** @jsx jsx */
import { jsx } from 'theme-ui';
import Layout from '../components/Layout';
import Header from '../components/Common/Header';
import Help from '../components/Common/Help';
import ContactForm from '../components/Contact/ContactForm';
import { Seo } from '../components/Seo';

const ContactUsPage = () => {
  return (
    <Layout>
      <Seo
        title="Contact Us | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <div>
        <Header
          title={'Contact Us'}
          image={'/images/contact-us.jpeg'}
          ctaPrimaryLink="#form-section"
        />
        <ContactForm />
        <Help />
      </div>
    </Layout>
  );
};

export default ContactUsPage;
