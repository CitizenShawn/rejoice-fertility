import * as React from 'react';
import Header from '../components/Common/Header';
import Location from '../components/About/Location';
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
        <Header
          title={'Learn How A Record Breaking Baby Was Born'}
          description={
            'Article by MIT Technology Review, Video by WVLT'
          }
          image={'/images/record-breaking.png'}
          ctaPrimary={'Read the Article Here'}
          ctaPrimaryLink={'https://www.technologyreview.com/2025/07/29/1120769/exclusive-record-breaking-baby-born-embryo-over-30-years-old/'}
          ctaSecondary={'Watch the Video'}
          ctaSecondaryLink={'https://www.wvlt.tv/video/2025/08/04/knoxville-clinic-helps-couple-welcome-baby-nearly-31-year-old-frozen-embryo/'}
        />
        <Location />
        <FeaturedSection />
        <QuoteSection />
        <Services />
        <script src="https://cdn.logwork.com/widget/countdown.js"></script>
<a href="https://logwork.com/countdown-timer" class="countdown-timer" data-timezone="America/New_York" data-textcolor="#343753" data-date="2026-09-01 11:32" data-background="#343753" data-digitscolor="#FFFFFF" data-unitscolor="#343753"></a>
        <Doctors />
        <Help />
      </div>
    </Layout>
  );
};

export default Homepage;
