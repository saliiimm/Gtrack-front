import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import WorkSpace from './Pages/WorkSpace/WorkSpace.jsx'
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import Test from "./Pages/Project/Test.jsx";
import Projects from "./Pages/Project/Projects";

import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Inbox from "./Pages/Inbox/Inbox.jsx";
import Signin from "./Pages/Signin/Signin.jsx";




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
    element: <Dashboard />},
  {path: "/projects",
    element: <Projects />},
   { path: "/signin",
    element: <Signin />,

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
