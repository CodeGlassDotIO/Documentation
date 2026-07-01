---
description: "The task explorer shows every task that has been created in the application"
---

# Task Explorer

![Task Explorer](./img/threads-explorer/ThreadsExplorer.png)

The **Task Explorer** shows a list of all tasks that were created during the run of your application.

Selecting a task from the list opens the [Task Detail](#task-detail) view.

## Task Detail
![Task Details](./img/threads-explorer/ThreadsExplorer_Details.png)

The **Task Detail** view shows the current call stack for the selected task.

The call stack grows downward, with each row representing a function call.

Double-clicking on a function in the stack opens the [Code Member](./codemember) view for that function.