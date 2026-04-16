import React from "react";
import "./FeatureSection.css";

export const FeatureSection: React.FC = () => {
  return (
    <section className="eng-section">
      <div className="eng-header">
        <div className="eng-header-left">
          <h2 className="eng-title">
            Vanaf hier is nog<br />
            <span className="highlight">niet geupdate</span>
          </h2>

          <p className="eng-subtext">
            Every millisecond counts. Our engine is built on low-level primitives
            to ensure your application remains unburdened while providing total
            visibility.
          </p>
        </div>
      </div>

      <div className="eng-grid">
        <div className="card card-large">
          <div className="card-content">
            <h3>Zero-Overhead Tracing</h3>
            <p>
              Utilizing eBPF and kernel-level hooks to capture execution data
              without impacting application throughput. The observer effect is
              neutralized.
            </p>
          </div>
          <div className="card-glow primary" />
        </div>

        <div className="card surface-bright">
          <h3>Instant Bottleneck Detection</h3>
          <p>
            Automated heuristics identify hot paths and lock contention in
            real-time. Don't find bugs; prevent them.
          </p>
        </div>

        <div className="card surface-high">
          <h3>Multi-Language Support</h3>
          <p>
            First-class support for Rust, Go, C++, Java, and Node.js. Unified
            tracing across your entire polyglot microservice architecture.
          </p>
        </div>

        <div className="card visual">
          <img
            className="visual-img"
            alt="Distributed Tracing Map"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt9F4zvoXghL-8Oo2GYnKu8c9a_tiu0PPutiOnw3sqv0vo5ZSpvZcXrCqeUklqru5WBZs0KYAJ8XHbBmMhYk-UQSV5P26YrFtbIBtSK0FCsbEWzh6bOLzkZEkNl4EDZ-nCV00v9ZrdgzSjF-PEh3aKmjBikJM-24S-xHRXDhAupslflBjXOLE__3B5jbUzK00Q17TT_SfJqGPAndZZfEoqnWjO6iGhJHP6fvfb6UbuEL9KfpacNslqGF5kyrgiIrOQWyPQTQXvEE5Y"
          />

          <div className="visual-content">
            <h3>Global Cluster Visibility</h3>
            <p>
              Visualize your entire infrastructure in a single pane. From edge
              nodes to core databases, trace every request journey.
            </p>

            <a className="visual-link" href="#">
              Explore Infrastructure Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};