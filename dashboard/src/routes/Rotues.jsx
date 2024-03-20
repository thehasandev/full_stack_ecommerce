import { createBrowserRouter } from "react-router-dom";
import Registraition from "../pages/Registraition";
import Login from "../pages/Login";
import OtpVarification from "../pages/OtpVarification";
import ForgotPassword from "../pages/ForgotPassword";
import ChangePassword from "../pages/ChangePassword";

import Rootlayouts from "../components/Rootlayouts";
import CreateCategori from "../pages/CreateCategori";
import CreateSubCategori from "../pages/CreateSubCategori";
import ViewCategori from "../pages/ViewCategori";
import ViewSubCategori from "../pages/ViewSubCategori";

const Rotues = createBrowserRouter([
  {
    path: "/",
    element: <Registraition />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/otp-varification/:email",
    element: <OtpVarification />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/change-password/:token",
    element: <ChangePassword />,
  },
  {
    path: "/dashboard",
    element: <Rootlayouts />,
    children: [
      {
        path: "/dashboard/createcategori",
        element: <CreateCategori />,
      },
      {
        path: "/dashboard/createsubcategori",
        element: <CreateSubCategori />,
      },
      {
        path: "/dashboard/viewcategori",
        element: <ViewCategori />,
      },
      {
        path: "/dashboard/viewsubcategori",
        element: <ViewSubCategori />,
      },
    ],
  },
]);

export default Rotues;
