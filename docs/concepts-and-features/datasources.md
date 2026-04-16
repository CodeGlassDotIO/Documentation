# Data Sources
CodeGlass groups all data collected for a single instance in something called a **data source**. A data source can be seen as a self contained container containing profiling data. Every application instance has at least 1 data source. This is the **main data source**. 
All data that gets collected in an instance is stored in the main data source. Creating a [recording](#recordings), creates a new data source that only contains the data that is collected during the running of that recording.

## Recordings
Creating a recording in CodeGlass can be done in two ways. The first is through the [UI](../views/app-instance/application-instance#recording) and the second is through the [CodeGlass Julia Package](../languages/julia#recordings).

Each recording you make becomes a unique data source. You can [view all recordings](../views/app-instance/application-instance#recording) on the application instance screen.

## Selecting Data Sources
Many views allow you to select the data source of which you would like to see the data. You can often select the data source from a drop down menu in the toolbar of that view. If a view supports this feature, the docs will mention it.

## Comparing Data Sources
CodeGlass allows you to compare the data of two data sources. This can help you with comparing the difference between two runs of a function. Selecting the data source to compare against can be done by choosing the data source in the [application instance toolbar](../views/app-instance/application-instance#data-source-comparison). When a view supports data comparison, its data source selector indicates that two sources are being compared, when a compare data source is selected.

:::info
Comparing data sources results in the statistics of the **comparison source** being subtracted from the **selected source**. This means statistics can show as negative.
:::

:::warning
Comparing data sources may result in additional data being added to the **selected source** just to provide zero-initialized values for comparison.
:::