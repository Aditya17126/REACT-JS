import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import Routing_Method_1 from "./Components/19_React_Router/Routing_Method_1";
import Routing_Method_2 from "./Components/19_React_Router/Routing_Method_2";
import Crud_Using_Axios from "./Components/20_Crud_Axios/Crud_Using_Axios";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Routing_Method_1/> */}
    <Routing_Method_2/>
    {/* <Crud_Using_Axios/> */}
  </StrictMode>
);
 