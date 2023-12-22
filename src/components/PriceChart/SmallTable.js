import * as React from 'react';

const SmallTable = () => {
  return (
    <table class="pricing-table pricing-table-small">
      <caption>
        <span class="visually-hidden">Full Feature list pricing table</span>
      </caption>{' '}
      <tbody>
        <tr>
          <th class="pricing-table-sticky-header starter">
            <span class="pricing-table-plan-name">LETROZOLE/IUI CLOMID/IUI</span>{' '}
          </th>
        </tr>{' '}
        <tr>
          <td>
            <details open="">
              <summary>
                <div class="pricing-table-small-feature-title">
                  Basic criteria{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                Patients who can consider this option by meeting these basic criteria
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>
                Normal Tubes Normal Uterus Good Sperm Quality No Severe Adhesions or Endometriosis
              </div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Price per cycle{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">see individual price sheets for more detail</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>~ 1,100.00 (Depends on number of visits)</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Medications typical cost*{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">Not included in cycle fee</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$200.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="pricing-table-small-feature-title">Anesthesia for egg collection</span>{' '}
            <span class="pricing-table-small-feature-value">
              <div>N/A</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  ICSI{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                direct injection of sperm into egg- if indicated
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>N/A</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Assisted Hatching{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                thinning of egg shell to allow embryo to emerge and implant -if indicated
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>N/A</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Embryo Freezing plus 1st year of storage (not prorated)
                </div>
              </summary>{' '}
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>N/A</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Embryo Storage{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">beyond 1st year</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>N/A</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Anticipated success in ideal patient (&lt;34 yo){' '}
                </div>
              </summary>{' '}
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>6-9% per IUI</div>
            </span>
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <th class="pricing-table-sticky-header starter">
            <span class="pricing-table-plan-name">FSH/IUI</span>{' '}
          </th>
        </tr>{' '}
        <tr>
          <td>
            <details open="">
              <summary>
                <div class="pricing-table-small-feature-title">
                  Basic criteria{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                Patients who can consider this option by meeting these basic criteria
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>
                Normal Tubes Normal Uterus Good Sperm Quality No Severe Adhesions or Endometriosis
              </div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Price per cycle{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">see individual price sheets for more detail</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>~ $2,500.00 (Depends on number of visits)</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Medications typical cost*{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">Not included in cycle fee</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$1,500.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="pricing-table-small-feature-title">Anesthesia for egg collection</span>{' '}
            <span class="pricing-table-small-feature-value">
              <div>N/A</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  ICSI{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                direct injection of sperm into egg- if indicated
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>N/A</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Assisted Hatching{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                thinning of egg shell to allow embryo to emerge and implant -if indicated
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>N/A</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Embryo Freezing plus 1st year of storage (not prorated)
                </div>
              </summary>{' '}
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>N/A</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Embryo Storage{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">beyond 1st year</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>N/A</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Anticipated success in ideal patient (&lt;34 yo){' '}
                </div>
              </summary>{' '}
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>10-18% per IUI</div>
            </span>
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <th class="pricing-table-sticky-header starter">
            <span class="pricing-table-plan-name">NATURAL CYCLE IVF</span>{' '}
          </th>
        </tr>{' '}
        <tr>
          <td>
            <details open="">
              <summary>
                <div class="pricing-table-small-feature-title">
                  Basic criteria{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                Patients who can consider this option by meeting these basic criteria
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>Normal Uterus Regular Cycles BMI &lt; 38</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Price per cycle{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">see individual price sheets for more detail</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$5,870.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Medications typical cost*{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">Not included in cycle fee</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$200.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="pricing-table-small-feature-title">Anesthesia for egg collection</span>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$450.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  ICSI{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                direct injection of sperm into egg- if indicated
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>Included</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Assisted Hatching{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                thinning of egg shell to allow embryo to emerge and implant -if indicated
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>Included</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Embryo Freezing plus 1st year of storage (not prorated)
                </div>
              </summary>{' '}
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$750.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Embryo Storage{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">beyond 1st year</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$750.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Anticipated success in ideal patient (&lt;34 yo){' '}
                </div>
              </summary>{' '}
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>15-20% per cycle 25-40% per ET</div>
            </span>
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <th class="pricing-table-sticky-header starter">
            <span class="pricing-table-plan-name">MINI-STIM IVF</span>{' '}
          </th>
        </tr>{' '}
        <tr>
          <td>
            <details open="">
              <summary>
                <div class="pricing-table-small-feature-title">
                  Basic criteria{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                Patients who can consider this option by meeting these basic criteria
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>Normal Uterus Good Ovarian Reserve BMI &lt; 38</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Price per cycle{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">see individual price sheets for more detail</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$7,640.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Medications typical cost*{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">Not included in cycle fee</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$1,000.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="pricing-table-small-feature-title">Anesthesia for egg collection</span>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$450.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  ICSI{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                direct injection of sperm into egg- if indicated
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>Included</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Assisted Hatching{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                thinning of egg shell to allow embryo to emerge and implant -if indicated
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>Included</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Embryo Freezing plus 1st year of storage (not prorated)
                </div>
              </summary>{' '}
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$750.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Embryo Storage{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">beyond 1st year</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$750.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Anticipated success in ideal patient (&lt;34 yo){' '}
                </div>
              </summary>{' '}
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>20-25% per cycle 30-50% per ET</div>
            </span>
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <th class="pricing-table-sticky-header starter">
            <span class="pricing-table-plan-name">STIMULATED CYCLE IVF</span>{' '}
          </th>
        </tr>{' '}
        <tr>
          <td>
            <details open="">
              <summary>
                <div class="pricing-table-small-feature-title">
                  Basic criteria{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                Patients who can consider this option by meeting these basic criteria
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>Normal Uterus Good Ovarian Reserve BMI &lt; 38</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Price per cycle{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">see individual price sheets for more detail</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$13,445.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Medications typical cost*{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">Not included in cycle fee</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$4,000.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="pricing-table-small-feature-title">Anesthesia for egg collection</span>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$450.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  ICSI{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                direct injection of sperm into egg- if indicated
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>Included</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Assisted Hatching{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                thinning of egg shell to allow embryo to emerge and implant -if indicated
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>Included</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Embryo Freezing plus 1st year of storage (not prorated)
                </div>
              </summary>{' '}
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$750.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Embryo Storage{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">beyond 1st year</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$750.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Anticipated success in ideal patient (&lt;34 yo){' '}
                </div>
              </summary>{' '}
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>25-40% per cycle 30-50% per ET</div>
            </span>
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <th class="pricing-table-sticky-header starter">
            <span class="pricing-table-plan-name">EMBRYO ADOPTION</span>{' '}
          </th>
        </tr>{' '}
        <tr>
          <td>
            <details open="">
              <summary>
                <div class="pricing-table-small-feature-title">
                  Basic criteria{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                Patients who can consider this option by meeting these basic criteria
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>Normal Uterus BMI &lt; 38 Husband/wife combined ages &lt; 100 years</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Price per cycle{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">see individual price sheets for more detail</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$3,935</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Medications typical cost*{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">Not included in cycle fee</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$1,000.00</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="pricing-table-small-feature-title">Anesthesia for egg collection</span>{' '}
            <span class="pricing-table-small-feature-value">
              <div>N/A</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  ICSI{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                direct injection of sperm into egg- if indicated
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>N/A</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Assisted Hatching{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">
                thinning of egg shell to allow embryo to emerge and implant -if indicated
              </p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>Included</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Embryo Freezing plus 1st year of storage (not prorated)
                </div>
              </summary>{' '}
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>N/A</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Embryo Storage{' '}
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M8.99023 7.59375C9.14648 7.46875 9.24023 7.28125 9.24023 7.0625C9.24023 6.875 9.14648 6.6875 8.99023 6.53125L2.92773 0.46875C2.77148 0.34375 2.58398 0.25 2.39648 0.25C2.17773 0.25 1.99023 0.34375 1.86523 0.46875L1.17773 1.15625C1.02148 1.3125 0.927734 1.5 0.927734 1.6875C0.927734 1.90625 0.990234 2.09375 1.14648 2.21875L5.99023 7.0625L1.14648 11.9062C0.990234 12.0625 0.927734 12.25 0.927734 12.4375C0.927734 12.6562 1.02148 12.8438 1.17773 12.9688L1.86523 13.6562C1.99023 13.8125 2.17773 13.875 2.39648 13.875C2.58398 13.875 2.77148 13.8125 2.92773 13.6562L8.99023 7.59375Z"></path>
                  </svg>
                </div>
              </summary>{' '}
              <p class="paragraph type-b type-b-0">beyond 1st year</p>
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>$500.00(Reserve sibling embryos)</div>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <details>
              <summary>
                <div class="pricing-table-small-feature-title">
                  Anticipated success in ideal patient (&lt;34 yo){' '}
                </div>
              </summary>{' '}
            </details>{' '}
            <span class="pricing-table-small-feature-value">
              <div>&lt;50% per ET</div>
            </span>
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
      </tbody>
    </table>
  );
};

export default SmallTable;
