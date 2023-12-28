/** @jsx jsx */
import { jsx } from 'theme-ui';
import Header from '../components/Common/Header';
import Vision from '../components/About/Vision';
import Values from '../components/About/Values';
import FeaturedContent from '../components/About/FeaturedContent';
import Doctors from '../components/About/Doctors';
import StaffIntro from '../components/About/StaffIntro';
import Help from '../components/Common/Help';
import Staff from '../components/About/Staff';
import Layout from '../components/Layout';
import { Seo } from '../components/Seo';

const AboutUsPage = () => {
  return (
    <Layout>
      <Seo
        title="About Rejoice Fertility | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <div>
        <Header title={'About Us'} image={'/images/aboutusheropic.png'} />
        <Vision />
        <Values />
        <FeaturedContent />
        <Doctors />
        <StaffIntro />
        <Staff />
        <Help />
      </div>
    </Layout>
  );
};

export default AboutUsPage;
