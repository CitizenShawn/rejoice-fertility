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
          Some have estimated that there may be as many as 5,000,000 frozen embryos stored in IVF
          Clinics across the United States but no one is really sure of the actual number with a range of
          (600,000 to 1.5 million frequently quoted).
        </p>
        <p>
          Some couples are willing to donate their frozen embryos to recipient couples who are willing to
          undergo a frozen embryo transfer with these embryos.
        </p>
        <p>
          At Rejoice Fertility we have the single-clinic largest experience with Embryo Adoption in the entire
          world.
            </p>
        <p>
          All of our matching of embryo donors and recipients is currently accomplished through the efforts of
          Nightlight Christian Adoptions Snowflake Embryo Adoption Program (<a href='https://nightlight.org/snowflakes-embryo-adoption-donation/'>nightlight.org/snowflakes-embryo-adoption-donation/</a>).
          Patients undergo an evaluation to ensure that there are no medical contraindications to Embryo Adoption
          and then undergo their embryo transfers in Knoxville.
            </p>
      </section>
      <Header title={'Nightlight'} description={'In 1997 Nightlight Christian Adoption pioneered embryo adoption to assist families with remaining embryos in forzen storage in selecting an adopting family to attempt pregnancy with them.'} image={'/images/nightlight-christian-adoptions-header.jpeg'}/>
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
          Lorem Ipsum
          </p>
      </section>
      <Faqs data={data} />
      <Help />
    </Layout>
  );
};

export default EmbryoAdoptionTestPage;
