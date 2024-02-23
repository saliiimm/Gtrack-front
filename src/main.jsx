import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WorkSpace from "./Pages/WorkSpace/WorkSpace.jsx";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import Inbox from "./Pages/Inbox/Inbox.jsx";
import Projects from "./Pages/Projects/Projects.jsx";

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
    path: "/Inbox",
    element: <Inbox />,
  },
  {
    path: "/projects",
    element: <Projects />,
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
