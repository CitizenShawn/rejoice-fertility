/** @jsx jsx */
import { jsx } from 'theme-ui';
import SmallTable from './SmallTable';
import LargeTable from './LargeTable';

const Chart = () => {
  return (
    <section>
      <div
        sx={{
          maxWidth: '1400px',
          margin: 'auto',
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '3rem',
            gap: '1rem',
          }}
        >
          <h1
            sx={{
              variant: 'text.xxl',
              fontWeight: '600',
            }}
          >
            Pricing Chart
          </h1>
          <p
            sx={{
              maxWidth: '632px',
              variant: 'text.normal',
              fontWeight: '400',
              textAlign: 'center',
              color: '#4D4F60',
            }}
          >
            To provide comprehensive care and unwavering compassion to patients struggling with
            reproductive health issues.
          </p>
        </div>
        <div>
          <LargeTable />
          <SmallTable />
        </div>
      </div>
    </section>
  );
};

export default Chart;
