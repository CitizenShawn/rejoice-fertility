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
          It is estimated that there are over 1,000,000 frozen embryos stored in IVF Clinics across
          the United States. Some couples are willing to donate their frozen embryos to recipient
          couples who are willing to undergo a frozen embryo transfer with these embryos.
        </p>
        <p>
          At Rejoice Fertility we have extensive experience with Embryo Adoption. All matching
          of embryo donors and recipients is accomplished through the efforts of the National Embryo
          Donation Center and the Nightlight Christian Adoptions Snowflake Embryo Adoption Program.
        </p>
      </section>
      <Header title={'Nightlight'} description={'In 1997 >Nightlight Christian Adoption pioneered embryo adoption to assist families with remaining embryos in forzen storage in selecting an adopting family to attempt pregnancy with them.'} image={'/images/nightlight-christian-adoptions-header.jpeg'} ctaPrimary={''} ctaSecondary={''} ctaPrimaryLink{''} ctaSecondaryLink{''}/>
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
          They named their new program the "Snowflakes Embryo Adoption Program," likening each
embryo to a unique, frozen snowflake. Snowflakes Embryo Adoption has since become the
largest embryo adoption agency in the world.
        </p>
        <p>
          Embryo adoption follows adoption best practices, transferring remaining embryos from donors to
recipients—the adopting families—who then undergo frozen embryo transfers (FETs) with the
embryos and give birth to their adopted child.
        </p>
        <p>
          To ensure the well-being of all parties involved, an adoption home study is required. This process
educates the adopting family and provides peace of mind to the embryo donors, knowing that the
family receiving their embryos has been thoroughly vetted by the agency.
        </p>
        <p>
          Embryo adoption programs differ from embryo donation programs run out of fertility clinics.
While the latter primarily focus on medical treatment, adoption agencies consider social and
emotional aspects for all involved in the adoption process.
        </p>
         <p>
          Encouraging open relationships is a key aspect of embryo adoption, allowing children born from
this process to maintain connections with both their biological background and their adoptive
family's experiences. In contrast, embryo donation programs often prioritize anonymity,
providing little to no information to either the donor or recipient and encouraging privacy rather
than secrecy.
        </p>
      </section>
      <Faqs data={data} />
      <Help />
    </Layout>
  );
};

export default EmbryoAdoptionTestPage;
