---
sidebar_position: 2
description: "Setup guide for Linux machines"
---

# Linux
This section explains how to setup and start CodeGlass on a Linux machine.

## Installation
1. Download the **latest release** from the [CodeGlass GitHub repository](https://github.com/CodeGlassDotIO/CodeGlass).
2. Extract the downloaded archive to a location on your system. A short path is recommended, for example:
```bash
$HOME/CodeGlass
```
After extracting, the folder structure should contain the CodeGlass executables and related files.

## Running CodeGlass
1. Navigate to the folder where you extracted CodeGlass.
2. Start the [CodeGlass Engine](../intro#engine) by running:
```bash
./CodeGlass.Engine
```

This will start the CodeGlass background services and will try to open a browser to the [CodeGlass Client](../intro#client).

3. [Log in](../views/general/login) and start working with the data the [CodeGlass Agent](../intro#agent) collected.

:::info
If the browser fails to open automatically, you can manually navigate to:
```bash
http://localhost:30340
```
:::

4. Set your [default terminal](../views/general/settings#linux-terminal-settings). 

:::warning
There is no default way to start a new terminal in Linux. To make it possible for CodeGlass to start a new terminal, you have to specify the terminal that should be used to start your applications.

If you do not set a terminal in the settings, you cannot start your applications.
:::

## Quitting CodeGlass
To quit CodeGlass:
1.	Close the CodeGlass Client in your web browser
2.	Open the terminal where `CodeGlass.Engine` is running, and press Control + C


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