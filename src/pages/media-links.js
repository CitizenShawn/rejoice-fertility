/** @jsx jsx */
import React from 'react'
import Layout from '../components/Layout';
import { jsx } from 'theme-ui';
import Header from '../components/Common/Header';
import { Seo } from '../components/Seo';
import Help from '../components/Common/Help';

const MediaLinksPage = () => {
  return (
    <Layout>
      <Seo
        title="Out-of-Town Patients | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header
        title={'Media Links'}
        image={'/images/oot.jpg'}
      />
      <section sx={{ p: { fontSize: ['1rem', null, '1.25rem'], mb: '1rem' } }}>
        <div sx={{ maxWidth: '1400px', mx: 'auto', p: '2rem' }}>
          <div sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', mb: '1rem' }}>
            <h1 sx={{ fontSize: ['1.5rem', null, '2.5rem'], fontWeight: 700 }}>Learn about Rejoice Fertility and IVF</h1>
          </div>
          <div sx={{ h3: { mb: '12px', fontSize: ['1.25rem', null, '2rem'], fontWeight: '700' }, h4: { fontSize: ['1.25rem', null, '1.5rem'] }, color: '#000', p: { mb: '1rem' } }}>
            <p>If you would like to learn more about IVF, please read some of these amazing articles.</p>
            <Header title={'Christian Parents Have a Blueprint for IVF'} image={'/images/original.png'} description={'Article by The Atlantic'} ctaPrimary={'Read the Article Here'} ctaPrimaryLink={'https://www.theatlantic.com/health/archive/2024/08/vision-future-ivf-christian-fetal-personhood/679586/?gift=D_hJMI87NXlE47BC567UVEqZjyN61KQ2wIxpLEMeC3Y&utm_source=copy-link&utm_medium=social&utm_campaign=share'} ctaSecondary={''} ctaSecondaryLink={'#'} />
            <Header title={'IVF debates often overlook critical questions'} image={'/images/microscope.jpg'} description={'Article by World News Group'} ctaPrimary={'Read the Article Here'} ctaPrimaryLink={'https://wng.org/roundups/ivf-debates-often-overlook-critical-question-1744748255'} ctaSecondary={''} ctaSecondaryLink={'#'} />
            <Header title={"IVF's collateral damage"} image={'images/dish.jpg'} description={'/Article by World News Group'} ctaPrimary={'Read the Article Here'} ctaPrimaryLink={'https://wng.org/podcasts/ivfs-collateral-damage-1745413531'} ctaSecondary={''} ctaSecondaryLink={'#'} />
            <Header title={'In Glass'} image={'/images/Doubletake.png'} description={'Article by World News Group'} ctaPrimary={'Read the Article Here'} ctaPrimaryLink={'https://wng.org/podcasts/doubletake-in-glass-part-i-1732309729'} ctaSecondary={''} ctaSecondaryLink={'#'} />
          </div>
        </div>
      </section>
      <Help />
    </Layout >
  )
}

export default MediaLinksPage
