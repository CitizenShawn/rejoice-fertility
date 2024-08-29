import * as React from 'react';
import Header from '../components/Common/Header';
import FeaturedSection from '../components/Home/FeaturedSection';
import QuoteSection from '../components/Home/QuoteSection';
import Doctors from '../components/Home/Doctors';
import Banner from '../components/Common/Banner';
import Help from '../components/Common/Help';
import Services from '../components/Home/Services';
import Layout from '../components/Layout';
import { Seo } from '../components/Seo';

const Homepage = () => {
  return (
    <Layout>
      <Seo
        title="Knoxville Fertility, IVF and Reproductive Surgery | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <div>
        <Header
          title={'Hope Starts With a Conversation'}
          description={
            'Rejoice Fertility is committed to providing comprehensive care with unwavering compassion'
          }
          image={'/images/homepage.jpeg'}
        />
        <Banner title={'NEDC And Rejoice Fertility'} description={'For information about the relationship between NEDC and Rejoice Fertility and how that affects patients pursuing embryo adoption using NEDC donated embryos , who are currently matched or have embryos on reserve, please click the link below.'} image={'/images/cedar-park.jpg'} ctaPrimary={'Learn More'} ctaPrimaryLink={'/services/embryo-adoption#NEDC'} ctaSecondary={''} ctaSecondaryLink={''} />
        <FeaturedSection />
        <QuoteSection />
        <Services />
        <Doctors />
        <Help />
      </div>
    </Layout>
  );
};

export default Homepage;
