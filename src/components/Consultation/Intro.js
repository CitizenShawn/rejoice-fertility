/** @jsx jsx */
import { jsx } from 'theme-ui';

const Intro = () => {
  return (
    <section>
      <div
        sx={{
          maxWidth: '1400px',
          margin: 'auto',
          padding: ['1rem', null, null, '2rem'],
          gap: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          variant: 'text.normal',
          fontWeight: 400,
          color: '#4D4F60',
        }}
      >
        <p>
          We realize infertility is a difficult, often discouraging road. Sometimes the array of
          treatment options can seem overwhelming. Wouldn’t it be nice to sit down with a trusted
          confidant and explore the possibilities that could best fit your personal situation?
        </p>
        <p>
          That’s why Rejoice Fertility Medical Director Dr. John Gordon offers complimentary
          15-minute telemedicine consultations. Dr. Gordon believes hope starts with a conversation.
          He’s eager to hear your story and explore how Rejoice Fertility might be able to help
          you achieve your dream of parenthood.
        </p>
        <p>
          Sound like just what you’ve been looking for? Fill out our form below and someone will be
          in contact with you. We look forward to hearing your story. Let’s get started in pursuit
          of your goals!
        </p>
      </div>
    </section>
  );
};

export default Intro;
