import React from "react";
import { MDBInput } from "mdb-react-ui-kit";

function TouristPolice() {
  return (
    <>
      <h1 className="text-center mt-4">Tourist Police</h1>
      <div
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f8f9fa",
        }}
      >
        {/* Header */}

        {/* Image */}
        <div className="text-center mt-0">
          <p className="text-danger" style={{ textAlign: "justify" }}>
            {" "}
            *Fill out the form correctly. Any wrong information recieved heavy
            charges may be applied with imprisonment.
          </p>
          <img
            src="https://i.pinimg.com/474x/1a/26/4a/1a264a7023b456721e2a5b062ae23c68.jpg"
            alt="Tourist Police"
            style={{ maxWidth: "20%", height: "auto" }}
          />
        </div>

        {/* Contact Information */}
        <div className="container mt-3">
          <h3>Contact Information:</h3>
          <p>Emergency Contact: 100</p>
          <p>Non-Emergency Contact: +1 123-456-7890</p>
        </div>

        {/* Complaint Form */}
        <div className="container mt-5">
          <h2>File a Complaint:</h2>
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
          <form>
            <div className="form-group">
              <label className="form-label">
                Full Name:
              </label>
              <MDBInput
                type="text"
                className="form-control"
              />
             <label className="form-label mt-2">
                Contact:
              </label>
              <MDBInput
                type="text"
                className="form-control"
              />
              <label className="mt-2 text-muted ">
                Complaint Details:
              </label>
              <textarea
                className="form-control mb-2"
                id="complaint"
                rows="4"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-dark  mt-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TouristPolice;
