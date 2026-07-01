---
sidebar_position: 0
description: "CodeGlass specifics for Julia"
---

# CodeGlass Julia
For CodeGlass to work with Julia, we had to make changes to the compiler and runtime to be able to hook into every event. Once we have finalized the design of our hooks, the goal is to upstream these hooks, so that everyone using Julia can access the data provided.

## Supported version
Right now CodeGlass has support for multiple versions of Julia.

### 1.12.x
We have support for every version of Julia 1.12. This is also the version that contains the most features, and receives the most development.

### 1.10.x
We currently have very basic support for Julia 1.10, but it hasn't been updated in a while. If you have a need for CodeGlass support on Julia 1.10, please [reach out](/contact) to us.

## Julia and Inlining
Julia likes to inline a lot of your code. This is often great for performance, but this makes it very hard to analyze profiled code. The data provided by an agent will look nothing like the code you wrote. This can make it difficult to pin point where in the code the issues actually resides.

To solve this, CodeGlass Julia ships with multiple profiling presets that allow you to switch this behavior. 
These presets are:
- **Native**: Regular Julia, with CodeGlass profiling hooks. This preset profiles everything Julia does (with the exception of some [compatibility filters](#always-filtered)).
- **Filtered**: Profiles everything except some [default packages](#default-filters).
- **Filtered Without Inlining**: This is the same as **Filtered**, but it disables inlining on most functions. `@inline` is still respected.

These different presets vary in the amount of detail, and the profiling performance you get.

:::info
We are working on a way for you to generate custom presets, where you can also apply more specific filters. 

If you are interested in this, please [contact](/contact) us and we can increase the priority for this feature.
:::

You can switch between these presets in the [settings](../../views/general/settings#julia-profile-preset-type).

:::warning
Disabling inlining can cause CodeGlass to give false positives on data like dynamic dispatches and multiple dispatches. Julia can sometimes solve a dynamic dispatch call, by inlining the call. By disabling inlining, this does not happen anymore. 
This will cause CodeGlass to mark that call as dynamic dispatch. To prevent you from solving dynamic dispatches that are not actually a problem, make sure that you profile using the correct Julia version.
:::

## Default Filters
These are the functions and modules which are filtered out when you use one of the filtered templates:
- **Core**: These functions are often compilation related and not as interesting to many people. Including these often clutter views like the [code body reconstruction](../../views/app-instance/codemember#code-body-reconstruction) and make it hard to figure out what code is actually yours.
- **Base.Compiler**: Filtered for the same reason as **Core**.

The following modules are filtered based on that they are shipped by Julia by default and therefore are less likely to be something you might be interested in. This list is based on what the package [PackageCompiler.jl](https://github.com/JuliaLang/PackageCompiler.jl/blob/686b95994bdcf5f9c59c3ae469f55a607b480664/src/PackageCompiler.jl#L98) described as "default system image" modules.
- **OpenBLAS**
- **Libdl**
- **SHA**
- **FileWatching**
- **Artifacts**
- **libblastrampoline**
- **Sockets**
- **JuliaSyntaxHighlighting**
- **OpenSSL**
- **MbedTLS**
- **CompilerSupportLibraries**

### Always filtered
We also had to filter out a few modules and function for compatibility reasons. These are always filtered regardless of template. This is often because these packages are custom compilers.
These package do not work with the changes that CodeGlass makes to the code to make the profiling work.
The applied filters prevents CodeGlass from profiling these packages. You can still use these packages, you just cannot profile them.
- **GPUCompiler**
- **Enzyme**
- **ReactantCUDAExt**

:::note
If you think these filters filter our to much data, or that they do not filter enough, or if you find packages that do not compile with CodeGlass Julia, please [reach out](/contact) to us and we can change filters.
:::

## Advanced usage
In most cases, starting Julia through the [client](../../intro#client) using the [Start Integration](../../views/general/instance-list#start-integration) button, is enough. For some more advanced cases, this just does not work. In these cases you can manually run Julia.