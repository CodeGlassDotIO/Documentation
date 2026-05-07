import { type ReactNode } from 'react';

import LicenseSection, { LicenseFeatures } from '../components/LicenseSection/LicenseSection';

import "./license.css";
import Layout from '@theme/Layout';


export default function Home(): ReactNode {
  return (
    <Layout>
      <section className="licenses">
        <LicenseSection 
          licenseTitle="Basic" 
          description="For individual use with essential features. Some advanced capabilities are disabled. Not licensed for commercial use." 
          disabledFeatures={LicenseFeatures.DumpFiles | LicenseFeatures.CSV | LicenseFeatures.RemoteConnection | LicenseFeatures.DedicatedSupport}
          licensePrice="€35,-" 
          linkToLicense="https://buy.stripe.com/00w7sLbvZ7fZ3RX3GN7N60p"
          hasPricingFootnote={true}
        />
        <LicenseSection 
          licenseTitle="Pro" 
          description="For individual users who need full functionality. Includes all features except dedicated support. Not licensed for commercial use." 
          disabledFeatures={LicenseFeatures.DedicatedSupport}
          linkToLicense="./contact"
          hasPricingFootnote={false}
          trialLink="./docs/trial"
        />
        <LicenseSection 
          licenseTitle="Enterprise" 
          description="Designed for organizations. Includes all features plus dedicated support." 
          disabledFeatures={LicenseFeatures.None}
          linkToLicense="./contact"
          hasPricingFootnote={false}
          trialLink="./docs/trial"
        />
      </section>
      <div className="account-exists">
        <p>Already have an account? Click <a target="_blank" href="https://billing.stripe.com/p/login/14kg2Me9F7yu4GA144">here</a> to manage it.</p>
      </div>
    </Layout>
  );
}