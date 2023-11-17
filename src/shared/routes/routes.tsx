import { createBrowserRouter } from "react-router-dom";
//import { Routes } from ".";
import App from "../../app/App";
import { ErrorPage } from "../components";
import {  Login, User } from "../../app";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/adm',
        element: <User />
      }
    ],
  },
]);