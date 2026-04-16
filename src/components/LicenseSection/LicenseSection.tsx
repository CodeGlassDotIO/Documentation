import "./LicenseSection.css";

type LicenseSectionProps = {
  licenseTitle: string;
  description: string;
  licensePrice: string;
  linkToLicense: string;
  disabledFeatures: LicenseFeatures;
  hasPricingFootnote: boolean;
  trialLink?: string;
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
  DedicatedSupport = 1 << 8
}

const ALL_FEATURES = [
  { key: LicenseFeatures.PerformanceProfiling, label: "Performance Profiling" },
  { key: LicenseFeatures.MemoryProfiling, label: "Memory Profiling" },
  { key: LicenseFeatures.GarbageCollections, label: "Garbage Collection Tracking" },
  { key: LicenseFeatures.CustomJuliaPackage, label: "Custom Julia Package" },
  { key: LicenseFeatures.Experimental, label: "Experimental Features" },
  { key: LicenseFeatures.DumpFiles, label: "Dump Files" },
  { key: LicenseFeatures.CSV, label: "CSV Export" },
  { key: LicenseFeatures.RemoteConnection, label: "Remote Connection" },
  { key: LicenseFeatures.DedicatedSupport, label: "Dedicated Support" },
];

export default function LicenseSection({
  licenseTitle,
  description,
  licensePrice,
  linkToLicense,
  disabledFeatures,
  hasPricingFootnote,
  trialLink
}: LicenseSectionProps) {
  return (
    <section className="licenseSection">
      <div className="licenseCard">
        <h2 className="licenseTitle">{licenseTitle}</h2>

        <p className="licenseDescription">{description}</p>

        <ul className="featureList">
          {ALL_FEATURES.map((feature) => {
            const isDisabled = (disabledFeatures & feature.key) !== 0;

            return (
              <li
                key={feature.key}
                className={isDisabled ? "feature disabled" : "feature"}
              >
                {isDisabled ? "✖" : "✔"} {feature.label}
              </li>
            );
          })}
        </ul>

        <div className="licenseBottom">
          <span className="licensePrice">
            {licensePrice}
            {hasPricingFootnote && <sup>*</sup>}
          </span>
          <div className="licenseActions">
            <a href={linkToLicense} className="licenseButton primary">
              Contact Us
            </a>

            {trialLink && (
              <a href={trialLink} className="licenseButton secondary">
                Start Trial
              </a>
            )}
          </div>
        </div>
        {hasPricingFootnote && (
          <p className="licenseFootnote">
            * Monthly price shown. Pay annually and get 2 months free.
          </p>
        )}
      </div>

    </section>
  );
}