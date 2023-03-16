import { lazy } from 'react';

import MainLayout from 'layout/MainLayout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import('views/dashboard/Default'))
);

// utilities routing
const UtilsTypography = Loadable(
  lazy(() => import('views/utilities/Typography'))
);
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// others rounting
const SamplePage = Loadable(lazy(() => import('views/sample-page/SamplePage')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />,
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />,
        },
      ],
    },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-color',
    //       element: <UtilsColor />,
    //     },
    //   ],
    // },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />,
        },
      ],
    },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'tabler-icons',
    //       element: <UtilsTablerIcons />,
    //     },
    //   ],
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'material-icons',
    //       element: <UtilsMaterialIcons />,
    //     },
    //   ],
    // },
    {
      path: 'sample-page',
      element: <SamplePage />,
    },
  ],
};

export default MainRoutes;
