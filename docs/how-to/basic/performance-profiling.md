---
sidebar_position: 1
description: "Performance Profiling With CodeGlass"
---

# Performance Profiling
This _How To_ covers the basics of general performance profiling using CodeGlass.
By general performance profiling, we mean examining the performance of your application to get an idea of what is happening.

You can use this approach when you do not know whether you have any issues, or when you do not yet know what kind of issue you are dealing with. Once you know whether there is an issue, and what kind it is, you can go into more depth on that specific type of problem.

This post will go into:
- Suggested settings
- What views can be used
- What to look for

:::info
This _How To_ assumes that you already have CodeGlass fully [setup](../../category/getting-started), and that you have already [created an application](../../views/general/application-list#add-application).
:::

## Suggested Settings

CodeGlass allows you to configure many aspects of how profiling is performed, enabling you to fine-tune the experience to your needs.
You can configure this in the [settings](../../views/general/settings) of your [application](../../views/general/instance-list#settings).
Because of the large number of settings CodeGlass provides, it can be overwhelming to determine which ones are important and which can be ignored initially. The default settings work well for most situations, but understanding what can be adjusted may help you achieve better performance or more useful results.

:::info
Keep in mind that some settings can have an impact on profiling performance or system resource usage. Most settings indicate whether they have such an impact, and the settings discussed in this post also describe their potential effects.
:::

Below are some settings we suggest using (or at least reviewing) when doing general performance profiling.

### Pause Data Collection At Start
This is an optional setting that can be useful when running a large application and you are only interested in profiling a small portion of it.

When enabled, the [agent](../../intro#agent) does not send profiling data to the [engine](../../intro#engine), reducing CodeGlass overhead to a minimum. When you reach the point where profiling is needed, you can re-enable data collection using the [client](../../views/app-instance/application-instance#pause--continue-data-collection) or the [CodeGlass.jl](../../languages/Julia/codeglass-jl#pausecontinue-data-collection) package.

This option is particularly useful when your application has a long setup phase that is not of interest, followed by a solving, running, or execution phase that is.

### Only Trace Main Process
This optional setting is enabled by default to prevent clutter in the CodeGlass UI. When Julia performs tasks such as package precompilation, it starts new Julia instances for each package, and CodeGlass profiles those by default.

Profiling these precompilation processes can slow them down and result in a very long list of instances. This is generally undesirable, so CodeGlass profiles only the main process by default.

You can disable this setting if you want to profile the precompilation process itself or if your application launches additional Julia instances for parallelization.

### Memory Profiling
We suggest leaving this setting enabled. It has a small to medium impact on profiling performance, but the resulting data is often very useful for identifying potential issues.

If you have already determined that your issue is not memory-related, you can disable this setting to gain additional performance.

### Include Deallocations
We suggest leaving this setting disabled. Profiling every deallocation is very expensive, significantly slowing down the application and consuming additional memory.

Enable this option only when actively investigating a memory leak.

:::info
Garbage collection events are still recorded when this option is disabled; however, you cannot see which objects were freed during a GC cycle.
:::

### Disable Realtime Renderers
Realtime renderers are an experimental feature that provide a visual representation of code execution flow.

When this setting is enabled, CodeGlass skips the processing required to generate these views, which can result in a noticeable performance improvement.

This option should be disabled only when you want to use the experimental views to gain insight into your application’s execution flow.

### Julia Profile Preset Type
This is one of the most important settings to set correctly, and also has to most impact on performance. You can read more about these presets [here](../../languages/Julia/codeglass-julia#julia-and-inlining).

For general profiling, we suggest you use either **Filtered** or **Filtered Without Inlining**.

## What Views Can Be Used

Multiple views are available for identifying potential performance issues.

If you want a complete overview of all available data and do not mind working with tables (which can sometimes be overwhelming), start with the [statistics table](#statistics-table).
If you prefer a more visual approach, start with the [heat map](#heat-map).

### Statistics Table
The [statistics table](../../views/app-instance/statistics) displays a list of every module called by your application. You can expand modules to view their submodules or functions.

:::info
The statistics table may display modules that do not appear to be part of your application. CodeGlass records everything that occurs, including modules used by dependencies and parts of the REPL itself.
:::

We recommend starting your analysis with code you wrote yourself. Locate your module in the list and double-click it to open a view containing only statistics for that module.

You can then sort columns by the statistics that interest you.

Common indicators of performance issues include:
- Functions with high **Total Calls**
- Functions with high **Exclusive Call Durations**
- Functions with high **Inclusive Call Durations**

Functions with high **Exclusive Call Durations** are typically good candidates for direct optimization. Functions with high **Inclusive Call Durations** are useful starting points for investigating which sub-functions may need optimization.

For functions with a high number of **Total Calls**, examine where they are [called from](../../views/app-instance/codemember#called-from) and determine whether those calls can be reduced.
This is generally only worthwhile if the function also has a reasonably high **Exclusive Call Duration**, otherwise the optimization effort may not yield measurable benefits.

When you identify a function of interest, double-click it to open the [code member](../../views/app-instance/codemember) view, which provides insight into what the function actually executed.

:::info
If you are unsure where to begin, consult the [advanced How To](../../category/advanced) section. It is a work in progress and does not yet cover every topic.
:::

### Heat Map
The [heat map](../../views/app-instance/heat-map) provides a visual overview of your application’s performance. You can [sort](../../views/app-instance/heat-map#toolbar) the view by the statistic you are interested in.

Each function is color coded from red to green, indicating performance relative to the rest of the application. Red functions have the highest value for the selected statistic. The function with the highest value appears in the top-left corner, while the lowest appears in the bottom-right.

The sidebar also lists functions in descending order of the selected statistic. Note that the sidebar only shows functions currently visible in the render viewport.

Common statistics to sort by include:
- **Total Calls**
- **Exclusive Call Durations**
- **Inclusive Call Durations**

Functions with high **Exclusive Call Durations** are typically good candidates for direct optimization. Functions with high **Inclusive Call Durations** are useful starting points for investigating which sub-functions may need optimization.

For functions with a high number of **Total Calls**, examine where they are [called from](../../views/app-instance/codemember#called-from) and determine whether those calls can be reduced.
This is generally only worthwhile if the function also has a reasonably high **Exclusive Call Duration**, otherwise the optimization effort may not yield measurable benefits.

When you identify a function of interest, double-click it to open the [code member](../../views/app-instance/codemember) view, which provides insight into what the function actually executed.

:::info
If you are unsure where to begin, consult the [advanced How To](../../category/advanced) section. It is a work in progress and does not yet cover every topic.
:::