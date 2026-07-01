import { type ReactNode } from 'react';

import LicenseSection, { LicenseFeatures } from '../components/LicenseSection/LicenseSection';

import "./license.css";
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  return (
    <Layout>
      <section className="licenses-full-width">
      <LicenseSection 
        licenseTitle="Temporary Discourse Offer" 
        description="3 month CodeGlass Pro license for a lowered price." 
        disabledFeatures={undefined}
        licensePrice="€15,-" 
        linkToLicense="https://buy.stripe.com/14A7sLarV8k31JP1yF7N60q"
        pricingFootnote="* Price and license are for 3 months, after which your license automatically expires."
        moreInfoLink="https://discourse.julialang.org/t/ann-codeglass-see-what-your-code-is-actually-doing/137020/16"
      />
      </section>
      <section className="licenses">
        <LicenseSection 
          licenseTitle="Enterprise" 
          description="For moving ahead in the market. Designed for organizations." 
          disabledFeatures={LicenseFeatures.None}
          linkToLicense="./contact"
          pricingFootnote={undefined}
          trialLink="./docs/trial"
        />
        <LicenseSection 
          licenseTitle="Pro" 
          description="Working without limits. For users who need full functionality." 
          disabledFeatures={LicenseFeatures.DedicatedSupport | LicenseFeatures.CommercialUse}
          linkToLicense="./contact"
          pricingFootnote={undefined}
          trialLink="./docs/trial"
        />
        <LicenseSection 
          licenseTitle="Basic" 
          description="All the essentials. For individual use." 
          disabledFeatures={LicenseFeatures.DumpFiles | LicenseFeatures.CSV | LicenseFeatures.RemoteConnection | LicenseFeatures.DedicatedSupport | LicenseFeatures.CommercialUse }
          licensePrice="€35,-" 
          linkToLicense="https://buy.stripe.com/00w7sLbvZ7fZ3RX3GN7N60p"
          pricingFootnote="* Monthly price shown. Pay annually and get 2 months free."
          trialLink="./docs/trial"
        />
      </section>
      <div className="account-exists">
        <p>Already have an account? Click <a target="_blank" href="https://billing.stripe.com/p/login/14kg2Me9F7yu4GA144">here</a> to manage it.</p>
      </div>
    </Layout>
  );
}