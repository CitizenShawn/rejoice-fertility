/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import Member from './Member';

const Staff = () => {
  const gordon = [
    {
      name: 'John David Gordon, M.D.',
      position: 'Medical Director',
      image: '/images/doctor1.png',
      description: `<h4>BIO:</h4>
      <p>Before joining Rejoice Fertility in August 2019, Dr. John David Gordon served as Co-Director of Dominion Fertility in Arlington, VA since 1999. Over those 2 decades he was listed as one of Washington’s top doctors in Washingtonian, Northern Virginia and Arlington magazines.</p>
      <p>Dr. Gordon graduated summa-cum-laude from Princeton University with a degree in Biology and then attended medical school at Duke University. He was an intern in Obstetrics and Gynecology at the University of Texas Health Sciences Center in Houston and then completed his residency training in Obstetrics and Gynecology at Stanford University Medical Center and his fellowship in Reproductive Endocrinology and Infertility at the University of California San Francisco.</p>
      <p>Dr. Gordon is board-certified in Obstetrics and Gynecology and subspecialty board certified in Reproductive Endocrinology and Infertility. Dr. Gordon was a Clinical Professor of Obstetrics and Gynecology at The George Washington University in Washington D.C. and an Associate Clinical Professor at Virginia Commonwealth University / Medical College of Virginia Fairfax Campus. He served as the Division Director of Reproductive Endocrinology and Infertility at Inova Fairfax Hospital.</p>
      <p>Dr. Gordon has a passion for teaching and serves as Division Director of Reproductive Endocrinology and Infertility at the University of Tennessee Medical Center. As a professor, he has provided regular lectures in Reproductive Endocrinology to the Obstetrics and Gynecology interns, residents, and medical students. Dr. Gordon is the author of many scientific articles and several books but he is best known to health professionals as the Editor-in-Chief of “Obstetrics, Gynecology, and Infertility,” a best-selling medical handbook with over 150,000 copies in print. This handbook is used worldwide by medical students, residents, physicians, and women’s health care providers.</p>
      <p>Dr. Gordon has been honored on numerous occasions for his educational activities and is a three-time recipient of the Council on Resident Education in Obstetrics and Gynecology (CREOG) National Resident Teaching Award.</p> 
      
      <h4>EDUCATION:</h4>
      <p><strong>Undergraduate: </strong>Princeton University, Princeton, New Jersey, A.B.. Biology, summa cum laude 1981-1985.</p>
      <p><strong>Medical School: </strong>Duke University School of Medicine, Durham, North Carolina, M.D., 1985-1989.</p>
      <p><strong>Internship: </strong>Obstetrics and Gynecology, UTHSC-Houston, Houston, Texas, 1989-1990.</p>
      <p><strong>Internship and Residency: </strong>Obstetrics and Gynecology, Stanford University Medical Center, Stanford, California, 1990-1994.</p>
      <p><strong>Fellowship: </strong>Reproductive Endocrinology and Infertility.Department of Obstetrics and Gynecology, University of California, San Francisco, California, 1994-1996.</p> 
      
      <h4>HONORS:</h4>
      <p>APGO-CREOG National Resident Teaching Award-GWUMC 2015, 2008, 2003</p>
      <p>GWU Volunteer Clinical Faculty Teaching Award 2011</p>
      <p>Kane King Dodek Society Volunteer Faculty Teaching Award 2006</p>
      <p>ASRM (AFS) - Organon Research Fellowship, 1995-6</p>
      <p>Berlex Foundation Resident Award, 1993</p>
      <p>Princeton University Senior Biology Prize, 1985</p>
      <p>Phi Beta Kappa, 1985</p>
      <p>Eagle Scout, Boy Scouts of America, 1977</p>
      
      <h4>BOARD CERTIFICATION:</h4>
      <p>Certified, American Board of Obstetrics and Gynecology</p>
      <p>Certified, Reproductive Endocrinology and Infertility.</p>
      <p>Clinical Laboratory Director (HCLD), December 1996.</p>
      
      <h4>SOCIETY MEMBERSHIPS:</h4>
      <p>American Society for Reproductive Medicine</p>
      <p>Society of Reproductive Endocrinology and Infertility</p>
      
      <h4>UNIVERSITY APPTS:</h4>
      <p><strong>Division Director (9/1/22-Present)</strong><br/>Division of Reproductive Endocrinology and Infertility<br/>Department of Obstetrics and Gynecology<br/>University of Tennessee Medical Center <br/>Knoxville, TN</p>
      <p><strong>Division Director (7/11-7/19)</strong><br/>Division of Reproductive Endocrinology and Infertility<br/>Department of Obstetrics and Gynecology<br/>Inova Fairfax Hospital <br/>Falls Church, VA</p>
      <p><strong>Clinical Professor (7/99-7/19)</strong><br/>Department of Obstetrics and Gynecology<br/>The George Washington University School of Medicine Washington, D.C.</p>
      <p><strong>Associate Clinical professor (7/08-7/19)</strong><br/>Department of Obstetrics and Gynecology<br/>VCU School of Medicine, Northern Virginia Campus Falls Church, VA</p>
      
      <h4>CHAPTERS & BOOKS:</h4>
      <p>Gordon JD, Rydfors JT, Druzin ML, Tadir Y. et al. Obstetrics and Gynecology: Handbook for Clinicians, 7th Edition, Scrub Hill Press, Inc., Arlington, Virginia, 2016.</p>
      <p>Lebovic DI, Gordon JD, Taylor RN. Reproductive Endocrinology & Infertility: Handbook for Clinicians, 2nd Edition, Scrub Hill Press, Inc., Arlington, Virginia, 2014.</p><p>Gordon JD, DiMattina, M.  100 Questions & Answers About Fertility, 2nd Edition.  Jones & Bartlett Publishing, Boston, 2010.</p>
      <p>Gordon JD and Speroff L. Handbook of Gynecologic Endocrinology and Infertility. Lippincott Williams Wilkins, Philadelphia, 2002.</p><p>Scott JR, DiSaia, PJ, Hammond CB, Spellacy WN, Gordon JD editors. Danforth's Handbook of Obstetrics and Gynecology, Lippincott, Philadelphia, 1996.</p>
      
      <h4>RECENT PUBLICATIONS:</h4>
      <p>Mak W, Kondapalli LA, Celia G, Gordon J, DiMattina M, Payson M. Natural cycle IVF reduces the risk of low birthweight infants compared with conventional stimulated IVF. Hum Reprod. 2016 Apr;31(4):789-94.</p><p>Tran C, Payson M, DiMattina M, Gordon J, Delivery following natural cycle in vitro fertilization in a patient with endometriosis-associated hemorrhagic ascites. Journal of Minimal Stimulation IVF, 1(3). May-June 2014</p><p>DiMattina M, Gordon J, Celia G, Reh A, Payson M. Natural Cycle IVF Implantation Rates Compared to Stimulated IVF and Role of Serum AMH Levels, Journal of Minimal Stimulation IVF, 1(2). March-April 2014.</p>
      <p>DiMattina M, Gordon JD, Botes A, et al. Follicular and estradiol parameters that improve success with natural cycle in vitro fertilization. J Reprod Med. 2014 May-Jun;59(5-6):267-73.</p><p>Gordon JD, DiMattina M, Reh A, Botes A, Celia G, Payson M. Utilization and success rates of unstimulated in vitro fertilization in the United States: an analysis of the Society for Assisted Reproductive Technology database. Fertil Steril. 2013 Aug;100(2):392-5</p>
      
      <h4>RECENT ABSTRACTS:</h4>
      <p>ACOG Regional Meeting Abstract 2017. Cole R and Gordon J. Endometrial Receptivity Analysis in Natural Cycle versus Artificial Cycle Frozen Embryo Transfer.</p>
      <p>ASRM abstract 2017. Potts, C, Gordon, J, DiMattina, M, Fiorentino, A, Celia, G. Implantation and live births following transfer of 0pn embryos in natural cycle IVF.</p>
      <p>ASRM abstract 2017. Shah, A, Stadtmauer, L, Celia, G, Gordon, J, DiMattina, M. Comparison of frozen embryo transfer during a natural cycle or hormone supplemented cycle.</p>
      <p>ASRM abstract 2015: Li E, Hanson B, Rogers A, Gordon J, DiMattina M, Celia G, Payson M. Evaluating Oocyte Yield, Quality & Fertilization Following a Change in Anesthesia Protocol.</p>
      <p>ASRM abstract 2014: Mak W, Kondapalli L, Celia G, Gordon J, DiMattina M, Payson M. Decreased low birth weight in singleton livebirths with unstimulated/ natural cycle versus stimulated IVF.</p>
      <p>ASRM abstract 2013. Natural cycle IVF pregnancies in patients with very low serum AMH. Mateer, E, DiMattina, M, Gordon, J, Rosado, C, Payson, M.</p>`,
    },
  ];
  const keenan = [
    {
      name: 'Jeffrey Keenan, M.D., HCLD',
      position: 'Reproductive Endocrinologist',
      image: '/images/doctor2.png',
      description: `<h4>BIO:</h4>
      <p>Dr. Jeffrey Keenan has many decades of experience treating infertility and is a Rejoice Fertility physician and the President and Medical Director of the National Embryo Donation Center (NEDC) in Knoxville, Tennessee. This non-profit is the nation’s leading organization focusing on embryo donation and embryo adoption.</p>
      <p>Keenan attended Bucknell University in Lewisburg, Pennsylvania, graduating in 1979. Keenan then decided to pursue a career in medicine at Jefferson Medical College in Philadelphia, Pennsylvania. Upon receiving his medical degree with honors in 1983, Keenan interned at Mercy Hospital in Pittsburgh, Pennsylvania. After his internship, he completed his residency in Obstetrics and Gynecology at Vanderbilt University Medical Center in Nashville, Tennessee. His interest in reproductive medicine caused him to further specialize in this field. As a result, Keenan took up a fellowship in 1988 at Wayne State University where he focused on Reproductive Endocrinology and Infertility</p>
      <p>Upon completion of his fellowship in 1990, Keenan became an active member of several professional medical societies, including the American College of Obstetricians and Gynecologists (ACOG) and the American Society for Reproductive Medicine (ASRM). In addition, he is a current member of the Society for Reproductive Endocrinology and Infertility (SREI) and the Christian Medical and Dental Associations (CMDA). He also served as President of the East Tennessee OB/GYN Society from 1996-1997.</p>
      <p>Keenan is board certified in both Obstetrics and Gynecology and Reproductive Endocrinology and Infertility. Along with holding several certifications in his specialty fields, Keenan is an accomplished author, having written several book chapters and numerous articles published.</p>
       
      <h4>EDUCATION:</h4>
      <p><strong>Undergraduate: </strong>Bucknell University, Lewisburg, Pennsylvania, B.S. Biology, 1975-1979.</p>
      <p><strong>Medical School: </strong>Jefferson Medical College, Philadelphia, Pennsylvania, M.D., 1979-1983.</p>
      <p><strong>Internship: </strong>Rotating Internship, Mercy Hospital, Pittsburgh, Pennsylvania, 1983-1984.</p>
      <p><strong>Residency: </strong>Obstetrics and Gynecology, Vanderbilt University Medical Center, Nashville, Tennessee, 1984-1988.</p>
      <p><strong>Fellowship: </strong>Reproductive Endocrinology and Infertility.Department of Obstetrics and Gynecology, Hutzel Hospital/Wayne State University, Detroit, Michigan, 1988-1990.</p>
      
      <h4>HONORS:</h4>
      <p>Phi Beta Kappa, Alpha Omega Alpha, Phi Eta Sigma, Phi Sigma, Hobart Amory Hare Society</p>
      <p>Prize Poster Award, 46th Annual Meeting of American Fertility Society, Washington, D.C., October 17, 1990. Subject: Luteal Phase Support with Human Chorionic Gonadotropin Does Not Improve Fecundity Rate in Human Menopausal Gonadotropin Stimulated Cycles.</p>
      <p>Dr. Jeffrey and Mrs. Sandy Keenan received the Christian Medical & Dental Associations President's Heritage Award, May 2, 2015.</p>
      
      <h4>BOARD CERTIFICATION:</h4>
      <p>Recertified, American Board of Obstetrics and Gynecology, December 2001.</p>
      <p>Certified, Reproductive Endocrinology and Infertility.</p>
      <p>Clinical Laboratory Director (HCLD), December 1996.</p>
      <p>Certified, American Board of Bioanalysis.</p>
      <p>Division of American Board of Obstetrics and Gynecology, December 1992.High-complexity</p>
      <p>Certified, American Board of Obstetrics and Gynecology, December 1991.</p>
      <p><strong>MEDICAL LICENSURE</strong></p>
      <p>Michigan License No. 053352, July 1988.</p>
      <p>Tennessee License No. 18511, June 1988.</p>
      <p>Certification, NBME 274070, July 1984.</p>
      
      <h4>SOCIETY MEMBERSHIPS:</h4>
      <p>American Society for Reproductive Medicine (1990 - present).</p>
      <p>East Tennessee OB/GYN Society (President 1996 & 1997).</p>
      <p>Society Development Committee for the American Fertility Society (1990-1994).</p>
      <p>Society of Reproductive Surgeons, April 1994 - present</p>
      <p>Society of Reproductive Endocrinology and Infertility.</p>
      
     
      <h4>UIVERSITY APPTS:</h4>
      <p>Professor, Division of Reproductive Endocrinology & Infertility, Department of Obstetrics & Gynecology, University of Tennessee Medical Center, Knoxville, Tennessee, 2010–present.</p>
      <p>Associate Professor, Division of Reproductive Endocrinology & Infertility, Department of Obstetrics & Gynecology, University of Tennessee Medical Center, Knoxville, Tennessee, 1995-2010.</p>
      <p>Assistant Professor, Division of Reproductive Endocrinology & Infertility, Department of Obstetrics & Gynecology, University of Tennessee Medical Center, Knoxville, Tennessee, 1990-1995.</p>
      <p>Clinical Instructor, Wayne State University School of Medicine, Detroit, Michigan, 1988-1990.</p>
      
      <h4>HOSPITAL APPTS:</h4/>
      <p>University of Tennessee Medical Center at Knoxville, Active Staff, 1990 – Present.</p>
      <p>St. Mary's Medical Center, Knoxville, Tennessee, Courtesy Staff, 1990 - Present.</p>
      <p>Ft. Sanders Regional Medical Center, Knoxville, Tennessee, Courtesy Staff, 1990-Present.</p>
      <p>Ft. Sanders Parkwest Medical Center, Knoxville, Tennessee, Courtesy Staff, 1994.</p>
      <p>Baptist Hospital for Women, Knoxville, Tennessee Active Staff, 2003 - 2008.</p>
      <p>Tennova Turkey Creek Medical Center, Knoxville, TN, 2008 - present</p>
      <p>Director, Division of Reproductive Endocrinology & Infertility, Department of Obstetrics & Gynecology, University of Tennessee Medical Center, College of Medicine - Knoxville Unit, Knoxville, Tennessee, July 1992-Present.</p>
      
      <h4>CHAPTERS & BOOKS:</h4>
      <p>Keenan J, Finger R. “The Impact of Single Embryo Transfer on Embryo Donation” in Single Embryo Transfer. Gerris J, Adamson D, Racowsky C, De Sutter R, eds., Cambridge University Press, 2008.</p>
      <p>Keenan JA. ‘The Development of the National Embryo Donation Center,’ in S.V. Brakman and D.F. Weaver (Eds.), The Ethics of Embryo Adoption and the Catholic Tradition. Dordrecht: Springer Netherlands Publishers. 2007 Vol 95, 221-30.</p>
      <p>Bukovsky A, Caudle MR, Keenan JA: Regulation of Ovarian Function by Immune System Components: The Tissue Control System (TCS). "Malphigi Volumes On Functional Microanatomy: Microscopy of Reproduction and Development," Pietro M. Motta, M.D. ed., 1997.</p>
      <p>Massey PJ, Caudle MR, Keenan JA, and Chen TT: The Roles of the Cytoskeleton in Steroidogenesis: The Actions of Taxol and Other Cytoskeletal Agents. "Taxane Anticancer Agents: Basic Science and Current Status," George G, et al, eds., ACS Books, 1995.</p>
      <p>Church MW, Kaufmann RA, Keenan JA, et al: Effects of Prenatal Cocaine Exposure. In: Biochemistry and Physiology of Substance Abuse, Vol. III. Tuscon: CRC Press, 1991.</p>
      
      <h4>RECENT PUBLICATIONS:</h4>
      <p>Marshall E, Heidel E, Keenan JA. All embryo transfers after age 37 should be deferred to frozen replacement cycles: An analysis of 43,576 cycles from the CDC ART registry. Submitted for publication 2016</p>
      <p>Finger R, Qi Y, Fabian M, Keenan JA, Stoddart R. Experiences of Families Inquiring About Donating or Adopting Embryos: Results of an On-Line Survey. Adoption Quarterly 2012; 15:57-66.</p>
      <p>Keenan JA, Gissler M, Finger R. Assisted Reproduction Using Donated Embryos: Outcomes from Surveillance Systems in Six Countries. Hum Reprod 2012; 27:747-52.</p>
      <p>Keenan J, Finger R, Check JH, Daly D, Dodds W, Stoddart R. Favorable pregnancy, delivery, and implantation rates experienced in embryo donation programs in the United States. Fertility and Steril. 2008 Oct;90(4):1077-80.</p>
      <p>Keenan JA, Chang J, Finger RF, Jeng G, Cornman KI, Macaluso M. National surveillance data confirm favorable outcome rates from embryo donation (abstract). Fertility and Sterility, 2008; 90:S209.</p>
      
      <h4>RECENT ABSTRACTS:</h4>
      <p>Finger R, Keenan JA, Qi Y, Sommerfelt C, Elkins, C. Obesity and the Ability to Achieve Pregnancy in Embryo Donation. National Embryo Donation Center, Knoxville, Tennessee, USA. Poster submission, American Society for Reproductive Medicine 67th Annual Meeting, Orlando, Florida, October 15-19, 2011.</p>
      <p>Keenan JA, Finger RF. Favorable Pregnancy, Delivery, and Implantation Rates Experienced in 7 Embryo Donation Programs in the United States. Poster #483, ASRM 2007, Oct 13-17, Washington D.C.</p>
      <p>Bukovsky A, Caudle, Keenan JA, Upadhyaya, Van Meter SE, Wimalasena J, and Elder RF. Suicide of T Lymphocytes and Dendritic Cells Accompanies Differentiation of Epithelial Cells. American Society for Reproductive Immunology, 20th Annual Meeting on June 10-13, 2000 in Jacksonville, Florida.</p>
      <p>Bukovsky A, Caudle MR, Keenan JA, Wimalasena, McKenzie P: Association of Macrophage Phenotypes with Regeneration, Terminal Differentiation, and Degeneration of Chorionic Villi in Normal Mature Human Placentae. American Society for Reproductive Immunology, Chicago, May 9-12, 1998, (Submitted).</p>
      <p>Keenan JA, Williams-Boyce PK, Massey PJ, Chen TT, Caudle MR, Bukovsky A. Regression of Endometrial Explants in a Rat Model of Endometriosis Treated with the Immune Modulators Loxoribine and Levamisole. Fertil Steril. 1999 Jul;72(1):135-41</p>`,
    },
  ];
  const allyn = [
    {
      name: 'Allyn Ann Simpson, WHNP-BC',
      position: 'Nurse Practitioner',
      image: '/images/staff/AllynAnnNew.png',
      description: `Allyn Ann is a Board-Certified Women’s Health Nurse Practitioner. She has been working in the field of Reproductive Endocrinology since 2007. She received her Bachelor of Nursing degree from Mississippi College in 2005 and her Master’s Degree from San Diego State University in 2012. She has a unique perspective in treating patients since she went through her own 13-year battle with infertility. She is the proud mom of two IVF babies. In her spare time, she enjoys reading, playing with her kids, and running her non-profit organization, which helps fund IVF cycles for couples who cannot afford it. She was born and raised in the South but spent 14 years in California. She is excited to be back South and making her home in East Tennessee.`,
    },
  ];

  const clinicalStaff = [
    {
      name: 'Brittany Hegseth',
      position: 'IVF Nurse Coordinator',
      description: `
      Brittany Hegseth was born and raised on the Gulf Coast of Mississippi before moving to Knoxville in 2014. She received her degree in psychology from The University of Tennessee before attending Lincoln Memorial University for her Bachelor’s of Science in Nursing. Her background is in inpatient antepartum, postpartum, and gynecology, as well as the Neonatal ICU. Outside of the office, she and her husband enjoy traveling, attending sporting events, and spending time with their two dogs`,
      image: '/images/staff/brittany.jpg',
    },
    {
      name: 'Susan Lake',
      position: 'Clinic Coordinator',
      description: `Susan is a Registered Medical Assistant with a long history in patient care. She has served in the medical
      field for 15 years, with most of her experience in OB/GYN. She joined Rejoice Fertility in 2022.`,
      image: '/images/staff/susan.png',
    },
    {
      name: 'Brooke Huguenard',
      position: 'IVF Nurse',
      description: `Brooke Huguenard is ecstatic to be a part of the Rejoice Fertility family as Dr. Gordon's NEDC IVF nurse. She is originally from Alabama and graduated from the University of Alabama-Huntsville in 2014 with her Bachelor of Science in Nursing. Since then, she has worked as a Labor and Delivery nurse for the last 8 years, and is eager to use this knowledge to bring excellent care to her patients. For 3 years of her career, Brooke was a travel L&D nurse across the U.S. working at hospitals from Kaiser in California to Yale in Connecticut. East TN is a sentimental place to Brooke and her husband because they got engaged here and were married in the breathtaking Cade's Cove. In her spare time, Brooke enjoys taking the puppers hiking, ballroom dancing, and camping with her husband.`,
      image: '/images/staff/brooke.png',
    },
    {
      name: 'Lauren Dyckman',
      position: 'RN, IVF Nurse',
      description: `Lauren Dyckman has spent more than 25 years serving patients struggling with infertility. A New York native, she enjoys the slower pace of life in East Tennessee and began caring for Rejoice Fertility families in 2022.`,
      image: '/images/staff/lauren.png',
    },
    {
      name: 'Stephanie Smith',
      position: 'CRNA',
      description: `Stephanie was born and raised here in Knoxville, TN. She left briefly to earn a Bachelor’s of Science in
      Biology from New Mexico State University in 2002. After some traveling adventures, she returned to
      Knoxville and pursued a nursing career, completing an Associates Degree in Nursing from Roane State
      Community College in 2008 followed by a Bachelor’s Degree in Nursing from the University of TN in
      2011.  After working in nephrology, dialysis and ICU, she returned to school once again, earning a
      Master’s of Science in Nursing to become a Certified Registered Nurse Anesthetist. She has practiced
      anesthesia in Knoxville and rural KY since 2014 and joined Rejoice Fertility in 2020.`,
      image: '/images/staff/stephanie.png',
    },
    {
      name: 'Melanie Duncan',
      position: 'Certified Surgical Tech',
      description: `Melanie was born and raised in Oak Ridge, where she graduated from high school in 1983. She now lives in Morgan County with Rex, her husband of three decades. She also has a daughter, Ashleigh, and a son, Todd. Melanie has a colorful work background that includes stints as a waitress, senior office assistant, assistant manager, driver's license examiner and home inspector. She has now been a Certified Surgical Tech for more than 15 years.`,
      image: '/images/staff/melanie.png',
    },
    {
      name: 'Sherry Schoolfield',
      position: 'Phlebotomist',
      description: `Sherry Schoolfield is our on-site laboratory phlebotomist, provided by AEL Laboratories. Sherry provides our patients with gentle venipuncture and prepares specimens for testing. Sherry has been practicing phlebotomy since 1999.`,
      image: '/images/staff/sherry.png',
    },
    //{
    //  name: 'Lynda McCollum',
    //  position: 'RN, IVF Nurse Coordinator',
    //  description: `Lynda McCollum is our IVF Nurse Coordinator. She assists our IVF patients and NEDC patients with medication protocols, lab results, and embryo transfer procedures. She is originally from Townsend and currently lives in Maryville. She is married and has two sons and two grandchildren. She has a compassionate heart, is always welcoming, and would be happy to answer any of your questions with a smile.`,
    //  image: '/images/staff/lynda.png',
    //},
    //{
    //  name: 'Mari Campbell',
    //  position: 'LPN',
    //  description: `Mari Campbell is a Licensed Practical Nurse who serves as our OB/GYN Nurse. She is a Knoxville native and has made nursing a lifetime career. Mari has great experience in the area of women's healthcare and has assisted hundreds of patients with all of their medical needs from achieving pregnancy to providing general women's healthcare.`,
    //  image: '/images/staff/campbell.png',
    //},
  ];

  const frontOfficeStaff = [
    {
      name: `D. La 'Jean Robinson`,
      position: 'BSN, RN, MBA, Practice Administrator',
      description: `La 'Jean has been working in the healthcare field for over 30 years. Her background as a registered nurse and her business experience in hospital administration and company ownership has positioned her well for the dynamics of our growing practice in a multifaceted healthcare system. Being a native of the Deep South, La 'Jean and her old plump Scottie dog both find the cooler temperatures of Knoxville as inviting and welcoming as the people of Tennessee. Please feel free to contact her with any financial needs or practice inquiries.`,
      image: '/images/staff/robinson.png',
    },
    {
      name: 'Taylor Taylor',
      position: 'Front Office Coordinator',
      description: `Our Front Office Coordinator, Taylor, ensures that your visit to Rejoice Fertility is pleasant while coordinating your care. Taylor is a Tennessee native and is married with 3 daughters. She enjoys spending time with her family. Taylor schedules appointments that are convenient to your schedule and is happy to file your insurance claims. You will find that Taylor delivers courteous and efficient information and scheduling services.`,
      image: '/images/staff/taylor.png',
    },
    {
      name: 'Alyssa Moore',
      position: 'Medical Assistant',
      description: `Alyssa Moore is an East Tennessee native. She has been a Medical Assistant since 2015 and joined the Rejoice Fertility team in 2022. Away from the office, Alyssa loves spending time with her husband and their two sons, often enjoying activities like family camping.`,
      image: '/images/staff/alyssa.png',
    },
  ];

  const embryologyStaff = [
    {
      name: 'Tyl H Taylor, Ph.D., HCLD',
      position: 'Lab Director',
      description: `Dr. Taylor received his Ph.D. in Genetics from University of Kent in England.  He is a board-certified lab director from the American Associates of Bioanalysis and serves as lab director for Rejoice Fertility.  He has over 15 years of experience and has worked at labs in Atlanta and Philadelphia.  While in Atlanta, he was on the team responsible for developing oocyte vitrification.  Afterward, he moved to Philadelphia, where he was the Director of Preimplantation Genetic Testing (PGT).  There, in cooperation with Reprogenetics, he was directly responsible for the first live birth of an embryo screened with Next-Generation Sequencing (NGS).`,
      image: '/images/staff/tyl.png',
    },
    {
      name: 'Sarah Coe Atkinson',
      position: 'IVF Lab Supervisor, Embryologist',
      description: `Sarah Coe Atkinson, MSc., received a Bachelor's Degree in Biological Sciences from Vanderbilt University and a Master of Science in the Reproductive Laboratory Science (RLS) track from the University of Kentucky. She completed her clinical practica in assisted reproductive laboratory technology at New York Methodist Hospital, Brooklyn, N.Y. Sarah continued to serve the RLS education program by corresponding with applicants, and mentoring new students, as well as teaching labs on embryo culturing and vitrification. She has extensive experience in molecular techniques, data analysis and laboratory management, having held the position of Research Analyst at the University of Kentucky. Sarah led an embryology clinic in Lexington, Kentucky as Lab Supervisor and Senior Embryologist. Sarah joined Rejoice Fertility full-time in 2021.`,
      image: '/images/staff/sarah.png',
    },
    {
      name: 'Julia DuBois',
      position: 'MSc., Embryologist, Andrologist',
      description: `Julia Rowinski, MSc., received a Bachelor’s Degree in Animal Science from the University of Kentucky and a Master of Science in Reproductive Physiology from the University of Tennessee. She is the andrologist and performs male fertility testing, including complex semen analysis testing, antisperm antibody testing, and sperm cryopreservation. She always has desired to work in the human field of reproduction, and following an animal science path allowed her to obtain lots of hands-on experience in the lab with a high volume of samples. She looks forward to assisting the embryologist in the IVF lab as well. When not at Rejoice Fertility, you’ll find Julia out at the barn, so feel free to talk to her about what fun animals and livestock you have. She is looking forward to meeting patients and being part of a great team!`,
      image: '/images/staff/julia.png',
    },
    {
      name: 'Stephanie Smith',
      position: 'CRNA',
      description: `Stephanie was born and raised here in Knoxville, TN. She left briefly to earn a Bachelor’s of Science in
      Biology from New Mexico State University in 2002. After some traveling adventures, she returned to
      Knoxville and pursued a nursing career, completing an Associates Degree in Nursing from Roane State
      Community College in 2008 followed by a Bachelor’s Degree in Nursing from the University of TN in
      2011.  After working in nephrology, dialysis and ICU, she returned to school once again, earning a
      Master’s of Science in Nursing to become a Certified Registered Nurse Anesthetist. She has practiced
      anesthesia in Knoxville and rural KY since 2014 and joined Rejoice Fertility in 2020.`,
      image: '/images/staff/stephanie.png',
    },
  ];

  return (
    <section
      sx={{
        bg: '#343753',
      }}
    >
      <div
        className="content"
        sx={{
          px: '2rem',
          py: '3rem',
        }}
      >
        <div
          sx={{
            '&>div': {
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              my: '3rem',
              h3: { variant: 'text.xl' },
              p: { mb: '8px' },
            },
          }}
        >
          <div>
            {gordon.map((member, index) => (
              <Member key={index} data={{ ...member, index }} mode="dark" />
            ))}
            {allyn.map((member, index) => (
              <Member key={index} data={{ ...member, index }} mode="dark" />
            ))}
          </div>

          <div>
            <h3 sx={{ color: '#fff' }}>Clinical</h3>
            {clinicalStaff.map((member, index) => (
              <Member key={index} data={{ ...member, index }} mode="dark" />
            ))}{' '}
          </div>
          <div>
            <h3 sx={{ color: '#fff' }}>Front Office</h3>
            {frontOfficeStaff.map((member, index) => (
              <Member key={index} data={{ ...member, index }} mode="dark" />
            ))}
          </div>
          <div>
            <h3 sx={{ color: '#fff' }}>Embryology</h3>
            {embryologyStaff.map((member, index) => (
              <Member key={index} data={{ ...member, index }} mode="dark" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
