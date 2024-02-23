import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import WorkSpace from "./pages/WorkSpace/WorkSpace.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Test from "./pages/Project/Test.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Project from "./pages/Project/Project.jsx";

import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Inbox from "./pages/Inbox/Inbox.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";

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
    path: "/Test",
    element: <Test />,
  },
  {
    path: "/Inbox",
    element: <Inbox />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  { path: "/projects", element: <Projects /> },
  { path: "/project", element: <Project /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <SignUp /> },
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
