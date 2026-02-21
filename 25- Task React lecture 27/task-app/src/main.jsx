import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { createRoot } from 'react-dom/client'
import Root from "./Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

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
    ]
  },
]);

const root = document.getElementById("root");

createRoot(root).render(
  <RouterProvider router={router} />,
);
