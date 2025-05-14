import { createBrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";
import ErrorPage from "../Pages/Error/Error";
import HomePage from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
