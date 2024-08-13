/** @jsx jsx */
import { jsx } from 'theme-ui';
import Faqs from '../../components/Common/Faqs';
import Header from '../../components/Common/Header';
import Layout from '../../components/Layout';
import Help from '../../components/Common/Help';
import { Seo } from '../../components/Seo';

const EmbryoAdoptionTestPage = () => {
  const data = [
    {
      question: 'Why are there embryos available for adoption?',
      answer:
        'Stimulated Cycle IVF can result in the production of 12-30 eggs or more in some patients. One of the unanticipated issues associated with traditional IVF has been the question of what to do with the extra embryos that are left stored frozen in liquid nitrogen once a couple believes that their family is complete. Some couples are willing to allow others to adopt these embryos.',
    },
    {
      question: 'How common is Embryo Adoption?',
      answer:
        'Although many IVF clinics offer Embryo Adoption / Embryo Donation, none has the depth of experience found at Rejoice Fertility. Although there are over 200,000 IVF procedures performed in the United States every year there are fewer than 2000 cycles of Embryo Adoption performed yearly.',
    },
    {
      question: 'Who are the best candidates for Embryo Adoption?',
      answer:
        'The best candidates for EA are those couples where the wife has a normal uterus and no medical reason which could result in a lower chance of success such as the presence of a dilated, fluid-filled fallopian tube (hydrosalpinx).',
    },
    {
      question: 'How successful is EA?',
      answer: 'Success rates with Embryo Donation/Adoption are close to 50% per cycle',
    },
    {
      question: 'What about couples with male factor?',
      answer:
        'Some couples feel more comfortable with EA as opposed to the use of donor egg or donor sperm.',
    },
    {
      question: 'Can couples without a fertility problem adopt embryos?',
      answer: 'Absolutely. Some patients have pursued EA because they feel called to adopt.',
    },
    {
      question: 'How expensive is this treatment?',
      answer:
        'The treatment cost per cycle is less than $4,000 but that does not include pre-screening and the costs associated with the matching process through Snowflake Embryo Adoption or the National Embryo Donation Center.',
    },
  ];
  return (
    <Layout>
      <Seo
        title="Knoxville Embryo Adoption | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header title={'Embryo Adoption'} image={'/images/embryo-adoption-crop.jpg'} />
      <section
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          px: ['1rem', null, null, '2rem'],
          py: ['2rem', null, null, '4rem'],
          variant: 'text.normal',
        }}
        className="content"
      >
        <p>
        Some have estimated that there may be as many as 5,000,000 frozen embryos stored in IVF Clinics across the United States but no one is really sure of the actual number with a range of (600,000 to 1.5 million frequently quoted).
        </p>
        <p>
        Some couples are willing to donate their frozen embryos to recipient couples who are willing to undergo a frozen embryo transfer with these embryos.
        </p>
        <p>
        At Rejoice Fertility we have the single-clinic largest experience with Embryo Adoption in the entire world.
        </p>
        <p>
        All of our matching of embryo donors and recipients is currently accomplished through the efforts of Nightlight Christian Adoptions Snowflake Embryo Adoption Program (<a href="https://nightlight.org/snowflakes-embryo-adoption-donation/">https://nightlight.org/snowflakes-embryo-adoption-donation/</a>). Patients undergo an evaluation to ensure that there are no medical contraindications to Embryo Adoption and then undergo their embryo transfers in Knoxville.
        </p>
        <h3>TOP REASONS TO CHOOSE REJOICE FERTILITY FOR EMBRYO ADOPTION</h3>
        <h4>1. Expertise</h4>
        <p>Our embryology team has the most experience of any IVF program in the
country with the thawing and care of donated embryos especially those that have been frozen
for decades including several amazing outcomes such as the delivery of healthy twins after
the transfer of embryos stored for 30 years!</p>
        <h4>2. Experience</h4>
        <p>Our team has coordinated hundreds of frozen embryo transfer cycles for
patients pursuing embryo adoption.</p>
        <h4>3. Excellence</h4>
        <p>All embryos are handled with the upmost care. Rejoice IVF is the only
accredited IVF Program in the Greater Knoxville Area having secured this accreditation by
The Joint Commission back in 2021.</p>
        <h4>4. Expansion</h4>
        <p>Our new state-of-the art IVF Laboratory and clinical space will be ready in
August 2024 and with many patient-friendly features such as Private Rooms for pre-transfer
discussions with Dr. Gordon.</p>
        <h4>5. Empathy</h4>
        <p>All of us here at Rejoice Fertility believe that every embryo deserves a chance at
life and that the only embryo that cannot result in a healthy baby is the embryo that you don’t
transfer into a patient. In order to support Snowflakes OPEN HEARTS PROGRAM all
patients matching through this unique program can have their embryo transfers in Knoxville
for only $2,835 … a significant savings off of our normal FET fees.</p>
      </section>
      
      <section
      sx={{
        background: '#343753',
      }}
    >
      <div
        sx={{
          maxWidth: '1920px',
          mx: 'auto',
          minHeight: '380px',
          display: 'flex',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          height: '100%',
          position: 'relative',
        }}
      >
        <div
          sx={{
            flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
            maxWidth: ['100%', null, '1 0 calc(50% - 1rem) '],

            order: [2, null, 0],
            maxHeight: '500px',
            minHeight: '100%',
          }}
        >
          <img
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              maxHeight: 'inherit',
              p: ['1rem', null, '0px'],
            }}
            src={/images/embryo-adoption-crop.jpg}
            alt=""
          />
        </div>
        <div
          sx={{
            flex: ['1 0 100%', null, '1 0 50%'],
            maxWidth: ['100%', null, '50%'],
            position: 'relative',
            minHeight: ['100%', null, '400px'],
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            px: ['1rem', null, '3rem'],
            py: ['1rem', null, '3rem'],
            justifyContent: 'center',
            alignItems: ['center', null, 'initial'],
          }}
        >
          <h1
            sx={{
              variant: 'text.xxl',
              lineHeight: 1.15,
              color: '#FFFFFF',
              textAlign: ['center', null, 'left'],
              maxWidth: '600px',
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              sx={{
                variant: 'text.normal',
                lineHeight: '1.5',
                letterSpacing: '0.09em',
                color: '#FFFFFF',
                textAlign: ['center', null, 'left'],
                maxWidth: '600px',
              }}
            >
              {description}
            </p>
          )}{' '}
          <div
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: ['center', null, 'start'],
              a: {
                px: '1.5rem',
                py: '1rem',
                display: 'inline-block',
                variant: 'text.xs',
                borderRadius: '8px',
                minWidth: '200px',
                textAlign: 'center',
                transition: 'all 0.3s',
              },
            }}
          >
            <p>
            In 1997, Nightlight Christian Adoptions pioneered embryo adoption to assist families with
remaining embryos in frozen storage in selecting an adopting family to attempt pregnancy with
them.</p><br/>
<p>They named their new program the "Snowflakes Embryo Adoption Program," likening each
embryo to a unique, frozen snowflake. Snowflakes Embryo Adoption has since become the
largest embryo adoption agency in the world.</p><br/>
<p>Embryo adoption follows adoption best practices, transferring remaining embryos from donors to
recipients—the adopting families—who then undergo frozen embryo transfers (FETs) with the
embryos and give birth to their adopted child.</p><br/>
<p>To ensure the well-being of all parties involved, an adoption home study is required. This process
educates the adopting family and provides peace of mind to the embryo donors, knowing that the
family receiving their embryos has been thoroughly vetted by the agency.</p><br/>
<p>Embryo adoption programs differ from embryo donation programs run out of fertility clinics.
While the latter primarily focus on medical treatment, adoption agencies consider social and
emotional aspects for all involved in the adoption process.</p><br/>
<p>Encouraging open relationships is a key aspect of embryo adoption, allowing children born from
this process to maintain connections with both their biological background and their adoptive
family's experiences. In contrast, embryo donation programs often prioritize anonymity,
providing little to no information to either the donor or recipient and encouraging privacy rather
than secrecy.
              </p><br/>
          </div>
        </div>
      </div>
    </section>
    <section
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          px: ['1rem', null, null, '2rem'],
          py: ['2rem', null, null, '4rem'],
          variant: 'text.normal',
        }}
        className="content"
      >
        <h3>TOP REASONS TO CHOOSE SNOWFLAKES FOR EMBRYO ADOPTION</h3>
        <p>Snowflakes was established by Nightlight Christian Adoptions in 1997.</p>
        <p>Over 2,000 families have donated their remaining embryos through Snowflakes–
sometimes referred to as leftover embryos or unused embryos–allowing them to choose
the adoptive family of their embryos.</p>
        <p>More than 120 babies are expected to be born through the program in 2024, making a
total number of over 1,300 Snowflakes Babies born!</p>
        <p>Embryo adoption is a low-cost adoption option, allowing you to experience pregnancy
and give birth to your adopted child.</p>
        <p>Snowflakes has no waiting lists for adoptive families to be matched with embryos.</p>
        <p>Hoping to rescue an embryo from frozen storage? You may be interested in our Open
Hearts Program.</p>
        <p>Here are 50 more benefits you receive when you choose Snowflakes Embryo Adoption.</p>
      </section>
      <Faqs data={data} />
      <Help />
    </Layout>
  );
};

export default EmbryoAdoptionTestPage;
