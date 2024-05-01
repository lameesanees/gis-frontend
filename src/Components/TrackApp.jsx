import React, { useState } from "react";

function TrackApp() {
  return (
    <>
      <div className="container">
        {/* Search bar */}
        <div className="input-group mb-3 mt-4 m-5" style={{ width: "80%" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your vehicle number"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>
    </>
  );
}

export default TrackApp;
