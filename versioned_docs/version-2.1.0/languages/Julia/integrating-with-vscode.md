---
sidebar_position: 3
description: "Starting CodeGlass Julia from VSCode"
---

# Integrating With VSCode

To make integrating CodeGlass into your workflow as seamless as possible, we are working on a full VSCode extension.
As this is not yet ready, we wanted to provide a config, that allows you to start CodeGlass Julia right from VSCode.

In the `.vscode` folder of the project that you want to run, create a `launch.json` file and add the following code in there:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Run CodeGlass Julia",
      "type": "node-terminal",
      "request": "launch",
      "command": "<EngineFolder>/RuntimeIntegrations/Julia/bin/julia(.exe) --project=.",
      "cwd": "${workspaceFolder}",
      "env": {
        "CG_ENABLE": "1",
        "CG_TOKEN": "<CODEGLASS TOKEN>"
      }
    }
  ]
}
```

For the command, you have to provide the full path to your CodeGlass Julia executable. The sample script shows the relative path from the [Engine](../../intro#engine), so replace that with your actual path to the engine.

For the CG_TOKEN, you have to provide the application token that you can find in the [start instructions](../../views/general/instance-list#start-instructions).
If you want to further configure the behavior, you can also specify any of the environment variables described [here](./installation-and-usage#environment-variables).

## Command Fails To Run
In some cases, the command fails to start Julia. The most common issue is that the path contains spaces.

To fix this, add quotes around the path like this: `\"<EngineFolder>/RuntimeIntegrations/Julia/bin/julia(.exe)\"`.

:::warning
If you use Windows, just adding the quotes does not fix the issue. On Windows, the command has to start with an '&'.

This makes the full command: `"& \"<EngineFolder>/RuntimeIntegrations/Julia/bin/julia.exe\" --project=."`
:::
