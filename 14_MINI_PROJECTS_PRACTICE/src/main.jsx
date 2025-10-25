import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'

// import ToggleSwitch from "./Components/11_Toggle_Switch/ToggleSwitch.jsx";
import Todo from "./Components/12_Todo_App/Todo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App10/> */}
    {/* <ToggleSwitch/> */}
    <Todo/>
  </StrictMode>
);
