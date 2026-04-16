import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import FeatureHighlightSection from '../components/FeatureHighlight/FeatureHighlight';
import { CallToAction } from '../components/CallToAction/CallToAction';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { FeatureSection } from '../components/FeatureSection/FeatureSection';
import { WorkflowSection } from '../components/WorkflowSection/WorkflowSection';
import { DesignedSection } from '../components/DesignedSection/DesignedSection';
import { IntegrationSection } from '../components/IntegrationSection/IntegrationSection';
import { PricingSection } from '../components/PricingSection/PricingSection';
import { OrginSection } from '../components/OrginSection/OrginSection';



export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Next Generation Profiling Tools">
      <HeroSection/>
      <main>
        <WorkflowSection/>
        <FeatureHighlightSection />
        {/* <IntegrationSection/> */}
        <DesignedSection />
        <PricingSection/>
        <OrginSection />
        {/* <FeatureSection /> */}
        <CallToAction />
      </main>
    </Layout>
  );
}
