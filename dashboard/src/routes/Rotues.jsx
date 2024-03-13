import { createBrowserRouter } from "react-router-dom";
import Registraition from "../pages/Registraition";
import Login from "../pages/Login";
import OtpVarification from "../pages/OtpVarification";

const Rotues = createBrowserRouter([
  {
    path: "/sing-up",
    element: <Registraition />,
  },
  {
    path: "/log-in",
    element: <Login />,
  },
  {
    path: "/otp-varification",
    element: <OtpVarification />,
  },

]);

export default Rotues;
