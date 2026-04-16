import React from "react";
import "./FeatureHighlight.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function getFeatureList() {
  const { siteConfig } = useDocusaurusContext();
  return [
    {
      eyebrow: "FUNCTION STATISTICS",
      title: "Function-level statistics",
      description:
        "Inspect how functions behave in terms of execution and memory. See how often functions are called, how long they take, what they allocate and if they deallocate. Whether they are part of your code, internals or packages. From here, you can drill into individual functions to understand what happens during execution.",
      image: "CodeGlassStatistics.mp4",
      badge: "DATA_MODULE: FUNCTION_STATISTICS_VIEW",
      bullets: [
        "Call counts and execution time",
        "Memory allocations and sizes",
        "Memory deallocations and sizes",
        "Drill down into modules, functions, callers and callees",
      ],
    },
    {
      eyebrow: "RUNTIME BEHAVIOR",
      title: "Inspect runtime behavior inside functions",
      description:
        "See what actually happens when a function executes. CodeGlass reconstructs the control flow of your function during execution and presents it in a readable, Julia-like code. You can inspect which parts of a function take time, what they allocate (types and sizes), and how often they are executed down to branches and loops. From there, you can drill into detailed statistics, see which functions are called and how dynamic dispatches are resolved at runtime, and understand how the function behaves at runtime.",
      image: "CodeGlassCodeMember.mp4",
      badge: "VISUALIZATION_MODULE: CODE_MEMBER_VISUALIZATION",
      bullets: [
        "Reconstructed control flow from execution",
        "Inspect types and type instability",
        "Per-part, per-branch and per-loop statistics",
        "See which functions are called inside",
        "Understand behavior after inlining and optimizations",
        "Trace allocations or execution time to the root cause through rendering"
      ],
    },
    {
      eyebrow: "EXECUTION WINDOWS",
      title: "Focus on specific execution windows",
      description:
        "CodeGlass continuously collects runtime data during execution. To help you get better insight into specific parts of your code, you can define recording windows within a run and analyze only that part. This makes it possible to isolate the behavior you care about, such as a short computation within a longer process or processes that get slow over time, without rerunning your application. You can inspect each window on its own or compare it with others, using the same views as for the full execution.",
      image: "CodeGlassRecordings.mp4",
      badge: "DATA_MODULE: MAKE_RECORDINGS",
      bullets: [
        "Define analysis windows during execution",
        "Isolate specific parts of a run",
        "Compare multiple execution windows",
        "Switch between full execution and focused views"
      ],
    },
    {
      eyebrow: "GARBAGE COLLECTION",
      title: "Understand allocation lifetime",
      description:
        "CodeGlass shows not only what was allocated, but also what was reclaimed by the garbage collector. You can inspect reclaimed objects per garbage collection cycle and trace them back to the functions and control flow parts that allocated them. This makes it possible to see which allocations are reclaimed and which remain in memory over time, and to relate memory behavior directly to the code responsible.",
      image: "CodeGlassGC.mp4",
      badge: "DATA_MODULE: GARBAGE_COLLECTION_VIEW",
      bullets: [
        "Inspect reclaimed object types per GC cycle",
        "Trace allocations back to code",
        "See which allocations remain in memory",
        "Identify memory growth and leaks",
      ],
    },
    {
      eyebrow: "LIVE EXECUTION",
      title: "Observe execution as it happens",
      description:
        "CodeGlass collects runtime data in real time, allowing you to inspect your application while it is running. You can follow execution flow across threads and see which parts of your code are active, based on traced execution. This makes it easier to understand long-running processes, observe behavior as it happens, and move directly from live execution into detailed inspection of the functions involved. It also helps identify where execution is stalled, without interrupting the application.",
      image: `CodeGlassRealtimeRender.mp4`,
      badge: "VISUALIZATION_MODULE: CALL_TREE_RENDERER",
      bullets: [
        "Follow execution flow across threads",
        "See which functions and control flow are currently active",
        "Inspect live statistics and drill into function details",
        "Based on traced execution, not sampling"
      ],
    },
    {
      eyebrow: "EXCEPTIONS",
      title: "Understand exceptions in context",
      description:
        "CodeGlass captures exceptions during execution and presents them in the context of your application’s runtime behavior. You can inspect exception messages, see how the call stack was unwound, and trace where an exception occurred and where it was handled. Exceptions are linked back to the functions and control flow where they happened, allowing you to understand not just that an error occurred, but how execution led to it and how it propagated through your code.",
      image: `CodeGlassExceptions.mp4`,
      badge: "DATA_MODULE: EXCEPTIONS_VIEW",
      bullets: [
        "Inspect exception messages and call stacks",
        "See where exceptions occur and are handled",
        "Trace how exceptions propagate through execution",
        "Linked to runtime behavior and control flow"
      ],
    },
  ];
}

export default function FeatureHighlightSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <section className="feature-section">
        <div className="eng-header">
          <div className="eng-header-left">
            <h2 className="eng-title">
              Tracing the<br></br>
              <span className="highlight"> Julia Runtime</span>
            </h2>
            <p className="eng-body">
              Traditional profiling tools rely on sampling: they periodically inspect the state of a running application and infer where time is spent. While this approach is lightweight, it provides only a partial view of what actually happened during execution.
            </p>
            <p className="eng-body">
              CodeGlass traces execution as it happens. Instead of sampling, it records all instructions, allocations, and runtime events, and relates them back to the code that produced them. Because this information is collected during execution, you can inspect your application while it is running.
            </p>
            <p className="eng-body">
              To make this possible, CodeGlass integrates with the Julia runtime through an instrumentation layer that captures execution behavior as it occurs. This allows runtime information to be collected and linked directly to the corresponding parts of your code.  We are working with the Julia community to upstream the instrumentation layer we built, so that over time it can become part of the standard ecosystem.
            </p>
            <p className="eng-body">
              The capabilities of the instrumentation layer are not limited to the features shown here. It provides a foundation for analyzing a wide range of runtime behavior and supports more specialized use cases beyond the features currently available.
            </p>
          </div>
        </div>
      </section>
      <section className="eng-section">
        <div className="feature-container">

          {getFeatureList().map((feature, index) => (
            <div key={index} className="feature-item-container">
              {/* This and the copy below are very dirty, but I could not be bothered to fix the css to make it reverse the image and the content */}
              {index % 2 === 0 && <div className="media">
                <video
                  autoPlay
                  loop
                  muted
                  className="media-img"
                  src={`${siteConfig.baseUrl}img/${feature.image}`}
                />
                <div className="overlay">
                  <div className="badge">
                    {feature.badge}
                  </div>
                </div>
              </div>}

              <div className="content">
                <span className="eyebrow">0{index + 1} / {feature.eyebrow}</span>
                <h2 className="title">{feature.title}</h2>

                <div className="description">
                  <p>
                    {feature.description}
                  </p>

                  {feature.bullets.length > 0 && (
                    <ul className="list">
                      {feature.bullets.map((bullet, bulletIndex) => {
                        return <li key={bulletIndex}>
                          <span className="dot"></span>
                          {bullet}
                        </li>
                      })}
                    </ul>
                  )}
                </div>
              </div>

              {index % 2 !== 0 && <div className="media">
                <video
                  autoPlay
                  loop
                  muted
                  className="media-img"
                  src={`${siteConfig.baseUrl}img/${feature.image}`}
                />
                <div className="overlay">
                  <div className="badge">
                    {feature.badge}
                  </div>
                </div>
              </div>}
            </div>


          ))}
        </div>
      </section>
    </>
  );
}