/** @jsx jsx */
import { jsx } from 'theme-ui';
import Faqs from '../../components/Common/Faqs';
import Questions from '../../components/Common/Questions';
import Header from '../../components/Common/Header';
import Banner from '../../components/Common/Banner';
import Layout from '../../components/Layout';
import Help from '../../components/Common/Help';
import { Seo } from '../../components/Seo';

// FAQ SECTION

const EmbryoAdoptionTestPage = () => {
  const data = [
    
    {
      question: 'What is the mission of RER?',
      answer:
        "Rejoice Embryo Rescue (RER) was created to coordinate the receipt and secure storage of human embryos awaiting ‘adoption’ by couples pursuing a future frozen embryo transfer with these donated embryos. RER works collaboratively with its affiliated faith-based <a href="https://rejoicefertility.com/services/embryo-adoption/>Embryo Adoption organizations</a> to facilitate frozen embryo transfers of donated embryos either at Rejoice Fertility in Knoxville, TN (where we have significantly higher live birth rates from donated embryos per transfer than the rest of the nation) or at the clinic of your choice.",
    },
    {
      question: 'What is Embryo Adoption and where do the embryos come from?',
      answer:
        'During a cycle of IVF a woman&#39;s eggs are fertilized in an IVF Lab and these fertilized eggs are then incubated for several days until they are ready to be transferred into her uterus or frozen for future use. <br />Unfertilized eggs can also be frozen and commercial egg and sperm banks are used by many fertility clinics to help patients conceive. Eggs and sperm do not have any special moral value and patients often decide to discard their frozen eggs or frozen sperm when they no longer plan to pursue any additional treatments. However, patients often struggle with the decision of what to do with their “leftover” frozen embryos. <br />Embryo Adoption represents a life-affirming option for patients who, for a variety of reasons, cannot or do not wish to use their frozen embryos left over from a prior IVF cycle.  Our donors make the selfless decision that instead of destroying/ discarding their embryos (which is what happens in the majority of the clinics), that they would like to give the embryos a chance at life, and share that gift with an adopting family. Some of the donated embryos are from our affiliated on-site fertility practice, Rejoice Fertility. Some are from donors who are currently working with one of our affiliated Embryo Adoption organizations and wish to have the embryos stored with Rejoice while awaiting matching. Some are embryos previously donated to fertility clinics that are unable to provide matching services or were abandoned so the clinics have turned over the custodianship of these embryos to Rejoice for matching through our affiliated Embryo Adoption organizations. Lastly, some are from donors who have heard about the outstanding Donor Embryo pregnancy rates at Rejoice fertility and Rejoice IVF Lab and want their embryos to have the best chance at life. Regardless of where they came from, we are happy to help be a part of their journey.'
    },
    {
      question: 'Does RER match donors and recipients?',
      answer:
        'No. RER is not an Embryo Adoption ORGANIZATION and does not match donors and recipients. RER collaborates with Embryo Adoption organizations, including Snowflakes Embryo Adoptions, Embryo Adoption Services of Cedar Park, Christian Adoption Consultants, and Flourish Adoption Services. All matching is performed by these organizations.',
    },
    {
      question: 'Who are the approved adoption agency affiliates?',
      answer:
        '<ul> <li><a href="https://www.flourishconsultingservicesllc.com/about">Lauren Wilson LMSW (Flourish Consulting Services)</a></li>   <li><a href="https://nightlight.org/snowflakes-embryo-adoption-donation/">Nightlight’s Snowflakes Embryo Adoption Program </a></li>   <li><a href="https://www.christianadoptionconsultants.com/">Christian Adoption Consultants</a></li>  <li><a href="https://www.embryosolution.com/embryo-reception">Embryo Adoption Services of Cedar Park</a></li>  <li><a href="https://flourishadoptions.com">Flourish Adoption Ministries</a></li>   <li><a href="https://www.embryosalive.com">Embryos Alive</a></li>  </ul>',
    },
    {
      question: 'Why do you call it adoption? Is it really a legal adoption?',
      answer:
        'Embryo adoption is complex because the embryo is legally considered “property” rather than a child under the law in most jurisdictions.  Embryo adoption is not strictly an “adoption” because the legal definition of adoption refers to a child who is already born.  The proper terminology in TN is “embryo relinquishment and transfer of legal custodianship.” However, as we are helping put these unborn children into families, we are comfortable using the word ‘adoption’ throughout our literature and website.',
    },

    {
      question: 'We keep hearing about Rejoice Embryo Rescue (RER). What is RER?',
      answer: "Rejoice Embryo Rescue (RER) is a Tennessee LLC that was created to coordinate the receipt and secure storage of human embryos awaiting adoption by couples pursuing a future frozen embryo transfer with these donated embryos. RER works collaboratively with its affiliated faith-based Embryo Adoption organizations to facilitate frozen embryo transfers of donated embryos either at Rejoice Fertility in Knoxville, TN or at the clinic of the recipient couple’s choosing.",
    },

    {
      question: 'Does RER match donors and recipients?',
      answer: "RER is not an Embryo Adoption organization and does not match donors and recipients. Instead, RER works collaboratively with Embryo Adoption organizations which currently includes Nightlight’s Snowflakes Embryo Adoption Program, Embryo Adoption Services of Cedar Park, Flourish Adoption Ministries, Embryos Alive, Christian Adoption Consultants and Lauren Wilson LMSW (Flourish Consulting Services). All matching is coordinated by one of these organizations.",
    },

    {
      question: '',
      answer: "",
    },

    {
      question: 'Does RER store embryos?',
      answer:
        'RER is supported by the embryology staff of Rejoice IVF Lab, LLC, who provide all needed embryology services such as receiving, shipping, handling and continued storage of embryos. Rejoice IVF Lab, LLC is accredited by The Joint Commission.  We are proud to have their Gold Seal of Approval.  Rejoice Fertility, Rejoice IVF Lab, and Rejoice Embryo Rescue (RER) are all onsite together in the same building in Knoxville, TN.',
    }


    /*
    {
      question: '',
      answer: "",
    },
    */


  ];
  


  // QUESTIONS SECTION
  const q = [
    {
      question: 'What are the next steps that I need to take?',
      answer:
        'Per the mediation agreement signed on 8/23/24, all affected patients are being notified so that they can make their own choice via the outline above. Both parties request that patients make their choice known by Sept. 20, 2024. If you have already sent in that form, then your choice will be honored by both entities. A link to this form can be found here: <a href="https://pdf.ac/3KY2Y9">https://pdf.ac/3KY2Y9</a>',
    },
    {
      question: 'I was recently seen as a new patient (by either Dr. Gordon or Dr. Keenan) and have yet to matched with any NEDC embryos, what are my options?',
      answer:
        'If you wish to be matched with NEDC embryos, then you will remain a patient of Dr. Keenan’s. Contact Dr. Keenan’s new practice and the NEDC. If you are interested in pursuing Embryo Adoption at Rejoice then you can do so with embryos matched to you by either <a href="https://nightlight.org/snowflakes-embryo-adoption-donation/">Snowflakes Embryo Adoption</a> or <a href="https://adoptembryos.org/">Embryo Adoption Services of Cedar Park</a>. Please contact Rejoice at any time if you have any questions.',
    },
    {
      question: 'I am a Rejoice patient (previously seen by Dr. Gordon or Dr. Keenan) but have used all of my NEDC donated embryos, what are my options?',
      answer: 'Refer to above question for all options available.',
    },
    {
      question: 'Where are my embryos now?',
      answer:
        'Your adopted embryos remain where they have always been since they arrived here in Knoxville - safe and sound in the cryostorage tanks (also called dewars) at Rejoice Fertility under the care of our <a href="https://rejoicefertility.com/about-us">experienced embryology team.</a>',
    },
    {
      question: 'When will my embryos be moved if I choose to transfer my care to Dr. Keenan’s new practice?',
      answer: 'Per the agreement of both parties all of the embryos for patients who wish to continue their care with Dr. Keenan and all of the unmatched embryos will hopefully be moved to Dr. Keenan’s new practice location by October 15, 2024.',
    },
    {
      question: 'When will embryo transfers resume?',
      answer:
        'At Rejoice, getting a brand new IVF Laboratory up and running requires diligence and attention to detail. We are scheduling our first group of embryo transfers in the <a href="https://www.facebook.com/story.php?story_fbid=10211808426682206&id=1715810446&mibextid=WC7FNe&rdid=kbiLyaCUi6CHrBOW">new Rejoice Fertility building</a> for the last week of September. During October we will be performing FETs over 3 weeks in order to catch up on patients who have been waiting patiently for their FETs. If you choose to continue your care with Dr. Keenan, please contact his new practice in Powell, TN or the NEDC',
    },
    {
      question: 'What can I do if I have additional questions or concerns?',
      answer:
        'Dr. Gordon will continue to make himself available to all patients with questions or concerns. Patients are welcome to contact him via phone, email (<a href="mailto:dr.gordon@rejoiceivf.com">dr.gordon@rejoiceivf.com</a>) or via a video call using the DOXY.ME video conferencing system (please call Taylor or Alyssa at 865-777-0088 to schedule). All of us here at Rejoice are so sorry for any distress that this situation has caused and we are so happy that patients will be able to continue their care with the physician, clinical and embryology team of their choice!',
    },
  ];
  return (
    <Layout>
      <Seo
        title="Rejoice Embryo Rescue | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header title={'Rejoice Embryo Rescue'} image={'/images/RER-logo-slide.jpg'} ctaPrimary={'Find out more here'} ctaPrimaryLink={'/services/embryo-adoption'} ctaSecondary={'Find out more here'} ctaSecondaryLink={'/services/donate-embryos'} />
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
          At Rejoice Embryo Rescue, we believe that every embryo deserves a chance at life. 
          Our mission is built on the conviction that the only embryo that cannot result in a healthy baby 
          is the one never given the opportunity to be transferred. We have dedicated our practice to being 
          a sanctuary for these potential lives, accepting and caring for embryos regardless of their grade, 
          history, or how long they have been frozen.
        </p>
        <p>
          We specialize in the "rescue" of long-frozen and fragile embryos, utilizing advanced thawing 
          protocols to ensure that even those waiting decades have their moment. Whether you are looking to 
          place your embryos in a loving home or hoping to build your family through embryo adoption, you are 
          joining a movement that values every life. Explore the pathways below to see how you can be part of 
          this rescue story.
        </p>
        <p>
          Rejoice Embryo Rescue (RER) is a Tennessee LLC that was created to coordinate the receipt and secure 
          storage of human embryos awaiting adoption by couples pursuing a future frozen embryo transfer with 
          these donated embryos. RER works collaboratively with its affiliated faith-based Embryo Adoption 
          organizations to facilitate frozen embryo transfers of donated embryos either at Rejoice Fertility 
          in Knoxville, TN, or at the clinic of the recipient couple’s choosing.
        </p>
        
      </section>
      <Faqs data={data} />




      

       <Help />
    </Layout>
  );
};

export default EmbryoAdoptionTestPage;
