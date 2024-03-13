import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import Rotues from "./routes/Rotues";
function App() {
  return <RouterProvider router={Rotues}></RouterProvider>;
}

export default App;
