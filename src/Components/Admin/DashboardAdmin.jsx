import React, { useState } from "react";
import logo from "../Admin/logo.png" 
import { FaUsers } from "react-icons/fa";
import { AiFillFileUnknown } from "react-icons/ai";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import Active from './Active';
import UaDash from './UaDash';
import McDash from "./McDash";
import OiDash from "./OiDash";
import TpDash from "./TpDash";
import AcDash from "./AcDash";

function DashboardAdmin() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Content for each option
  const optionContent = {
    "Active Users": {
      content: <Active />,
      icon: <FaUsers />,
    },
    "Unknown Accident Reports": {
      content: <UaDash />,
      icon: <AiFillFileUnknown />,
    },
    "Missing Reports": {
      content: <div><McDash/></div>,
      icon: <FaPersonCircleQuestion />,
    },
    "Other Information Reports": {
      content: <div><OiDash/></div>,
      icon: <FaBook />,
    },
    "Tourist Reports": {
      content: <div><TpDash/></div>,
      icon: <FaMapLocation />,
    },
    "Accident Reports": {
      content: <div><AcDash/></div>,
      icon: <FaCar />,
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* Side panel */}
      <div
        style={{
          width: "250px",
          backgroundColor: "#1c1b18",
          color: "#fff",
          padding: "20px",
          overflowY: "auto", // Add scrollbar for overflow
        }}
      >
        <h4>
          <img src={logo} style={{ width: "20%" }} alt="" /> Admin Panel <br />
        </h4>

        <div>
          <h3>
            Reports
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {Object.keys(optionContent).map((option) => (
              <li
                key={option}
                style={{
                  marginBottom: "10px",
                  cursor: "pointer",
                  // Highlight selected option
                  backgroundColor:
                    selectedOption === option ? "#333" : "transparent",
                  padding: "5px",
                  borderRadius: "5px",
                }}
                onClick={() => handleOptionSelect(option)}
              >
                <span>
                  {optionContent[option].icon} {option}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
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
