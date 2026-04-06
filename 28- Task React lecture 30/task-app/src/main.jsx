import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { createRoot } from 'react-dom/client'
import Root from "./Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Register from "./Pages/register/Register";
import profile from "./Pages/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/profile",
        Component: profile,
      },
    ]
  },
]);

const root = document.getElementById("root");

createRoot(root).render(
  <RouterProvider router={router} />,
);
