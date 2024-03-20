import { createBrowserRouter } from "react-router-dom";
import Registraition from "../pages/Registraition";
import Login from "../pages/Login";
import OtpVarification from "../pages/OtpVarification";
import ForgotPassword from "../pages/ForgotPassword";
import ChangePassword from "../pages/ChangePassword";
import Home from "../pages/Home";
import Sidevar from "../components/Sidevar";
import Rootlayouts from "../components/Rootlayouts";

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
    path: "/home",
    element: <Rootlayouts />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);



export default Rotues;
