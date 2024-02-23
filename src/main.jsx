import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import WorkSpace from './Pages/WorkSpace/WorkSpace'
import LandingPage from "./Pages/LandingPage/LandingPage";
import Test from "./Pages/Project/Test";
import Projects from "./Pages/Project/Projects";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Inbox from "./pages/Inbox/Inbox.jsx";
import Signin from "./pages/Signin/Signin.jsx";




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
