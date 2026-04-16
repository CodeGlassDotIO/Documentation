import React from "react";

export const DesignedSection: React.FC = () => {
  return (
    <section className="eng2-section">
      <div className="eng-header">
        <div className="eng-header-left">
          <h2 className="eng-title">
            Designed for<br></br>
            <span className="highlight">real-world applications</span>
          </h2>
          <p className="eng-body">
            CodeGlass is designed to work on real applications, not isolated examples. You can run your application as you normally would and inspect its behavior during or after execution, without restructuring your code or simplifying it into a minimum working example.
          </p>
          <p className="eng-body">
            Because CodeGlass traces execution in detail, it introduces overhead. To keep this manageable, you can control how much data is collected. Data collection can be limited to specific parts of your code, paused and resumed during execution, or configured depending on what you want to analyze.
          </p>
          <p className="eng-body">
            This makes it possible to focus on the parts of your application that matter, while keeping the application usable in practice.
          </p>
          <p className="eng-body">
            CodeGlass has been developed for and validated by companies that use Julia for real-world applications, where it is used to diagnose performance and memory issues that are difficult to reproduce or isolate.
          </p>
        </div>
      </div>
    </section>
    
  );
};