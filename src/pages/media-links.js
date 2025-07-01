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
        title={'Out-of-Town Patients'}
        image={'/images/oot.jpg'}
      />
      <section sx={{ p: { fontSize: ['1rem', null, '1.25rem'], mb: '1rem' } }}>
        <div sx={{ maxWidth: '1400px', mx: 'auto', p: '2rem' }}>
          <div sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', mb: '1rem' }}>
            <h1 sx={{ fontSize: ['1.5rem', null, '2.5rem'], fontWeight: 700 }}>Out-of-Town Patients General Information</h1>
            <h3 sx={{ fontSize: ['1.25rem', null, '2rem'], fontWeight: 700 }}>Why do patients from outside of East Tennessee seek care here at Rejoice Fertility?</h3>
            <h4 sx={{ fontSize: ['1.25rem', null, '1.5rem'] }}>Rejoice Fertility differs from the vast majority of IVF programs in the United States in many ways, which explains why patients elect to pursue care here even when they live close to IVF clinics.</h4>
          </div>
          <div sx={{ h3: { mb: '12px', fontSize: ['1.25rem', null, '2rem'], fontWeight: '700' }, h4: { fontSize: ['1.25rem', null, '1.5rem'] }, color: '#000', p: { mb: '1rem' } }}>
            <p>If you would like to learn more about IVF, please read some of these amazing articles.</p>
            <h4><a href="https://www.theatlantic.com/health/archive/2024/08/vision-future-ivf-christian-fetal-personhood/679586/?gift=D_hJMI87NXlE47BC567UVEqZjyN61KQ2wIxpLEMeC3Y&utm_source=copy-link&utm_medium=social&utm_campaign=share">Christian Parents Have a Blueprint for IVF</a></h4>
            <p>Article by The Atlantic</p>
            <h4><a href="https://wng.org/roundups/ivf-debates-often-overlook-critical-question-1744748255">IVF debates often overlook critical questions</a></h4>
            <p>Article by World News Group</p>
            <h4><a href="https://wng.org/podcasts/ivfs-collateral-damage-1745413531">IVF's collateral damage</a></h4>
            <p>Podcast by World News Group</p>
            <h4><a href="https://wng.org/podcasts/doubletake-in-glass-part-i-1732309729">In Glass</a></h4>
            <p>Article by World News Group</p>
          </div>
        </div>
      </section>
      <Help />
    </Layout >
  )
}

export default MediaLinksPage
