import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import LicenseSection, { LicenseFeatures } from '../components/LicenseSection/LicenseSection';

import "./license.css";
import Layout from '@theme/Layout';


export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <section className="licenses">

        <LicenseSection 
          licenseTitle="Basic" 
          description="For individual use with essential features. Some advanced capabilities are disabled. Not licensed for commercial use." 
          disabledFeatures={LicenseFeatures.DumpFiles | LicenseFeatures.CSV | LicenseFeatures.RemoteConnection | LicenseFeatures.DedicatedSupport}
          licensePrice="€40,-" 
          linkToLicense="./contact"
          hasPricingFootnote={true}
        />
        <LicenseSection 
          licenseTitle="Pro" 
          description="For individual users who need full functionality. Includes all features except dedicated support. Not licensed for commercial use." 
          disabledFeatures={LicenseFeatures.DedicatedSupport}
          licensePrice="Contact Us" 
          linkToLicense="./contact"
          hasPricingFootnote={false}
          trialLink="./contact"
        />
        <LicenseSection 
          licenseTitle="Enterprise" 
          description="Designed for organizations. Includes all features plus dedicated support." 
          disabledFeatures={LicenseFeatures.None}
          licensePrice="Contact Us" 
          linkToLicense="./contact"
          hasPricingFootnote={false}
          trialLink="./contact"
        />
      </section>
    </Layout>
  );
}