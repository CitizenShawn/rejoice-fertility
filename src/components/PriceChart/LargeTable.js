import * as React from 'react';

const LargeTable = () => {
  return (
    <table id="features" class="pricing-table pricing-table-large">
      <caption>
        <span class="visually-hidden"></span>
      </caption>{' '}
      <thead>
        <tr>
          <th class="pricing-table-sticky-header full-feature-list"></th>
          <th class="pricing-table-sticky-header starter">
            <span class="pricing-table-plan-name">Letrozole/IUI CLOMID/IUI</span>{' '}
          </th>
          <th class="pricing-table-sticky-header pro">
            <span class="pricing-table-plan-name">FSH/IUI</span>{' '}
          </th>
          <th class="pricing-table-sticky-header business">
            <span class="pricing-table-plan-name">Natural Cycle IVF</span>{' '}
          </th>
          <th class="pricing-table-sticky-header starter">
            <span class="pricing-table-plan-name">Mini-Stim IVF</span>{' '}
          </th>
          <th class="pricing-table-sticky-header starter">
            <span class="pricing-table-plan-name">Stimulated Cycle IVF</span>{' '}
          </th>
          <th class="pricing-table-sticky-header starter">
            <span class="pricing-table-plan-name">FET (Own Embryos)</span>{' '}
          </th>
          <th class="pricing-table-sticky-header starter">
            <span class="pricing-table-plan-name">Embryo Adoption</span>{' '}
          </th>
          <th class="pricing-table-sticky-header starter">
            <span class="pricing-table-plan-name">Embryo Adoption (Former NEDC Patient using NEDC Embryos)</span>{' '}
          </th>
        </tr>
      </thead>{' '}
      <tbody>
        <tr id="features-members">
          <td width="30%">
            <details open="">
              <summary>
                <div class="pricing-table-summary-heading">
                  <div>Basic Criteria</div>{' '}
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
            </details>
          </td>{' '}
          <td>
            <div>
              Normal Tubes Normal Uterus Good Sperm Quality No Severe Adhesions or Endometriosis
            </div>
          </td>
          <td>
            <div>
              Normal Tubes Normal Uterus Good Sperm Quality No Severe Adhesions or Endometriosis
            </div>
          </td>
          <td>Normal Uterus Regular Cycles BMI &lt; 38</td>
          <td>Normal Uterus Good Ovarian Reserve BMI &lt; 38</td>
          <td>Normal Uterus Good Ovarian Reserve BMI &lt; 38</td>
          <td>Normal Uterus BMI &lt; 38</td>
          <td>Normal Uterus BMI &lt; 38 Husband/wife combined ages &lt; 100 years</td>
          <td>Normal Uterus BMI &lt; 38 Husband/wife combined ages &lt; 100 years</td>
        </tr>
        <tr id="rejoice-fertility-fees">
          <td width="30%">
            <details>
              <summary>
                <div class="rejoice-fertility-fees-heading">
                  <div>Rejoice Fertility Fees </div>{' '}
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
              <p class="paragraph type-b type-b-0">(Ultrasounds, Hormone Labs, IUI, Egg Collection, Embryo transfer)</p>
            </details>
          </td>{' '}
          <td>
            <div>$150 (IUI) $315 (Per monitoring visit if any needed)</div>
          </td>
          <td>
            <div>$150 (IUI) $315 (Per monitoring visit)</div>
          </td>
          <td>
            <div>$4,710.00</div>
          </td>
          <td>
            <div>$5,715.00</div>
          </td>
          <td>
            <div>$7,725.00</div>
          </td>
          <td>
            <div>$2,920.00</div>
          </td>
          <td>
            <div>$2,920.00</div>
          </td>
          <td>
            <div>$1,640.00</div>
          </td>
        </tr>
        <tr id="rejoice-ivf-lab-fees">
          <td width="30%">
            <details>
              <summary>
                <div class="rejoice-ivf-lab-fees-heading">
                  <div>Rejoice IVF Lab Fees </div>{' '}
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
              <p class="paragraph type-b type-b-0">(Does NOT participate in any insurance plans)</p>
            </details>
          </td>{' '}
          <td>
            <div>$600 (sperm prep for IUI)</div>
          </td>
          <td>
            <div>$600 (sperm prep for IUI)</div>
          </td>
          <td>
            <div>$3,384.00</div>
          </td>
          <td>
            <div>$4,984.00</div>
          </td>
          <td>
            <div>$7,934.00</div>
          </td>
          <td>
            <div>$2,500.00</div>
          </td>
          <td>
            <div>$2,500.00</div>
          </td>
          <td>
            <div>$2,500.00</div>
          </td>
        </tr>
        <tr id="rejoice-ivf-lab-fees">
          <td width="30%">
            <details>
              <summary>
                <div class="rejoice-ivf-lab-fees-heading">
                  <div>Rejoice Embryo Rescue Cycle Coordination Fee </div>{' '}
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
              <p class="paragraph type-b type-b-0"></p>
            </details>
          </td>{' '}
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>$1,500.00</div>
          </td>
          <td>
            <div>Waived</div>
          </td>
        </tr>
        <tr id="features-reviewers">
          <td width="30%">
            <details>
              <summary>
                <div class="pricing-table-summary-heading">
                  <div> Price per cycle </div>{' '}
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
            </details>
          </td>{' '}
          <td>
            <div>~ $1,100.00 (Depends on number of visits)</div>
          </td>
          <td>
            <div>~ $2,500.00 (Depends on number of visits)</div>
          </td>
          <td>
            <div>$8,094.00</div>
          </td>
          <td>
            <div>$10,699.00</div>
          </td>
          <td>
            <div>$15,659.00</div>
          </td>
          <td>
            <div>$5,420.00</div>
          </td>
          <td>
            <div>$6,920.00</div>
          </td>
          <td>
            <div>$4,140.00</div>
          </td>
        </tr>
        <tr id="features-concurrent-builds">
          <td width="30%">
            <details>
              <summary>
                <div class="pricing-table-summary-heading">
                  <div>Medications typical cost* </div>{' '}
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
            </details>
          </td>{' '}
          <td>
            <div>$200.00</div>
          </td>
          <td>
            <div>$1,500.00</div>
          </td>
          <td>
            <div>$200.00</div>
          </td>
          <td>
            <div>$1800.00</div>
          </td>
          <td>
            <div>$4000.00</div>
          </td>
          <td>
            <div>$1000.00</div>
          </td>
          <td>
            <div>$1000.00</div>
          </td>
          <td>
            <div>$1000.00</div>
          </td>
        </tr>
        <tr id="features-bandwidth">
          <td width="30%">Anesthesia for egg collection</td>{' '}
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>Included</div>
          </td>
          <td>
            <div>Included</div>
          </td>
          <td>
            <div>Included</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
        </tr>
        <tr id="features-build-minutes">
          <td width="30%">
            <details>
              <summary>
                <div class="pricing-table-summary-heading">
                  <div>ICSI</div>{' '}
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
            </details>
          </td>{' '}
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>Included</div>
          </td>
          <td>
            <div>Included</div>
          </td>
          <td>
            <div>Included</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
        </tr>
        <tr id="features-websites">
          <td width="30%">
            <details>
              <summary>
                <div class="pricing-table-summary-heading">
                  <div>Assisted Hatching</div>{' '}
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
            </details>
          </td>{' '}
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>Included</div>
          </td>
          <td>
            <div>Included</div>
          </td>
          <td>
            <div>Included</div>
          </td>
          <td>
            <div>Included</div>
          </td>
          <td>
            <div>Included</div>
          </td>
          <td>
            <div>Included</div>
          </td>
        </tr>
        <tr id="features-serverless-functions">
          <td width="30%">
            <details>
              <summary>
                <div class="pricing-table-summary-heading">
                  <div>Embryo Freezing plus 1st year of storage (not prorated)</div>{' '}
                </div>
              </summary>{' '}
            </details>
          </td>{' '}
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>$750.00</div>
          </td>
          <td>
            <div>$750.00</div>
          </td>
          <td>
            <div>$750.00</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
        </tr>
        <tr id="features-serverless-functions">
          <td width="30%">
            <details>
              <summary>
                <div class="pricing-table-summary-heading">
                  <div>Egg Freezing plus 1st year of storage (not prorated)</div>{' '}
                </div>
              </summary>{' '}
            </details>
          </td>{' '}
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>$1200.00</div>
          </td>
          <td>
            <div>$1200.00</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
        </tr>
        <tr id="features-edge-functions">
          <td width="30%">
            <details>
              <summary>
                <div class="pricing-table-summary-heading">
                  <div>Embryo Storage</div>{' '}
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
            </details>
          </td>{' '}
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>$750.00</div>
          </td>
          <td>
            <div>$750.00</div>
          </td>
          <td>
            <div>$750.00</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          <td>
            <div>$750.00</div>
          </td>
          <td>
            <div>$500.00</div>
          </td>
        </tr>
        <tr id="features-forms">
          <td width="30%">
            <details>
              <summary>
                <div class="pricing-table-summary-heading">
                  <div>Anticipated success in ideal patient (&lt;34 yo)</div>{' '}
                </div>
              </summary>{' '}
            </details>
          </td>{' '}
          <td>
            <div>6-9% per IUI</div>
          </td>
          <td>
            <div>10-18% per IUI</div>
          </td>
          <td>
            <div>15-20% per cycle 25-40% per ET</div>
          </td>
          <td>
            <div>20-25% per cycle 30-50% per ET</div>
          </td>
          <td>
            <div>25-40% per cycle 30-50% per ET</div>
          </td>
          <td>
            <div>Depends on age at time of freezing (25-50%)</div>
          </td>
          <td>
            <div>Depends on age at time of freezing (45-50%)</div>
          </td>
          <td>
            <div>Depends on age at time of freezing (45-50%)</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LargeTable;
