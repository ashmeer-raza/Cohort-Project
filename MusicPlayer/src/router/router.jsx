import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayput from "../layout/MainLayput";
import Home from "../pages/Home";
import Favourite from "../pages/Favourite";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ArtishDashboard from "../pages/ArtishDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayput />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "favourite",
        element: <Favourite />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "artist-dashboard",
        element: <ArtishDashboard />,
      },
    ],
  },
]);

export default router;
