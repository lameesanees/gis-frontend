import React, { useState } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { FaArrowCircleDown } from "react-icons/fa";
import {Link} from "react-router-dom"
function TrackApp() {
  // Sample data for the table
  const [data, setData] = useState([
    {
      refNo: "001",
      applicationType: "Traffic Impound",
      appStatus: "Pending",
      remarks: "Waiting for payment confirmation",
    },
    {
      refNo: "002",
      applicationType: "Major Accident",
      appStatus: "Approved",
      remarks: "Awaiting start RTO confirmation",
    },
    {
      refNo: "003",
      applicationType: "Fine Payment",
      appStatus: "Rejected",
      remarks: "Verification Rejected",
    },
  ]);

  // State for search input
  const [searchInput, setSearchInput] = useState("");

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Function to filter data based on search input
  const filteredData = data.filter((item) =>
    item.refNo.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div>
        <h2 className="mt-4 m-3">Welcome Back User</h2>
      </div>
      <div className="container">
        {/* Search bar */}
        <div className="input-group mb-3 mt-4 m-5" style={{ width: "80%" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your reference number"
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <button className="btn btn-outline-secondary" type="button">
            Search
          </button>
        </div>

        {/* Card section */}
        <MDBCard
          background="dark"
          className="text-white "
          style={{ width: "100%", marginLeft: "0px" }}
        >
          <MDBCardImage
            overlay
            src="https://img.freepik.com/free-vector/hand-drawn-busy-office-illustration_23-2151051234.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705190400&semt=ais"
            alt="..."
            style={{ width: "100%", opacity: "0.3", height: "500px" }}
          />
          <MDBCardOverlay className="p-5 m-5">
            <MDBCardTitle style={{ textAlign: "center" }}>
              {" "}
              <strong style={{ color: "bisque", fontSize: "30px" }}>
                "Introducing Our Application Tracker: Organize Your Search
                Effortlessly!"
              </strong>{" "}
              <br />
              <p
                className="mt-2 p-4 "
                style={{
                  textAlign: "center",
                  fontWeight: "normal",
                  fontSize: "15px",
                }}
              >
                Welcome to our Application Tracker! Stay organized with our
                easy-to-use tool. Track applications, monitor progress, set
                reminders, and gain insights. Sign up now and take control of
                your job search!{" "}
              </p>
            </MDBCardTitle>
            <MDBCardText className="text-center">
              <FaArrowCircleDown /> &nbsp; Check Below your Application Status
            </MDBCardText>
          </MDBCardOverlay>
        </MDBCard>
      </div>
      {/* Table section */}
      <div className="table-responsive m-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Ref No.</th>
              <th>Application Type</th>
              <th>App Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.refNo}</td>
                <td>{item.applicationType}</td>
                <td>{item.appStatus}</td>
                <td>{item.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Home button */}
      <div className="text-center mb-5">
        <Link to = {"/policereport "}>
        <button className="btn btn-dark">Back</button>
        </Link>
      </div>
    </>
  );
}

export default TrackApp;
