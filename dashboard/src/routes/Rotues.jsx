import { createBrowserRouter } from "react-router-dom";
import Registraition from "../pages/Registraition";
import Login from "../pages/Login";
import OtpVarification from "../pages/OtpVarification";

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

]);

export default Rotues;
