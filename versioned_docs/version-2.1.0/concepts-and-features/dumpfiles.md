# Dump Files
Sometimes you want to collect profiling data on a different device than that you want to analyze it, or you might want share your findings with a coworker. To make this process as simple as possible, CodeGlass allows users to export all their data to a CodeGlass dump file.
This dump file contains everything that is needed to load the file at another time, or another device. The dump file is fully self contained, and therefore does not require anything to work (not even the source code of the application you ran).

You can create a dump file using the [Create Dump File button](../views/app-instance/application-instance.md#create-dump-file) when inside a code instance. To load a dump file, drag-and-drop the file onto the Client or click the [Add Dump File button](../views/general/application-list.md#add-dump-files) in the Application List.

:::info
We try to keep dump files relatively small so that storing and sharing them is very simple. The max that we have seen at this point was around 50 MB, and this was on an application that ran for 15 hours, had 1.2 billion function calls, and allocated close to 1 TB of memory.

On average we have found that dump files are less then 10 MB.
:::