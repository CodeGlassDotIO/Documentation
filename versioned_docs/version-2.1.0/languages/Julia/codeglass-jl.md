---
sidebar_position: 2
description: "How To Use CodeGlass.jl"
---

# CodeGlass.jl

The CodeGlass Julia builds, by default come with the CodeGlass package installed. This package can be used to change agent behavior right from the Julia runtime.

In the following paragraphs, each of the shipped functions and features are described, including some code samples on how to use these features.

## Recordings
CodeGlass allows a user to create [recordings](../../concepts-and-features/datasources#recordings), for better insights into the behavior of an application during a specific part of the run. As it can be difficult to time exactly when to start and stop a recording by pressing a button in the UI, you can use the CodeGlass package to start and stop recordings.

### Basic Sample
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

### Multiple Recordings

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

## @cgprofile
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

## Pause/Continue Data Collection
If your application contains parts that you are less interested in, you can pause data collection for these parts of your application. Pausing data collection can give a performance boost and make your code run a little faster. More information about pausing data collection can be found [here](../../concepts-and-features/pause-data-collection).

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

## Creating Dump Files
One of the features of CodeGlass is to export all collected data to a [dump file](../../concepts-and-features/dumpfiles). If you want to create one of these dump files after running a specific part of your code, you can also do this through the CodeGlass package.

```julia
using CodeGlass

function __init__()
    # All the code to run before making a dump file
    CodeGlass.create_dumpfile()
end
```

These dump files get stored in the user folder of the user that the [Engine](../../intro#engine) is running on.

For Windows users this is: `%APPDATA%/CodeGlass/DumpFiles`, and for Linux and macOS this is: `$HOME/.config/CodeGlass/DumpFiles`.


## Check Connection
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