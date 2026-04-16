import React from "react";

export const OrginSection: React.FC = () => {
  return (
    <section className="eng2-section">
      <div className="eng-header">
        <div className="eng-header-left">
          <h2 className="eng-title">
            Built by developers <br></br>
            <span className="highlight">solving real problems</span>
          </h2>
          <p className="eng-body">
            CodeGlass is a developer driven company. We started building tools as developers who spent a significant amount of time diagnosing performance and memory issues in real applications.
            Over time, we created tools to better understand runtime behavior and to make these problems easier to solve.
          </p>
          <p className="eng-body">
            These tools were used across different projects, programming languages and companies, but were never released publicly. While we always considered it, most of them were developed for specific environments or use cases, of companies.
          </p>
          <p className="eng-body">
            That changed when we started working with the Julia community. We found that many of the same problems existed, and that even a broader version of our tooling could be useful within the ecosystem. After JuliaCon Paris we found the Julia community to be open and engaged, and saw an opportunity to contribute something meaningful back.
          </p>
          <p className="eng-body">
            Since then, we have focused on making CodeGlass for Julia available as a general tool, while adapting it to work across different environments and use cases.
            If you need specific information to solve a problem, reach out to us! We might already have the tool, solution, or data.
          </p>
        </div>
      </div>
    </section>
    
  );
};