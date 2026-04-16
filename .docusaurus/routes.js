import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'a03'),
    exact: true
  },
  {
    path: '/license',
    component: ComponentCreator('/license', 'bdc'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bf1'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '01e'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f9b'),
            routes: [
              {
                path: '/docs/about',
                component: ComponentCreator('/docs/about', '97c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/application-instance',
                component: ComponentCreator('/docs/category/application-instance', '212'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/concepts--features',
                component: ComponentCreator('/docs/category/concepts--features', '76a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/getting-started',
                component: ComponentCreator('/docs/category/getting-started', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/how-to',
                component: ComponentCreator('/docs/category/how-to', '16d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/start-menu',
                component: ComponentCreator('/docs/category/start-menu', 'a6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/supported-languages',
                component: ComponentCreator('/docs/category/supported-languages', '412'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/views',
                component: ComponentCreator('/docs/category/views', 'c93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts-and-features/code-path',
                component: ComponentCreator('/docs/concepts-and-features/code-path', 'dcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts-and-features/context-menus',
                component: ComponentCreator('/docs/concepts-and-features/context-menus', '894'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts-and-features/datasources',
                component: ComponentCreator('/docs/concepts-and-features/datasources', '7f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts-and-features/dumpfiles',
                component: ComponentCreator('/docs/concepts-and-features/dumpfiles', '824'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts-and-features/filters',
                component: ComponentCreator('/docs/concepts-and-features/filters', 'a0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts-and-features/julia-type-severity',
                component: ComponentCreator('/docs/concepts-and-features/julia-type-severity', '0f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts-and-features/pause-data-collection',
                component: ComponentCreator('/docs/concepts-and-features/pause-data-collection', '165'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contact',
                component: ComponentCreator('/docs/contact', '0a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/linux',
                component: ComponentCreator('/docs/getting-started/linux', '4bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/macos',
                component: ComponentCreator('/docs/getting-started/macos', '3c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/windows',
                component: ComponentCreator('/docs/getting-started/windows', '533'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-to/implicit-conversions',
                component: ComponentCreator('/docs/how-to/implicit-conversions', 'e4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-to/inefficient-array-types',
                component: ComponentCreator('/docs/how-to/inefficient-array-types', 'b59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/languages/julia',
                component: ComponentCreator('/docs/languages/julia', '40a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/license',
                component: ComponentCreator('/docs/license', '773'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/privacy',
                component: ComponentCreator('/docs/privacy', '45b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/app-instance/application-explorer',
                component: ComponentCreator('/docs/views/app-instance/application-explorer', '820'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/app-instance/application-instance',
                component: ComponentCreator('/docs/views/app-instance/application-instance', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/app-instance/codemember',
                component: ComponentCreator('/docs/views/app-instance/codemember', '5bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/app-instance/exceptions',
                component: ComponentCreator('/docs/views/app-instance/exceptions', '622'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/app-instance/garbage-collections',
                component: ComponentCreator('/docs/views/app-instance/garbage-collections', '5dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/app-instance/heat-map',
                component: ComponentCreator('/docs/views/app-instance/heat-map', 'e72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/app-instance/mem-object-allocator-statistics',
                component: ComponentCreator('/docs/views/app-instance/mem-object-allocator-statistics', '4dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/app-instance/memory-statistics',
                component: ComponentCreator('/docs/views/app-instance/memory-statistics', 'bb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/app-instance/performance',
                component: ComponentCreator('/docs/views/app-instance/performance', '053'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/app-instance/statistics',
                component: ComponentCreator('/docs/views/app-instance/statistics', '7ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/app-instance/task-explorer',
                component: ComponentCreator('/docs/views/app-instance/task-explorer', '233'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/general/application-list',
                component: ComponentCreator('/docs/views/general/application-list', '56b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/general/instance-list',
                component: ComponentCreator('/docs/views/general/instance-list', 'fd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/general/login',
                component: ComponentCreator('/docs/views/general/login', '3e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/general/register',
                component: ComponentCreator('/docs/views/general/register', 'e01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views/general/settings',
                component: ComponentCreator('/docs/views/general/settings', '6f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
