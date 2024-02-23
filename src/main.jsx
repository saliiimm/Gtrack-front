import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import WorkSpace from './Pages/WorkSpace/WorkSpace'
import LandingPage from "./Pages/LandingPage/LandingPage";
import Test from "./Pages/Project/Test";
import Projects from "./Pages/Project/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/WorkSpace",
    element: <WorkSpace />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Test",
    element: <Test />,
  },
  {
    path: "*",
    element: <div>page 404 not found </div>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
