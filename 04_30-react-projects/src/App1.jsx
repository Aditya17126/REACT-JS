import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ChallengeList from "./Pages/ChallengeList";

// import your project components
import Counter from "./components/projects/1.counter";
import FlattenObjectInspector from "./components/projects/10.flatten-object-inspector";
import KeyboardModal from "./components/projects/11.keyboard-modal";
import DeepClone from "./components/projects/12.deep-clone";
import ProductList from "./components/projects/13.product-list";
import KanbanBoard from "./components/projects/14.kanban-board";
import StringCompression from "./components/projects/15.string-compression";
import DebounceSearchWithApiCall from "./components/projects/16.debounce-search";
import MultiStepForm from "./components/projects/17.multi-step-form";
import CustomPromiseAll from "./components/projects/18.custom-promise-all";
import TodoList from "./components/projects/19.todo-list";
import ClickOutsideDropdown from "./components/projects/2.outside-click";
import SequentialProgressBar from "./components/projects/20.sequential-progress-bar";
import StickySidebar from "./components/projects/21.sidebar-sticky";
import PasswordStrengthCheck from "./components/projects/22.password-strength-check";
import GroupByUtility from "./components/projects/23.group-by-utility";
import ResizablePanel from "./components/projects/24.resizable-panel";
import HorizontalScrollMenu from "./components/projects/25.horizontal-scroll-menu";
import SearchInNestedStructure from "./components/projects/26.search-nested-structure";
import JsonDiffViewer from "./components/projects/27.json-diff-viewer";
import DynamicForm from "./components/projects/28.dynamic-form";
import FileExplorer from "./components/projects/29.file-explorer";
import InlineEditableInput from "./components/projects/3.inline-editable-input";
import TempConverter from "./components/projects/4.temp-converter";
import OtpInput from "./components/projects/5.otp-input";
import FormValidation from "./components/projects/6.form-validation";
import FlipCardOnlyUsingCss from "./components/projects/7.flip-card";
import CustomKeyboardTab from "./components/projects/8.custom-keyboard-tab";
import FlatArray from "./components/projects/9.flat-array";
import ProductProvider from "./context/product-context";


function App1() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          background: "#121212",       // darkish background
          color: "#ffffff",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Routes>
          <Route path="/" element={<ChallengeList />} />

          <Route path="/project/counter" element={<Counter />} />
         
          <Route path="/project/temp-converter" element={<TempConverter />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App1;
