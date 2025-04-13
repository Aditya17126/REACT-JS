import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Params_Comp from "./Params_Comp";
import Course from "./Course";
import MockTest from "./MockTest";
import Reports from "./Reports";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },

  {
    path: "/about",
    element: 
    <div>
    <Navbar />
    <About />
  </div>,

  },

  {
    path: "/dashboard",
    element: 
    <div>
    <Navbar />
    <Dashboard />
  </div>,
  children:[
   {
     path:'course',
     element:<Course/>
   },
   {
     path:'mock-test',
     element:<MockTest/>
   },
   {
     path:'reports',
     element:<Reports/>
   }
  ]
  },
  
  {
    path: "/student/:id",
    element: 
    <div>
    <Navbar />
    <Params_Comp/>
  </div>
  },
  {
    path:"*",
    element:<NotFound/>
  }
]);

function React_Router() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default React_Router;
