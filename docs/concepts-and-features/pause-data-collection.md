# Pause Data Collection
CodeGlass works by adding and listening to callbacks that are added during compile time. This allows CodeGlass to efficiently get informed about events that happen in the code, like a function call or a memory allocation.
All of these events are collected by the [agent](../intro#agent) and send to the [engine](../intro#engine). We have spend a lot of time on making this process as efficient as possible, but on high throughput applications using CodeGlass can have an impact on performance.

To prevent slowing down your application on parts that you are less/not interested in, we allow you to pause data collection on certain parts of your code. 

You can pause and continue data collection both through the [UI](../views/app-instance/application-instance#pause--continue-application) or through the [CodeGlass Julia Package](../languages/julia#pausecontinue-data-collection).

:::warning
When data collection is resumed, the agent immediately starts sending data again. CodeGlass may interpret this as if the function call happened directly after the last one before the pause. This can reduce the accuracy of some statistics.
:::