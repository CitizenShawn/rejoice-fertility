/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
import Modal from 'react-modal';
import Faqs from '../../components/Common/Faqs';
import Header from '../../components/Common/Header';
import Layout from '../../components/Layout';
import Help from '../../components/Common/Help';
import { Link } from 'gatsby';
import { FiArrowRight } from 'react-icons/fi';
import { Seo } from '../../components/Seo';

const IVFPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');

  function openModal(content) {
    setContent(content);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setContent('');
  }

  const modalData = [
    `<div>
    <div>
     <p>SUMMARY</p>
    </div>
   
    <div>
     <p><span >COST:</span> Under $6,000</p>
     <p>&nbsp;</p>
     <p><span>MEDICATIONS USED:</span> hCG trigger shot, progesterone vaginal capsules, estrogen pills</p>
     <p >&nbsp;</p>
     <p ><span >GOAL:</span> Retrieval of single mature egg</p>
     <p >&nbsp;</p>
     <p ><span>RISKS:</span> Cancellation prior to egg collection, no egg at egg collection, no fertilization of egg, no embryo available for embryo transfer</p>
     <p >&nbsp;</p>
     <p ><span>BENEFITS:</span> Low cost per cycle, no risk of ovarian hyper stimulation syndrome, almost no risk of multiple pregnancy (identical twins can occur)</p>
     <p >&nbsp;</p>
     <p ><span>BEST CANDIDATES:</span></p>
     <p >Younger patients (&lt;36 years old)</p>
     <p >Diagnosed with blocked or damaged Fallopian tubes</p>
     <p >Diagnosed with severe endometriosis</p>
     <p >Diagnosed with male factor infertility</p>
     <p >Diagnosed with unexplained infertility</p>
     <p >Diagnosed as having a risk of developing Ovarian Hyperstimulation Syndrome (OHSS)</p>
     <p >Diagnosed with a low ovarian reserve</p>
     <p >&nbsp;</p>
     <p >OTHER CANDIDATES:</p>
     <p >Patients who have failed multiple Stimulated Cycle IVF treatments</p>
     <p >Patients who wish to pursue more economical treatments</p>
     <p >Patients concerned about multiple pregnancy</p>
     <p >Patients unwilling to create excessive embryos due to religious reasons</p>
     <p >Patients unwilling to freeze embryos due to religious reasons</p>
     <p >Patients who are fearful of injections</p>
     <p >Patients with extremely poor ovarian reserve who have failed to respond to fertility medications and are not interested in Donor Egg IVF, Embryo Adoption or Traditional Adoption</p>
    </div>
   </div>`,
    `<div>
    <div>
      <p>SUMMARY</p>
    </div>
  
    <div>
      <p>
        <span>COST:</span> Under $8,000
      </p>
      <p>&nbsp;</p>
      <p>
        <span>MEDICATIONS USED:</span> oral fertility
        medications/tamoxifen/letrozole pills, 1-4 daily shots of Gonal
        F/Follistim/Menopur, hCG trigger shot, progesterone vaginal capsules,
        estrogen pills
      </p>
      <p>&nbsp;</p>
      <p>
        <span>GOAL:</span> Retrieval of 2-5 mature eggs
      </p>
      <p>&nbsp;</p>
      <p>
        <span>RISKS:</span> Cancellation prior to egg collection, no eggs at egg
        collection, no fertilization of eggs, no embryo available for embryo
        transfer
      </p>
      <p>&nbsp;</p>
      <p>
        <span>BENEFITS:</span> Low cost per cycle, no risk of ovarian hyper
        stimulation syndrome, low risk of multiple pregnancy depending on number
        of embryos transferred
      </p>
      <p>&nbsp;</p>
      <p>BEST CANDIDATES:</p>
      <p>Younger patients (&lt;39 years old)</p>
      <p>Diagnosed with blocked or damaged Fallopian tubes</p>
      <p>Diagnosed with severe endometriosis</p>
      <p>Diagnosed with male factor infertility</p>
      <p>Diagnosed with unexplained infertility</p>
      <p>
        Diagnosed as having a risk of developing Ovarian Hyperstimulation Syndrome
        (OHSS)
      </p>
      <p>Diagnosed with a low ovarian reserve</p>
      <p>&nbsp;</p>
      <p>OTHER CANDIDATES:</p>
      <p>
        Patients who have failed multiple NC IVF or Stimulatd Cycle IVF treatments
      </p>
      <p>Patients who wish to pursue more economical treatments</p>
      <p>Patients concerned about multiple pregnancy</p>
      <p>
        Patients wishing to limit the possibility of extra embryos due to
        religious reasons
      </p>
      <p>
        Patients hoping to avoid the freezing of embryos due to religious reasons
      </p>
      <p>Patients who are fearful of injections</p>
    </div>
  </div>

  `,
    `
    <div>
    <div>
      <p>SUMMARY</p>
    </div>
  
    <div>
      <p id="u7253-3">
        <span>COST:</span> About $13,445
      </p>
      <p id="u7253-4">&nbsp;</p>
      <p id="u7253-7">
        <span>MEDICATIONS USED:</span> Daily shots or Lupron, daily shots of Gonal
        F/Follistim/Menopur, hCG trigger shot, progesterone injections.
      </p>
      <p id="u7253-8">&nbsp;</p>
      <p id="u7253-11">
        <span>GOAL:</span> Retrieval of 6-15 mature eggs
      </p>
      <p id="u7253-12">&nbsp;</p>
      <p id="u7253-15">
        <span>RISKS:</span> Over response to fertility medications leading to
        cancellation prior to embryo transfer with freezing of all embryos. Under
        response to medication with only 1-2 follicles growing.
      </p>
      <p id="u7253-16">&nbsp;</p>
      <p id="u7253-19">
        <span>BENEFITS:</span> High pregnancy rates, extra embryos available for
        embryo cryopreservation (or extra eggs frozen for future use).
      </p>
      <p id="u7253-20">&nbsp;</p>
      <p id="u7253-22">BEST CANDIDATES:</p>
      <p id="u7253-24">Diagnosed with blocked or damaged Fallopian tubes</p>
      <p id="u7253-26">Diagnosed with severe endometriosis</p>
      <p id="u7253-28">Diagnosed with male factor infertility</p>
      <p id="u7253-30">Diagnosed with unexplained infertility</p>
      <p id="u7253-31">&nbsp;</p>
      <p id="u7253-33">OTHER CANDIDATES:</p>
      <p id="u7253-35">
        Patients who have failed multiple NC IVF or Mini-Stim IVF treatments
      </p>
      <p id="u7253-37">Patients wishing freeze extra embryos</p>
    </div>
  
  </div>
  `,
  ];

  const data = [
    {
      question: 'How long has IVF been performed?',
      answer:
        'In vitro fertilization (IVF) was first successfully performed in Oldham, England in 1978, resulting in the birth of Louise Brown, who was conceived using Natural Cycle IVF (NC-IVF).',
    },
    {
      question: 'How many children have been born after IVF?',
      answer: 'More than 7 million children have been born using IVF.',
    },
    {
      question: 'What are the differences in the different types of IVF?',
      answer:
        'The 3 types of IVF are distinguished by what drugs (if any) are used and how many eggs/embryos will be produced. Natural Cycle IVF uses no fertility medications and results in a single egg and embryo. Mini-Stim IVF uses very mild stimulation medications (pills and 2-3 shots) resulting in 2-5 eggs. Stimulated Cycle IVF uses 10-14 days of fertility shots with a goal of 8-15 eggs.',
    },
    {
      question: 'Can all patients be treated with all types of IVF?',
      answer:
        'No, some patients will clearly be candidates only for Natural Cycle IVF whereas others will be best served by Stimulated Cycle IVF.',
    },
    {
      question: 'What about couples with male factor?',
      answer:
        'Severe male infertility is often best treated by IVF combined with Intracytoplasmic Sperm Injection (ICSI)',
    },
    {
      question: 'How expensive is IVF?',
      answer:
        'The cost per cycle (not including medication) ranges from under $6,000 for Natural Cycle IVF to $13,445 for Stimulated Cycle IVF. The medication costs for Stimulated Cycle IVF can be $2,000-5,000.',
    },
  ];
  return (
    <Layout>
      <Seo
        title="IVF | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header title={'IVF'} image={'/images/ivf-image.png'} />
      <section
        sx={{
          px: ['1rem', null, null, '2rem'],
          mt: '2rem',
          variant: 'text.normal',
        }}
        className="content"
      >
        <p>
          At Rejoice Fertility we perform IVF right here in our office! IVF can be performed
          with no fertility medications (Natural Cycle IVF), minimal fertility medications
          (Mini-IVF) or traditional stimulation medications (Stimulated Cycle IVF).<br />
        </p>
        <br />
        <p>
        Rejoice is a "no-discard” IVF program. All viable embryos must either be transferred or
        frozen for future use. We will not discard any viable embryos (fresh or frozen). We do not
        offer Preimplantation Genetic Testing (PGT). We believe that that the only embryo that
        cannot result in a baby is the one that you don’t transfer. We treat patients of all faiths
        and patients without a belief in God. Many patients who struggle with the ethical, moral
        and spiritual questions raised by the process of IVF are relieved to find a clinic that
        not only respects these concerns but welcomes an honest and frank discussion about the
        issues inherent in IVF.<br />
        </p>
        <br />
        <p>
          <a href="https://www.theatlantic.com/health/archive/2024/08/vision-future-ivf-christian-fetal-personhood/679586/?gift=D_hJMI87NXlE47BC567UVA_bUSYmsqS6LjsmvUus3JU">Learn more about why Rejoice Fertility is the choice for IVF according to this article
            by the Atlantic.
          </a>
        </p>
        <div
          sx={{
            h4: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              color: '#000',
              variant: 'text.xs',
            },
            img: {
              bg: '#47E4E0',
              width: '108px',
              height: '109px',
              border: '5px solid #F4EDED',
              borderRadius: '50%',
              mb: '1rem',
            },
            p: '1rem',
          }}
        >
          <div
            sx={{
              display: 'flex',
              justifyContent: ['center', null, null, 'space-between'],
              flex: ['1 0 100%', null, 'calc(33% - 1rem)'],
              flexWrap: 'wrap',
              alignItems: 'center',
              mt: '2rem',
              h3: {
                mb: '1rem',
                variant: 'text.lg',
              },
              button: {
                all: 'unset',
                cursor: 'pointer',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              },
            }}
          >
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img src="/images/ivf-icon1.png" alt="" />
              <h3>Natural Cycle IVF</h3>
              <button onClick={() => openModal(modalData[0])}>
                More info
                <FiArrowRight />
              </button>
            </div>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: ['2rem', null, null, null],
              }}
            >
              <img src="/images/ivf-icon2.png" alt="" />

              <h3>Mini-Stim IVF</h3>
              <button onClick={() => openModal(modalData[1])}>
                More info
                <FiArrowRight />
              </button>
            </div>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: ['2rem', null, null, null],
              }}
            >
              <img src="/images/ivf-icon3.png" alt="" />
              <h3>Stimulated Cycle IVF</h3>
              <button onClick={() => openModal(modalData[2])}>
                More info
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Faqs data={data} />
      <Help />
      {/* <div id="modal"></div> */}
      <div
        sx={{
          '.modal-container': {
            display: 'flex',
            flexDirection: 'column',
            header: {
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 0.5rem',
            },
          },
        }}
      >
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              zIndex: '99999',
              top: '55%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              overflowY: 'auto',
              maxHeight: '80vh',
            },
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Modal>
      </div>
    </Layout>
  );
};

export default IVFPage;
