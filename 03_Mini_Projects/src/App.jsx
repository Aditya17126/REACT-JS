import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProjectButton from "./Pages/ProjectButton";
import { Navigate, Route, Routes } from "react-router-dom";
import Counter from "./Components/1.Counter_App/Counter";
import ClickOutsideDropdown from "./Components/2.Close_Outside_Click/ClickOutsideDropdown";
import LoadMoreButton from "./Components/3.Load_More_Buttons/LoadMoreButton";
import TreeView from "./Components/4.Tree_View/TreeView";
import menus from "./Components/4.Tree_View/data";
import Pagination from "./Components/5.Pagination/Pagination";
import OtpLogin from "./Components/6.Otp_Login/OtpLogin";
import AiAssistant from "./Components/7.Ai_Assistant/AiAssistant";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <h1>REACT JS MACHINE INTERVIEW QUESTIONS</h1>
      </div>
      <ProjectButton />
      <Routes>
        <Route path="/Components/1.Counter_App/Counter" element={<Counter />} />

        <Route
          path="/Components/2.Close_Outside_Click/ClickOutsideDropdown"
          element={<ClickOutsideDropdown />}
        />

        <Route
          path="/Components/3.Load_More_Buttons/LoadMoreButton"
          element={<LoadMoreButton />}
        />

        <Route path="/Components/4.Tree_View/TreeView" element={<TreeView menus={menus} />} />

         <Route
          path="/Components/5.Pagination/Pagination"
          element={<Pagination/>}
        />

        <Route path="/Components/6.Otp_Login/OtpLogin" element={<OtpLogin/>} />

        <Route path="/Components/7.Ai_Assistant/AiAssistant" element={<AiAssistant/>}/>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
