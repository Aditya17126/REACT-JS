import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import NotFound from "./Pages/NotFound";

function Routing_Method_1() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <h3>About</h3>
          </Link>
        </li>{" "}
        <li>
          <Link to="/contact">
            <h3>Contact</h3>
          </Link>
        </li>{" "}
        <li>
          <Link to="/services">
            <h3>Services</h3>
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing_Method_1;
