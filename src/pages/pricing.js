/** @jsx jsx */
import { jsx } from 'theme-ui';
import Help from '../components/Common/Help';
import Layout from '../components/Layout';
import Header from '../components/Common/Header';
import Chart from '../components/PriceChart/Chart';
import { Seo } from '../components/Seo';

const PricingPage = () => {
  return (
    <Layout>
      <Seo
        title="Pricing | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <div>
        <Header title={'Pricing'} image={'/images/pricing-crop.jpeg'} />
        <Chart />
        <Help />
      </div>
    </Layout>
  );
};

export default PricingPage;
