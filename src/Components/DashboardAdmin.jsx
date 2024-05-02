import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaUsers } from "react-icons/fa";
import { AiFillFileUnknown } from "react-icons/ai";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";
import { FaCarCrash } from "react-icons/fa";


function DashboardAdmin() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Content for each option
  const optionContent = {
    "Active Users": {
      content: <div>Content for Option 1</div>,
      icon: <FaUsers />
      ,
    },
    "Unknown Accident Reports": {
      content: <div>Content for Option 2</div>,
      icon: <AiFillFileUnknown />

    },
    "Missing Reports": {
      content: <div>Content for Option 3</div>,
      icon: <FaPersonCircleQuestion />

    },
    "Other Information Reports": {
      content: <div>Content for Option 4</div>,
      icon: <FaBook />
    },
    "Tourist Reports": {
      content: <div>Content for Option 5</div>,
      icon: <FaMapLocation />

    },
    "Accident Reports": {
      content: <div>Content for Option 6</div>,
      icon: <FaCarCrash />
    },
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", backgroundColor: "#f5f5f5" }}
    >
      {/* Side panel */}
      <div
        style={{
          width: "250px",
          backgroundColor: "#1c1b18",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h4>
          <img src={logo} style={{ width: "20%" }} alt="" /> Admin Panel <br />
        </h4>

        <div className="d-flex justify-content-center text-center mt-2">
          <button
            className="btn"
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px",
              border: "none",
              cursor: "pointer",
              marginBottom: "20px",
            }}
            onClick={toggleOptions}
          >
            {showOptions ? "Hide Options" : "Show Options"}
          </button>
        </div>
        {/* Render options only if showOptions is true */}
        {showOptions && (
          <div>
            <h3>
              Reports
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {Object.keys(optionContent).map((option) => (
                <li
                  key={option}
                  style={{ marginBottom: "10px", cursor: "pointer" }}
                  onClick={() => handleOptionSelect(option)}
                >
                  <span>
                    {optionContent[option].icon} {option}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Admin Dashboard</h1>
        {/* Render selected option content */}
        {selectedOption && (
          <div>
            <h2>{selectedOption}</h2>
            {optionContent[selectedOption].content}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardAdmin;
