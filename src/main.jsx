import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import WorkSpace from "./pages/WorkSpace/WorkSpace";
import Test from "./pages/Project/Test";
import Inbox from "./pages/Inbox/Inbox";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import Signin from "./pages/Signin/Signin";
import SignUp from "./pages/SignUp/SignUp";
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
