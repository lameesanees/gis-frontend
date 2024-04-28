import React from "react";
import { MDBInput } from "mdb-react-ui-kit";

function Accident() {
  return (
    <>
      <h2 className="mt-4 text-center">Report an Accident</h2>
      <div
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f8f9fa",
        }}
      >
        <p className="text-danger" style={{ textAlign: "justify" }}>
          *Fill out the form correctly. Any wrong information received may
          result in heavy fine charges or imprisonment for 1-5 year.
        </p>
        <div className="mb-3 text-center">
          <label>
            <input type="file" style={{ display: "none" }} />
            <img
              src="https://tnpcbhwt.cgg.gov.in/Images/Uploading-GIF2.gif"
              className="img-fluid mb-2"
              style={{ width: "50%" }}
            />
            <p className="text-danger">
              Please Upload following image extension (png,jpg,jpeg) only
            </p>
          </label>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput label="Your Full Name" id="form1" type="text" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput label="Your Aadhar/License Number" id="form1" type="text" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput label="Your Contact Number" id="form1" type="text" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput label="Your Number Plate" id="form2" type="text" />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <p>
            <b>Insurance Company</b>
          </p>
          <select
            style={{
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ced4da",
            }}
          >
            <option value="">Select Insurance Company</option>
            <option value="company1">Bajaj Allianz General Insurance</option>
            <option value="company2">Reliance</option>
            <option value="company3">Future Generali India</option>
          </select>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <p>
            <b>Accident Type</b>
          </p>
          <div>
            <label>
              <input
                type="radio"
                name="accidentType"
                value="minor"
                style={{ marginRight: "5px" }}
              />
              <span style={{ marginLeft: "5px" }}>Minor Accident</span>
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="accidentType"
                value="major"
                style={{ marginRight: "5px" }}
              />
              <span style={{ marginLeft: "5px" }}>Major Accident</span>
            </label>
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput label="Date" id="form1" type="text" />
        </div>
        <h4>Opponent Details</h4>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput label="Opponent Full Name" id="form1" type="text" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput label="Opponent Contact Number" id="form1" type="text" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput
            label="Opponent Aadhar/License Number"
            id="form1"
            type="text"
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput
            label="Opponent vehicle's Number Plate"
            id="form1"
            type="text"
          />
        </div>

        <p className="text-danger" style={{ textAlign: "justify" }}>
          *If the opponent is not willing to fill out the application, call the
          police using the button below. Heavy fines may be applied to the
          person at fault if the case is decided by the police.
        </p>
        <div className="text-center">
          <button
            className="btn bg-dark"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
          &nbsp;
          <button
            className="btn bg-danger"
            style={{
              padding: "10px 20px",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Call Police
          </button>
        </div>
      </div>
    </>
  );
}

export default Accident;
