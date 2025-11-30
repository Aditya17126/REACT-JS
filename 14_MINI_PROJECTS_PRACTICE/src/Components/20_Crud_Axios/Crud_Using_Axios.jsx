import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Update from "./Update";
import Create from "./Create";
import Delete from "./Delete";
import Read from "./Read";

function Crud_Using_Axios() {
  return (
    <BrowserRouter>
      <h1>LEARNING AXIOS </h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/delete" element={<Delete/>}/>
        <Route path="/read" element={<Read/>}/>
      </Routes>
    </BrowserRouter>
  );
}     

export default Crud_Using_Axios;
