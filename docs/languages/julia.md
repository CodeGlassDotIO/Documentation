---
sidebar_position: 1
description: "CodeGlass specifics for Julia"
---

# Julia
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

If you are interested in this, please [contact](../contact) us and we can increase the priority for this feature.
:::

You can switch between these presets in the [settings](../views/general/settings#julia-profile-preset-type).

:::warning
Disabling inlining can cause CodeGlass to give false positives on data like dynamic dispatches and multiple dispatches. Julia can sometimes solve a dynamic dispatch call, by inlining the call. By disabling inlining, this does not happen anymore. 
This will cause CodeGlass to mark that call as dynamic dispatch. To prevent you from solving dynamic dispatches that are not actually a problem, make sure that you profile using the correct Julia version.
:::

## Default Filters
These are the functions and modules which are filtered out when you use one of the filtered templates:
- **Core**: These functions are often compilation related and not as interesting to many people. Including these often clutter views like the [code body reconstruction](../views/app-instance/codemember#code-body-reconstruction) and make it hard to figure out what code is actually yours.
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

We also filter a small selection of c-calls:
- **ijl_\* c-calls**: All c-calls where the name starts with *ijl_*. These functions are mainly used by the runtime internally. These functions often contain a lot of time (as they also manage the REPL, etc), but are often not really of interest. Including it can skew your results.

:::note
If you think these filters filter our to much data, or that they do not filter enough, or if you find packages that do not compile with CodeGlass Julia, please [reach out](../contact) to us and we can change filters.
:::

## Advanced usage
In most cases, starting Julia through the [client](../intro#client) using the [Start Integration](../views/general/instance-list#start-integration) button, is enough. For some more advanced cases, this just does not work. In these cases you can manually run Julia.

### Julia Installation Location
If you want to start Julia, by calling it yourself from a terminal, you can find the Julia installation in the following folder. This folder is relative to where you extracted the [engine](../intro#engine).
```bash
<EngineFolder>/RuntimeIntegrations/Julia/bin/julia(.exe)
```

#### Juliaup
If you are planning on regularly running CodeGlass Julia manually, it can be useful to add CodeGlass Julia to [Juliaup](https://github.com/JuliaLang/juliaup).

To add a CodeGlass Julia to Juliaup, you can use the following command:
```bash
juliaup link <name> <fullPathToJuliaExecutable>
```
This allows you to start using CodeGlass Julia using the following command:
```bash
julia +<name>
```

### Environment Variables
By default if you start CodeGlass Julia, in will instantly start a new profiling session. You can modify some of the behaviors through the following environment variables:
- **CG_ENABLE**: sets whether or not Julia should try and make a connection with the engine. Default is 1, set to 0 to prevent Julia from making a connection.
- **CG_TOKEN**: used to tell the engine under which application the instance should be grouped. Leave empty for it to be grouped under a fallback application. If you already have an application, you can use the token that can be found in the [start instructions](../views/general/instance-list#start-instructions) tab. 
You can also specify any string you want, this will cause CodeGlass to create a new application with this token as its name.
- **CG_PAUSE_DATA_COLLECTION_ON_START**: tells the agent if it should [pause data collection](../concepts-and-features/pause-data-collection) when Julia starts. If it is set to 1 Julia starts with data collection paused. If not set, Julia uses the setting set in the [application settings](../views/general/instance-list#settings).
- **CG_IP**: if the engine is running on a different device, you can use this variable to specify the ip that the engine is running on.
- **CG_PORT**: if the engine is running on a different device, you can use this variable to specify the port that the engine is running on. The default port of the engine is: `60340`.

## CodeGlass.jl

The CodeGlass Julia builds, by default come with the CodeGlass package installed. This package can be used to change agent behavior right from the Julia runtime.

In the following paragraphs, each of the shipped functions and features are described, including some code samples on how to use these features.

### Recordings
CodeGlass allows a user to create [recordings](../concepts-and-features/datasources#recordings), for better insights into the behavior of an application during a specific part of the run. As it can be difficult to time exactly when to start and stop a recording by pressing a button in the UI, you can use the CodeGlass package to start and stop recordings.

#### Basic Sample
```julia
using CodeGlass

function function_to_record()
    # Some heavy operations
end

function __init__()
    recording_id = CodeGlass.start_recording()
    function_to_record()
    CodeGlass.stop_recording(recording_id)
end

```

You are not just limited to just one recording at a time, you can have multiple recordings running at the same time. Recordings are linked to the id that is returned by the `start_recording` function. This allows you to start and stop any recording at any time, as long as you have access to the `recording_id`.

#### Multiple Recordings

```julia
using CodeGlass

function second_function_to_record()
    # Even more heavy operations
end

function function_to_record()
    # Some heavy operations

    recording_id = CodeGlass.start_recording()
    second_function_to_record()
    CodeGlass.stop_recording(recording_id)

    # Some more heavy operations
end

function __init__()
    recording_id = CodeGlass.start_recording()
    function_to_record()
    CodeGlass.stop_recording(recording_id)
end
```

### @cgprofile
If you want to only profile the complete execution of a single function, you can use the `@cgprofile` macro.

This macro will continue data collection, if it was paused, start a new recording and then call the function you used the macro on.
After finishing the function call, the recording is automatically stopped and data collection is paused again, if it was also paused before the macro was used.

```julia
using CodeGlass

function function_to_profile()
    # Interesting code to profile
end

@cgprofile function_to_profile()
```

This macro also supports the option to run a full garbage collection right before starting a recording, and right before ending one. 
This allows you to get a more accurate view on the memory behavior during the recording. 

To run the macro with gc you can use the following code:

```julia
using CodeGlass

function function_to_profile()
    # Interesting code to profile
end

@cgprofile function_to_profile() forceGc=true
```

### Pause/Continue Data Collection
If your application contains parts that you are less interested in, you can pause data collection for these parts of your application. Pausing data collection can give a performance boost and make your code run a little faster. More information about pausing data collection can be found [here](../concepts-and-features/pause-data-collection).

To pause and continue data collection, you can use the following code snippet:

```julia
using CodeGlass

function __init__()
    CodeGlass.pause_data_collection()

    # Some code you do not want to profile

    CodeGlass.continue_data_collection()

    # All the code you do want to be profiled
end
```

### Creating Dump Files
One of the features of CodeGlass is to export all collected data to a [dump file](../concepts-and-features/dumpfiles). If you want to create one of these dump files after running a specific part of your code, you can also do this through the CodeGlass package.

```julia
using CodeGlass

function __init__()
    # All the code to run before making a dump file
    CodeGlass.create_dumpfile()
end
```

These dump files get stored in the user folder of the user that de [Engine](../intro#engine) is running on.

For Windows users this is: `%APPDATA%/CodeGlass/DumpFiles`, and for Linux and macOS this is: `$HOME/.config/CodeGlass/DumpFiles`.


### Check Connection
If you want to check if your Julia instance still has a connection to the Engine, you can use the `is_connected` function.

```julia
using CodeGlass

function __init__()
    if CodeGlass.is_connected()
        println("You have a connection to CodeGlass.")
    else
        println("You have no connection to CodeGlass.")
    end
end
```