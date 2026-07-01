import "./LicenseSection.css";

type LicenseSectionProps = {
  licenseTitle: string;
  description: string;
  licensePrice?: string;
  linkToLicense: string;
  disabledFeatures?: LicenseFeatures;
  pricingFootnote?: string;
  trialLink?: string;
  moreInfoLink?: string;
};

export enum LicenseFeatures {
  None = 0,
  PerformanceProfiling = 1 << 0,
  MemoryProfiling = 1 << 1,
  GarbageCollections = 1 << 2,
  CustomJuliaPackage = 1 << 3,
  Experimental = 1 << 4,
  DumpFiles = 1 << 5,
  CSV = 1 << 6,
  RemoteConnection = 1 << 7,
  DedicatedSupport = 1 << 8,
  CommercialUse = 1 << 9,
}

const ALL_FEATURES = [
  { key: LicenseFeatures.PerformanceProfiling, label: "Performance Profiling", 
    description: "Analyze application performance at the function and module level with detailed runtime statistics. The codemember view provides line-by-line execution analysis, callsite tracking, and runtime behavior inspection, while the heatmap view visualizes hot paths to help identify performance bottlenecks quickly." },
  { key: LicenseFeatures.MemoryProfiling, label: "Memory Profiling", 
    description: "Inspect memory allocations across functions and object types with detailed allocation statistics and object lifetime visibility. Allocation sources can be traced directly within the codemember view to simplify memory optimization and leak investigation." },
  { key: LicenseFeatures.GarbageCollections, label: "Garbage Collection Tracking", 
    description: "Monitor garbage collection activity and detailed deallocation analysis. Inspect collected objects and allocation patterns to identify excessive GC pressure and optimize runtime memory behavior." },
  { key: LicenseFeatures.CustomJuliaPackage, label: "Custom Julia Package", 
    description: "Integrate CodeGlass directly into your Julia workflows using our Custom Julia Package. Automate recordings, manage dump files, and control data collection programmatically from your application code." },
  { key: LicenseFeatures.Experimental, label: "Experimental Features", 
    description: "Access advanced functionality currently under active development. Experimental features include call tree and call stack visualization, along with datasource comparison for analyzing behavioral and statistical differences between profiling sessions." },
  { key: LicenseFeatures.DumpFiles, label: "Dump Files", 
    description: "Export complete profiling sessions into portable dump files containing all collected runtime data. Dump files can be archived, shared with team members, or reopened later for additional investigation and analysis." },
  { key: LicenseFeatures.CSV, label: "CSV Export", 
    description: "Export profiling statistics, memory data, and garbage collection information to CSV format for external analysis in tools such as Microsoft Excel and other environments." },
  { key: LicenseFeatures.RemoteConnection, label: "Remote Connection", 
    description: "Enable remote access to the CodeGlass Engine over HTTPS. This allows teams to collaborate on live investigations, inspect remote processes, and monitor applications running on other systems." },
  { key: LicenseFeatures.DedicatedSupport, label: "Dedicated Support", 
    description: "Receive priority technical support through dedicated communication channels, onboarding assistance, and direct collaboration with the CodeGlass team. Dedicated Support customers also gain increased influence over future product direction and feature development." },
  { key: LicenseFeatures.CommercialUse, label: "Commercial Use", 
    description: "Allows you to use CodeGlass for commercial projects or commercial organizations." },
];

export default function LicenseSection({
  licenseTitle,
  description,
  licensePrice,
  linkToLicense,
  disabledFeatures,
  pricingFootnote,
  trialLink,
  moreInfoLink
}: LicenseSectionProps) {
  return (
    <section className="licenseSection">
      <div className="licenseCard">
        <h2 className="licenseTitle">{licenseTitle}</h2>

        <p className="licenseDescription">{description}</p>

        <ul className="featureList">
          {disabledFeatures !== undefined && ALL_FEATURES.map((feature) => {
            const isDisabled = (disabledFeatures & feature.key) !== 0;

            return (
              <li
                key={feature.key}
                className={isDisabled ? "feature disabled" : "feature"}
              >
                <span className="tooltip-text">{feature.description}</span>
                {isDisabled ? "✖" : "✔"} {feature.label}
              </li>
            );
          })}
        </ul> 

        <div className="licenseBottom">
          <span className="licensePrice">
            {licensePrice ? (
              <>
                {licensePrice}
                {pricingFootnote && <sup>*</sup>}
                <div className="vatNote">ex. VAT</div>
              </>
            ) : (
              "Contact Us"
            )}
          </span>
          <div className="licenseActions">
            <a href={linkToLicense} target={licensePrice ? "_blank" : "_self"} className="licenseButton primary">
              {licensePrice ? "Buy License" : "Contact Us"}
            </a>

            {trialLink && (
              <a href={trialLink} className="licenseButton secondary">
                Start Trial
              </a>
            )}
            {moreInfoLink && (
              <a href={moreInfoLink} target="_blank" className="licenseButton secondary">
                More Info
              </a>
            )}
          </div>
        </div>
        {pricingFootnote && (
          <p className="licenseFootnote">
            {pricingFootnote}
          </p>
        )}
      </div>

    </section>
  );
}