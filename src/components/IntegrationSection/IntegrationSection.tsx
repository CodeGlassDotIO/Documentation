import React from "react";

export const IntegrationSection: React.FC = () => {
  return (
    <section className="eng2-section">
      <div className="eng-header">
        <div className="eng-header-left">
          <h2 className="eng-title">
            Tracing the Julia Runtime
          </h2>
          <p className="eng-body">
            Traditional profiling tools rely on sampling: they periodically inspect the state of a running application and infer where time is spent. While this approach is lightweight, it provides only a partial view of what actually happened during execution.
          </p>
          <p className="eng-body">
            CodeGlass traces execution as it happens. Instead of sampling, it records instructions, allocations, and runtime events, and relates them back to the code that produced them. Because this information is collected during execution, you can inspect your application while it is running.
          </p>
          <p className="eng-body">
              To make this possible, CodeGlass integrates with the Julia runtime through an instrumentation layer that captures execution behavior as it occurs. This allows runtime information to be collected and linked directly to the corresponding parts of your code.  We are working with the Julia community to upstream the instrumentation layer we built, so that over time it can become part of the standard ecosystem.          
          </p>
          <p className="eng-body">
            The instrumentation layer is not limited to the features shown here. It provides a foundation for analyzing a wide range of runtime behavior, and can be extended to support more specialized use cases.
          </p>
        </div>
      </div>
    </section>
  );
};