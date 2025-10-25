import React, { useState } from "react";
import "./toggleSwitch.css";

function ToggleSwitch() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSwitch = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="toggle-switch"
      style={{ backgroundColor: isOpen ? "#4caf50" : "#f44336" }}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${isOpen ? "on" : "off"}`}>
        <span className="switch-state">{isOpen ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
}

export default ToggleSwitch;
