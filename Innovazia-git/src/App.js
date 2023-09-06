import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    errorElement:<ErrorPage/>,
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
