import React, { useEffect, useRef, useState } from "react";
// import { Button } from '../ui/button';
import "./DropDown.css";
import { ChevronDown } from "lucide-react";

function ClickOutsideDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  //! 3 . it is the logic for outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        console.log(event.target, dropdownRef.current);
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown-container">
      <h1>Close DropDown on Outside Click</h1>

      <div className="dropdown-wrapper" ref={dropdownRef}>
        <button onClick={toggleDropdown} className="dropdown-button">
          Select an Option
          <ChevronDown className={`dropdown-icon.${isOpen ? "rotate" : ""}`} />
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-options">
              {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                <button key={index} className="dropdown-option">
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClickOutsideDropdown;
