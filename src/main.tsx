import "./index.css";

import type { Router as RemixRouter } from "@remix-run/router";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouteObject } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { loginRoutes } from "./modules/login/routes";

const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>Tela Principal</div>,
    errorElement: <div>Pagina não encontrada</div>,
  },
];

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...loginRoutes]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
