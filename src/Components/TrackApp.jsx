import React, { useState } from "react";
import "./trackapp.css";

function TrackApp() {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [applicationStatus, setApplicationStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to fetch the application status using the reference number
    // For example, you can use an API call to get the status
    // Then set the applicationStatus state using the response
  };

  const handleClear = () => {
    setReferenceNumber("");
  };

  return (
    <div className="track-app-container">
      <h1>Application Status Tracker</h1>
      <form onSubmit={handleSubmit} className="track-app-form">
        <h4 style={{ marginTop: "20px", fontSize: "20px" }}>
          Reference Number
        </h4>
        <input
          type="text"
          id="referenceNumber"
          value={referenceNumber}
          onChange={(e) => setReferenceNumber(e.target.value)}
        />
        <br />
        <div className="col">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear} className="clear-button">
            Clear
          </button>
        </div>
      </form>
      {applicationStatus && (
        <div className="application-status">
          <p>Application Status: {applicationStatus}</p>
        </div>
      )}
    </div>
  );
}

export default TrackApp;
