/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';

const FeaturedContent = () => {
  return (
    <div
      sx={{
        maxWidth: '1400px',
        margin: 'auto',
        my: '3rem',
        fontWeight: 400,
        variant: 'text.normal',
        color: '#667085',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        px: '2rem',
        p: {
          mb: '1rem',
        },
      }}
    >
      <p>
        For over 25 years, Rejoice Fertility has been East Tennessee’s most trusted clinic for
        the treatment of infertility, recurrent pregnancy loss, PCOS and endometriosis.
      </p>
      <p>
      Rejoice Fertility pursues a holistic approach to treatment. It’s our honor to help you
        make your dreams of achieving pregnancy and parenthood come true. We’ll get to know you and
        your story, then consider the best personalized path for YOU. No cookie cutter approaches-
        HOPE starts with a conversation, and we’re here to listen. 
      </p>
      <p>
        Our two physicians, Medical Director Dr. John David Gordon and Dr. Jeffrey Keenan, have over
        50 years of combined expertise in the evaluation and treatment of the infertile couple. Dr.
        Gordon began his leadership of Rejoice Fertility in 2019, moving to Knoxville after
        practicing for 20 years outside of Washington D.C.   
      </p>
      <p>
        Dr. Gordon introduced Natural Cycle IVF to East Tennessee in 2019. Natural Cycle IVF is a
        simpler, less expensive form of IVF preferred by many couples who are unable or unwilling to
        pursue traditional IVF.  He has also championed Mini-Stim IVF, which uses both oral and low
        doses of injectable fertility medications to produce an average of 3-8 eggs. Mini-Stim IVF
        costs much less than traditional Stimulated Cycle IVF and also reduces the risk of excessive
        numbers of embryos being created. Most patients pursuing Mini-Stim IVF will have 1-2 embryos
        for transfer and 1-2 additional embryos to freeze. Stimulated Cycle IVF may represent the
        best option for older patients and those who fail to respond well to the medication protocol
        utilized for Mini-Stim IVF. All 3 options (Natural Cycle IVF, Mini-Stim IVF and Stimulated
        Cycle IVF) are offered here at Rejoice Fertility!
      </p>
      <p>
      Rejoice Fertility does not offer any treatments that utilize donor egg, donor sperm or
        the use of a gestational carrier (surrogate). Rejoice Fertility does not offer genetic
        testing of embryos created by IVF. 
      </p>
      <p>
        Dr. Jeffrey Keenan founded Rejoice Fertility almost three decades ago and remains
        clinically active, seeing patients 3 days a week in our Knoxville office. Dr. Keenan is
        widely renowned for his clinical expertise treating infertile couples. He is also well known
        for co-founding the National Embryo Donation Center (NEDC), a non-profit that provides
        matching services to those patients with left-over IVF embryos that they are willing to
        relinquish to couples pursuing Embryo Adoption. Dr. Keenan is the president and medical
        director of the NEDC. 
      </p>
      <p>
        Rejoice Fertility performs more cycles of Embryo Adoption than any other fertility
        clinic in the world. Millions of people were captivated by the birth of Molly Everette
        Gibson in 2020. Molly was born after a successful frozen embryo transfer performed at
        Rejoice Fertility.  Her parents adopted her through the NEDC, and she joins her older
        sister Emma, who was also the result of a successful frozen embryo transfer. Both of these
        girls were frozen as early-stage embryos from the same IVF cycle performed over 2 decades
        ago!
      </p>
      <p>
        At Rejoice Fertility we believe in a personalized, patient-centered approach, asking
        for your input on treatment based upon your personal physical, emotional, spiritual, and
        certainly financial needs. Whatever your next step is, we look forward to serving and caring
        for you. Why not reach out to schedule an appointment and begin your journey with
        Rejoice Fertility today?
      </p>
    </div>
  );
};

export default FeaturedContent;
