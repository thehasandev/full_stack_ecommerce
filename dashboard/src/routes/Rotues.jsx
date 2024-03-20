import { createBrowserRouter } from "react-router-dom";
import Registraition from "../pages/Registraition";
import Login from "../pages/Login";
import OtpVarification from "../pages/OtpVarification";
import ForgotPassword from "../pages/ForgotPassword";
import ChangePassword from "../pages/ChangePassword";

import Rootlayouts from "../components/Rootlayouts";
import CreateCategori from "../pages/CreateCategori";

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
    ],
  },
]);



export default Rotues;
