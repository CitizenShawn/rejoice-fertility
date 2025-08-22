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
        <Header title={'Our Location'} image={'/images/rejoiceoutside.jpg'} description={'Rejoice Fertility is located in a brand-new state-of-the-art nearly 10,000 square feet facility in Farragut, TN that provides a warm and welcoming atmosphere for all our patients. The office was designed and built by Dr. Gordon drawing on inspiration from the natural beauty found here in East Tennessee. We can handle a large volume of fertility procedures and with the safety of our patients in mind (including the frozen embryos under our care), the new IVF laboratory at Rejoice has an advanced monitoring system for our cryostorage tanks. This novel system (Cryo-Sentinel) uses infrared imaging to detect early temperature changes in the embryo storage tanks alerting the staff to an issue before it is too late to correct an issue and save the embryos from a catastrophic event.'} ctaPrimary={'Get Directions'} ctaPrimaryLink={'https://www.google.com/maps/place/11132+Kingston+Pike,+Farragut,+TN+37934/@35.8858771,-84.1520417,17z/data=!3m1!4b1!4m6!3m5!1s0x885c2f6ec7e3bf6d:0x8f4567ff95a2e5be!8m2!3d35.8858728!4d-84.1494668!16s%2Fg%2F11vr9xg416?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D'} ctaSecondary={''} ctaSecondaryLink={'#'}/>
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
