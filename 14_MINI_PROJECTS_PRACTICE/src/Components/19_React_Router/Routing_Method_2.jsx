import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact, { contactData } from "./Pages/Contact";
import Services from "./Pages/Services";
import Movies from "./Pages/Movies";
import AppLayout from "./Layout/AppLayout";
import './routing.css';
import ErrorPage from "./ErrorPage";
import getApiData from "./API/GetApiData";
import MoviesDetails from "./UI/MoviesDetails";
import { getMoviesDetails } from "./API/GetMoviesDetails";

function Routing_Method_2() {
  ///* METHOD 2
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
          action : contactData,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/movie",
          element: <Movies />,
          loader: getApiData
        },
        {
          path: "/movie/:movieID", //* [:]  colon this means it is a dynamic value
          element: <MoviesDetails/>,
          loader : getMoviesDetails,
        },
        // {
        //   path:"*",
        //   element:<ErrorPage/>
        // },
      ],
    },
  ]);

  //* METHOD 3

  //  const router = createBrowserRouter(
  //     createRoutesFromElements(
  //       <Route>
  //          <Route path='/' element={<Home/>}  />
  //          <Route path='/about' element={<About/>}  />
  //          <Route path='/contact' element={<Contact/>}  />
  //          <Route path='/services' element={<Services/>}  />
  //          <Route path='/movie' element={<Movies/>}  />

  //       </Route>
  //     )
  //  )
  return <RouterProvider router={router} />;
}

export default Routing_Method_2;
