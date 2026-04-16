---
sidebar_position: 3
description: "Setup guide for macOS machines"
---

# macOS
This section explains how to install and start CodeGlass on a macOS machine.

## Installation
1. Download the **latest release** from the [CodeGlass GitHub repository](https://github.com/CodeGlassDotIO/CodeGlassDotIO).
2. Extract the downloaded archive to a location on your system. A short path is recommended, for example: 
```bash
$HOME/CodeGlass
```
After extracting, the folder structure should contain the CodeGlass executables and related files.

## Running CodeGlass
1. Navigate to the folder where you extracted CodeGlass.
2. Start the [CodeGlass Engine](../intro#engine) by running:
```bash
./CodeGlass.Hubs.DotNetCore
```

This will start the CodeGlass background services and will try to open a browser to the [CodeGlass Client](../intro#client).

3. [Log in](../views/general/login) and start working with the data the [CodeGlass Agent](../intro#agent) collected.

:::info
If the browser fails to open automatically, you can manually navigate to:
```bash
http://localhost:60340
```
:::

## Config Folder
The Engine is designed so it does not write files to the folder where it was extracted. This makes it possible to run it from locations that are read-only.

By default, all user-specific files are stored in:
```bash
$HOME/.config/CodeGlass
```
You can override this location by setting the following environment variable before starting the Engine:
```bash
CODEGLASS_USERFOLDER_OVERRIDE="override/path"
```