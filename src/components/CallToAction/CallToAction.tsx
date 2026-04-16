import React from "react";
import "./CallToAction.css";

export const CallToAction: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-bg">
        <div className="cta-bg-blur" />
      </div>

      <div className="cta-content">
        <h2 className="cta-title">
          Have a specific <br />
          <span className="highlight">issue in mind?</span>
        </h2>

        <p className="cta-subtext">
          If you are unsure whether CodeGlass fits your use case, feel free to reach out. We can help you determine if it is a good fit for your application, and your feedback helps improve the tool.
        </p>

        <div className="cta-actions">
          <a className="cta-primary" href="contact">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
};