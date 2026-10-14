# Context Menus

In the [CodeGlass Client](../intro#client) there are a lot of places where [*code members*](../views/app-instance/codemember) and [memory objects](../views/app-instance/mem-object-allocator-statistics) are shown.
By right clicking these elements, you will open their context menu.

### Memory Object

Clicking the **Open in item view** button will open the [memory object](../views/app-instance/mem-object-allocator-statistics).

![Memory Object Context Menu](./img/context-menus/MemoryObjectContextMenu.png)

### Code Member / Module

Clicking the **Open in item view** button will open the [*code member*](../views/app-instance/codemember) or [module](../views/app-instance/statistics).   
Clicking the **Open in Visual Studio Code** button will try to open VS Code and locate the *code member*.

![Code Member Context Menu](./img/context-menus/CodeMemberContextMenu.png)

### Statistics / Application Explorer

The context menus in the [statistics view](../views/app-instance/statistics) and [application explorer](../views/app-instance/application-explorer) also have the option to [filter](./filters) the *code member* or module.   
In the statistics view it is even possible to clear the [longest and shortest call duration](../views/app-instance/statistics#types-of-statistics) of that module or *code member*.

![Statistics Module Context Menu](./img/context-menus/StatisticsModuleContextMenu.png)