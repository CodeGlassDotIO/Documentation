---
title: Start New Application
sidebar_position: 0
description: "How to create and start your Julia application with CodeGlass"
---

# How To Create And Start Your Julia Application With CodeGlass

In this *How To*, we will explain how to start your Julia application with CodeGlass. 
Once you've successfully [logged in](../../views/general/login) to CodeGlass, there are a few ways to get started. 

## Add Application

The first screen you will see after logging in is the [Application List View](../../views/general/application-list).

At the top right of this screen, there is a button called [*Add Application*](../../views/general/application-list#add-application). When you click this button, you will be prompted to select either a *Julia REPL* or a *Julia Project* application.
If you want to just run a REPL, select the *Julia REPL* option. If you want the REPL to start with the *--project* flag, select the *Julia Project* option.

Once you have selected one of the two options, you will need to enter a name for the application. If you selected *Julia Project*, you will also need to enter the full path to the 'Project.toml' file.

At this point, you can also change some settings for that application. Our recommendations are selected by default, but if you want to modify them, we recommend checking the [settings page](../../views/general/settings) for a full explanation of each option before making changes.

After entering all the required information, you're new application will be added to the application list view. From here, you can double-click that application to open the [Instance List View](../../views/general/instance-list).

## Start Integration

On the [Instance List View](../../views/general/instance-list) of the application, simply click on the [*Start Integration*](../../views/general/instance-list#start-integration) button and your application will start.

:::warning
If you are using Linux, please make sure that you have executed step 4 in the [setup guide](../../getting-started/linux#running-codeglass).
:::

## Start Instructions

To start Julia with CodeGlass from the terminal, you can use the [Start Instructions](../../views/general/instance-list#start-instructions) for the application.

Copy the correct instructions for your operating system and simply paste them into a terminal.

:::info
These are the same instructions that are executed when you click the [*Start Integration*](../../views/general/instance-list#start-integration) button.
:::

:::info
If you want to use JuliaUp, follow the steps explained [**here**](../../languages/Julia/installation-and-usage#juliaup). 
Please note that every time you start your application with JuliaUp, it will be grouped under *Custom-Application*, because no [environment variables](../../languages/Julia/installation-and-usage#environment-variables) are provided.
:::

## VS Code

To start your application using VS Code, follow these [steps](../../languages/Julia/integrating-with-vscode). We highly recommend adding the [environment variables](../../views/general/instance-list#start-instructions) so that your application is grouped correctly.