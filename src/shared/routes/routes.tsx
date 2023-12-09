import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./interfaces";
import App from "../../app/App";
import { ErrorPage } from "../components";
import {
  Home,
  Login,
  PresencePage,
  SectorPage,
  StatusPage,
  UserPage,
} from "../../app";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.auth.LOGIN,
        element: <Login />,
      },
      {
        path: Routes.home.HOME,
        element: <Home />,
      },
      {
        path: Routes.admin.CREATE_USER,
        element: <UserPage />,
      },
      {
        path: Routes.admin.CREATE_SECTOR,
        element: <SectorPage />,
      },
      {
        path: Routes.admin.CREATE_STATUS,
        element: <StatusPage />,
      },
      {
        path: Routes.scale.PRESENCE,
        element: <PresencePage />,
      },
    ],
  },
]);
