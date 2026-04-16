import React from "react";

export const PricingSection: React.FC = () => {
  return (
    <section className="eng-section">
      <div className="eng-header">
        <div className="eng-header-left">
          <h2 className="eng-title">
            Simple and flexible <br></br>
            <span className="highlight">pricing</span>
          </h2>
          <p className="eng-body">
            CodeGlass is available with a free trial so you can evaluate it on your own applications.
          </p>
          <p className="eng-body">
            After the trial, individual users can continue with a limited version for personal use at a lower cost. For companies and commercial use, we offer tailored licensing depending on the use case. <a href="./Contact">Contact us</a> to discuss options.
          </p>
          <p className="eng-body">
            We aim to keep CodeGlass available to individuals, while commercial use supports its development and enables more advanced usage and customization. If you are working on non-commercial projects and need the full version, feel free to contact us.
          </p>
        </div>
      </div>

      <div className="hero-actions">
          <a className="btn-primary" href="./License">View Pricing details</a>
          <a className="btn-secondary" href="./Contact">Contact us</a>
      </div>
    </section>
    
  );
};