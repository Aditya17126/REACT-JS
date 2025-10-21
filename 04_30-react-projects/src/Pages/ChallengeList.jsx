import React from "react";
import { useNavigate } from "react-router-dom";
import ChallengeCard from "./ChallengeCard";

// const projects = [
//   { name: "Counter", path: "counter" },
//   { name: "Click Outside", path: "outside-click" },
//   { name: "Inline Editable Input", path: "inline-editable-input" },
//   { name: "Temperature Converter", path: "temp-converter" },
//   { name: "OTP Input", path: "otp-input" },
//   { name: "Form Validation", path: "form-validation" },
  
// ];
const projects = [
  { name: "Counter", path: "counter" },
  { name: "Click Outside Dropdown", path: "outside-click" },
  { name: "Inline Editable Input", path: "inline-editable-input" },
  { name: "Temperature Converter", path: "temp-converter" },
  { name: "OTP Input", path: "otp-input" },
  { name: "Form Validation", path: "form-validation" },
  { name: "Flip Card Only Using CSS", path: "flip-card" },
  { name: "Custom Keyboard Tab", path: "custom-keyboard-tab" },
  { name: "Flat Array", path: "flat-array" },
  { name: "Flatten Object Inspector", path: "flatten-object-inspector" },
  { name: "Keyboard Modal", path: "keyboard-modal" },
  { name: "Deep Clone", path: "deep-clone" },
  { name: "Product List", path: "product-list" },
  { name: "Kanban Board", path: "kanban-board" },
  { name: "String Compression", path: "string-compression" },
  { name: "Debounce Search With API Call", path: "debounce-search" },
  { name: "Multi Step Form", path: "multi-step-form" },
  { name: "Custom Promise All", path: "custom-promise-all" },
  { name: "Todo List", path: "todo-list" },
  { name: "Sequential Progress Bar", path: "sequential-progress-bar" },
  { name: "Sticky Sidebar", path: "sidebar-sticky" },
  { name: "Password Strength Check", path: "password-strength-check" },
  { name: "Group By Utility", path: "group-by-utility" },
  { name: "Resizable Panel", path: "resizable-panel" },
  { name: "Horizontal Scroll Menu", path: "horizontal-scroll-menu" },
  { name: "Search In Nested Structure", path: "search-nested-structure" },
  { name: "JSON Diff Viewer", path: "json-diff-viewer" },
  { name: "Dynamic Form", path: "dynamic-form" },
  { name: "File Explorer", path: "file-explorer" },
];

function ChallengeList() {
  const navigate = useNavigate();

  const goToProject = (path) => {
    navigate(`/project/${path}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",           // approximate to text-4xl
          fontWeight: "700",            // font-bold
          color: "#ec4899",             // pink-400
          marginBottom: "1rem",
        }}
      >
        React JS Machine Coding Interview Questions
      </h1>
      {/* <ChallengeCard/> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          // for responsive you can adjust via media queries or JS
        }}
      >
        {projects.map((proj) => (
          <button
            key={proj.path}
            onClick={() => goToProject(proj.path)}
            style={{
              backgroundColor: "#1f2937",       // gray-800
              color: "#ffffff",
              padding: "1rem",                   // p-4
              borderRadius: "0.75rem",           // rounded-xl
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              fontWeight: "600",                 // semibold
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#374151"; // gray-700
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#1f2937"; // gray-800
            }}
          >
            {proj.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChallengeList;
