/** @jsx jsx */
import React from 'react'
import Layout from '../components/Layout';
import { jsx } from 'theme-ui';
import Header from '../components/Common/Header';
import { Seo } from '../components/Seo';
import Help from '../components/Common/Help';

const OutOfTownPatientsPage = () => {
  return (
    <Layout>
      <Seo
        title="Out-of-Town Patients | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header
        title={'Out-of-Town Patients'}
        image={'/images/out-of-town-patients.png'}
      />
      <section sx={{ p: { fontSize: ['1rem', null, '1.25rem'], mb: '1rem' } }}>
        <div sx={{ maxWidth: '1400px', mx: 'auto', p: '2rem' }}>
          <div sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', mb: '1rem' }}>
            <h1 sx={{ fontSize: ['1.5rem', null, '2.5rem'], fontWeight: 700 }}>Out-of-Town Patients General Information</h1>
            <h3 sx={{ fontSize: ['1.25rem', null, '2rem'], fontWeight: 700 }}>Why do patients from outside of East Tennessee seek care here at Rejoice Fertility?</h3>
            <h4 sx={{ fontSize: ['1.25rem', null, '1.5rem'] }}>Rejoice Fertility differs from the vast majority of IVF programs in the United States in many ways, which explains why patients elect to pursue care here even when they live close to IVF clinics.</h4>
          </div>
          <div sx={{ h3: { mb: '12px', fontSize: ['1.25rem', null, '2rem'], fontWeight: '700' }, h4: { fontSize: ['1.25rem', null, '1.5rem'] }, color: '#000', p: { mb: '1rem' } }}>
            <h4>1. We offer Natural Cycle IVF and Mini Stim IVF.</h4>
            <p>Most of the out-of-town patients seeking care here pursue NC IVF or Mini Stim
              IVF. These two options are not offered at most other clinics. For patients with markedly
              diminished ovarian reserve or patients who are uncomfortable with fertilizing more than a single
              egg in an IVF cycle, NC IVF represents an option that they may not have known existed. Mini
              Stim IVF, which usually results in 3-8 eggs retrieved, is similarly attractive to patients concerned
              about the creation of an excessive number of embryos.</p>
            <h4>2. We are a “no discard” facility.</h4>
            <p>All fertilized eggs that result in viable embryos are either transferred or frozen for
              future use by our patients. If a couple creates these embryos, then it is their responsibility to
              return at a later date to use them. Since the destruction of these extra embryos is not an option,
              we spend a lot of time and effort discussing how many eggs to fertilize. Unfertilized eggs can be
              frozen for future use. Embryos that are abandoned will be donated to those couples interested
              in Embryo Adoption.</p>
            <h4>3. We are open to discussing how a couple’s faith impacts their fertility journey.</h4>
            <p>Infertility treatment is a difficult path to walk for patients of faith. Many struggle
              with how they are called to respond to their infertility. Should they pursue treatments like IVF or
              adoption, or just accept their situation? We treat couples of all faiths and those with no faith, but
              we are guided in our approach by our faith, which is why we are a “no discard” IVF program.</p>
            <h4>4. We do not offer Preimplantation Genetic Testing (PGT)</h4>
            <p>Surprisingly, some patients seek care at Rejoice Fertility as a result of what
              we do not offer. PGT involves the removal of cells from an embryo at the blastocyst stage of
              development. The cells come from the portion of the embryo destined to become the placenta.
              These cells are sent to a genetic testing laboratory and the embryo is then frozen, awaiting the
              result of the testing. The unresolved issues regarding PGT include potential damage to the
              embryo from the biopsy, the possibility that the embryo is normal in spite of testing suggesting otherwise, 
              and the use of PGT for morally problematic issues such as sex selection (a couple
              chooses to discard all male embryos because they only desire a daughter).
            </p>
            <p>Of course, there are other reasons that patients from out of town seek care with us, including the opportunity to meet Nurse Lynda of Facebook Friday fame in person and to enjoy the natural beauty of the Great Smoky Mountains National Park.
            </p>
            <h3>If we are interested in doing IVF at Rejoice Fertility, how do we start?</h3>
            <p>One of the best ways is to sign up for a free consultation with Dr. Gordon. During this 15-minute telemedicine consult, Dr. Gordon can discuss your particular situation and whether it makes sense for you to consider pursuing IVF here at Rejoice.</p>
            <h3>OK, we are sold on the idea of working with Rejoice. Now what?</h3>
            <p>The next step is to arrange for either an official telemedicine consultation followed by an in-person visit to Knoxville or just schedule an in-person visit to Knoxville.</p>
            <h3>Why do we need to come to Knoxville for evaluation?</h3>
            <p>Patients pursuing IVF need to undergo some specific tests including vaginal ultrasound, a trial embryo transfer (also called a mock transfer or a cervical check), and a saline infused sonogram (also called a water sono) to make sure that there are no fibroids or polyps in the uterine cavity. If you have recently (within 6 months) had this last test, then we can sometimes defer a repeat test if the regular sonogram looks good. The ultrasound is needed to ensure that your ovaries can be easily visualized for monitoring and for performing an egg collection. The ultrasound is also beneficial for determining your Mini Stim protocol, which may be adjusted based on your Antral Follicle Count and your anti Mullerian hormone (AMH) level.</p>
            <h3>Do we need to come to Knoxville for evaluation at a particular time in my cycle?</h3>
            <p>It is best to schedule that visit on day 5-12 of your cycle or when you are on the birth control pill to ensure that you are not pregnant and that the endometrial lining is thin, which makes the saline sonogram a bit easier to interpret.</p>
            <h3>Are other tests needed?</h3>
            <p>We need to have a recent semen analysis (within 6 months) and both members of the couple need to be tested for HIV, Hepatitis B and C, and syphilis ( We perform cervical DNA testing for gonorrhea and chlamydia at this visit).</p>
            <h3>Once we have completed all these tests, what comes next?</h3>
            <p>Following the completion of all testing, you and your husband will schedule a Final ART consultation, at which time you will make some final decisions regarding how many eggs are to be fertilized and whether extra eggs will be frozen or discarded. At this time you will go over the consent forms, which will need to be signed and notarized before you send them back to us here in Knoxville.</p>
            <h3>How many days will we need to be in Knoxville?</h3>
            <p>A typical NC IVF and Mini Stim IVF cycle are detailed below. Since we batch our IVF patients, you may need to take birth control pills or other medications to allow us to align your cycle with the clinic schedule. You will need to be in Knoxville for ultrasound monitoring starting on day 7-8 depending on your protocol. Most patients take the hCG trigger shot on day 12 or so. A trigger on day 12 means an egg retrieval on day 14. Day 3 embryo transfer would be on 17 and day 5 embryo transfer would be on day 19. The day of embryo transfer you can depart by car, and the day after embryo transfer, you are free to fly home. Pregnancy tests are scheduled for 11 days after a day 3 ET and 9 days after a day 5 ET.</p>
          </div>
        </div>
      </section>
      <div sx={{ mb: '2rem', px: '2rem', img: { margin: 'auto' } }}>
        <h2 sx={{ fontSize: ['1.25rem', null, '1.5rem'], fontWeight: '600', display: 'flex', justifyContent: 'center', mb: '1rem' }}>Mini-Stim IVF Schedule</h2>
        <img
          src="/images/mini-stim.png"
          alt=""
        />
        <img src="/images/mini-stim-2.png"
          alt=""

        />
      </div>
      <div sx={{ maxWidth: '1400px', mx: 'auto', px: '2rem', h3: { fontSize: ['1.25rem', null, '1.5rem'], fontWeight: 600 }, p: { fontSize: ['1rem', null, '1.25rem'], mb: '1rem' } }}>
        <h3>Getting to Knoxville</h3>
        <p>Although
          many patients drive to Knoxville, for some, flying makes more sense. Allegiant flies
          several non stops to Knoxville ’s McGhee Tyson Airport. Delta and American also serve Knoxville
          with most flights connecting through Charlotte or Atlanta. Speaking of Atlanta, we are 3.5 hours
          from Atlanta, so some patients choose to drive from Atlanta to Knoxville. Fans of Southwest
          Airlines (like Dr. Gordon) drive to the Nashville airport, which is an easy 2.5 hours drive on I-40
          heading west from our office.</p>
        <h3>Staying in Knoxville</h3>
        <p>Many
          patients planning on staying over a week seek out rentals on Airbnb and Vrbo. We have
          discounted rates available at the Staybridge Suites and Hampton Inn located in the Turkey
          Creek shopping district, which is just 5 minutes from our office.</p>
        <h3>Playing in Knoxville</h3>
        <p>In
          addition to Dollywood and the Great Smoky Mountains National Park, there is no lack of fun
          activities to explore during your time here in Knoxville.</p>
      </div>
      <Help />
    </Layout >
  )
}

export default OutOfTownPatientsPage