import React from 'react'

import { createBrowserRouter } from "react-router-dom";
import RootLayouts from '../src/components/RootLayouts';
import Home from '../pages/Home';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Routes