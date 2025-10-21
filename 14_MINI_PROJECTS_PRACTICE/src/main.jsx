import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import App from "./Components/01_Progress_Bar/App.jsx";
import App3 from "./Components/03_UseMemo_Hook_Working/App3.jsx";
import App4 from "./Components/04_Like_Button/App4.jsx";
// import App_06 from "./Components/06_BackGround_Changer/App_06.jsx";
import Accordian from "./Components/07_Accordian/index.jsx";
import ImageSlider from "./Components/05_Image_Slider/index.jsx";
import App10 from "./Components/10_Netflix_Cards/App10.jsx";
import Profile from "./Components/10_Netflix_Cards/Profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App10/>
  </StrictMode>
);
