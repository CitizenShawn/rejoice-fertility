import * as React from 'react';
import Faqs from '../components/Common/Faqs';
import Header from '../components/Common/Header';
import Layout from '../components/Layout';
import { Seo } from '../components/Seo';

const DiagnosisAndTestingPage = () => {
  const data = [
    {
      question: 'What is the first step?',
      answer:
        'Begin your embryo adoption journey by filling out the application for recipients online. Completion will require payment of a non-refundable $400 application fee. If you receive an ‘error’ message upon submitting the application, it is likely you do not meet one or more of our program requirements. (To see the requirements, scroll down to the ‘Who can adopt?’ question.)<br>Once you submit your application, the NEDC receives notice and you will receive an automatically generated confirmation of payment receipt via email. This email doubles as confirmation that your application has been successfully submitted. Then, about 7 days later, you will have your next contact from us (don’t be alarmed when you don’t hear from us the first few days after your submission!) as a follow-up packet of consents and forms to be completed and returned will be emailed to you. You and your spouse are also both required to be tested for sexually transmitted diseases and we will include a laboratory requisition in the packet for you to have that testing.<br>At this point you may also start your home study process, although this does not need to be completed prior to your initial appointment. We accept home studies from any agency licensed in the state, territory or province in which you reside. (Note: If you are considering ONLY embryo adoption, then a more limited home study such as the Snowflakes Family Evaluation is an additional option you may consider.) If you need help finding an agency, please contact Lauren Wilson with Flourish Consulting Services LLC at 865-257-9078.<br>Once we receive all of the paperwork in the packet back, we will contact you to set up your initial appointment at the NEDC for medical clearance. Be prepared to spend an entire morning with us as you and your spouse also meet your care team at your initial appointment. Once you are medically cleared and the home study is completed and reviewed, we will begin the matching process and give you an estimate of which monthly transfer cycle you will be placed into.<br>At any time, if you have questions about the application process, the NEDC is here via phone at 1-866-585-8549. The compassionate staff of the National Embryo Donation Center is eager to work with you to achieve your dream of a family. Please check out the additional FAQs below to find answers to some of the most common questions potential recipients have.',
    },
    {
      question: 'Why choose embryo adoption?',
      answer:
        'Infertility makes a couple feel lonely, empty and incomplete. The joy of having a child is like no other experience in life, fulfilling the heart’s deepest desire.',
    },
    {
      question: 'Why choose the NEDC?',
      answer:
        'Many choose to adopt through the NEDC because of our superior pregnancy rates (54% in the most recent reporting year). Many donate embryos through the NEDC because of the peace of mind provided by our home study requirement, which means their embryos will go to a stable, healthy family. And all are reassured by our nearly two-decade-long track record and commitment to keep strengthening the NEDC long-term, ensuring the ability of embryo donors and recipients to receive and share information in the future.<br>For more on what makes the NEDC unique, watch this video.',
    },
    {
      question:
        'During the selection process, can I obtain the grades (quality) of the embryos I Am choosing?',
      answer:
        'Many patients are overly concerned about embryo grading. It is important to note that, in general, poor quality embryos are not frozen by the vast majority of labs. Embryos in storage at the NEDC have been created at labs all over North America. Different labs use different grading systems, which can be confusing to anyone who is not an embryologist or physician. Furthermore, some labs do not provide any grading information at all. To further complicate matters, embryos frequently are graded differently after thawing than at the time of freezing. The method of freezing and the lab freezing the embryos are also important factors in embryo viability. Finally, embryo grading does not take into consideration the age of the woman contributing the egg, which is a much more important factor affecting success. <br>Because of these many factors, as well as the inability of our staff to handle all requests for embryo grading information, we have made it our policy not to discuss embryo grades when selecting your donors.  The only exception to this rule is if you are on your final transfer cycle following failed cycles. In that case, the embryology team will discuss not only grading but all other relevant information that may help you make the right decision for your final donor selection, if such information is available. As the donating families have entrusted us with the care of their embryos, we need to give all embryos the best chance at life.  We trust you will understand our position as stewards of these lives.',
    },
    {
      question: 'Who can adopt?',
      answer:
        'We work hard to assure our donors that their embryos will be placed in healthy, stable homes with loving parents.<ul><li> Couples must be a genetic male and a genetic female married for a minimum of 3 years.</li><li>Wife must be 45 years old or younger.</li><li>Wife’s body mass index (BMI) must be below 38 at the time of the frozen embryo transfer.</li><li>The combined age of the applicant couple must not exceed 100 years.</li> <li>The adopting mother must be healthy and able to carry a child to term. Surrogates are not an option for carrying the pregnancy.</li><li>The wife must not smoke during the application process, embryo transfer preparation and procedure process, or during pregnancy.</li><li>Both husband and wife must be free of alcohol dependence and other substance dependence for two years before adopting. A letter from an addiction specialist may be required.</li><li> All couples must complete and pass a 10-panel urine drug screen as well as a blood test for sexually transmitted diseases.</li><li>Couples must complete and pass a comprehensive family assessment (home study) prepared by a licensed adoption agency in the couple’s state, territory or province of residency, or an embryo adoption-specific Snowflakes Family Evaluation in lieu of a home study. Click here for adoption agency information.</li></ul>We are not able to make any exceptions to these requirements. If you meet the requirements, our dedicated staff will help prepare you every step of the way for the exciting journey ahead.',
    },
    {
      question: 'Can I adopt embryos of a different ethnicity?',
      answer:
        'Regardless of ethnicity, all embryos are in need of good homes. The overwhelming majority of our embryos are Caucasian. We have very few minority embryos. Because most families (Caucasian or minority) desire to adopt embryos with a shared ethnicity, we generally reserve minority embryos to be matched with recipients of the same ethnic background.<br>We do make exceptions in the cases of Caucasian recipient families who already have adopted children of different ethnic backgrounds. However, because we currently have such a shortage of African American embryos, we are unable at this time to place African American embryos with families of other ethnic backgrounds.',
    },
    {
      question: 'Can I adopt embryos with known potential for genetic or other abnormalities?',
      answer:
        'Yes! All life, from its earliest stages, is precious. That’s the reason the National Embryo Donation Center exists: to honor the tiniest lives while helping both donor and recipient couples to do the same. Included in that are embryos with known potential for genetic or other abnormalities.<br>The NEDC cares for many embryos in this “special consideration” category, and they are available for you to adopt. Special consideration embryos are those for whom testing or donor medical history may indicate an increased risk of the child being born with or eventually developing conditions or problems which range from mild to severe. These conditions could include Down syndrome or other chromosomal abnormalities, the potential for autism, or other poorly defined physical, emotional, or intellectual problems. Please note: the transfer of these embryos could often result in “typical” children. The likelihood of a child being born with a genetic or other abnormality varies by case.<br>Also included in our special consideration category are embryos for whom one of the donor parents has tested positive for a sexually transmissible infection such as HIV, Hepatitis B or Hepatitis C. FDA regulations require that these embryos be stored separately from others. When these embryos are transferred, there is a potential risk of the STI being passed along to the child and adoptive mother. However, this has never actually happened in the sum total of frozen embryo transfer history. Neither recipients transferring embryos in this category nor the embryos themselves are likely to develop any infection. Yet, because of the FDA requirements that couples be informed of the theoretical possibilities, most couples decline to receive such embryos.<br>Do you have a heart for special consideration embryos? Please reach out to our team today to learn more. Recipients who adopt these embryos receive a 50% discount on donor fees, which are the reimbursement costs for shipping and caring for the embryos.  The discount is simply to encourage the adoption of these embryos because they are generally harder to place. Thank you for prayerfully considering whether adopting special consideration embryos might be right for your family!',
    },
    {
      question: 'Can I select the sex of the embryo or embryos I adopt?',
      answer:
        'No. At the current time, only a small percentage of available NEDC embryos have undergone preimplantation genetic testing (PGT), which can reveal the sex of a particular embryo. But even in those cases the NEDC has chosen, for practical as well as ethical reasons, not to share this information with recipients.',
    },
    {
      question: 'Will we need to travel?',
      answer:
        "You will have two visits to the NEDC office in Knoxville, TN. We are co-located with our medical partners,<a href='https://southeasternfertility.org'> Rejoice Fertility,</a> who perform all medical aspects of the process.<br>Once your program application has been received and you have completed and returned your recipient packet, our Patient Coordinator will set a date for your initial consultation. One of our physicians will review the wife’s medical records to determine if you are physically capable of carrying a pregnancy. You will meet with our team and they will walk you through the NEDC’s embryo adoption process. During this visit, the wife will undergo a physical exam and “trial transfer” to check for any physical barriers which might impede the actual embryo transfer or pregnancy. Once your family assessment has been completed and reviewed, our Patient Coordinator will provide you with donor profiles that fit your wish list. It is strongly suggested that you select a second or backup donor in case the embryos from your primary donor do not survive the thawing process<br>Your second visit is for the actual embryo transfer. If your primary donor embryos do not survive the thawing process and you have previously selected a backup donor, then your travel and uterine preparation will not be wasted. Since our medical partners at Rejoice Fertility store all donated embryos on site, your backup embryos can be easily retrieved and thawed so that your transfer can be completed. Monitoring pre- and post-transfer will be done at your local infertility clinic at home. If pregnancy does not occur after the first attempt, further visits will be needed for future attempts, if desired.",
    },
    {
      question: 'Are there lodging accommodations nearby?',
      answer:
        "Yes, there are several hotels within a short drive of the NEDC, particularly in the Turkey Creek and Cedar Bluff areas of Knoxville. If you apply to become a recipient, you’ll receive a list of several of those hotels. Below are a few options that give special rates to NEDC families:<br>Hampton Inn & Suites Knoxville-Turkey Creek/Farragut<br>11340 Campbell Lakes Drive<br>865-966-0303<br> Special Rate: $104/night (plus tax)<br>Under “special accounts & rates”, enter the Corporate code 0002778140 and the discounted rate will show up.<br><a href='http://hamptoninn.hilton.com/en/hp/hotels/index.jhtml?ctyhocn=TYSTCHX'>http://hamptoninn.hilton.com/en/hp/hotels/index.jhtml?ctyhocn=TYSTCHX<a/><br>Staybridge Suites Knoxville West<br>11319 Campbell Lakes Drive<br>865-675-7829<br> <a href='https://www.ihg.com/staybridge/hotels/us/en/knoxville/tysle/hoteldetail?cm_mmc=GoogleMaps-_-SB-_-US-_-TYSLE'>https://www.ihg.com/staybridge/hotels/us/en/knoxville/tysle/hoteldetail?cm_mmc=GoogleMaps-_-SB-_-US-_-TYSLE</a>",
    },
    {
      question: 'How long does it take?',
      answer:
        'From the time you submit your online application, it will generally be about 8-9 months until your frozen embryo transfer takes place.',
    },
    {
      question:
        'Acupuncture has been part of my infertility treatment. Is that service available near the NEDC?',
      answer:
        'Yes, the Tennessee Center for Reproductive Acupuncture is located not far from the NEDC. They see embryo transfer patients 7 days a week including, if needed, outside of business hours. You may contact the center at 865-315-3845 to discuss setting up an appointment, or <a href="http://www.tennesseereproductiveacupuncture.com/">you may click here</a> here to visit their website and learn more information. (Note: This is not to be taken as an NEDC endorsement of fertility-related acupuncture. We answer this FAQ solely for the convenience of patients who have chosen it on their own as part of their treatment process.)',
    },
    {
      question: 'Why is screening necessary?',
      answer:
        'Our medical partners do a comprehensive evaluation and test for certain diseases to ensure the best conditions for successful implantation and a healthy pregnancy.',
    },
    {
      question: 'Will the genetic parents know our or the child’s identity?',
      answer:
        'It all depends on the level of communication that you choose to have with the donor family. Open relationships can allow as much or as little personal information as you and your donors wish to share. If you choose to adopt anonymously, the donors will not know any identifying information about you.',
    },
    {
      question: 'Is this really adoption?',
      answer:
        'Embryo adoption is neither legally nor technically an adoption. It is governed by contract (ownership) law and not adoption law. Adoption is defined as the placement of a live child after birth, but it is a term that most people can relate to when discussing receiving donated embryos for reproduction. When you give birth to your donor embryo-conceived child, your names will be on the birth certificate as the parents of this child. Many parents describe it as “giving birth to your adopted child.”',
    },
    {
      question: 'Can genetic parents change their minds and get the child?',
      answer:
        'Under current law, once the embryos have been transferred, the genetic parents have no legal claim to any resulting children. The contract agreement and relinquishment forms are legally binding between the two families.',
    },
    {
      question: 'Can embryo adoption lead to infections in the mother?',
      answer:
        'The genetic parents provide health histories and undergo disease screening prior to retrieving the sperm and eggs to create their embryos. The FDA requires that the donating couple be re-screened prior to donating their remaining embryos. If they used an egg and/or sperm donor, those donors do not have to be re-screened due to their being screened more heavily before being allowed to donate, but the genetic contributor of the couple must be.',
    },
    {
      question: 'Is embryo adoption associated with birth defects?',
      answer:
        'As a recipient in the NEDC embryo matching program, you are assuming the responsibility of due diligence for any profile you may select. This includes thoroughly reviewing and understanding the embryos available, the medical and genetic profile of the donor family, and the potential implications of transferring these embryos. You are advised to seek genetic counseling prior to making a selection. You are also agreeing to release the couple donating the embryos from any and all responsibilities or liabilities for problems which might occur related to or as a result of your receipt of their donated embryos. Furthermore, you are agreeing to take full responsibility for the care and upbringing of the child or children that are born as a result of your receipt of donated embryos. You are releasing the embryo donors, the National Embryo Donation Center and Rejoice Fertility and any of its employees, physicians, or contractors from any and all responsibility and liability for support, care or custody of any offspring born to you as a result of your use of their embryos.<br> However, birth defects are no more common with this technique than with standard in vitro fertilization, and are predicted to be no greater than in the general infertility population.',
    },
    {
      question: 'What are my chances for a successful pregnancy?',
      answer:
        'According to the latest statistics from the CDC, the national average pregnancy rate for embryo adoption is 50 percent and the national average birth rate is 40 percent. These statistics are from a database of all U.S. assisted reproductive technology clinics. The NEDC’s overall pregnancy rate per transfer is 55 percent and live-birth rate is 45 percent. Not all embryos survive the freeze/thaw process, though approximately 75 percent do, and thawing of your selected embryos may not lead to a transfer. However, this may still offer your greatest hope of achieving pregnancy.',
    },
    {
      question: 'How many embryos will be transferred to my uterus?',
      answer:
        'Several factors are considered in deciding on the number of embryos to transfer, including patient’s age, age of the female embryo or egg donor (if used) at the time of egg retrieval, embryo quality and a favorable prognosis. Following this criteria, usually one to two (occasionally three) embryos are transferred.',
    },
    {
      question: 'Is there a chance for multiple births?',
      answer:
        'As with any assisted reproductive technology (ART) procedure, the chance of multiples is higher (30% per embryo transfer) compared to a naturally occurring pregnancy. The American Society for Reproductive Medicine (ASRM) states that, “physicians are obligated to provide safe and conscientious decisions regarding treatment, which includes the number of embryos transferred.” The guideline continues with “after careful consideration of each patient’s own unique circumstances…transferring greater or fewer embryos than dictated by these criteria may be justified according to individual clinical conditions, including patient age [and] embryo quality.” Other factors that influence the number of embryos transferred include the age of the female embryo or egg donor (if used) at the time of egg retrieval and a favorable prognosis. Even by following these guidelines, there is no guarantee that a pregnancy with multiples will not occur. The risk is no higher with donated embryos.',
    },
    {
      question: 'How many attempts can I have to become pregnant?',
      answer:
        'The NEDC gives patients three attempts to become pregnant using donated embryos. If you achieve pregnancy and give birth, you can return for three more attempts for a sibling. NOTE: Following a successful pregnancy and birth, if patients wish to continue to reserve the same set of sibling embryos for possible future use, they will pay a $500 annual storage fee to Rejoice Fertility. ',
    },
    {
      question: 'What are the costs?',
      answer:
        'The NEDC’s program and Rejoice Fertility’s medical fees come to roughly $8,000. This includes matching services, document preparation and delivery, initial consultation with trial transfer, frozen embryo transfer (FET) fee, embryology/laboratory fees, and cycle preparation fee. Other costs will include: medications, home study, reimbursement for embryo transportation and donor FDA re-screening for STDs, and travel. In most cases, the total expenses for a first FET should come to roughly $10,500 to $12,000. If your first FET is unsuccessful and you come back for more attempts, the total expenses for those subsequent attempts will be significantly less: generally around $4,100 per FET<br> For a more detailed explanation of costs, please view the NEDC Fee Schedule in the Resources section below. If your insurance includes infertility coverage, your lab work and ultrasounds are generally paid. You may also be eligible to take an itemized deduction for personal medical care expenses paid during the taxable year.<br>This video explains how embryo adoption through the NEDC generally compares to other forms of ART such as IVF, as well as traditional adoption.',
    },
  ];
  return (
    <Layout>
      <Seo
        title="Knoxville Diagnosis & Testing | Rejoice Fertility Center"
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <Header title={'Diagnosis & Testing'} />
      <section
        sx={{
          p: { color: '#4D4F60' },
        }}
      >
        <p>
          Sometimes it is hard to know where to start! Rest assured that by choosing Rejoice
          Fertility you have picked the right place. Dr. Gordon have over 50 years of
          combined experience in treating the infertile couple.
        </p>
        <p>
          Whether it is a history of irregular periods or a known diagnosis of endometriosis we will
          be there to guide you through appropriate diagnostic testing leading to a treatment plan
          that makes sense for you. The staff of Rejoice Fertility are here to help and support
          you through the process.
        </p>
      </section>
      <Faqs data={data} />
    </Layout>
  );
};

export default DiagnosisAndTestingPage;
