/** @jsx jsx */
import { jsx } from 'theme-ui';
import Layout from '../components/Layout';
import Header from '../components/Common/Header';
import Faqs from '../components/Common/Faqs';
import { FaWpforms } from 'react-icons/fa';

const GettingStartedPage = () => {
  const data = [
    {
      question: 'Where is Rejoice Fertility located?',
      answer:
        "We are conveniently located in the West Knoxville area, just minutes from Interstate 40 and only a 15 minute drive from Knoxville's McGhee Tyson Airport.",
    },
    {
      question: 'Who works at Rejoice Fertility?',
      answer:
        "Dr. Jeffrey Keenan and Dr. John Gordon are our two Board Certified Reproductive Endocrinologists. Rejoice Fertility is also Knoxville's only fertility practice with an IVF Laboratory accredited by The Joint Commission.",
    },
    {
      question:
        'Does Rejoice Fertility offer diagnostic testing and treatment for infertility?',
      answer:
        'We offer complete diagnostic testing for infertility and a range of fertility treatments from ovulation induction to intrauterine insemination to IVF and Embryo adoption.',
    },
    {
      question:
        'How much experience do the doctors at Rejoice Fertility have in treating infertility?',
      answer:
        'Together Dr. Keenan and Dr. Gordon have over 50 years of combined experience in treating disorders of reproduction.',
    },
    {
      question: 'Where do the patients seen at Rejoice Fertility come from?',
      answer:
        'We see patients from the local Knoxville area as well as many patients who travel to Knoxville from all over the United States. In any given week we may have patients from Michigan, Virginia, Arkansas, Colorado and many other states!',
    },
    {
      question: 'How can I determine if I have insurance coverage for infertility?',
      answer:
        'Once you make a new patient appointment, our benefits coordinator will contact your insurance company and attempt to verify your benefits in advance of your new patient appointment.',
    },
  ];

  const forms = [
    { name: 'New Patient Forms', link: 'https://pdf.ac/2bRXz1' },
    { name: 'Female Fertility Questionnaire', link: 'https://pdf.ac/1R8xDH' },
    { name: 'Male Questionnaire', link: 'https://pdf.ac/X19oV' },
    {
      name: 'Demographics',
      link: 'https://www.pdffiller.com/en/link_to_fill/679762811.htm',
    },
    { name: 'Genetic Screening', link: 'https://pdf.ac/2bRXz1' },
    {
      name: 'Andrology Request/Semen Analysis Form',
      link: '/assets/Rejoice 05-01 Referring MD Andrology Request tear sheet 1-1-24.pages.pdf',
    },
  ];

  const resources = [
    {
      image: '/images/thumbnail_logo-tcra-final.png',
      link: 'https://www.tennesseereproductiveacupuncture.com/index.html',
    },
    {
      image: '/images/thumbnail_mitm-small.jpg',
      link: 'http://momsinthemakinggroup.com/',
    },
    {
      image: '/images/thumbnail_nedc.jpg',
      link: 'https://www.embryodonation.org/',
    },
    {
      image: '/images/thumbnail_resolve-logo.png',
      link: 'https://resolve.org/',
    },
    {
      image: '/images/thumbnail_nighlight.jpg',
      link: 'https://nightlight.org/',
    },
    {
      image: '/images/thumbnail_rf_newwebsiteheader.jpg',
      link: 'https://www.reproductivefacts.org/',
    },
  ];
  return (
    <Layout>
      <Header title={'Getting Started'} image={'/images/about-us.png'} />
      <section
        sx={{
          maxWidth: '1400px',
          margin: 'auto',
          padding: ['1rem', null, null, '2rem'],
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          variant: 'text.normal',
          fontWeight: 400,
          color: '#4D4F60',
        }}
      >
        <p>
          We are happy to help you on your fertility journey and sometimes just getting started is
          the most difficult part of any journey. We are here to help! In addition to FAQs here you
          can find all of the forms and handouts that you may need. These are grouped together by
          topic and description.
        </p>
        <p>
          Please print out the new patient forms prior to your initial visit and fill them out so
          that we can best help you at that time.
        </p>
      </section>

      <Faqs data={data} />
      <section className="content">
        <h2 sx={{ variant: 'text.lg', textAlign: 'center', my: '2rem' }}>
          Forms and Information Sheets
        </h2>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          {forms.map((form) => (
            <div sx={{ maxWidth: '220px' }}>
              <a
                href={form.link}
                target="_blank"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                  variant: 'text.normal',
                  textAlign: 'center',
                }}
              >
                <FaWpforms />
                {form.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="content">
        <h2 sx={{ variant: 'text.lg', textAlign: 'center', my: '2rem' }}>Resources</h2>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          {resources.map((resource) => (
            <div sx={{ width: '276px', border: '2px solid #ebebeb' }}>
              <a
                href={resource.link}
                target="_blank"
                sx={{
                  display: 'flex',
                  height: '100%',
                  minHeight: '92px',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                  variant: 'text.normal',
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                <img src={resource.image} alt="" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default GettingStartedPage;
