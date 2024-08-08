/** @jsx jsx */
import { jsx } from 'theme-ui';
import Faqs from '../../components/Common/Faqs';
import Header from '../../components/Common/Header';
import Layout from '../../components/Layout';
import Help from '../../components/Common/Help';
import { Seo } from '../../components/Seo';

const FertilityTreatmentNonIVFPage = () => {
  const data = [
    {
      question: 'Why are my cycles irregular?',
      answer:
        'Irregular cycles and infrequent ovulation may result from a variety of conditions. Polycystic ovarian syndrome is very common, affecting about 15% of reproductive aged women. Other problems can include thyroid dysfunction and elevated levels of prolactin hormone.',
    },
    {
      question: 'What medications are used for Ovulation Induction?',
      answer:
        'Usually, we start with oral fertility medications like Letrozole or Clomid. Some women may require more advanced medical treatment to restore normal cycles.',
    },
    {
      question: 'Who are the best candidates for IUI?',
      answer:
        'The best candidates for IUI are those couples where the wife has normal fallopian tubes and the husband has fairly normal sperm.',
    },
    {
      question: 'Can all patients be treated with OI/IUI?',
      answer:
        'Women with severe endometriosis or a history of pelvic adhesions are not ideal candidates for IUI.',
    },
    {
      question: 'What about couples with male factor?',
      answer:
        'Although couples with male factor infertility can attempt IUI, the success rates are fairly low in such cases, and prompt consideration should be given to IVF (and ICSI) if pregnancy fails to occur after three or four attempts.',
    },
    {
      question: 'How expensive is this treatment?',
      answer:
        'The cost per cycle varies but usually ranges from $500-$2000 depending on whether medication is used, the type of medication used and how much monitoring is performed.',
    },
  ];
  return (
    <Layout>
      <Seo
        title="Fertility Treatment And Non-IVF | Rejoice Fertility Center"
        description=""
      />
      <Header title={'Fertility Treatment: Non-IVF'} image={'/images/fertility-treatment.png'} />
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
          Some women have very irregular or even absent periods. For these women, Ovulation Induction
          (OI) restoring normal ovulation will result in more regular cycles and can lead to
          pregnancy without any additional treatments. However, for women who fail to conceive in
          spite of regular cycles, the addition of Intrauterine Insemination (IUI) to treatment with
          ovulation induction medications will be successful, whereas each treatment by itself was
          not.
        </p>
        <p>
          Intrauterine Insemination (IUI) can be performed either in conjunction with a woman’s
          natural cycle or can be combined with the use of fertility drugs. IUI can also be
          effectively used in couples who struggle with sexual dysfunction or infrequent coitus.
        </p>
      </section>
      <Faqs data={data} />
      <Help />
    </Layout>
  );
};

export default FertilityTreatmentNonIVFPage;
