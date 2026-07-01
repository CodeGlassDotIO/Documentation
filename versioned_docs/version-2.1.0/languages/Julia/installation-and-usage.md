---
sidebar_position: 1
description: "CodeGlass Julia Installation And Usage"
---

# Installation And Usage
When you install CodeGlass, the latest version of CodeGlass Julia is automatically shipped. You can find the CodeGlass Julia installation in this folder:

```bash
<EngineFolder>/RuntimeIntegrations/Julia/bin/julia(.exe)
```

You can also use this path to manually start Julia if you do not want to do it using the [start integration](../../views/general/instance-list#start-integration) option in the [client](../../intro#client).

## Juliaup
If you are planning on regularly running CodeGlass Julia manually, it can be useful to add CodeGlass Julia to [Juliaup](https://github.com/JuliaLang/juliaup).

To add a CodeGlass Julia to Juliaup, you can use the following command:
```bash
juliaup link <name> <fullPathToJuliaExecutable>
```
This allows you to start using CodeGlass Julia using the following command:
```bash
julia +<name>
```

## Environment Variables
By default if you start CodeGlass Julia, it will instantly start a new profiling session. You can modify some of the behaviors through the following environment variables:
- **CG_ENABLE**: sets whether or not Julia should try and make a connection with the engine. Default is 1, set to 0 to prevent Julia from making a connection.
- **CG_TOKEN**: used to tell the engine under which application the instance should be grouped. Leave empty for it to be grouped under a fallback application. If you already have an application, you can use the token that can be found in the [start instructions](../../views/general/instance-list#start-instructions) tab. 
You can also specify any string you want, this will cause CodeGlass to create a new application with this token as its name.
- **CG_PAUSE_DATA_COLLECTION_ON_START**: tells the agent if it should [pause data collection](../../concepts-and-features/pause-data-collection) when Julia starts. If it is set to 1 Julia starts with data collection paused. If not set, Julia uses the setting set in the [application settings](../../views/general/instance-list#settings).
- **CG_IP**: if the engine is running on a different device, you can use this variable to specify the ip that the engine is running on.
- **CG_PORT**: if the engine is running on a different device, you can use this variable to specify the port that the engine is running on. The default port of the engine is: `30340`.

## Package Installation
CodeGlass Julia tries to reuse as many parts of your normal Julia configs and folders, to make using it as seamless as possible.
One of the things we did have to change was changing the folder where packages get compiled.
By default Julia installs packages in the `.julia/compiled/v1.<version>` folder.
As CodeGlass has to make changes to the output of these packages, we choose to install these packages in separate folders, to keep your regular Julia installation clean.
Packages compiled using CodeGlass Julia are located in folders like `.julia/compiled/CodeGlass-Inline-v1.<version>`, where something like Inline depends on the [profiling preset](../../views/general/settings#julia-profile-preset-type) that was used.