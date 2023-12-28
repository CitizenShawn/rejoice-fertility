/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import Header from '../../components/Common/Header';
import Form from '../../components/Common/Form';
import { Seo } from '../../components/Seo';

const Services = () => {
  return (
    <Layout>
      <Seo
        title="Services | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header title={'Services'} image={'/images/services-page-crop.jpeg'} />
      <section>
        <h2
          sx={{
            py: '3rem',
            maxWidth: '1124px',
            margin: 'auto',
            variant: 'text.xl',
            textAlign: 'center',
            color: '#666',
          }}
        >
          Services Offered
        </h2>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pb: '80px',
            flexWrap: 'wrap',
            gap: '2rem',
            maxWidth: '1400px',
            mx: 'auto',
          }}
        >
          <div
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
              p: {
                my: '1rem',
                textAlign: 'center',
              },
              '.overlay': {
                transition: '.5s ease',
                opacity: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#61A19ECC',
              },
              img: {
                opacity: 1,
                display: 'block',
                width: '100%',
                height: 'auto',
                minHeight: '280px',
                objectFit: 'cover',
                transition: '.5s ease',
                backfaceVisibility: 'hidden',
              },

              a: {
                maxWidth: '280px',
                variant: 'text.normal',
              },
              'a>div': {
                position: 'relative',
              },
              'a:hover': {
                img: {
                  opacity: '0.3',
                },
                '.overlay': {
                  opacity: 1,
                },
                '.link': {
                  color: '#343753',
                  padding: '16px 32px',
                },
              },
            }}
          >
            <Link to="/services/diagnosis-and-testing">
              <div>
                <img src="/images/diagnosis-image.png" alt="" />
                <div class="overlay">
                  <div class="link">learn more</div>
                </div>
              </div>
              <p>Diagnosis & Testing</p>
            </Link>
            <Link to="/services/ivf">
              <div>
                <img src="/images/ivf-image.png" alt="" />{' '}
                <div class="overlay">
                  <div class="link">learn more</div>
                </div>{' '}
              </div>
              <p>IVF</p>
            </Link>
            <Link to="/services/fertility-treatment-and-non-ivf">
              <div>
                <img src="/images/baby.png" alt="" />{' '}
                <div class="overlay">
                  <div class="link">learn more</div>
                </div>{' '}
              </div>
              <p>Fertility Treatment : Non-IVF</p>
            </Link>
            <Link to="/services/embryo-adoption">
              <div>
                <img src="/images/fertility-treatment.png" alt="" />{' '}
                <div class="overlay">
                  <div class="link">learn more</div>
                </div>
              </div>
              <p>Embryo Adoption</p>
            </Link>
          </div>
        </div>

        <Form />
      </section>
    </Layout>
  );
};

export default Services;
