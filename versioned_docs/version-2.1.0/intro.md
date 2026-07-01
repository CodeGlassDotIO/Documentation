---
sidebar_position: 1
---

# What is CodeGlass

:::info
The documentation currently only covers CodeGlass v2.0+, and the profiling Language integration Julia.
In case you are running other versions or another language integration, we recommend you refer to the documentation that was shipped with your version.

Missing features from other versions will be incorporated into CodeGlass V2+, if you have any feature requests or issues, please [reach out](/contact) to us.
:::

**CodeGlass** is build for and by developers that were tired of the time they spend on diagnosing issues.
It is build with the experience of building development tools for various languages, such as Julia, C#, Java, JavaScript, Rust.

CodeGlass provides developers a real-time way to understand how their code behaves while it runs. 

With CodeGlass, you can quickly spot performance problems that are often hard to find. It helps you detect and pinpoint things like:
- Slow parts of your program
- High memory usage
- Garbage collection issues
- Multiple dispatch behavior
- Dynamic dispatches
- Exceptions during execution

One of the main strengths of CodeGlass is that it presents this information in a **clear and visual** way. Instead of digging through logs or large tables, you can immediately see where time and memory are going. This makes it much easier to understand what your program is really doing.

CodeGlass can also **record specific sections of your code while they run**. These recordings allow you to inspect performance in detail later. You can open them on their own or compare them with other recordings to see how changes in your code affect performance.

## Our Goal
The goal of CodeGlass is to minimize the time developers spend diagnosing issues by make it easier for developers to understand what is happening inside their programs.

Performance issues, memory problems, or unexpected behavior can take a lot of time to track down. Developers often have to dig through logs, run many experiments, or guess where the problem might be. CodeGlass is built to make this process faster and more clear.

By giving developers a visual and detailed view of how their code runs, CodeGlass helps them find and solve problems more quickly. Less time is spent searching for issues, and more time can be spent improving the code.

Our goal: minimize the time developers have to spend diagnosing issues by giving them better insight into their programs.

In the end, we want to **help developers spend less time diagnosing issues so they can spend more time on building new features for example**.

## Getting Started

If you just want to get started, checkout [Getting Started](./category/getting-started/). This contains the steps to setup on Window, Linux and Mac

## The structure
CodeGlass is made up of **three main parts** that work together: the **Engine**, the **Client**, and the **Agent**.

Each part has a different role, but together they collect, process, and visualize your agent data.

### Engine
The **Engine** is the back-end of CodeGlass. It is responsible for storing all the data the agent collected and performing the calculations needed to analyze it.

Your data stays under your control, and by default locally on your machine. However you can set it up so you can use or access it remotely or share collected information by exporting it.


### Client
The **Client** is a lightweight web application used to explore and visualize your agent data.

It connects to the Engine and presents the collected information in a clear and visual way, making it easier to understand how your code behaves during execution.

### Agent
The **Agent** is the part that collects the data.

It connects directly to the runtime of your application and listens to events while your program runs. During execution it gathers information about things like function calls, memory usage, dispatch behavior, and exceptions.

This data is then sent to the Engine, where it is stored and processed so the Client can display it.