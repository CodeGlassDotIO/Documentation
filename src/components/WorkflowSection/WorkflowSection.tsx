import React from "react";

export const WorkflowSection: React.FC = () => {
  return (
    <section className="eng-section">
      <div className="eng-header">
        <div className="eng-header-left">
          <h2 className="eng-title">
            Profiling without breaking 
            <br></br>
            <span className="highlight">your workflow</span>
          </h2>
          <p className="eng-body">
            Understanding performance or memory issues in Julia often means isolating parts of your application, turning them into a minimum working example, and running them repeatedly with different tools.
          </p>
          <p className="eng-body">
            This is time-consuming, and it often does not reflect what actually happens in the full application. Some issues only show up during real runs, or disappear once the code is isolated.
          </p>
          <p className="eng-body">
            CodeGlass instruments your application and collects detailed runtime information during a normal execution. Instructions, allocations, and events are recorded and linked directly to the lines of Julia code responsible.
          </p>
          <p className="eng-body">
            You can start a run of your application and inspect the parts of your code that are responsible. Without rewriting code, extracting examples, or rerunning multiple times.
          </p>
        </div>
      </div>
    </section>
    
  );
};